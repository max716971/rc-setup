const STORAGE_KEY = 'rc-setup-v1';
const MAX_SETUP_PHOTOS = 4;
const MAX_PHOTO_BYTES = 12 * 1024 * 1024;
const SETUP_FIELDS = [
  'sessionDate', 'temperature', 'weather', 'goal', 'lubricants',
  'frontTires', 'rearTires', 'inserts', 'tireTreatment', 'wheels', 'tireCondition',
  'frontShocks', 'frontPiston', 'frontSpring', 'rearShocks', 'rearPiston', 'rearSpring', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms',
  'gearing', 'differentials', 'centerDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'battery', 'radio',
  'escModel', 'escMode', 'escMotorTiming', 'escBoost', 'escTurbo', 'escTurboDelay', 'escTiming', 'escPunch', 'escBrake', 'escDragBrake', 'escBrakeFrequency', 'escThrottleFrequency', 'escNeutralRange', 'escCutoff', 'escBec', 'escThermal', 'escReverse', 'escBrakeRate', 'escThrottleRate', 'electronicsNotes', 'esc', 'radio', 'radioExpo', 'radioEPA', 'radioTrim', 'txModel', 'rxModel', 'lapTime', 'rating', 'notes'
];

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;
let toastTimer;
let pendingPhotos = [];
const emptyStateTemplate = document.getElementById('emptyStateTemplate');

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      cars: Array.isArray(saved.cars) ? saved.cars : [],
      tracks: Array.isArray(saved.tracks) ? saved.tracks : [],
      setups: Array.isArray(saved.setups) ? saved.setups : []
    };
  } catch (error) {
    console.error('Impossible de lire les données locales', error);
    return { cars: [], tracks: [], setups: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error('Impossible de sauvegarder les données locales', error);
    showToast('Stockage plein. Retire des photos ou exporte tes données.');
    return false;
  }
}

function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`; }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
}
function getCarById(id) { return state.cars.find((car) => car.id === id); }
function getTrackById(id) { return state.tracks.find((track) => track.id === id); }
function setView(viewName) {
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === viewName));
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${viewName}View`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function emptyState() { return emptyStateTemplate.content.cloneNode(true); }

function renderDashboard() {
  document.getElementById('carCount').textContent = state.cars.length;
  document.getElementById('trackCount').textContent = state.tracks.length;
  document.getElementById('setupCount').textContent = state.setups.length;
  const container = document.getElementById('recentSetups');
  container.replaceChildren();
  const recent = [...state.setups].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).slice(0, 4);
  if (!recent.length) { container.append(emptyState()); return; }
  recent.forEach((setup) => {
    const car = getCarById(setup.carId);
    const track = getTrackById(setup.trackId);
    const item = document.createElement('article');
    item.className = 'list-item setup-list-item';
    item.innerHTML = `<div class="item-avatar">⚙</div><div class="item-main"><h3>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather || 'Conditions non renseignées')} · ${escapeHtml(setup.temperature || 'Température —')}</p></div><button class="icon-button view-setup" data-id="${escapeHtml(setup.id)}" aria-label="Voir le setup" type="button">↗</button>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach((button) => button.addEventListener('click', () => showSetup(button.dataset.id)));
}

function renderCars() {
  const container = document.getElementById('carsList');
  container.replaceChildren();
  if (!state.cars.length) { container.append(emptyState()); return; }
  state.cars.forEach((car) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card';
    item.innerHTML = `<div class="item-avatar car-avatar">🚗</div><div class="item-main"><h3>${escapeHtml(car.name)}</h3><p class="item-sub">${escapeHtml(car.brand || 'Marque / modèle non renseigné')} ${car.scale ? `· ${escapeHtml(car.scale)}` : ''}${car.drive ? ` · ${escapeHtml(car.drive)}` : ''}</p>${car.notes ? `<p class="item-detail">${escapeHtml(car.notes)}</p>` : ''}</div><button class="icon-button danger-action delete-car" data-id="${escapeHtml(car.id)}" aria-label="Supprimer ${escapeHtml(car.name)}" type="button">×</button>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-car').forEach((button) => button.addEventListener('click', () => removeCar(button.dataset.id)));
}

function renderTracks() {
  const container = document.getElementById('tracksList');
  container.replaceChildren();
  if (!state.tracks.length) { container.append(emptyState()); return; }
  state.tracks.forEach((track) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card';
    item.innerHTML = `<div class="item-avatar track-avatar">🏁</div><div class="item-main"><h3>${escapeHtml(track.name)}</h3><p class="item-sub">${escapeHtml(track.surface || 'Surface non renseignée')} ${track.type ? `· ${escapeHtml(track.type)}` : ''} ${track.location ? `· ${escapeHtml(track.location)}` : ''}</p>${track.details ? `<p class="item-detail">${escapeHtml(track.details)}</p>` : ''}</div><button class="icon-button danger-action delete-track" data-id="${escapeHtml(track.id)}" aria-label="Supprimer ${escapeHtml(track.name)}" type="button">×</button>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-track').forEach((button) => button.addEventListener('click', () => removeTrack(button.dataset.id)));
}

function renderSetups() {
  const container = document.getElementById('setupsList');
  container.replaceChildren();
  if (!state.setups.length) { container.append(emptyState()); return; }
  [...state.setups].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).forEach((setup) => {
    const car = getCarById(setup.carId);
    const track = getTrackById(setup.trackId);
    const item = document.createElement('article');
    item.className = 'list-item setup-card';
    item.innerHTML = `<div class="setup-card-top"><span class="setup-tag">SETUP</span><span class="setup-date">${escapeHtml(setup.sessionDate || formatDate(setup.createdAt))}</span></div><div class="item-main"><h3>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather || 'Conditions non renseignées')} · ${escapeHtml(setup.temperature || 'Température —')}</p></div>${setup.photos?.length ? `<div class="setup-photo-strip">${setup.photos.slice(0, 3).map((photo) => `<img src="${photo}" alt="Photo du setup" loading="lazy">`).join('')}<span>${setup.photos.length} photo${setup.photos.length > 1 ? 's' : ''}</span></div>` : ''}<div class="setup-chips">${setup.frontTires || setup.rearTires ? `<span>Pneus · ${escapeHtml(setup.frontTires || '—')} / ${escapeHtml(setup.rearTires || '—')}</span>` : ''}${setup.lapTime ? `<span>⏱ ${escapeHtml(setup.lapTime)}</span>` : ''}${setup.rating ? `<span>${escapeHtml(setup.rating)}</span>` : ''}</div><div class="item-actions"><button class="button button-soft view-setup" data-id="${escapeHtml(setup.id)}" type="button">Voir les détails</button><button class="button button-quiet danger-action delete-setup" data-id="${escapeHtml(setup.id)}" type="button">Supprimer</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach((button) => button.addEventListener('click', () => showSetup(button.dataset.id)));
  container.querySelectorAll('.delete-setup').forEach((button) => button.addEventListener('click', () => removeSetup(button.dataset.id)));
}

function formatDate(value) {
  if (!value) return 'Date non précisée';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date non précisée';
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}
function populateSelects() {
  const carSelect = document.querySelector('select[name="carId"]');
  const trackSelect = document.querySelector('select[name="trackId"]');
  const selectedCar = carSelect.value;
  const selectedTrack = trackSelect.value;
  carSelect.innerHTML = '<option value="">Choisir une voiture</option>' + state.cars.map((car) => `<option value="${escapeHtml(car.id)}">${escapeHtml(car.name)}</option>`).join('');
  trackSelect.innerHTML = '<option value="">Choisir une piste</option>' + state.tracks.map((track) => `<option value="${escapeHtml(track.id)}">${escapeHtml(track.name)}</option>`).join('');
  if (state.cars.some((car) => car.id === selectedCar)) carSelect.value = selectedCar;
  if (state.tracks.some((track) => track.id === selectedTrack)) trackSelect.value = selectedTrack;
}
function renderAll() { renderDashboard(); renderCars(); renderTracks(); renderSetups(); populateSelects(); }
function formValues(form, names) {
  const data = new FormData(form);
  return Object.fromEntries(names.map((name) => [name, String(data.get(name) || '').trim()]));
}

function handleCarSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'brand', 'scale', 'drive', 'notes']);
  if (!data.name) return;
  state.cars.unshift({ id: uid('car'), ...data, createdAt: new Date().toISOString() });
  saveState(); renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Voiture ajoutée au garage.');
}
function handleTrackSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'surface', 'type', 'location', 'details']);
  if (!data.name) return;
  state.tracks.unshift({ id: uid('track'), ...data, createdAt: new Date().toISOString() });
  saveState(); renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Piste ajoutée à ton carnet.');
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Lecture de la photo impossible'));
    reader.readAsDataURL(file);
  });
}

async function compressPhoto(file) {
  if (!file.type.startsWith('image/')) throw new Error('Choisis uniquement des fichiers image.');
  if (file.size > MAX_PHOTO_BYTES) throw new Error('Chaque photo doit faire moins de 12 Mo.');

  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
    const maxSide = 1280;
    const ratio = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * ratio));
    canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL('image/jpeg', 0.72);
  } catch (error) {
    if (bitmap) bitmap.close?.();
    return readFileAsDataURL(file);
  }
}

function renderPhotoPreviews() {
  const container = document.getElementById('setupPhotoPreview');
  container.replaceChildren();
  pendingPhotos.forEach((photo, index) => {
    const tile = document.createElement('div');
    tile.className = 'photo-preview-tile';
    tile.innerHTML = `<img src="${photo}" alt="Aperçu de la photo ${index + 1}"><button type="button" class="photo-remove" aria-label="Retirer la photo ${index + 1}">×</button>`;
    tile.querySelector('.photo-remove').addEventListener('click', () => {
      pendingPhotos.splice(index, 1);
      renderPhotoPreviews();
    });
    container.append(tile);
  });
}

async function handlePhotoSelection(event) {
  const files = Array.from(event.target.files || []);
  event.target.value = '';
  const available = MAX_SETUP_PHOTOS - pendingPhotos.length;
  if (available <= 0) { showToast(`Maximum ${MAX_SETUP_PHOTOS} photos par setup.`); return; }
  if (files.length > available) showToast(`Jusqu’à ${MAX_SETUP_PHOTOS} photos : seules les premières pourront être ajoutées.`);
  for (const file of files.slice(0, available)) {
    try {
      pendingPhotos.push(await compressPhoto(file));
      renderPhotoPreviews();
    } catch (error) {
      showToast(error.message || 'Impossible de charger cette photo.');
    }
  }
}

function handleSetupSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['carId', 'trackId', ...SETUP_FIELDS]);
  if (!data.carId || !data.trackId) { showToast('Choisis une voiture et une piste.'); return; }
  const now = new Date().toISOString();
  state.setups.unshift({ id: uid('setup'), ...data, photos: [...pendingPhotos], createdAt: now, updatedAt: now });
  if (!saveState()) { state.setups.shift(); return; }
  pendingPhotos = [];
  renderPhotoPreviews();
  renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Setup enregistré. Bon run !');
}

function removeCar(id) {
  const car = getCarById(id);
  if (!car || !confirm(`Supprimer « ${car.name} » et les setups associés ?`)) return;
  state.cars = state.cars.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.carId !== id);
  saveState(); renderAll(); showToast('Voiture et setups associés supprimés.');
}
function removeTrack(id) {
  const track = getTrackById(id);
  if (!track || !confirm(`Supprimer « ${track.name} » et les setups associés ?`)) return;
  state.tracks = state.tracks.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.trackId !== id);
  saveState(); renderAll(); showToast('Piste et setups associés supprimés.');
}
function removeSetup(id) {
  if (!confirm('Supprimer ce setup ?')) return;
  state.setups = state.setups.filter((setup) => setup.id !== id);
  saveState(); renderAll(); showToast('Setup supprimé.');
}

function showSetup(id) {
  const setup = state.setups.find((entry) => entry.id === id);
  if (!setup) return;
  const car = getCarById(setup.carId);
  const track = getTrackById(setup.trackId);
  const groups = [
    ['Session', [['Date', setup.sessionDate || formatDate(setup.createdAt)], ['Température', setup.temperature], ['Météo / adhérence', setup.weather], ['Objectif / ressenti', setup.goal]]],
    ['Pneus & roues', [['Pneus avant', setup.frontTires], ['Pneus arrière', setup.rearTires], ['Inserts', setup.inserts], ['Traitement pneus', setup.tireTreatment], ['Jantes / largeur', setup.wheels], ['État des pneus', setup.tireCondition]]],
    ['Suspension & géométrie', [['Huile amortisseur avant', setup.frontShocks], ['Piston amortisseur avant', setup.frontPiston], ['Ressort avant', setup.frontSpring], ['Huile amortisseur arrière', setup.rearShocks], ['Piston amortisseur arrière', setup.rearPiston], ['Ressort arrière', setup.rearSpring], ['Anciens ressorts (setup existant)', setup.springs], ['Hauteur de caisse avant', setup.frontRideHeight], ['Hauteur de caisse arrière', setup.rearRideHeight], ['Hauteur de caisse (ancienne fiche)', setup.rideHeight], ['Carrossage avant', setup.frontCamber], ['Carrossage arrière', setup.rearCamber], ['Pincement / ouverture avant', setup.frontToe], ['Pincement / ouverture arrière', setup.rearToe], ['Chasse avant', setup.frontCaster], ['Ackermann', setup.ackermann], ['Barre antiroulis avant', setup.frontAntiRollBar], ['Barre antiroulis arrière', setup.rearAntiRollBar], ['Débattement avant / droop', setup.frontDroop], ['Débattement arrière / droop', setup.rearDroop], ['Carrossage (ancienne fiche)', setup.camber], ['Pincement / ouverture (ancienne fiche)', setup.toe], ['Chasse / Ackermann (ancienne fiche)', setup.casterAckermann], ['Barres antiroulis (ancienne fiche)', setup.antiRollBars], ['Débattement / droop (ancienne fiche)', setup.droop], ['Butées / membranes', setup.stopsDiaphragms]]],
    ['Transmission', [['Rapport / pignon-couronne', setup.gearing], ['Différentiels AV / AR', setup.differentials], ['Différentiel central', setup.centerDiff], ['Moteur', setup.motor]]],
    ['Réglages variateur (ESC)', [['Variateur / modèle', setup.escModel], ['Mode de fonctionnement', setup.escMode], ['Timing moteur', setup.escMotorTiming], ['Boost / timing dynamique', setup.escBoost], ['Turbo timing', setup.escTurbo], ['Délai turbo', setup.escTurboDelay], ['Punch / puissance initiale', setup.escPunch], ['Force de freinage max', setup.escBrake], ['Drag brake', setup.escDragBrake], ['Fréquence freinage', setup.escBrakeFrequency], ['Fréquence accélération PWM', setup.escThrottleFrequency], ['Neutral range', setup.escNeutralRange], ['Cutoff batterie', setup.escCutoff], ['Tension BEC', setup.escBec], ['Protection thermique', setup.escThermal], ['Limitation marche arrière', setup.escReverse], ['Rampe de freinage', setup.escBrakeRate], ['Rampe accélération', setup.escThrottleRate], ['Autres paramètres ESC', setup.electronicsNotes]]],
    ['Réglages radio', [['Radio / émetteur', setup.txModel], ['Récepteur / gyro', setup.rxModel], ['Servo de direction', setup.servoSteering], ['Dual rate / expo', setup.radioExpo], ['EPA direction', setup.radioEPA], ['Trim / failsafe', setup.radioTrim], ['Frein radio', setup.brakes], ['Autres réglages radio', setup.radio]]],
    ['Entretien & lubrification', [['Graisses et huiles d’entretien', setup.lubricants]]],
    ['Bilan de session', [['Meilleur temps au tour', setup.lapTime], ['Ressenti général', setup.rating], ['Notes & prochaines modifications', setup.notes]]]
  ];
  const content = document.getElementById('setupDetails');
  const photoSection = setup.photos?.length ? `<section class="detail-group"><h3>Photos du setup</h3><div class="setup-gallery">${setup.photos.map((photo, index) => `<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index + 1} du setup" loading="lazy"></a>`).join('')}</div></section>` : '';
  content.innerHTML = `<span class="kicker">FICHE DE RÉGLAGES</span><h2>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h2><p class="dialog-subtitle">${escapeHtml(track?.surface || '')} ${track?.surface && setup.weather ? '·' : ''} ${escapeHtml(setup.weather || '')} ${setup.temperature ? `· ${escapeHtml(setup.temperature)}` : ''}</p>` + photoSection + groups.map(([title, fields]) => {
    const filled = fields.filter(([, value]) => value);
    if (!filled.length) return '';
    return `<section class="detail-group"><h3>${escapeHtml(title)}</h3><dl>${filled.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl></section>`;
  }).join('');
  document.getElementById('setupDialog').showModal();
}

function exportJson() {
  const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString(), version: 3 }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = `rc-setup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  showToast('Sauvegarde JSON exportée (avec les photos).');
}
function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(String(event.target?.result || ''));
      if (!parsed || !Array.isArray(parsed.cars) || !Array.isArray(parsed.tracks) || !Array.isArray(parsed.setups)) throw new Error('Format invalide');
      if (!confirm('L’import remplacera les données présentes sur cet appareil. Continuer ?')) return;
      state.cars = parsed.cars; state.tracks = parsed.tracks; state.setups = parsed.setups.map((setup) => ({ ...setup, photos: Array.isArray(setup.photos) ? setup.photos : [] }));
      if (saveState()) { renderAll(); showToast('Sauvegarde importée.'); }
    } catch (error) {
      console.error(error); showToast('Fichier JSON invalide ou incompatible.');
    }
  };
  reader.readAsText(file);
}
function registerServiceWorker() {
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js?v=37').catch((error) => console.error('Échec du service worker :', error)));
}
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredPrompt = event; installButton.classList.remove('hidden'); });
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) { showToast('Sur iPhone : Safari → Partager → Sur l’écran d’accueil.'); return; }
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installButton.classList.add('hidden');
  });
}

document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.add-entry').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.form).classList.toggle('hidden')));
document.querySelectorAll('[data-open-form]').forEach((button) => button.addEventListener('click', () => {
  setView(button.dataset.view);
  const form = document.getElementById(button.dataset.openForm);
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
document.querySelectorAll('[data-go-view]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); setView(button.dataset.goView); }));
document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.querySelectorAll('form').forEach((form) => form.addEventListener('reset', () => setTimeout(() => {
  form.classList.add('hidden');
  if (form.id === 'setupForm') { pendingPhotos = []; renderPhotoPreviews(); }
}, 0)));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

renderAll();
setView('dashboard');
registerServiceWorker();
setupInstallPrompt();
