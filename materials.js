(() => {
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const catalog = [
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro Legacy', reference: '30112800', detail: 'ESC brushless sensored. Vérifier la révision et la compatibilité dans le catalogue constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 80A', reference: '30102700', detail: 'ESC de la gamme EzRun MAX10 G2S ; vérifier version et compatibilité.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 140A', reference: '30102500', detail: 'ESC de la gamme EzRun MAX10 G2S ; vérifier version et compatibilité.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL80 Crawler', reference: '30108002', detail: 'ESC brushless de la gamme crawler QuicRun.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun 10BL60 Sensored G2', reference: '30108001', detail: 'ESC brushless sensored ; vérifier la révision exacte.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XR10 Justock G3', reference: '30112014', detail: 'ESC compétition blinky ; vérifier les caractéristiques de la version régionale.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR8 Plus', reference: '30113309', detail: 'Famille d’ESC 1/8 ; vérifier la version et les connecteurs.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL60', reference: '30109000', detail: 'ESC brushless QuicRun ; référence/compatibilité à confirmer sur le catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4R', reference: 'V10 G4R (bobinage à préciser)', detail: 'Famille de moteurs brushless compétition ; préciser le bobinage et la taille.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4', reference: 'V10 G4 (bobinage à préciser)', detail: 'Famille de moteurs brushless ; les références dépendent du bobinage.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'EzRun 3660 / 3665 G3', reference: 'Gamme (KV à préciser)', detail: 'Moteurs brushless voiture ; choisir le KV et la taille selon le véhicule.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun AXE crawler', reference: 'Gamme AXE (KV à préciser)', detail: 'Famille moteur/ESC crawler ; vérifier le combo et le KV requis.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Programmation', name: 'LCD Program Box Pro', reference: '30502002', detail: 'Boîtier de programmation pour matériels compatibles Hobbywing.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mini Dart — avant 4x2', reference: 'U6830', detail: 'Référence exemple de pneu buggy 1/10. Vérifier gomme, montage et compatibilité avec la version de châssis.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Cactus Fusion 2 — avant 4x4', reference: 'U6895 / U6898', detail: 'Références exemple citées pour versions montées/collées ; confirmer la variante exacte.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mezzo — arrière', reference: 'U6885', detail: 'Référence exemple de pneu buggy 1/10 ; vérifier gomme et conditions de piste.', url: 'https://www.racing-cars.com/wheels-tyres' },
    ...['Mini Pin', 'Cactus', 'Cactus Fusion', 'Azami', 'Splinter', 'Fusion Slim', 'Cut Stagger', 'Shard', 'Spiral', 'Ridge Pin', 'Mini Dart', 'Mezzo'].map((name) => ({ brand: 'Schumacher', category: 'Pneus / roues', name, reference: 'Choisir profil / position / gomme', detail: 'Famille de pneus Schumacher. La référence varie selon l’échelle, la position, la gomme et la version montée ou non.', url: 'https://www.racing-cars.com/wheels-tyres' })),
    { brand: 'SRT', category: 'Servo', name: 'BH125W HV Brushless', reference: 'BH125W', detail: 'Servo HV brushless ; vérifier dimensions, couple et tension de fonctionnement.', url: 'https://www.srt-rc.com/index.php?catid=11' },
    { brand: 'SRT', category: 'Servo', name: 'BHX6 HV Brushless', reference: 'BHX6', detail: 'Servo brushless HV ; contrôler la fiche constructeur.', url: 'https://www.srt-rc.com/index.php?catid=11' },
    { brand: 'SRT', category: 'Servo', name: 'BHX2S HV Brushless', reference: 'BHX2S', detail: 'Servo brushless haute tension ; compatibilité à confirmer.', url: 'https://www.srt-rc.com/index.php?catid=11' },
    { brand: 'SRT', category: 'Servo', name: 'BHX9 HV Brushless', reference: 'BHX9', detail: 'Servo brushless HV ; vérifier encombrement et spécifications.', url: 'https://www.srt-rc.com/index.php?catid=11' },
    { brand: 'Savox', category: 'Servo', name: 'SB-2290SG', reference: 'SB-2290SG', detail: 'Servo digital HV brushless à engrenages acier ; consulter le catalogue actuel.', url: 'https://www.teamsavox.com/download/' },
    { brand: 'Savox', category: 'Servo', name: 'SB-2230SG+', reference: 'SB-2230SG+', detail: 'Servo digital HV brushless à engrenages acier ; consulter le catalogue actuel.', url: 'https://www.teamsavox.com/download/' },
    { brand: 'Savox', category: 'Servo', name: 'SB-2251SG', reference: 'SB-2251SG', detail: 'Servo brushless à engrenages acier ; vérifier spécifications et disponibilité.', url: 'https://www.teamsavox.com/download/' },
    { brand: 'XRAY', category: 'Ressort', name: 'C1.9 Springs (2)', reference: '308390', detail: 'Référence de ressort citée pour plateformes XRAY ; contrôler génération et compatibilité.', url: 'https://www.teamxray.com/eshop/' },
    { brand: 'XRAY', category: 'Huile amortisseur', name: 'Premium Silicone Oil 400 cSt, 50 ml', reference: '359248', detail: 'Huile silicone XRAY ; les unités de viscosité peuvent varier selon les marques.', url: 'https://www.teamxray.com/eshop/' },
    { brand: 'HUDY', category: 'Huile amortisseur', name: 'Premium Silicone Oil 50 000 cSt', reference: '106350', detail: 'Exemple de viscosité/référence HUDY ; choisir la viscosité correspondant au véhicule.', url: 'https://www.hudy.net/hudy_products.php?kategoria=12&katName=Oils%20%26%20Lubricants&podkategoria=125' },
    { brand: 'HUDY', category: 'Outil', name: 'Professional Allen Wrench 2.0 mm', reference: '189080', detail: 'Tournevis hexagonal 2,0 mm de la gamme HUDY.', url: 'https://www.hudy.net/' },
    { brand: 'Team Associated', category: 'Huile amortisseur', name: 'Factory Team Shock Oil 35 wt', reference: '5435', detail: 'Exemple de viscosité/référence ; confirmer disponibilité et compatibilité dans la gamme actuelle.', url: 'https://www.associatedelectrics.com/teamassociated/parts/fluids/' },
    { brand: 'Donuts Racing', category: 'Huile amortisseur', name: 'Huile silicone amortisseur', reference: 'Choisir viscosité (cSt)', detail: 'Ajouter la viscosité exacte du flacon : elle varie selon la référence et le stock du revendeur.', url: 'https://www.donuts-racing.com/huiles-silicones/99-huile-amortisseur-rc.html' }
  ];
  const root = document.getElementById('materialsApp');
  if (!root) return;
  let savedItems = loadSaved();
  let activeTab = 'catalog';

  function loadSaved() {
    try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; }
    catch { return []; }
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); return true; }
    catch { alert('Le stockage est plein. Supprime une fiche ou exporte tes données avant de continuer.'); return false; }
  }
  function esc(value) { return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c]); }
  function unique(values) { return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'fr')); }
  function allMaterials() { return [...catalog, ...savedItems]; }
  function materialLabel(item) { return `${item.brand} ${item.name}${item.reference ? ` — réf. ${item.reference}` : ''}`; }

  function render() {
    const brands = unique(allMaterials().map((item) => item.brand));
    const categories = unique(allMaterials().map((item) => item.category));
    root.innerHTML = `<div class="panel material-controls"><div class="material-tabs"><button type="button" class="material-tab ${activeTab === 'catalog' ? 'active' : ''}" data-tab="catalog">Bibliothèque (${catalog.length})</button><button type="button" class="material-tab ${activeTab === 'mine' ? 'active' : ''}" data-tab="mine">Mon matériel (${savedItems.length})</button></div><div class="material-filter-row"><input id="materialSearch" type="search" placeholder="Rechercher marque, référence, catégorie…" aria-label="Rechercher du matériel"><select id="brandFilter"><option value="">Toutes les marques</option>${brands.map((brand) => `<option>${esc(brand)}</option>`).join('')}</select><select id="categoryFilter"><option value="">Toutes les catégories</option>${categories.map((category) => `<option>${esc(category)}</option>`).join('')}</select></div><p class="catalog-note">Catalogue indicatif : les gammes complètes et références changent selon l’échelle et la génération. Vérifie les fiches fabricant avant achat.</p></div><div class="material-add-row"><button type="button" class="button button-primary" id="showMaterialForm">＋ Ajouter manuellement</button></div><form id="materialForm" class="panel material-form hidden"><h2>Ajouter à ma bibliothèque</h2><div class="material-form-grid"><label>Marque<input name="brand" required placeholder="Ex. Schumacher" /></label><label>Catégorie<select name="category"><option>Pneus / roues</option><option>Huile amortisseur</option><option>Ressort</option><option>Variateur (ESC)</option><option>Moteur</option><option>Servo</option><option>Radio / récepteur</option><option>Programmation</option><option>Outil</option><option>Châssis / pièces</option><option>Autre</option></select></label><label>Nom du produit<input name="name" required placeholder="Nom / gamme" /></label><label>Référence fabricant<input name="reference" placeholder="Référence fabricant" /></label><label>Quantité<input name="quantity" type="number" min="0" step="1" placeholder="1" /></label><label>Échelle / compatibilité<input name="compatibility" placeholder="Ex. 1/10, XB2 2024" /></label><label class="material-wide">Notes<textarea name="detail" rows="2" placeholder="Gomme, viscosité, version, compatibilité…"></textarea></label><label class="material-wide">Lien fabricant / fiche produit<input name="url" type="url" placeholder="https://…" /></label></div><div class="actions-row"><button class="button button-primary" type="submit">Enregistrer</button><button class="button button-soft" id="cancelMaterialForm" type="button">Annuler</button></div></form><div id="materialCards" class="material-grid"></div>`;
    root.querySelectorAll('.material-tab').forEach((button) => button.addEventListener('click', () => { activeTab = button.dataset.tab; render(); }));
    root.querySelector('#showMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.toggle('hidden'));
    root.querySelector('#cancelMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.add('hidden'));
    root.querySelector('#materialForm').addEventListener('submit', addItem);
    ['materialSearch', 'brandFilter', 'categoryFilter'].forEach((id) => root.querySelector(`#${id}`).addEventListener(id === 'materialSearch' ? 'input' : 'change', renderCards));
    renderCards();
  }

  function renderCards() {
    const search = root.querySelector('#materialSearch').value.trim().toLocaleLowerCase('fr');
    const brand = root.querySelector('#brandFilter').value;
    const category = root.querySelector('#categoryFilter').value;
    const source = activeTab === 'catalog' ? catalog : savedItems;
    const items = source.filter((item) => (!brand || item.brand === brand) && (!category || item.category === category) && (!search || [item.brand, item.category, item.name, item.reference, item.detail, item.compatibility].join(' ').toLocaleLowerCase('fr').includes(search)));
    const container = root.querySelector('#materialCards');
    container.innerHTML = items.length ? items.map((item) => {
      const isPersonal = savedItems.some((saved) => saved.id === item.id);
      return `<article class="material-card"><div class="material-card-head"><span class="material-category">${esc(item.category)}</span><span class="material-brand">${esc(item.brand)}</span></div><h3>${esc(item.name)}</h3><div class="material-reference">Réf. <strong>${esc(item.reference || 'non indiquée')}</strong>${item.quantity ? ` · Qté ${esc(item.quantity)}` : ''}</div>${item.compatibility ? `<p>Compatibilité : ${esc(item.compatibility)}</p>` : ''}<p>${esc(item.detail || '')}</p><div class="material-card-actions">${item.url ? `<a class="button button-soft" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Fiche / catalogue ↗</a>` : ''}${isPersonal ? `<button class="button button-quiet danger-action remove-material" data-id="${esc(item.id)}" type="button">Retirer de mon matériel</button>` : `<button class="button button-primary save-material" data-id="${esc(item.id)}" type="button">＋ Mon matériel</button>`}</div></article>`;
    }).join('') : '<div class="empty-state material-empty"><strong>Aucun matériel trouvé</strong><span>Change les filtres ou ajoute ta propre référence.</span></div>';
    container.querySelectorAll('.save-material').forEach((button) => button.addEventListener('click', () => saveCatalogItem(button.dataset.id)));
    container.querySelectorAll('.remove-material').forEach((button) => button.addEventListener('click', () => { savedItems = savedItems.filter((item) => item.id !== button.dataset.id); persist(); render(); }));
  }

  function saveCatalogItem(id) {
    const item = catalog.find((entry) => entry.id === id);
    if (!item) return;
    if (savedItems.some((saved) => saved.brand === item.brand && saved.reference === item.reference && saved.name === item.name)) { alert('Cette référence est déjà dans ton matériel.'); return; }
    savedItems.unshift({ ...item, id: `saved-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`, addedAt: new Date().toISOString() });
    if (persist()) { activeTab = 'mine'; render(); }
  }
  function addItem(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    savedItems.unshift({ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`, brand: data.brand.trim(), category: data.category, name: data.name.trim(), reference: data.reference.trim(), detail: data.detail.trim(), quantity: data.quantity, compatibility: data.compatibility.trim(), url: data.url.trim(), addedAt: new Date().toISOString() });
    if (persist()) { activeTab = 'mine'; render(); }
  }

  catalog.forEach((item) => { item.id = `${item.brand}|${item.reference}|${item.name}`; });
  render();

  // Add a library picker above setup text inputs. The selected product fills the existing field,
  // so app.js continues saving and displaying the setup without changing its storage schema.
  const setupForm = document.getElementById('setupForm');
  function attachPicker(input, categories, label) {
    if (!input || input.dataset.libraryPicker === 'true') return;
    input.dataset.libraryPicker = 'true';
    const pickerLabel = document.createElement('label');
    pickerLabel.className = 'setup-library-picker';
    pickerLabel.textContent = `Choisir ${label} dans la bibliothèque`;
    const select = document.createElement('select');
    select.innerHTML = `<option value="">Choisir une référence enregistrée…</option>` + allMaterials()
      .filter((item) => categories.includes(item.category))
      .map((item) => `<option value="${esc(materialLabel(item))}">${esc(materialLabel(item))}</option>`).join('');
    pickerLabel.append(select);
    input.closest('label').insertBefore(pickerLabel, input);
    select.addEventListener('change', () => {
      if (!select.value) return;
      input.value = select.value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  if (setupForm) {
    const setupPickers = [
      ['frontTires', ['Pneus / roues'], 'un pneu avant'], ['rearTires', ['Pneus / roues'], 'un pneu arrière'],
      ['frontShocks', ['Huile amortisseur'], 'une huile avant'], ['rearShocks', ['Huile amortisseur'], 'une huile arrière'],
      ['springs', ['Ressort'], 'un ressort'], ['tireTreatment', ['Pneus / roues'], 'un traitement / produit pneus'],
      ['motor', ['Moteur'], 'un moteur'], ['esc', ['Variateur (ESC)'], 'un variateur'], ['servoSteering', ['Servo'], 'un servo']
    ];
    setupPickers.forEach(([name, categories, label]) => attachPicker(setupForm.elements.namedItem(name), categories, label));

    const radioInput = setupForm.elements.namedItem('radio');
    const escInput = setupForm.elements.namedItem('esc');
    if (radioInput && escInput) {
      radioInput.closest('label')?.classList.add('hidden');
      escInput.closest('label')?.classList.add('hidden');
      const section = document.createElement('section');
      section.className = 'electronics-extra';
      section.innerHTML = `<div class="form-section form-section-spaced"><span class="form-number">04B</span><div><h2>Réglages détaillés radio & variateur</h2><p>Choisis les équipements de ta bibliothèque ou saisis les réglages ci-dessous.</p></div></div><div class="form-grid"><label>Radio / émetteur<input name="txModel" type="text" placeholder="Marque et modèle de l’émetteur" /></label><label>Récepteur / gyro<input name="rxModel" type="text" placeholder="Référence du récepteur ou gyro" /></label><label>Dual rate direction<input name="radioSteeringRate" type="text" placeholder="Valeur en %" /></label><label>Expo direction<input name="radioSteeringExpo" type="text" placeholder="Valeur en %" /></label><label>EPA direction gauche / droite<input name="radioSteeringEPA" type="text" placeholder="Valeurs en %" /></label><label>EPA gaz / frein<input name="radioThrottleEPA" type="text" placeholder="Valeurs en %" /></label><label>Trim / subtrim / failsafe<input name="radioTrim" type="text" placeholder="Valeurs ou remarques" /></label><label>Variateur / modèle<input name="escModel" type="text" placeholder="Marque et référence de l’ESC" /></label><label>Mode / profil moteur<input name="escMode" type="text" placeholder="Ex. blinky, modified, crawler" /></label><label>Timing / turbo / boost<input name="escTiming" type="text" placeholder="Valeurs du timing" /></label><label>Puissance / punch<input name="escPunch" type="text" placeholder="Niveau ou valeur" /></label><label>Frein / drag brake<input name="escBrake" type="text" placeholder="Force, drag brake, initial brake" /></label><label>Cutoff batterie<input name="escCutoff" type="text" placeholder="Tension ou mode LiPo" /></label><label class="full-width">Autres paramètres ESC<input name="escOther" type="text" placeholder="Marche arrière, boost, ventilation, notes…" /></label></div>`;
      const heading = [...setupForm.querySelectorAll('.form-section')].find((node) => node.textContent.includes('Transmission & électronique'));
      if (heading) heading.after(section);
      const extraFields = ['txModel', 'rxModel', 'radioSteeringRate', 'radioSteeringExpo', 'radioSteeringEPA', 'radioThrottleEPA', 'radioTrim', 'escModel', 'escMode', 'escTiming', 'escPunch', 'escBrake', 'escCutoff', 'escOther'];
      attachPicker(section.querySelector('[name="txModel"]'), ['Radio / récepteur'], 'une radio');
      attachPicker(section.querySelector('[name="rxModel"]'), ['Radio / récepteur'], 'un récepteur');
      attachPicker(section.querySelector('[name="escModel"]'), ['Variateur (ESC)'], 'un variateur');
      document.addEventListener('submit', (event) => {
        if (event.target !== setupForm) return;
        const formData = new FormData(setupForm);
        const val = (name) => String(formData.get(name) || '').trim();
        radioInput.value = extraFields.slice(0, 7).map((name) => [name, val(name)]).filter(([, value]) => value).map(([name, value]) => `${name}: ${value}`).join('\n');
        escInput.value = extraFields.slice(7).map((name) => [name, val(name)]).filter(([, value]) => value).map(([name, value]) => `${name}: ${value}`).join('\n');
      }, true);
      setupForm.addEventListener('reset', () => setTimeout(() => section.querySelectorAll('input').forEach((input) => { input.value = ''; }), 0));
    }
  }
})();
