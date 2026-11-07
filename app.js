const STORAGE_KEY = 'rc-setup-v1';
const MAX_SETUP_PHOTOS = 4;
const MAX_PHOTO_BYTES = 12 * 1024 * 1024;
const SETUP_FIELDS = [
  'sessionDate', 'temperature', 'weather', 'surface', 'grip', 'goal', 'sessionNotes', 'tiresNotes', 'suspensionNotes', 'transmissionNotes', 'frontBallastWeight', 'rearBallastWeight', 'lateralBallastWeight', 'escSectionNotes', 'radioSectionNotes', 'radioEquipmentNotes',
  'frontTires', 'rearTires', 'inserts', 'frontInserts', 'rearInserts', 'tireTreatment', 'tireCondition',
  'frontShocks', 'frontPiston', 'frontSpring', 'frontShockCupPosition', 'rearShocks', 'rearPiston', 'rearSpring', 'rearShockCupPosition', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms', 'photoNotes', 'frontShockTower', 'rearShockTower', 'frontShockPosition', 'rearShockPosition', 'frontArmPosition', 'rearArmPosition',
  'gearing', 'diffType', 'diffGearOil', 'diffBallGrease', 'differentials', 'frontDiffType', 'centerDiffType', 'rearDiffType', 'frontDiffOil', 'centerDiffOil', 'rearDiffOil', 'frontDiffGrease', 'centerDiffGrease', 'rearDiffGrease', 'frontBallDiffTightness', 'centerBallDiffTightness', 'rearBallDiffTightness', 'slipperPresence', 'slipper', 'ballDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'radio',
  'escModel', 'escMode', 'escMotorTiming', 'escBoost', 'escTurbo', 'escTurboDelay', 'escTiming', 'escPunch', 'escBrake', 'escDragBrake', 'escBrakeFrequency', 'escThrottleFrequency', 'escNeutralRange', 'escCutoff', 'escBec', 'escThermal', 'escReverse', 'escBrakeRate', 'escThrottleRate', 'electronicsNotes', 'esc', 'radio', 'radioSteeringDualRate', 'radioSteeringExpo', 'radioEPA', 'radioSteeringTrim', 'radioSubtrim', 'radioSteeringReverse', 'radioThrottleExpo', 'radioThrottleEPA', 'radioThrottleTrim', 'radioThrottleReverse', 'radioBrakeEPA', 'radioBrakeExpo', 'radioFailsafe', 'radioTrim', 'txModel', 'rxModel', 'lapTime', 'rating', 'notes', 'runLaps', 'averageLapTime', 'lapConsistency', 'cornerEntry', 'cornerMid', 'cornerExit', 'tractionLevel', 'stabilityLevel', 'testedChanges', 'testConclusion', 'nextTest'
];

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;
let toastTimer;
let pendingPhotos = [];
let pendingCarPhotos = [];
let editingCarId = null;
let editingSetupId = null;
let editingTrackId = null;
let setupDraftSource = null;
let skipSetupReset = false;
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
    window.dispatchEvent(new Event('rc-setup-data-changed'));
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
  const recent = [...state.setups].sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0)).slice(0,4);
  if (!recent.length) container.append(emptyState());
  recent.forEach(setup => {
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),item=document.createElement('article');
    item.className='list-item setup-list-item';
    item.innerHTML=`<div class="item-avatar">⚙</div><div class="item-main"><h3>${escapeHtml(setup.setupName||car?.name||'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name||'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather||'Conditions non renseignées')} · ${escapeHtml(setup.temperature||'Température —')}</p></div><button class="icon-button view-setup" data-id="${escapeHtml(setup.id)}" aria-label="Voir le setup" type="button">↗</button>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach(button=>button.addEventListener('click',()=>showSetup(button.dataset.id)));
  renderPerformanceTrend();
}

function carEquipmentMarkup(car) {
  const fields=[['Moteur','engineEquipment'],['Variateur / ESC','escEquipment'],['Servo','servoEquipment'],['Pneus','tiresEquipment'],['Amortisseurs','shocksEquipment']];
  const setups=state.setups.filter(setup=>setup.carId===car.id).sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0));
  const history=Array.isArray(car.partsHistory)?[...car.partsHistory].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))):[];
  const photos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  return `<div class="car-detail-grid"><section><h4>Équipements</h4><dl class="car-equipment-list">${fields.map(([label,key])=>`<div><dt>${label}</dt><dd>${escapeHtml(car[key]||'Non renseigné')}</dd></div>`).join('')}</dl><p class="item-sub">${escapeHtml(car.type||'Type non renseigné')} · ${escapeHtml(car.scale||'Échelle non renseignée')} · ${escapeHtml(car.drive||'Transmission non renseignée')}</p></section><section><h4>Setups associés (${setups.length})</h4>${setups.length? `<ul class="car-setup-links">${setups.map(setup=>`<li><button type="button" class="text-button open-car-setup" data-id="${escapeHtml(setup.id)}">${escapeHtml(setup.setupName||setup.sessionDate||'Setup')} — ${escapeHtml(getTrackById(setup.trackId)?.name||'Piste non renseignée')}</button></li>`).join('')}</ul>`:'<p class="item-sub">Aucun setup associé pour le moment.</p>'}</section></div><section class="car-detail-section"><h4>Photos de la voiture (${photos.length}/3)</h4>${photos.length?`<div class="car-detail-photos">${photos.map((photo,index)=>`<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index+1} de ${escapeHtml(car.name)}" loading="lazy"></a>`).join('')}</div>`:'<p class="item-sub">Ajoute jusqu’à trois photos depuis Modifier.</p>'}</section><section class="car-detail-section"><h4>Historique des pièces et modifications</h4>${history.length?`<ol class="car-parts-history">${history.map(entry=>`<li><strong>${escapeHtml(entry.part||'Modification')}</strong><span>${escapeHtml(entry.action||'Modifiée')} · ${escapeHtml(entry.date||'Date inconnue')}</span>${entry.notes?`<p>${escapeHtml(entry.notes)}</p>`:''}</li>`).join('')}</ol>`:'<p class="item-sub">Aucune pièce enregistrée. Les changements d’équipements seront ajoutés automatiquement à l’historique.</p>'}</section></div>`;
}
function renderCars() {
  const container = document.getElementById('carsList');
  container.replaceChildren();
  if (!state.cars.length) { container.append(emptyState()); return; }
  state.cars.forEach((car) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card car-entity-card';
    const setups=state.setups.filter(setup=>setup.carId===car.id).length;
    const itemType=car.type?escapeHtml(car.type):'Type non renseigné';
    item.innerHTML = `<div class="item-avatar car-avatar">🚗</div><div class="item-main"><h3>${escapeHtml(car.name)}</h3><p class="item-sub">${escapeHtml(car.brand || 'Marque / modèle non renseigné')} · ${escapeHtml(car.scale || 'Échelle non renseignée')} · ${escapeHtml(car.drive || 'Transmission non renseignée')} · ${itemType}</p><p class="item-detail">${setups} setup(s) associé(s) · ${Array.isArray(car.photos)?Math.min(3,car.photos.length):0}/3 photos</p>${car.notes ? `<p class="item-detail">${escapeHtml(car.notes)}</p>` : ''}<div class="car-card-actions"><button class="button button-soft view-car-details" data-id="${escapeHtml(car.id)}" type="button" aria-expanded="false">Fiche détaillée</button><button class="button button-soft edit-car" data-id="${escapeHtml(car.id)}" type="button">Modifier</button><button class="button button-quiet danger-action delete-car" data-id="${escapeHtml(car.id)}" type="button">Supprimer</button></div><div class="car-detail-panel hidden" id="car-detail-${escapeHtml(car.id)}">${carEquipmentMarkup(car)}</div></div>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-car').forEach((button) => button.addEventListener('click', () => removeCar(button.dataset.id)));
  container.querySelectorAll('.edit-car').forEach((button) => button.addEventListener('click', () => openCarEditor(button.dataset.id)));
  container.querySelectorAll('.view-car-details').forEach(button=>button.addEventListener('click',()=>{
    const panel=document.getElementById('car-detail-'+button.dataset.id);if(!panel)return;
    const opening=panel.classList.contains('hidden');panel.classList.toggle('hidden',!opening);button.setAttribute('aria-expanded',String(opening));button.textContent=opening?'Masquer la fiche':'Fiche détaillée';
  }));
  container.querySelectorAll('.open-car-setup').forEach(button=>button.addEventListener('click',()=>showSetup(button.dataset.id)));
}

function renderTracks() {
  const container = document.getElementById('tracksList');
  container.replaceChildren();
  if (!state.tracks.length) { container.append(emptyState()); return; }
  state.tracks.forEach((track) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card';
    item.innerHTML = `<div class="item-avatar track-avatar">🏁</div><div class="item-main"><h3>${escapeHtml(track.name)}</h3><p class="item-sub">${escapeHtml(track.surface || 'Surface non renseignée')} ${track.grip ? `· Adhérence ${escapeHtml(track.grip)}` : ''} ${track.type ? `· ${escapeHtml(track.type)}` : ''} ${track.location ? `· ${escapeHtml(track.location)}` : ''}</p>${track.details ? `<p class="item-detail">${escapeHtml(track.details)}</p>` : ''}</div><div class="item-actions"><button class="button button-soft edit-track" data-id="${escapeHtml(track.id)}" type="button">Modifier</button><button class="icon-button danger-action delete-track" data-id="${escapeHtml(track.id)}" aria-label="Supprimer ${escapeHtml(track.name)}" type="button">×</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.edit-track').forEach((button) => button.addEventListener('click', () => openTrackEditor(button.dataset.id)));
  container.querySelectorAll('.delete-track').forEach((button) => button.addEventListener('click', () => removeTrack(button.dataset.id)));
}

function renderSetups() {
  const container=document.getElementById('setupsList');container.replaceChildren();
  updateSetupFilterOptions();updateComparisonOptions();
  const query=(document.getElementById('setupSearch')?.value||'').trim().toLocaleLowerCase('fr');
  const carFilter=document.getElementById('setupCarFilter')?.value||'',trackFilter=document.getElementById('setupTrackFilter')?.value||'';
  const surfaceFilter=document.getElementById('setupSurfaceFilter')?.value||'',gripFilter=document.getElementById('setupGripFilter')?.value||'';
  const from=document.getElementById('setupDateFrom')?.value||'',to=document.getElementById('setupDateTo')?.value||'';
  const filtered=[...state.setups].filter(setup=>{
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),date=setup.sessionDate||String(setup.createdAt||'').slice(0,10);
    const effectiveSurface=setup.surface||track?.surface||'',effectiveGrip=setup.grip||track?.grip||'';
     const hay=[car?.name,track?.name,effectiveSurface,effectiveGrip,setup.weather,setup.goal,setup.notes,setup.frontTires,setup.rearTires,setup.testedChanges,setup.testConclusion,setup.nextTest].join(' ').toLocaleLowerCase('fr');
    return (!query||hay.includes(query))&&(!carFilter||setup.carId===carFilter)&&(!trackFilter||setup.trackId===trackFilter)&&(!surfaceFilter||effectiveSurface===surfaceFilter)&&(!gripFilter||effectiveGrip===gripFilter)&&(!from||date>=from)&&(!to||date<=to);
  }).sort((a,b)=>Number(Boolean(b.favorite))-Number(Boolean(a.favorite))||new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0));
  if(!filtered.length){const empty=emptyState();empty.querySelector('span:last-child').textContent=state.setups.length?'Aucun setup ne correspond à ces filtres.':'Ajoute une première fiche pour commencer.';container.append(empty);return;}
  filtered.forEach(setup=>{
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),item=document.createElement('article');
    item.className='list-item setup-card';
    item.innerHTML=`<div class="setup-card-top"><span class="setup-tag">${setup.favorite?'★ FAVORI':'SETUP'}</span><span class="setup-date">${escapeHtml(setup.sessionDate||formatDate(setup.createdAt))}</span></div><div class="item-main"><h3>${escapeHtml(setup.setupName||car?.name||'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name||'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(car?.name||'')} · ${escapeHtml(setup.surface||track?.surface||'Surface non renseignée')} · ${escapeHtml(setup.grip||track?.grip||'Adhérence non renseignée')}</p></div>${setup.photos?.length?`<div class="setup-photo-strip">${setup.photos.slice(0,3).map(photo=>`<img src="${photo}" alt="Photo du setup" loading="lazy">`).join('')}<span>${setup.photos.length} photo(s)</span></div>`:''}<div class="setup-chips">${setup.frontTires||setup.rearTires?`<span>Pneus · ${escapeHtml(setup.frontTires||'—')} / ${escapeHtml(setup.rearTires||'—')}</span>`:''}${setup.lapTime?`<span>⏱ ${escapeHtml(setup.lapTime)}</span>`:''}${setup.rating?`<span>${escapeHtml(setup.rating)}</span>`:''}<span>${(setup.history||[]).length} modification(s)</span></div><div class="item-actions"><button class="button button-soft view-setup" data-id="${escapeHtml(setup.id)}" type="button">Détails</button><button class="button button-soft edit-setup" data-id="${escapeHtml(setup.id)}" type="button">Modifier</button><button class="button button-soft duplicate-setup" data-id="${escapeHtml(setup.id)}" type="button">Dupliquer</button><button class="button button-quiet favorite-setup" data-id="${escapeHtml(setup.id)}" type="button">${setup.favorite?'★':'☆'}</button><button class="button button-quiet danger-action delete-setup" data-id="${escapeHtml(setup.id)}" type="button">Supprimer</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach(b=>b.addEventListener('click',()=>showSetup(b.dataset.id)));
  container.querySelectorAll('.edit-setup').forEach(b=>b.addEventListener('click',()=>openSetupEditor(b.dataset.id)));
  container.querySelectorAll('.duplicate-setup').forEach(b=>b.addEventListener('click',()=>openSetupEditor(b.dataset.id,true)));
  container.querySelectorAll('.favorite-setup').forEach(b=>b.addEventListener('click',()=>toggleSetupFavorite(b.dataset.id)));
  container.querySelectorAll('.delete-setup').forEach(b=>b.addEventListener('click',()=>removeSetup(b.dataset.id)));
}

function updateSetupFilterOptions(){
  const fill=(id,items,key,label,first)=>{const el=document.getElementById(id);if(!el)return;const current=el.value;el.innerHTML=`<option value="">${first}</option>`+items.map(x=>`<option value="${escapeHtml(x[key])}">${escapeHtml(label(x))}</option>`).join('');if(items.some(x=>String(x[key])===current))el.value=current;};
  fill('setupCarFilter',state.cars,'id',x=>x.name,'Toutes les voitures');fill('setupTrackFilter',state.tracks,'id',x=>x.name,'Toutes les pistes');
  const surfaces=[...new Set([...state.tracks.map(t=>t.surface),...state.setups.map(s=>s.surface)].filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr')),el=document.getElementById('setupSurfaceFilter');
  if(el){const current=el.value;el.innerHTML='<option value="">Toutes les surfaces</option>'+surfaces.map(s=>`<option>${escapeHtml(s)}</option>`).join('');if(surfaces.includes(current))el.value=current;}
   const gripEl=document.getElementById('setupGripFilter');if(gripEl){const current=gripEl.value;const grips=[...new Set([...state.tracks.map(t=>t.grip),...state.setups.map(s=>s.grip)].filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr'));gripEl.innerHTML='<option value="">Toutes les adhérences</option>'+grips.map(g=>`<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join('');if(grips.includes(current))gripEl.value=current;}
}
function updateComparisonOptions(){
  ['compareSetupA','compareSetupB'].forEach(id=>{const el=document.getElementById(id);if(!el)return;const current=el.value;el.innerHTML='<option value="">Choisir un setup…</option>'+state.setups.map(s=>{const car=getCarById(s.carId),track=getTrackById(s.trackId);return `<option value="${escapeHtml(s.id)}">${escapeHtml(s.setupName||car?.name||'Voiture')} — ${escapeHtml(track?.name||'Piste')} — ${escapeHtml(s.sessionDate||formatDate(s.createdAt))}</option>`;}).join('');if(state.setups.some(s=>s.id===current))el.value=current;});
}
function toggleSetupFavorite(id){const setup=state.setups.find(s=>s.id===id);if(!setup)return;const previous={...setup};setup.favorite=!setup.favorite;setup.updatedAt=new Date().toISOString();if(saveState()){renderAll();showToast(setup.favorite?'Ajouté aux favoris.':'Retiré des favoris.');}else Object.assign(setup,previous);}
function restoreSetupVersion(setupId,historyIndex){
  const index=state.setups.findIndex(s=>s.id===setupId);if(index<0)return;
  const current=state.setups[index],history=[...(current.history||[])],entry=history[historyIndex];
  if(!entry?.data||!confirm('Restaurer cette ancienne version ? La configuration actuelle sera conservée dans l’historique.'))return;
  const now=new Date().toISOString();
  history.push({savedAt:now,data:{...current,photos:[...(current.photos||[])],history:[]}});
  state.setups[index]={...entry.data,id:current.id,createdAt:current.createdAt,updatedAt:now,history:history.slice(-20)};
  if(saveState()){const dialog=document.getElementById('setupDialog');if(dialog.open)dialog.close();renderAll();showSetup(setupId);showToast('Ancienne version restaurée.');}else state.setups[index]=current;
}

function openSetupEditor(id,duplicate=false){
  const source=state.setups.find(s=>s.id===id);if(!source)return;const form=document.getElementById('setupForm');skipSetupReset=true;form.dataset.preserveOnReset='true';form.reset();
  editingSetupId=duplicate?null:id;setupDraftSource=duplicate?source:null;
  for(const name of ['carId','trackId',...SETUP_FIELDS]){const field=form.elements.namedItem(name);if(field)field.value=source[name]??'';}
  form.elements.namedItem('setupName').value=duplicate?`${source.setupName||getCarById(source.carId)?.name||'Setup'} — copie`:(source.setupName||'');
  pendingPhotos=[...(source.photos||[])];renderPhotoPreviews();form.querySelector('button[type="submit"]').textContent=duplicate?'Enregistrer la copie':'Enregistrer les modifications';
  form.classList.remove('hidden');setView('setups');form.scrollIntoView({behavior:'smooth',block:'start'});updateVehicleSpecificFields();showToast(duplicate?'Copie préparée : modifie-la puis enregistre.':'Modification du setup.');
}
function updateVehicleSpecificFields(){
  const form=document.getElementById('setupForm'),car=getCarById(form.elements.namedItem('carId')?.value);
  const count=car?getCarDifferentialCount(car):0;
  const available=count===1?['rear']:count===2?['front','rear']:count===3?['front','center','rear']:[];
  ['front','center','rear'].forEach(position=>{
    const card=form.querySelector('.transmission-diff-'+position);
    const enabled=available.includes(position);
    if(card)card.classList.toggle('vehicle-field-hidden',!enabled);
    const typeField=form.elements.namedItem(position+'DiffType');
    if(!enabled&&typeField)typeField.value='Absent';
    const type=String(typeField?.value||'').toLowerCase();
    form.querySelectorAll('.'+position+'-diff-gear-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',type!=='à pignons'));
    form.querySelectorAll('.'+position+'-diff-ball-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',type!=='à billes'));
  });
  const slipperPresence=String(form.elements.namedItem('slipperPresence')?.value||'').toLowerCase();
  form.querySelectorAll('.slipper-setting-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',slipperPresence!=='présent'));
  const hint=document.getElementById('vehicleSetupHint');
  if(hint)hint.textContent=car?[car.brand||'',car.name,car.drive||'architecture non précisée'].filter(Boolean).join(' · ')+' · '+count+' différentiel'+(count>1?'s':'')+' configuré'+(count>1?'s':'')+'. Modifiable dans le Garage.':'Sélectionne une voiture pour afficher ses différentiels.';
}
function parseLapTime(value){const text=String(value||'').trim().replace(',','.');if(!text)return null;if(text.includes(':')){const p=text.split(':');if(p.length!==2)return null;const minutes=Number(p[0]),seconds=Number(p[1]);if(!Number.isInteger(minutes)||minutes<0||!Number.isFinite(seconds)||seconds<0||seconds>=60)return null;const total=minutes*60+seconds;return total>0?total:null;}const n=Number(text);return Number.isFinite(n)&&n>0?n:null;}
function renderPerformanceTrend(){
  const root=document.getElementById('performanceTrend');if(!root)return;
  const samples=state.setups.filter(s=>parseLapTime(s.lapTime)!==null).sort((a,b)=>new Date(a.sessionDate||a.createdAt)-new Date(b.sessionDate||b.createdAt)).slice(-10);
  if(!samples.length){root.innerHTML='<p class="item-sub">Renseigne un meilleur temps dans tes setups pour afficher leur évolution.</p>';return;}
  const values=samples.map(s=>parseLapTime(s.lapTime)),best=Math.min(...values),worst=Math.max(...values);
  root.innerHTML='<div class="trend-chart">'+samples.map((s,i)=>{const v=values[i],height=worst===best?75:Math.max(18,Math.round(100-(v-best)/(worst-best)*72));return `<div class="trend-column" title="${escapeHtml(getCarById(s.carId)?.name||'Voiture')} · ${escapeHtml(s.lapTime)}"><span>${escapeHtml(s.lapTime)}</span><i style="height:${height}%"></i><small>${escapeHtml((s.sessionDate||s.createdAt||'').slice(0,10))}</small></div>`;}).join('')+'</div><p class="item-sub">Meilleur temps enregistré : <strong>'+escapeHtml(samples[values.indexOf(best)].lapTime)+'</strong> · '+samples.length+' sessions</p>';
}
function printSetupDetails(){
  const source=document.getElementById('setupDetails');
  if(!source)return;
  const printable=source.cloneNode(true);
  printable.querySelectorAll('.item-actions,.restore-version,.button,.toast,.pdf-action-banner').forEach(node=>node.remove());
  const heading=printable.querySelector('h2')?.textContent?.trim()||'Fiche RC SETUP';
  const subtitle=printable.querySelector('.dialog-subtitle')?.textContent?.trim()||'Fiche de réglages et de suivi';
  const readValue=(...labels)=>{const nodes=[...printable.querySelectorAll('.detail-group dl>div')];const found=nodes.find(node=>labels.some(label=>node.querySelector('dt')?.textContent?.toLowerCase().includes(label.toLowerCase())));return found?.querySelector('dd')?.textContent?.trim()||'Non renseigné';};
  const isSetup=printable.querySelector('.kicker')?.textContent?.includes('FICHE DE RÉGLAGES');
  const setupDiagram=isSetup ? '<section class="print-car-layout"><div class="print-car-heading"><span class="kicker">PLAN DE RÉGLAGES · VUE DE DESSUS</span><strong>Repérage des principaux éléments</strong><small>Schéma indicatif d’un buggy TT 1/10 — les valeurs proviennent de cette fiche.</small></div><div class="print-car-grid"><div class="print-callout"><b>01 · TRAIN AVANT</b><strong>Pneus : '+escapeHtml(readValue('Pneus avant'))+'</strong><span>Inserts : '+escapeHtml(readValue('Inserts avant'))+'</span><span>Ressort : '+escapeHtml(readValue('Ressort avant'))+'</span><span>Amortisseurs : '+escapeHtml(readValue('Huile amortisseur avant'))+'</span><span>Fixation tour / triangle : '+escapeHtml(readValue('Tour d’amortisseur avant'))+' / '+escapeHtml(readValue('Position amortisseur avant'))+'</span><span>Hauteur : '+escapeHtml(readValue('Hauteur de caisse avant'))+'</span><span>Géométrie : '+escapeHtml(readValue('Carrossage avant'))+' · '+escapeHtml(readValue('Pincement / ouverture avant'))+'</span></div><div class="print-car-drawing"><svg viewBox="0 0 360 500" role="img" aria-label="Buggy TT 1/10 vu du dessus"><g stroke="#24364d" stroke-width="5" stroke-linejoin="round"><path d="M112 76 Q180 42 248 76 L264 132 L250 202 L247 322 L264 384 L248 432 Q180 463 112 432 L96 384 L113 322 L110 202 L96 132 Z" fill="#e9eef3"/><path d="M122 104 Q180 78 238 104 L226 180 L134 180 Z" fill="#b8d68a"/><path d="M134 188 L226 188 L239 310 L121 310 Z" fill="#d9e2eb"/><path d="M146 184 L214 184 L225 315 L135 315 Z" fill="#aebdce"/><path d="M151 211 L209 211 L209 287 L151 287 Z" fill="#354a63"/><path d="M130 145 L230 145 M130 345 L230 345 M93 133 L267 133 M93 382 L267 382" fill="none" stroke="#587b28" stroke-width="8"/><path d="M90 105 L72 105 L60 160 L80 172 L101 157 Z M270 105 L288 105 L300 160 L280 172 L259 157 Z M90 405 L72 405 L60 350 L80 338 L101 353 Z M270 405 L288 405 L300 350 L280 338 L259 353 Z" fill="#26384e"/><path d="M157 165 L203 165 M157 330 L203 330" fill="none" stroke="#587b28" stroke-width="5"/></g><g fill="#d7e1ed" stroke="#24364d" stroke-width="3"><circle cx="180" cy="235" r="18"/><circle cx="180" cy="270" r="18"/></g><g fill="#24364d" font-family="Arial" font-size="11" font-weight="700"><text x="180" y="28" text-anchor="middle">AVANT</text><text x="180" y="484" text-anchor="middle">ARRIÈRE</text></g></svg></div><div class="print-callout"><b>02 · TRAIN ARRIÈRE</b><strong>Pneus : '+escapeHtml(readValue('Pneus arrière'))+'</strong><span>Inserts : '+escapeHtml(readValue('Inserts arrière'))+'</span><span>Ressort : '+escapeHtml(readValue('Ressort arrière'))+'</span><span>Amortisseurs : '+escapeHtml(readValue('Huile amortisseur arrière'))+'</span><span>Fixation tour / triangle : '+escapeHtml(readValue('Tour d’amortisseur arrière'))+' / '+escapeHtml(readValue('Position amortisseur arrière'))+'</span><span>Hauteur : '+escapeHtml(readValue('Hauteur de caisse arrière'))+'</span><span>Géométrie : '+escapeHtml(readValue('Carrossage arrière'))+' · '+escapeHtml(readValue('Pincement / ouverture arrière'))+'</span></div></div><div class="print-layout-foot"><span><b>03 · TRANSMISSION</b> Différentiels et slipper : voir la rubrique transmission.</span><span><b>04 · ÉLECTRONIQUE</b> Moteur, ESC et radio : voir les rubriques détaillées.</span></div></section>' : '';
  const now=new Date();
  const dateLabel=now.toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'});
  const styles=`
    :root{color-scheme:light;--ink:#17243a;--muted:#63718a;--line:#dce3ec;--accent:#587b28;--pale:#f2f6eb}
    *{box-sizing:border-box}
    html{background:#e9edf2}
    body{max-width:980px;margin:24px auto;padding:0 30px 35px;color:var(--ink);background:#fff;font:10.5pt/1.52 Arial,Helvetica,sans-serif}
    .print-masthead{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:22px 0 17px;border-bottom:3px solid var(--accent)}
    .print-brand{display:flex;align-items:center;gap:12px}
    .print-mark{display:grid;place-items:center;width:43px;height:43px;border-radius:12px;background:#17243a;color:#d6f0a8;font-size:17px;font-weight:900;letter-spacing:-1px}
    .print-brand small{display:block;color:var(--muted);font-size:8pt;font-weight:700;letter-spacing:2px}
    .print-brand strong{display:block;font-size:19pt;letter-spacing:-.8px}
    .print-meta{text-align:right;color:var(--muted);font-size:8.5pt}
    .print-title{margin:23px 0 5px;font-size:22pt;line-height:1.15;letter-spacing:-.6px}
    .print-subtitle{margin:0 0 21px;color:var(--muted);font-size:10pt}
    .kicker{display:inline-block;margin:0 0 7px;padding:4px 8px;border-radius:5px;background:var(--pale);color:var(--accent);font-size:8pt;letter-spacing:1.5px;font-weight:800}
    h1{font-size:22pt}h2{margin:10px 0;font-size:16pt;line-height:1.25}h3{margin:0 0 12px;padding:0 0 8px;border-bottom:1px solid var(--line);font-size:11.5pt;color:#263750}
    p{margin:7px 0}
    .detail-group{margin:15px 0;padding:15px 17px;border:1px solid var(--line);border-radius:10px;background:#fff;break-inside:avoid;page-break-inside:avoid}
    dl{display:grid;grid-template-columns:1fr 1fr;gap:0 22px;margin:0}
    dl>div{display:grid;grid-template-columns:minmax(105px,.85fr) 1.15fr;gap:9px;align-items:start;padding:7px 0;border-bottom:1px solid #edf0f4;break-inside:avoid}
    dt{color:var(--muted);font-size:9pt}dd{margin:0;color:var(--ink);font-weight:700;overflow-wrap:anywhere}
    .setup-gallery,.car-photo-gallery,.car-detail-photos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:12px 0}
    .setup-gallery img,.car-photo-gallery img,.car-detail-photos img{display:block;width:100%;max-width:100%;max-height:190px;aspect-ratio:4/3;object-fit:contain;border:1px solid var(--line);border-radius:8px;background:#f7f8fa}
    .history-entry{padding:8px 0;border-bottom:1px solid var(--line)}
    .compare-table{display:block;width:100%}
    .compare-row{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:12px;padding:9px 10px;border-bottom:1px solid var(--line);break-inside:avoid}
    .compare-row:nth-child(odd):not(.compare-head){background:#f7f9fb}
    .compare-head{background:#edf2e6;color:#263750;font-weight:800;border-radius:6px}
    .dialog-subtitle{color:var(--muted)}
    .print-car-layout{margin:18px 0 22px;padding:16px;border:1px solid var(--line);border-radius:12px;background:#f8fafc;break-inside:avoid;page-break-inside:avoid}
    .print-car-heading{display:grid;gap:4px;margin-bottom:12px}.print-car-heading strong{font-size:12pt}.print-car-heading small{color:var(--muted);font-size:8pt}
    .print-car-grid{display:grid;grid-template-columns:1fr 1.1fr 1fr;gap:12px;align-items:center}
    .print-car-drawing svg{display:block;width:100%;max-height:390px}
    .print-callout{display:grid;gap:7px;padding:11px;border:1px solid #dce3ec;border-radius:9px;background:#fff;font-size:8pt;overflow-wrap:anywhere}
    .print-callout b{color:#587b28;font-size:8pt;letter-spacing:.4px}.print-callout strong{font-size:8.5pt}.print-callout span{color:#63718a}
    .print-layout-foot{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;padding-top:10px;border-top:1px solid var(--line);font-size:8pt;color:var(--muted)}
    .print-layout-foot b{display:block;margin-bottom:3px;color:#263750}
    .print-footer{display:flex;justify-content:space-between;gap:15px;margin-top:25px;padding-top:10px;border-top:1px solid var(--line);color:var(--muted);font-size:8pt}
    .item-sub,.muted{color:var(--muted)}
    button,a.button{display:none!important}
    @page{size:A4;margin:13mm}
    @media print{
      html{background:#fff}body{max-width:none;margin:0;padding:0}
      .detail-group{break-inside:avoid;page-break-inside:avoid}
      h3{break-after:avoid}
      .print-footer{position:fixed;bottom:0;left:0;right:0}
      *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    }
    @media(max-width:650px){body{padding:0 16px}.print-meta{font-size:7pt}dl{grid-template-columns:1fr}.compare-row{grid-template-columns:1fr 1fr 1fr}}
  `;
  const printWindow=window.open('','_blank');
  if(!printWindow){showToast('Autorise les fenêtres pop-up pour imprimer la fiche.');return;}
  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapeHtml(heading)+' — RC SETUP</title><style>'+styles+'</style></head><body><header class="print-masthead"><div class="print-brand"><span class="print-mark">RC</span><span><small>GARAGE NUMÉRIQUE</small><strong>SETUP.</strong></span></div><div class="print-meta">FICHE TECHNIQUE<br>Éditée le '+escapeHtml(dateLabel)+'</div></header><main><h1 class="print-title">'+escapeHtml(heading)+'</h1><p class="print-subtitle">'+escapeHtml(subtitle)+'</p>'+setupDiagram+printable.innerHTML+'</main><footer class="print-footer"><span>RC SETUP · Carnet de réglages radio-commandés</span><span>Document personnel · '+escapeHtml(dateLabel)+'</span></footer></body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>{printWindow.print();},500);
}

function compareSetups(){
  const a=state.setups.find(s=>s.id===document.getElementById('compareSetupA')?.value),b=state.setups.find(s=>s.id===document.getElementById('compareSetupB')?.value);
  if(!a||!b){showToast('Sélectionne deux setups à comparer.');return;}if(a.id===b.id){showToast('Choisis deux setups différents.');return;}
  const carA=getCarById(a.carId),carB=getCarById(b.carId),trackA=getTrackById(a.trackId),trackB=getTrackById(b.trackId);
  const fields=[...new Set(SETUP_FIELDS)].filter(k=>String(a[k]??'')!==String(b[k]??'')&&(a[k]||b[k]));
  const label=k=>k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase()).replace(/esc/gi,'ESC').replace(/radio/gi,'Radio').replace(/front/gi,'avant').replace(/rear/gi,'arrière');
  const content=document.getElementById('setupDetails');
  content.innerHTML=`<div class="pdf-action-banner"><div><strong>Exporter cette comparaison en PDF</strong><span>Fiche A4 avec les différences et les chronos.</span></div><button class="button button-primary pdf-main-button" id="printCompareSetupTop" type="button">⇩ Imprimer / PDF</button></div><span class="kicker">COMPARAISON DE CONFIGURATIONS</span><h2>${escapeHtml(carA?.name||'Voiture')} ↔ ${escapeHtml(carB?.name||'Voiture')}</h2><p class="dialog-subtitle">${escapeHtml(trackA?.name||'Piste')} · ${escapeHtml(a.sessionDate||formatDate(a.createdAt))} <span class="arrow">vs</span> ${escapeHtml(trackB?.name||'Piste')} · ${escapeHtml(b.sessionDate||formatDate(b.createdAt))}</p><section class="detail-group"><h3>Chronos</h3><dl><div><dt>Setup A</dt><dd>${escapeHtml(a.lapTime||'—')}</dd></div><div><dt>Setup B</dt><dd>${escapeHtml(b.lapTime||'—')}</dd></div></dl></section><section class="detail-group"><h3>Réglages différents (${fields.length})</h3>${fields.length?`<div class="compare-table"><div class="compare-row compare-head"><strong>Réglage</strong><strong>Setup A</strong><strong>Setup B</strong></div>${fields.map(k=>`<div class="compare-row"><span>${escapeHtml(label(k))}</span><span>${escapeHtml(a[k]||'—')}</span><span>${escapeHtml(b[k]||'—')}</span></div>`).join('')}</div>`:'<p class="item-sub">Les réglages enregistrés sont identiques.</p>'}</section><div class="item-actions detail-actions"><button class="button button-primary" id="printSetupDetails" type="button">Imprimer / PDF</button></div>`;
  content.querySelector('#printSetupDetails').addEventListener('click',printSetupDetails);
  content.querySelector('#printCompareSetupTop').addEventListener('click',printSetupDetails);
  document.getElementById('setupDialog').showModal();
}



function setTracksideMode(enabled){
  document.body.classList.toggle('trackside-mode',enabled);
  const button=document.getElementById('tracksideModeButton');
  if(button){button.setAttribute('aria-pressed',String(enabled));button.textContent=enabled?'Quitter mode piste':'Mode piste';}
  try{localStorage.setItem('rc-setup-trackside-mode',enabled?'1':'0');}catch{}
}

function parsePositiveNumber(value){const n=Number(String(value||'').replace(',','.'));return Number.isFinite(n)&&n>0?n:null;}
function calculateGearing(){
  const pinion=parsePositiveNumber(document.getElementById('calcPinion')?.value),spur=parsePositiveNumber(document.getElementById('calcSpur')?.value),internal=parsePositiveNumber(document.getElementById('calcInternal')?.value),diameter=parsePositiveNumber(document.getElementById('calcDiameter')?.value);
  const result=document.getElementById('gearingResult');if(!result)return;
  if(!pinion||!spur){result.textContent='Renseigne le nombre de dents du pignon et de la couronne.';return;}
  const ratio=spur/pinion,final=internal?ratio*internal:null,rollout=diameter?Math.PI*diameter/ratio:null;
  result.innerHTML='<strong>Rapport externe : '+ratio.toFixed(3)+'</strong>'+(final?'<br>Rapport total : '+final.toFixed(3):'')+(rollout?'<br>Développement théorique : '+rollout.toFixed(1)+' mm par tour moteur (diamètre de roue renseigné).':'')+'<p class="item-sub">Un rapport externe plus élevé tire plus court. Le rapport total nécessite le rapport interne exact du véhicule.</p>';
}
function runSetupDiagnosis(){
  const symptom=document.getElementById('diagnosisSymptom')?.value,grip=document.getElementById('diagnosisGrip')?.value,drive=document.getElementById('diagnosisDrive')?.value;
  const output=document.getElementById('diagnosisResult');if(!output)return;
  if(!symptom){output.textContent='Choisis le comportement à corriger pour afficher des pistes de réglage.';return;}
  const advice={
    understeer_entry:['Vérifie d’abord le train avant : pneus avant, pincement/ouverture, chasse et liberté de direction.','Teste une seule modification à la fois, par exemple un peu plus de pincement avant ou un avant légèrement plus souple.'],
    understeer_mid:['Contrôle le roulis et le grip latéral : ressorts, huile/pistons, hauteur de caisse et différentiel avant si présent.','Évite de modifier simultanément les deux trains ; note le ressenti au milieu du virage.'],
    understeer_exit:['Contrôle la motricité et la répartition de grip à la remise des gaz.','Adoucis progressivement la commande des gaz à la radio/ESC et vérifie le différentiel ou slipper selon l’architecture.'],
    oversteer_entry:['Vérifie la stabilité au freinage et au lever de gaz, puis le pincement arrière et l’état des pneus.','Teste une petite augmentation de stabilité arrière avant de toucher à la puissance moteur.'],
    oversteer_mid:['Vérifie le grip arrière latéral, les pneus, la hauteur arrière et la progressivité de la suspension.','Sur faible grip, privilégie des changements modestes et conserve une motricité régulière.'],
    oversteer_exit:['Vérifie pneus arrière, slipper/différentiel et progressivité des gaz.','Réduis d’abord l’agressivité de l’accélération (punch, expo gaz) avant de changer plusieurs paramètres mécaniques.'],
    traction:['Contrôle pneus/inserts, transfert de charge et différentiel ou slipper.','Sur faible grip, évite de rendre l’accélération trop brutale ; compare ensuite un seul réglage de suspension.'],
    instability:['Contrôle hauteur de caisse, droop, amortisseurs, jeu mécanique et répartition des masses.','Vérifie aussi que les pneus sont propres et adaptés à la surface avant d’intervenir sur la géométrie.']
  };
  const lines=advice[symptom]||[];
  const gripText=grip==='low'?'Contexte faible grip : recherche une voiture progressive et évite les changements extrêmes.':grip==='high'?'Contexte fort grip : vérifie que la voiture ne roule pas excessivement sur ses suspensions.':'Adapte les essais à l’adhérence réelle de la piste.';
  output.innerHTML='<strong>Pistes à tester — '+(drive==='2wd'?'2WD':drive==='4wd'?'4WD':'architecture non précisée')+'</strong><ol>'+lines.map(x=>'<li>'+x+'</li>').join('')+'</ol><p class="item-sub">'+gripText+'</p><p class="item-sub">Ce sont des pistes de diagnostic, pas une recette universelle : note le réglage de départ et ne change qu’un paramètre à la fois.</p>';
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

function normalizeDriveType(value) {
  const drive=String(value||'').toLocaleLowerCase('fr').trim();
  if (/2wd|4x2|propulsion|traction avant/.test(drive)) return '2WD';
  if (/4wd|4x4/.test(drive)) return '4WD';
  return drive ? 'Autre' : '';
}
function inferDifferentialCount(car) {
  const drive=normalizeDriveType(car?.drive);
  if (drive==='2WD') return 1;
  if (/1\s*\/\s*8/.test(String(car?.scale||''))) return 3;
  if (drive==='4WD') return 2;
  return 1;
}
function getCarDifferentialCount(car) {
  const count=Number(car?.diffCount);
  return Number.isInteger(count)&&count>=1&&count<=3?count:inferDifferentialCount(car);
}
function openCarEditor(id) {
  const car=getCarById(id);if(!car)return;
  const form=document.getElementById('carForm');editingCarId=id;
  for(const name of ['name','brand','scale','drive','type','notes','engineEquipment','escEquipment','servoEquipment','tiresEquipment','shocksEquipment']){const field=form.elements.namedItem(name);if(field)field.value=name==='drive'?normalizeDriveType(car[name]):(car[name]||'');}const diffField=form.elements.namedItem('diffCount');if(diffField)diffField.value=car.diffCount?String(car.diffCount):'auto';
  pendingCarPhotos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  renderCarPhotoPreviews();
  form.querySelector('h2').textContent='Modifier la voiture';
  form.querySelector('button[type="submit"]').textContent='Enregistrer les modifications';
  form.classList.remove('hidden');form.scrollIntoView({behavior:'smooth',block:'start'});
}
function resetCarEditor() {
  editingCarId=null;pendingCarPhotos=[];
  const form=document.getElementById('carForm');if(!form)return;
  const heading=form.querySelector('h2');if(heading)heading.textContent='Ajouter une autre voiture';
  const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer';
  renderCarPhotoPreviews();
}
function handleCarSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'brand', 'scale', 'drive', 'type', 'diffCount', 'notes', 'engineEquipment', 'escEquipment', 'servoEquipment', 'tiresEquipment', 'shocksEquipment', 'historyPart', 'historyAction', 'historyNotes', 'historyDate']);
  if (!data.name) return;
  data.drive=normalizeDriveType(data.drive);data.diffCount=data.diffCount==='auto'?inferDifferentialCount(data):Math.min(3,Math.max(1,Number(data.diffCount)||inferDifferentialCount(data)));
  if(editingCarId){
    const car=getCarById(editingCarId);if(!car){showToast('Voiture introuvable.');return;}
    const previous={...car};
    const now=new Date().toISOString(), history=[...(car.partsHistory||[])];
    for(const [key,label] of [['engineEquipment','Moteur'],['escEquipment','Variateur / ESC'],['servoEquipment','Servo'],['tiresEquipment','Pneus'],['shocksEquipment','Amortisseurs']]){
      const before=String(car[key]||'').trim(),after=String(data[key]||'').trim();
      if(before!==after&&(before||after))history.unshift({date:now.slice(0,10),part:label,action:before?'Remplacement / modification':'Ajout',notes:`${before||'Non renseigné'} → ${after||'Retiré'}`});
    }
    if(data.historyPart.trim())history.unshift({date:data.historyDate||now.slice(0,10),part:data.historyPart.trim(),action:data.historyAction||'Remplacement',notes:data.historyNotes.trim()});
    delete data.historyPart;delete data.historyAction;delete data.historyNotes;delete data.historyDate;
    Object.assign(car,data,{partsHistory:history.slice(0,100),photos:[...pendingCarPhotos],updatedAt:now});
    if(!saveState()){Object.assign(car,previous);return;}
    showToast('Fiche voiture, équipements et historique mis à jour.');
  }else{
    const now=new Date().toISOString(),partsHistory=[];
    if(data.historyPart.trim())partsHistory.push({date:data.historyDate||now.slice(0,10),part:data.historyPart.trim(),action:data.historyAction||'Ajout',notes:data.historyNotes.trim()});
    delete data.historyPart;delete data.historyAction;delete data.historyNotes;delete data.historyDate;
    state.cars.unshift({ id: uid('car'), ...data, partsHistory, photos:[...pendingCarPhotos], createdAt: now });
    if(!saveState()){state.cars.shift();return;}
    showToast('Voiture personnalisée ajoutée au garage.');
  }
  editingCarId=null;pendingCarPhotos=[];renderCarPhotoPreviews();renderAll();event.target.reset();event.target.classList.add('hidden');resetCarEditor();
}
function openTrackEditor(id) {
  const track = getTrackById(id);
  if (!track) return;
  const form = document.getElementById('trackForm');
  editingTrackId = id;
  for (const name of ['name', 'surface', 'grip', 'type', 'location', 'details']) {
    const field = form.elements.namedItem(name);
    if (field) field.value = track[name] || '';
  }
  form.querySelector('button[type="submit"]').textContent = 'Enregistrer les modifications';
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function handleTrackSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'surface', 'grip', 'type', 'location', 'details']);
  if (!data.name) return;
  if (editingTrackId) {
    const index = state.tracks.findIndex(track => track.id === editingTrackId);
    if (index < 0) { showToast('Piste introuvable.'); return; }
    const previous = state.tracks[index];
    state.tracks[index] = { ...previous, ...data, updatedAt: new Date().toISOString() };
    if (!saveState()) { state.tracks[index] = previous; return; }
    showToast('Piste mise à jour.');
  } else {
    state.tracks.unshift({ id: uid('track'), ...data, createdAt: new Date().toISOString() });
    if (!saveState()) { state.tracks.shift(); return; }
    showToast('Piste ajoutée à ton carnet.');
  }
  editingTrackId = null;
  renderAll();
  event.target.reset();
  event.target.classList.add('hidden');
  event.target.querySelector('button[type="submit"]').textContent = 'Enregistrer';
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
function renderCarPhotoPreviews() {
  const container=document.getElementById('carPhotoPreview');if(!container)return;
  container.replaceChildren();
  pendingCarPhotos.forEach((photo,index)=>{
    const tile=document.createElement('div');tile.className='photo-preview-tile';
    tile.innerHTML=`<img src="${photo}" alt="Aperçu de la photo ${index+1} de la voiture"><button type="button" class="photo-remove" aria-label="Retirer la photo ${index+1}">×</button>`;
    tile.querySelector('.photo-remove').addEventListener('click',()=>{pendingCarPhotos.splice(index,1);renderCarPhotoPreviews();});
    container.append(tile);
  });
  const count=document.getElementById('carPhotoCount');if(count)count.textContent=`${pendingCarPhotos.length}/3 photos`;
}
async function handleCarPhotoSelection(event) {
  const files=Array.from(event.target.files||[]);event.target.value='';
  const available=3-pendingCarPhotos.length;
  if(available<=0){showToast('Maximum 3 photos par voiture.');return;}
  if(files.length>available)showToast('Maximum 3 photos par voiture : seules les premières seront ajoutées.');
  for(const file of files.slice(0,available)){
    try{pendingCarPhotos.push(await compressPhoto(file));renderCarPhotoPreviews();}
    catch(error){showToast(error.message||'Impossible de charger cette photo.');}
  }
}

function handleSetupSubmit(event){
  event.preventDefault();const data=formValues(event.target,['carId','trackId',...SETUP_FIELDS]);for(const name of SETUP_FIELDS){if(!event.target.elements.namedItem(name))delete data[name];}data.setupName=String(event.target.elements.namedItem('setupName')?.value||'').trim();
  if(!data.carId||!data.trackId){showToast('Choisis une voiture et une piste.');return;}const now=new Date().toISOString();
  if(editingSetupId){const index=state.setups.findIndex(s=>s.id===editingSetupId);if(index<0){showToast('Setup introuvable.');return;}const previous=state.setups[index];const history=[...(previous.history||[]),{savedAt:now,data:{...previous,photos:[...(previous.photos||[])],history:[]}}].slice(-20);state.setups[index]={...previous,...data,photos:[...pendingPhotos],history,updatedAt:now};if(!saveState()){state.setups[index]=previous;return;}showToast('Setup mis à jour. Ancienne version conservée dans l’historique.');}
  else{const source=setupDraftSource;const created={...(source||{}),id:uid('setup'),...data,photos:[...pendingPhotos],favorite:false,history:[],createdAt:now,updatedAt:now};state.setups.unshift(created);if(!saveState()){state.setups.shift();return;}showToast(source?'Copie du setup enregistrée.':'Setup enregistré. Bon run !');}
  editingSetupId=null;setupDraftSource=null;pendingPhotos=[];renderPhotoPreviews();renderAll();event.target.reset();event.target.classList.add('hidden');event.target.querySelector('button[type="submit"]').textContent='Enregistrer le setup';
}

function showCarSetups(id) {
  setView('setups');
  const filter=document.getElementById('setupCarFilter');
  if(filter){filter.value=id;renderSetups();}
}
function removeCar(id) {
  const car = getCarById(id);
  if (!car || !confirm(`Supprimer « ${car.name} » et les setups associés ?`)) return;
  const previousCars=state.cars,previousSetups=state.setups;
  state.cars = state.cars.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.carId !== id);
  if(!saveState()){state.cars=previousCars;state.setups=previousSetups;return;}
  renderAll(); showToast('Voiture et setups associés supprimés.');
}
function removeTrack(id) {
  const track = getTrackById(id);
  if (!track || !confirm(`Supprimer « ${track.name} » et les setups associés ?`)) return;
  const previousTracks=state.tracks,previousSetups=state.setups;
  state.tracks = state.tracks.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.trackId !== id);
  if(!saveState()){state.tracks=previousTracks;state.setups=previousSetups;return;}
  renderAll(); showToast('Piste et setups associés supprimés.');
}
function removeSetup(id) {
  if (!confirm('Supprimer ce setup ?')) return;
  const previousSetups=state.setups;
  state.setups = state.setups.filter((setup) => setup.id !== id);
  if(!saveState()){state.setups=previousSetups;return;}
  renderAll(); showToast('Setup supprimé.');
}

function showSetup(id) {
  const setup = state.setups.find((entry) => entry.id === id);
  if (!setup) return;
  const car = getCarById(setup.carId);
  const track = getTrackById(setup.trackId);
  const groups = [
    ['Session', [['Date', setup.sessionDate || formatDate(setup.createdAt)], ['Température', setup.temperature], ['Surface',setup.surface||track?.surface], ['Adhérence',setup.grip||track?.grip], ['Météo', setup.weather], ['Objectif / ressenti', setup.goal], ['Notes de session', setup.sessionNotes]]],
    ['Carnet de test', [['Nombre de tours', setup.runLaps], ['Meilleur tour', setup.lapTime], ['Moyenne au tour', setup.averageLapTime], ['Régularité', setup.lapConsistency], ['Entrée de virage', setup.cornerEntry], ['Milieu de virage', setup.cornerMid], ['Sortie de virage', setup.cornerExit], ['Motricité', setup.tractionLevel], ['Stabilité', setup.stabilityLevel], ['Modifications testées', setup.testedChanges], ['Bilan du test', setup.testConclusion], ['Prochain essai', setup.nextTest]]],
    ['Pneus & roues', [['Pneus avant', setup.frontTires], ['Pneus arrière', setup.rearTires], ['Inserts avant', setup.frontInserts], ['Inserts arrière', setup.rearInserts], ['Inserts (ancienne fiche)', setup.inserts], ['Traitement pneus', setup.tireTreatment], ['État des pneus', setup.tireCondition], ['Notes pneus & inserts', setup.tiresNotes]]],
    ['Suspension & géométrie', [['Huile amortisseur avant', setup.frontShocks], ['Piston amortisseur avant', setup.frontPiston], ['Ressort avant', setup.frontSpring], ['Huile amortisseur arrière', setup.rearShocks], ['Piston amortisseur arrière', setup.rearPiston], ['Ressort arrière', setup.rearSpring], ['Tour d’amortisseur avant',setup.frontShockTower], ['Position amortisseur avant',setup.frontShockPosition], ['Tour d’amortisseur arrière',setup.rearShockTower], ['Position amortisseur arrière',setup.rearShockPosition], ['Coupelle sous amortisseur avant', setup.frontShockCupPosition], ['Coupelle sous amortisseur arrière', setup.rearShockCupPosition], ['Anciens ressorts (setup existant)', setup.springs], ['Hauteur de caisse avant', setup.frontRideHeight], ['Hauteur de caisse arrière', setup.rearRideHeight], ['Hauteur de caisse (ancienne fiche)', setup.rideHeight], ['Carrossage avant', setup.frontCamber], ['Carrossage arrière', setup.rearCamber], ['Pincement / ouverture avant', setup.frontToe], ['Pincement / ouverture arrière', setup.rearToe], ['Chasse avant', setup.frontCaster], ['Géométrie de direction (Ackermann)', setup.ackermann], ['Barre antiroulis avant', setup.frontAntiRollBar], ['Barre antiroulis arrière', setup.rearAntiRollBar], ['Débattement avant / droop', setup.frontDroop], ['Débattement arrière / droop', setup.rearDroop], ['Carrossage (ancienne fiche)', setup.camber], ['Pincement / ouverture (ancienne fiche)', setup.toe], ['Chasse / Ackermann (ancienne fiche)', setup.casterAckermann], ['Barres antiroulis (ancienne fiche)', setup.antiRollBars], ['Débattement / droop (ancienne fiche)', setup.droop], ['Lest avant', setup.frontBallastWeight], ['Lest arrière', setup.rearBallastWeight], ['Lest latéral', setup.lateralBallastWeight], ['Notes suspension & géométrie', setup.suspensionNotes]]],
    ['Transmission', [['Rapport / pignon-couronne', setup.gearing], ['Différentiel avant – configuration', setup.frontDiffType], ['Différentiel avant – huile', setup.frontDiffOil], ['Différentiel avant – graisse', setup.frontDiffGrease], ['Différentiel avant à billes – serrage', setup.frontBallDiffTightness], ['Différentiel central – configuration', setup.centerDiffType], ['Différentiel central – huile', setup.centerDiffOil], ['Différentiel central – graisse', setup.centerDiffGrease], ['Différentiel central à billes – serrage', setup.centerBallDiffTightness], ['Différentiel arrière – configuration', setup.rearDiffType], ['Différentiel arrière – huile', setup.rearDiffOil], ['Différentiel arrière – graisse', setup.rearDiffGrease], ['Différentiel arrière à billes – serrage', setup.rearBallDiffTightness], ['Slipper', setup.slipperPresence], ['Réglage du slipper – serrage de l’écrou', setup.slipper], ['Ancien type de différentiel', setup.diffType], ['Ancien différentiel à billes – serrage', setup.ballDiff], ['Moteur', setup.motor], ['Notes transmission', setup.transmissionNotes]]],
    ['Réglages variateur (ESC)', [['Variateur / modèle', setup.escModel], ['Mode de fonctionnement', setup.escMode], ['Timing moteur', setup.escMotorTiming], ['Boost / timing dynamique', setup.escBoost], ['Turbo timing', setup.escTurbo], ['Délai turbo', setup.escTurboDelay], ['Punch / puissance initiale', setup.escPunch], ['Force de freinage max', setup.escBrake], ['Drag brake', setup.escDragBrake], ['Fréquence freinage', setup.escBrakeFrequency], ['Fréquence accélération PWM', setup.escThrottleFrequency], ['Neutral range', setup.escNeutralRange], ['Cutoff batterie', setup.escCutoff], ['Tension BEC', setup.escBec], ['Protection thermique', setup.escThermal], ['Limitation marche arrière', setup.escReverse], ['Rampe de freinage', setup.escBrakeRate], ['Rampe accélération', setup.escThrottleRate], ['Autres paramètres ESC', setup.electronicsNotes], ['Notes variateur', setup.escSectionNotes]]],
    ['Réglages radio', [['Radio / émetteur', setup.txModel], ['Dual rate direction', setup.radioSteeringDualRate], ['Expo direction', setup.radioSteeringExpo], ['EPA direction', setup.radioEPA], ['Trim direction', setup.radioSteeringTrim], ['Subtrim direction', setup.radioSubtrim], ['Reverse direction', setup.radioSteeringReverse], ['Expo accélérateur', setup.radioThrottleExpo], ['EPA accélérateur', setup.radioThrottleEPA], ['Trim accélérateur / neutre', setup.radioThrottleTrim], ['Reverse accélérateur', setup.radioThrottleReverse], ['EPA frein', setup.radioBrakeEPA], ['Expo frein', setup.radioBrakeExpo], ['Failsafe', setup.radioFailsafe], ['Autres réglages radio', setup.radio], ['Notes réglages radio', setup.radioSectionNotes]]],
    ['Équipements radio', [['Récepteur / gyro', setup.rxModel], ['Servo de direction', setup.servoSteering], ['Notes équipements radio', setup.radioEquipmentNotes]]],
    ['Repères sur les photos', [['Annotations / positions repérées',setup.photoNotes]]],
    ['Bilan de session', [['Meilleur temps au tour', setup.lapTime], ['Ressenti général', setup.rating], ['Notes & prochaines modifications', setup.notes]]]
  ];
  const content = document.getElementById('setupDetails');
  const photoSection = setup.photos?.length ? `<section class="detail-group"><h3>Photos du setup</h3><div class="setup-gallery">${setup.photos.map((photo, index) => `<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index + 1} du setup" loading="lazy"></a>`).join('')}</div></section>` : '';
  content.innerHTML = `<div class="pdf-action-banner"><div><strong>Ta fiche prête à imprimer ou enregistrer</strong><span>PDF A4 avec schéma du buggy et réglages organisés.</span></div><button class="button button-primary pdf-main-button" id="detailPrintSetupTop" type="button">⇩ Imprimer / PDF</button></div><span class="kicker">FICHE DE RÉGLAGES</span><h2>${escapeHtml(setup.setupName ? setup.setupName+' · ' : '')}${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h2><p class="dialog-subtitle">${escapeHtml(setup.surface||track?.surface||'')} ${(setup.grip||track?.grip)?'· '+escapeHtml(setup.grip||track?.grip):''} ${setup.weather ? '· '+escapeHtml(setup.weather) : ''} ${setup.temperature ? `· ${escapeHtml(setup.temperature)}` : ''}</p>` + photoSection + groups.map(([title, fields]) => {
    const filled = fields.filter(([, value]) => value);
    if (!filled.length) return '';
    return `<section class="detail-group"><h3>${escapeHtml(title)}</h3><dl>${filled.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl></section>`;
  }).join('');
  const history=Array.isArray(setup.history)?setup.history:[];
  content.insertAdjacentHTML('beforeend',`<section class="detail-group"><h3>Historique des modifications</h3>${history.length?history.map((h,index)=>`<div class="history-entry"><span>${escapeHtml(new Date(h.savedAt).toLocaleString('fr-FR'))}</span><button class="button button-quiet restore-version" data-index="${index}" type="button">Restaurer cette version</button></div>`).join(''):'<p class="item-sub">Aucune modification enregistrée pour le moment.</p>'}</section><div class="item-actions detail-actions"><button class="button button-primary" id="detailEditSetup" type="button">Modifier ce setup</button><button class="button button-soft" id="detailExportSetup" type="button">Exporter ce setup</button><button class="button button-soft" id="detailPrintSetup" type="button">Imprimer / PDF</button><button class="button button-soft" id="detailDuplicateSetup" type="button">Dupliquer</button><button class="button button-soft" id="detailFavoriteSetup" type="button">${setup.favorite?'★ Retirer des favoris':'☆ Ajouter aux favoris'}</button></div>`);
  content.querySelectorAll('.restore-version').forEach(button=>button.addEventListener('click',()=>restoreSetupVersion(id,Number(button.dataset.index))));
  content.querySelector('#detailEditSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();openSetupEditor(id);});
  content.querySelector('#detailExportSetup').addEventListener('click',()=>exportSingleSetup(id));
  content.querySelector('#detailPrintSetup').addEventListener('click',printSetupDetails);
  content.querySelector('#detailPrintSetupTop').addEventListener('click',printSetupDetails);
  content.querySelector('#detailDuplicateSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();openSetupEditor(id,true);});
  content.querySelector('#detailFavoriteSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();toggleSetupFavorite(id);});
  document.getElementById('setupDialog').showModal();
}


function downloadJsonFile(data,filename){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();URL.revokeObjectURL(url);
}
function exportSingleSetup(id){
  const setup=state.setups.find(s=>s.id===id);if(!setup)return;
  const payload={format:'rc-setup-single',version:1,exportedAt:new Date().toISOString(),car:getCarById(setup.carId)||null,track:getTrackById(setup.trackId)||null,setup:{...setup}};
  const safe=(setup.setupName||getCarById(setup.carId)?.name||'setup').replace(/[^a-z0-9_-]+/gi,'-').replace(/^-|-$/g,'').slice(0,48)||'setup';
  downloadJsonFile(payload,'rc-setup-'+safe+'.json');showToast('Setup individuel exporté, prêt à être partagé.');
}
function importSingleSetup(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=event=>{
    try{
      const payload=JSON.parse(String(event.target?.result||''));
      if(payload?.format!=='rc-setup-single'||!payload.setup||!payload.car?.name||!payload.track?.name)throw new Error('Format de setup partagé invalide');
      const carExisting=state.cars.find(c=>c.name===payload.car.name&&String(c.brand||'')===String(payload.car.brand||''));
      const trackExisting=state.tracks.find(t=>t.name===payload.track.name&&String(t.surface||'')===String(payload.track.surface||''));
      const car=carExisting||{...payload.car,id:uid('car'),createdAt:new Date().toISOString()};
      const track=trackExisting||{...payload.track,id:uid('track'),createdAt:new Date().toISOString()};
      const setup={...payload.setup,id:uid('setup'),carId:car.id,trackId:track.id,photos:Array.isArray(payload.setup.photos)?payload.setup.photos:[],history:[],favorite:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      if(!confirm('Importer ce setup dans ton garage sans remplacer tes voitures, pistes, setups ou ton inventaire ?'))return;
      if(!carExisting)state.cars.unshift(car);
      if(!trackExisting)state.tracks.unshift(track);
      state.setups.unshift(setup);
      if(!saveState()){state.setups.shift();if(!carExisting)state.cars=state.cars.filter(c=>c.id!==car.id);if(!trackExisting)state.tracks=state.tracks.filter(t=>t.id!==track.id);return;}
      renderAll();showToast('Setup importé dans ton garage sans écraser tes données.');
    }catch(error){console.error(error);showToast('Fichier de setup invalide ou incompatible.');}
  };
  reader.readAsText(file);
}

function exportJson() {
  const backup = { ...state, materials: window.RCSetupMaterials?.exportData?.() || [], exportedAt: new Date().toISOString(), version: 4 };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
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
      if (!confirm('L’import remplacera les voitures, pistes, setups et, si présents, les articles personnels de la bibliothèque. Continuer ?')) return;
      const previous={cars:state.cars,tracks:state.tracks,setups:state.setups};
      state.cars=parsed.cars;state.tracks=parsed.tracks;state.setups=parsed.setups.map(setup=>({...setup,photos:Array.isArray(setup.photos)?setup.photos:[],history:Array.isArray(setup.history)?setup.history:[]}));
      if(!saveState()){Object.assign(state,previous);return;}
      if(Array.isArray(parsed.materials)&&window.RCSetupMaterials&&!window.RCSetupMaterials.importData(parsed.materials)){Object.assign(state,previous);saveState();showToast('Import matériel impossible : les données précédentes ont été conservées.');return;}
      renderAll();showToast(Array.isArray(parsed.materials)?'Sauvegarde complète importée.':'Sauvegarde importée. La bibliothèque personnelle actuelle a été conservée.');
    } catch (error) {
      console.error(error); showToast('Fichier JSON invalide ou incompatible.');
    }
  };
  reader.readAsText(file);
}
function registerServiceWorker() {
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js?v=91').catch((error) => console.error('Échec du service worker :', error)));
}
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredPrompt = event; installButton.classList.remove('hidden'); });
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) { showToast('Sur iPhone : Safari → Partager → Sur l’écran d’accueil.'); return; }
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installButton.classList.add('hidden');
  });
}

document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('[data-view]:not(.nav-item)').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.add-entry').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.form).classList.toggle('hidden')));
document.querySelectorAll('[data-open-form]').forEach((button) => button.addEventListener('click', () => {
  setView(button.dataset.view);
  const form = document.getElementById(button.dataset.openForm);
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
document.querySelectorAll('[data-shortcut-view]').forEach(button=>button.addEventListener('click',()=>{
  const view=button.dataset.shortcutView;
  const targetId=button.dataset.shortcutTarget;
  setView(view);
  if(button.dataset.shortcutOpen){
    const form=document.getElementById(button.dataset.shortcutOpen);
    if(form)form.classList.remove('hidden');
  }
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const target=document.getElementById(targetId);
    if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
  }));
}));
document.querySelectorAll('[data-go-view]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); setView(button.dataset.goView); }));
document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('carPhotosInput')?.addEventListener('change',handleCarPhotoSelection);
document.getElementById('carForm').addEventListener('reset',()=>{editingCarId=null;pendingCarPhotos=[];setTimeout(()=>{resetCarEditor();document.getElementById('carForm')?.classList.add('hidden');},0);});
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('trackForm').addEventListener('reset', () => { editingTrackId = null; const submit=document.querySelector('#trackForm button[type=\"submit\"]'); if(submit) submit.textContent='Enregistrer'; });
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('setupForm').elements.namedItem('carId').addEventListener('change',updateVehicleSpecificFields);
['frontDiffType','centerDiffType','rearDiffType','slipperPresence'].forEach(name=>document.getElementById('setupForm').elements.namedItem(name).addEventListener('change',updateVehicleSpecificFields));
document.getElementById('setupSearch')?.addEventListener('input',renderSetups);
['setupCarFilter','setupTrackFilter','setupSurfaceFilter','setupGripFilter','setupDateFrom','setupDateTo'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderSetups));
document.getElementById('tracksideModeButton')?.addEventListener('click',()=>{const enabled=!document.body.classList.contains('trackside-mode');setTracksideMode(enabled);if(enabled)setView('setups');});
try{setTracksideMode(localStorage.getItem('rc-setup-trackside-mode')==='1');}catch{}
document.getElementById('compareSetupsButton')?.addEventListener('click',compareSetups);
document.getElementById('calculateGearingButton')?.addEventListener('click',calculateGearing);
document.getElementById('diagnoseSetupButton')?.addEventListener('click',runSetupDiagnosis);
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.getElementById('importSetupInput')?.addEventListener('change', (event) => { importSingleSetup(event.target.files?.[0]); event.target.value = ''; });
document.querySelectorAll('form').forEach(form=>form.addEventListener('reset',()=>{const keepOpen=form.id==='setupForm'&&form.dataset.preserveOnReset==='true';form.dataset.preserveOnReset='false';setTimeout(()=>{if(keepOpen){skipSetupReset=false;return;}form.classList.add('hidden');if(form.id==='setupForm'){pendingPhotos=[];editingSetupId=null;setupDraftSource=null;renderPhotoPreviews();const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer le setup';}},0);}));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

renderAll();
updateVehicleSpecificFields();
setView('dashboard');
registerServiceWorker();
setupInstallPrompt();
