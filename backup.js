(() => {
  'use strict';
  const DB_NAME = 'rc-setup-backups';
  const STORE_NAME = 'snapshots';
  const KEEP_SNAPSHOTS = 10;
  const MAIN_KEY = 'rc-setup-v1';
  const MATERIALS_KEY = 'rc-setup-materials-v1';
  const status = document.getElementById('autoBackupStatus');
  const restoreButton = document.getElementById('restoreAutoBackupButton');
  let timer = null;
  let databasePromise = null;
  let lastBackupError = null;

  function describeError(error) {
    const name = error && error.name ? error.name : 'Erreur inconnue';
    const message = error && error.message ? error.message : String(error || 'Aucun détail fourni');
    return name + ' : ' + message;
  }

  function showBackupError(error, context) {
    lastBackupError = context + ' — ' + describeError(error);
    console.error('Diagnostic sauvegarde automatique : ' + lastBackupError, error);
    if (status) status.textContent = 'Sauvegarde automatique indisponible. ' + lastBackupError + '. Utilise Exporter JSON pour conserver une copie.';
  }

  function openDatabase() {
    if (!('indexedDB' in window)) return Promise.reject(new Error('IndexedDB indisponible'));
    if (!databasePromise) databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Ouverture de la sauvegarde impossible'));
    });
    return databasePromise;
  }

  function readSnapshotData() {
    const main = localStorage.getItem(MAIN_KEY);
    const materials = localStorage.getItem(MATERIALS_KEY);
    if (!main) return null;
    const parsed = JSON.parse(main);
    if (!parsed || !Array.isArray(parsed.cars) || !Array.isArray(parsed.tracks) || !Array.isArray(parsed.setups)) return null;
    if (materials !== null) {
      const parsedMaterials = JSON.parse(materials);
      if (!Array.isArray(parsedMaterials)) return null;
    }
    return { main, materials: materials === null ? '[]' : materials };
  }

  async function saveSnapshot() {
    let data;
    try { data = readSnapshotData(); } catch (error) {
      showBackupError(error, 'Lecture des données locales impossible');
      return;
    }
    if (!data) return;
    try {
      const db = await openDatabase();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).add({ ...data, createdAt: new Date().toISOString(), schema: 1 });
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error || new Error('Écriture de sauvegarde impossible'));
        tx.onabort = () => reject(tx.error || new Error('Sauvegarde annulée'));
      });
      await pruneSnapshots(db);
      lastBackupError = null;
      updateStatus();
    } catch (error) {
      showBackupError(error, 'Écriture ou vérification IndexedDB impossible');
    }
  }

  async function pruneSnapshots(db) {
    const rows = await new Promise((resolve, reject) => {
      const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    rows.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    const obsolete = rows.slice(KEEP_SNAPSHOTS);
    if (!obsolete.length) return;
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      obsolete.forEach(row => store.delete(row.id));
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getLatestSnapshot() {
    const db = await openDatabase();
    const rows = await new Promise((resolve, reject) => {
      const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    rows.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    return rows[0] || null;
  }

  async function updateStatus() {
    if (!status || !restoreButton) return;
    try {
      const latest = await getLatestSnapshot();
      restoreButton.disabled = !latest;
      status.textContent = latest
        ? 'Dernière copie automatique : ' + new Date(latest.createdAt).toLocaleString('fr-FR') + ' · 10 copies maximum conservées.' + (lastBackupError ? ' · Dernier diagnostic : ' + lastBackupError : '')
        : (lastBackupError ? 'Test IndexedDB échoué : ' + lastBackupError + '. Utilise Exporter JSON pour conserver une copie.' : 'IndexedDB est accessible. La première sauvegarde automatique sera créée après tes prochaines modifications.');
    } catch (error) {
      restoreButton.disabled = true;
      showBackupError(error, 'Test de lecture IndexedDB impossible');
    }
  }

  function scheduleBackup() {
    clearTimeout(timer);
    timer = setTimeout(saveSnapshot, 600);
  }

  window.addEventListener('rc-setup-data-changed', scheduleBackup);
  window.addEventListener('pagehide', () => { if (timer) { clearTimeout(timer); saveSnapshot(); } });

  restoreButton?.addEventListener('click', async () => {
    try {
      const latest = await getLatestSnapshot();
      if (!latest) { updateStatus(); return; }
      const date = new Date(latest.createdAt).toLocaleString('fr-FR');
      if (!confirm('Restaurer la sauvegarde du ' + date + ' ? Les données actuellement enregistrées sur cet appareil seront remplacées.')) return;
      const parsed = JSON.parse(latest.main);
      const parsedMaterials = JSON.parse(latest.materials || '[]');
      if (!parsed || !Array.isArray(parsed.cars) || !Array.isArray(parsed.tracks) || !Array.isArray(parsed.setups) || !Array.isArray(parsedMaterials)) {
        throw new Error('Sauvegarde invalide');
      }
      const previousMain = localStorage.getItem(MAIN_KEY);
      const previousMaterials = localStorage.getItem(MATERIALS_KEY);
      try {
        localStorage.setItem(MAIN_KEY, latest.main);
        localStorage.setItem(MATERIALS_KEY, JSON.stringify(parsedMaterials));
      } catch (writeError) {
        // If either write fails, restore both previous values before reporting failure.
        try {
          if (previousMain === null) localStorage.removeItem(MAIN_KEY);
          else localStorage.setItem(MAIN_KEY, previousMain);
          if (previousMaterials === null) localStorage.removeItem(MATERIALS_KEY);
          else localStorage.setItem(MATERIALS_KEY, previousMaterials);
        } catch (rollbackError) {
          console.error('Échec du retour arrière de la restauration', rollbackError);
        }
        throw writeError;
      }
      location.reload();
    } catch (error) {
      console.error('Restauration automatique impossible', error);
      alert('La restauration a échoué. Les données actuelles n’ont pas été volontairement effacées.');
    }
  });

  // Create an initial safety copy once both application scripts have loaded.
  scheduleBackup();
  updateStatus();
})();