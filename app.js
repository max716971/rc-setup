const STORAGE_KEY = 'rc-setup-v1';

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;

const emptyStateTemplate = document.getElementById('emptyStateTemplate');

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {
      cars: [],
      tracks: [],
      setups: []
    };
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error('Impossible de lire les données locales', error);
    return { cars: [], tracks: [], setups: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function getCarById(carId) {
  return state.cars.find((car) => car.id === carId);
}

function getTrackById(trackId) {
  return state.tracks.find((track) => track.id === trackId);
}

function setView(viewName) {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });

  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === `${viewName}View`);
  });
}

function renderDashboard() {
  document.getElementById('carCount').textContent = String(state.cars.length);
  document.getElementById('trackCount').textContent = String(state.tracks.length);
  document.getElementById('setupCount').textContent = String(state.setups.length);

  const recent = [...state.setups].sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)).slice(0, 5);

  const container = document.getElementById('recentSetups');
  container.innerHTML = '';

  if (!recent.length) {
    container.append(emptyStateTemplate.content.cloneNode(true));
    return;
  }

  recent.forEach((setup) => {
    const car = getCarById(setup.carId);
    const track = getTrackById(setup.trackId);
    const item = document.createElement('div');
    item.className = 'list-item';

    item.innerHTML = `
      <div class="item-main">
        <h3>${escapeHtml(car?.name || 'Voiture inconnue')}</h3>
        <div class="badge">${escapeHtml(track?.name || 'Piste inconnue')}</div>
        <p class="item-sub">${escapeHtml(setup.weather || 'Conditions non renseignées')} · ${escapeHtml(setup.temperature || '')}</p>
      </div>
      <div class="item-actions">
        <button class="ghost manage-setup" data-id="${setup.id}" type="button">Voir</button>
      </div>
    `;

    container.appendChild(item);
  });

  document.querySelectorAll('.manage-setup').forEach((button) => {
    button.addEventListener('click', () => {
      const setup = state.setups.find((entry) => entry.id === button.dataset.id);
      if (!setup) return;
      openSetupDetails(setup);
    });
  });
}

function renderCars() {
  const container = document.getElementById('carsList');
  container.innerHTML = '';

  if (!state.cars.length) {
    container.append(emptyStateTemplate.content.cloneNode(true));
    return;
  }

  state.cars.forEach((car) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="item-main">
        <h3>${escapeHtml(car.name)}</h3>
        <p class="item-sub">${escapeHtml(car.brand || 'Sans marque')}<br/>${escapeHtml(car.notes || 'Aucune note')}</p>
      </div>
      <div class="item-actions">
        <button class="ghost delete-car" data-id="${car.id}" type="button">Supprimer</button>
      </div>
    `;
    container.appendChild(item);
  });

  document.querySelectorAll('.delete-car').forEach((button) => {
    button.addEventListener('click', () => removeCar(button.dataset.id));
  });
}

function renderTracks() {
  const container = document.getElementById('tracksList');
  container.innerHTML = '';

  if (!state.tracks.length) {
    container.append(emptyStateTemplate.content.cloneNode(true));
    return;
  }

  state.tracks.forEach((track) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="item-main">
        <h3>${escapeHtml(track.name)}</h3>
        <p class="item-sub">${escapeHtml(track.surface || 'Surface non définie')}<br/>${escapeHtml(track.details || 'Aucun détail')}</p>
      </div>
      <div class="item-actions">
        <button class="ghost delete-track" data-id="${track.id}" type="button">Supprimer</button>
      </div>
    `;
    container.appendChild(item);
  });

  document.querySelectorAll('.delete-track').forEach((button) => {
    button.addEventListener('click', () => removeTrack(button.dataset.id));
  });
}

function renderSetups() {
  const container = document.getElementById('setupsList');
  container.innerHTML = '';

  if (!state.setups.length) {
    container.append(emptyStateTemplate.content.cloneNode(true));
    return;
  }

  state.setups
    .slice()
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
    .forEach((setup) => {
      const car = getCarById(setup.carId);
      const track = getTrackById(setup.trackId);
      const item = document.createElement('div');
      item.className = 'list-item';
      item.innerHTML = `
        <div class="item-main">
          <h3>${escapeHtml(car?.name || 'Voiture inconnue')} → ${escapeHtml(track?.name || 'Piste inconnue')}</h3>
          <p class="item-sub">
            ${escapeHtml(setup.weather || 'Conditions non définies')} · ${escapeHtml(setup.temperature || 'Température non définie')}<br/>
            Pneus: ${escapeHtml(setup.tires || '—')} · Suspension: ${escapeHtml(setup.suspension || '—')}<br/>
            ${escapeHtml(setup.notes || 'Aucune note')}
          </p>
        </div>
        <div class="item-actions">
          <button class="ghost view-setup" data-id="${setup.id}" type="button">Voir</button>
          <button class="ghost danger delete-setup" data-id="${setup.id}" type="button">Supprimer</button>
        </div>
      `;
      container.appendChild(item);
    });

  document.querySelectorAll('.view-setup').forEach((button) => {
    button.addEventListener('click', () => {
      const setup = state.setups.find((entry) => entry.id === button.dataset.id);
      if (!setup) return;
      openSetupDetails(setup);
    });
  });

  document.querySelectorAll('.delete-setup').forEach((button) => {
    button.addEventListener('click', () => removeSetup(button.dataset.id));
  });
}

function populateSelects() {
  const carSelect = document.querySelector('select[name="carId"]');
  const trackSelect = document.querySelector('select[name="trackId"]');

  carSelect.innerHTML = '<option value="">Sélectionner une voiture</option>' + state.cars
    .map((car) => `<option value="${car.id}">${escapeHtml(car.name)}</option>`)
    .join('');

  trackSelect.innerHTML = '<option value="">Sélectionner une piste</option>' + state.tracks
    .map((track) => `<option value="${track.id}">${escapeHtml(track.name)}</option>`)
    .join('');
}

function renderAll() {
  renderDashboard();
  renderCars();
  renderTracks();
  renderSetups();
  populateSelects();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function handleCarSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = {
    id: uid('car'),
    name: String(formData.get('name') || '').trim(),
    brand: String(formData.get('brand') || '').trim(),
    notes: String(formData.get('notes') || '').trim(),
    createdAt: new Date().toISOString()
  };

  if (!payload.name) return;

  state.cars.unshift(payload);
  saveState();
  renderAll();
  event.target.reset();
  event.target.classList.add('hidden');
}

function handleTrackSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = {
    id: uid('track'),
    name: String(formData.get('name') || '').trim(),
    surface: String(formData.get('surface') || '').trim(),
    details: String(formData.get('details') || '').trim(),
    createdAt: new Date().toISOString()
  };

  if (!payload.name) return;

  state.tracks.unshift(payload);
  saveState();
  renderAll();
  event.target.reset();
  event.target.classList.add('hidden');
}

function handleSetupSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const carId = String(formData.get('carId') || '').trim();
  const trackId = String(formData.get('trackId') || '').trim();

  if (!carId || !trackId) {
    return;
  }

  const payload = {
    id: uid('setup'),
    carId,
    trackId,
    temperature: String(formData.get('temperature') || '').trim(),
    weather: String(formData.get('weather') || '').trim(),
    tires: String(formData.get('tires') || '').trim(),
    suspension: String(formData.get('suspension') || '').trim(),
    notes: String(formData.get('notes') || '').trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  state.setups.unshift(payload);
  saveState();
  renderAll();
  event.target.reset();
  event.target.classList.add('hidden');
}

function removeCar(carId) {
  const carExists = getCarById(carId);
  if (!carExists) return;

  state.cars = state.cars.filter((car) => car.id !== carId);
  state.setups = state.setups.filter((setup) => setup.carId !== carId);
  saveState();
  renderAll();
}

function removeTrack(trackId) {
  const trackExists = getTrackById(trackId);
  if (!trackExists) return;

  state.tracks = state.tracks.filter((track) => track.id !== trackId);
  state.setups = state.setups.filter((setup) => setup.trackId !== trackId);
  saveState();
  renderAll();
}

function removeSetup(setupId) {
  state.setups = state.setups.filter((setup) => setup.id !== setupId);
  saveState();
  renderAll();
}

function openSetupDetails(setup) {
  const car = getCarById(setup.carId);
  const track = getTrackById(setup.trackId);

  const details = [
    `Voiture: ${car?.name || 'Inconnue'}`,
    `Piste: ${track?.name || 'Inconnue'}`,
    `Température: ${setup.temperature || '—'}`,
    `Météo: ${setup.weather || '—'}`,
    `Pneus: ${setup.tires || '—'}`,
    `Suspension: ${setup.suspension || '—'}`,
    `Notes: ${setup.notes || 'Aucune note'}`
  ].join('\n');

  alert(details);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rc-setup-export.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(String(event.target?.result || ''));
      const nextState = {
        cars: Array.isArray(parsed.cars) ? parsed.cars : [],
        tracks: Array.isArray(parsed.tracks) ? parsed.tracks : [],
        setups: Array.isArray(parsed.setups) ? parsed.setups : []
      };

      Object.assign(state, nextState);
      saveState();
      renderAll();
      alert('Importation réussie.');
    } catch (error) {
      console.error(error);
      alert('Fichier de sauvegarde invalide.');
    }
  };
  reader.readAsText(file);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((error) => {
        console.error('Echec du service worker:', error);
      });
    });
  }
}

function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.classList.remove('hidden');
  });

  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) {
      alert('Sur iPhone, utilise le bouton Partager puis “Sur l’écran d’accueil”.');
      return;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.classList.add('hidden');
  });
}

document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => {
    setView(button.dataset.view);
  });
});

document.querySelectorAll('.add-entry').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.form);
    target.classList.toggle('hidden');
  });
});

document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  importJson(file);
  event.target.value = '';
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('reset', () => {
    window.setTimeout(() => form.classList.add('hidden'), 10);
  });
});

document.querySelectorAll('[data-view]').forEach((button) => {
  const view = button.dataset.view;
  if (view && !button.classList.contains('nav-item')) {
    button.addEventListener('click', () => setView(view));
  }
});

renderAll();
setView('dashboard');
registerServiceWorker();
setupInstallPrompt();





































