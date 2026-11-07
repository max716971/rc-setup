(() => {
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const catalog = [
    // Hobbywing RC car ESCs and motors. Variants/bobinages are separated where a manufacturer SKU is known.
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro Legacy', reference: '30112800', detail: 'ESC brushless sensored. Vérifier révision et compatibilité constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro G2S', reference: '30112609', detail: 'ESC compétition 1/10. Vérifier révision et compatibilité moteur.', url: 'https://www.hobbywing.com/goods.php?id=716&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XR10 Justock G3', reference: '30112003', detail: 'ESC stock 1/10 ; vérifier version et règlement de course.', url: 'https://www.hobbywing.com/goods.php?id=726&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR8 Plus G2S', reference: '30113305', detail: 'ESC compétition 1/8 ; vérifier génération et connecteurs.', url: 'https://www.hobbywing.com/goods.php?id=750&pid=0' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 80A', reference: '30102700', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 140A', reference: '30102500', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL80 Crawler', reference: '30108002', detail: 'Gamme QuicRun crawler ; vérifier compatibilité.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun 10BL60 Sensored G2', reference: '30108001', detail: 'Vérifier la révision exacte.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL60', reference: '30109000', detail: 'Famille QuicRun ; confirmer la référence de la version au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4 4.5T', reference: '30401159', detail: 'Moteur compétition 1/10 ; vérifier variante et compatibilité ESC.', url: 'https://www.hobbywing.com/goods.php?id=718&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4 5.5T', reference: '30401161', detail: 'Moteur compétition 1/10 ; vérifier variante et compatibilité ESC.', url: 'https://www.hobbywing.com/goods.php?id=718&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun 4268SD G3 1900KV', reference: '30402653', detail: 'Moteur brushless 1/8 ; contrôler KV et compatibilité véhicule.', url: 'https://www.hobbywing.com/goods.php?id=699&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'Justock G2.1 10.5T', reference: '30408010', detail: 'Moteur stock 1/10 ; vérifier la combinaison ESC/moteur.', url: 'https://www.hobbywing.com/goods.php?id=719&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4R', reference: 'Bobinage à préciser', detail: 'La référence varie selon le bobinage ; vérifier la fiche constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'EzRun 3660 / 3665 G3', reference: 'KV à préciser', detail: 'Choisir taille et KV selon le véhicule.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Programmation', name: 'LCD Program Box Pro', reference: '30502002', detail: 'Boîtier de programmation pour matériels compatibles Hobbywing.', url: 'https://www.hobbywing.com/en/rc-systems' },

    // Schumacher 1/10 buggy tire families. SKU depends on position, compound and mounted/unmounted version.
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mini Dart — avant 4x2', reference: 'U6830', detail: 'Exemple buggy 1/10 ; confirmer gomme et variante.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Cactus Fusion 2 — avant 4x4', reference: 'U6895 / U6898', detail: 'Références exemple ; vérifier version montée/collée.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mezzo — arrière', reference: 'U6885 / U6886', detail: 'Exemples de variantes de gomme ; confirmer la position et le composé.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mezzo — avant 4x4', reference: 'U6888', detail: 'Buggy 1/10 ; confirmer gomme et compatibilité.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mini Spike 2 — avant 4WD', reference: 'U6517', detail: 'Buggy 1/10 ; vérifier profil et gomme exacte.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Mini Spike 2 — arrière', reference: 'U6518', detail: 'Buggy 1/10 ; vérifier profil et gomme exacte.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Cut Stagger Low Profile — avant 2WD', reference: 'U6770 / U6775', detail: 'Références selon composé ; vérifier la variante au catalogue.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Fusion Slim — avant 2WD', reference: 'U6901 / U6902', detail: 'Références selon composé ; vérifier génération et montage.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Cactus — arrière 2WD', reference: 'U6838', detail: 'Référence exemple buggy 1/10 ; vérifier gomme et compatibilité.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Splinter Slim — avant 2WD', reference: 'U6906Y / U6908S', detail: 'Références selon gomme ; vérifier code de composé et châssis.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: 'Schumacher', category: 'Pneus / roues', name: 'Azami — arrière', reference: 'U6905 / U6912', detail: 'Références selon variante ; vérifier gomme et compatibilité.', url: 'https://www.racing-cars.com/wheels-tyres' },
    ...['Mini Pin', 'Cactus Fusion', 'Azami', 'Splinter', 'Fusion Slim', 'Cut Stagger', 'Shard', 'Spiral', 'Ridge Pin', 'Mini Dart', 'Mezzo'].map((name) => ({ brand: 'Schumacher', category: 'Pneus / roues', name, reference: 'Varie par position, gomme et génération', detail: 'Famille de pneus ; choisir la référence exacte selon voiture, piste et composé.', url: 'https://www.racing-cars.com/wheels-tyres' })),

    // Bibliothèque complémentaire demandée : entrées de gamme sans SKU inventé.
    // Ajouter la référence exacte du flacon lorsque le fabricant/revendeur la confirme.
    { brand: 'XRT Racing', category: 'Huile amortisseur', name: 'Huile silicone amortisseur 10 WT', reference: '10 WT — format à préciser', detail: 'Huile amortisseur XRT Racing. Vérifier le format et la référence du flacon.', url: 'https://rsrc.biz/' },
    { brand: 'XRT Racing', category: 'Huile amortisseur', name: 'Huile silicone amortisseur 30 WT', reference: '30 WT — format à préciser', detail: 'Huile amortisseur XRT Racing. Vérifier le format et la référence du flacon.', url: 'https://rsrc.biz/' },
    { brand: 'XRT Racing', category: 'Huile différentiel', name: 'Huile silicone différentiel', reference: 'Viscosité à préciser', detail: 'Gamme XRT Racing ; choisir la viscosité exacte selon le différentiel.', url: 'https://rsrc.biz/' },
    { brand: '6MIK', category: 'Huile amortisseur', name: 'Huile silicone amortisseur', reference: 'Viscosité à préciser', detail: 'Entrée de gamme 6MIK ; référence et viscosité du flacon à confirmer.', url: 'https://www.6mik-racing.com/' },
    { brand: '6MIK', category: 'Huile différentiel', name: 'Huile silicone différentiel', reference: 'Viscosité à préciser', detail: 'Entrée de gamme 6MIK ; référence et viscosité du flacon à confirmer.', url: 'https://www.6mik-racing.com/' },
    { brand: 'Team Associated', category: 'Huile différentiel', name: 'Factory Team Differential Fluid', reference: 'Viscosité à préciser', detail: 'Fluide de différentiel Team Associated ; choisir la viscosité et vérifier le SKU.', url: 'https://www.associatedelectrics.com/teamassociated/parts/fluids/' },
    { brand: 'XRT Racing', category: 'Graisse', name: 'Graisse multi-usage RC', reference: 'Référence à confirmer', detail: 'Gamme XRT Racing ; préciser le type (différentiel, transmission ou roulements) selon le produit.', url: 'https://rsrc.biz/' },
    { brand: '6MIK', category: 'Graisse', name: 'Graisse RC', reference: 'Référence à confirmer', detail: 'Gamme 6MIK ; type et référence à confirmer sur le produit.', url: 'https://www.6mik-racing.com/' },
    { brand: 'Team Associated', category: 'Graisse', name: 'Stealth Differential Grease', reference: 'Référence à confirmer', detail: 'Graisse pour différentiel ; vérifier la référence du conditionnement.', url: 'https://www.associatedelectrics.com/teamassociated/parts/fluids/' },
    { brand: '1UP Racing', category: 'Graisse', name: 'Graisse RC', reference: 'Référence à confirmer', detail: 'Gamme 1UP Racing ; choisir le produit selon l’application.', url: 'https://1upracing.com/' },
    { brand: 'SRT', category: 'Servo', name: 'Servo SRT', reference: 'Modèle à préciser', detail: 'Catalogue SRT : choisir couple, vitesse, tension et dimensions selon le véhicule.', url: 'https://www.srt-rc.com/' },
    { brand: 'Power HD', category: 'Servo', name: 'Servo Power HD', reference: 'Modèle à préciser', detail: 'Catalogue Power HD : choisir couple, vitesse, tension et dimensions.', url: 'https://www.powerhd.com.tw/' },
    { brand: 'Savox', category: 'Servo', name: 'SC-1258TG Black Edition', reference: 'SC-1258TG', detail: 'Servo numérique à pignons titane ; vérifier tension d’alimentation et dimensions.', url: 'https://www.savoxusa.com/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu TT 1/10 — gamme 6MIK', reference: 'Profil / gomme à préciser', detail: 'Choisir le profil, la gomme et la position selon la piste et le châssis.', url: 'https://www.6mik-racing.com/' },
    { brand: 'Schumacher', category: 'Insert pneu', name: 'Insert mousse buggy 1/10', reference: 'Modèle à préciser', detail: 'Choisir la densité et la forme selon le pneu Schumacher utilisé.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: '6MIK', category: 'Insert pneu', name: 'Insert pneu buggy 1/10', reference: 'Modèle à préciser', detail: 'Choisir la densité et la forme selon le pneu 6MIK utilisé.', url: 'https://www.6mik-racing.com/' },

    // Ressorts Team Associated 12 mm : taux connus pour RC10B4.2FT.
    ...[['BRN','2.85'],['BLK','3.00'],['GRN','3.15'],['WHT','3.30'],['GRY','3.45'],['BLU','3.60'],['YLW','3.75'],['RED','3.90'],['ORN','4.05'],['PRL','4.20']].map(([code,rate]) => ({ brand: 'Team Associated', category: 'Ressort', name: `Ressort avant 12 mm RC10B4.2FT — ${code}`, reference: `${rate}`, detail: `Ressort avant 12 mm ; code couleur ${code}, taux ${rate} (unité selon nomenclature du kit).`, url: 'https://www.associatedelectrics.com/teamassociated/' })),
    ...[['BLK','1.90'],['GRN','2.00'],['WHT','2.10'],['GRY','2.20'],['BLU','2.30'],['YLW','2.40']].map(([code,rate]) => ({ brand: 'Team Associated', category: 'Ressort', name: `Ressort arrière 12 mm RC10B4.2FT — ${code}`, reference: `${rate}`, detail: `Ressort arrière 12 mm ; code couleur ${code}, taux ${rate} (unité selon nomenclature du kit).`, url: 'https://www.associatedelectrics.com/teamassociated/' })),
    { brand: 'Team Associated', category: 'Ressort', name: 'Ressorts RC10B6.2', reference: 'Kit / taux à confirmer', detail: 'Entrée de gamme à compléter avec les références exactes du kit B6.2 ; ne pas assimiler aux ressorts B4.2FT.', url: 'https://www.associatedelectrics.com/teamassociated/' },
    { brand: 'Team Associated', category: 'Ressort', name: 'Ressorts RC10B7', reference: 'Kit / taux à confirmer', detail: 'Entrée de gamme à compléter avec les références exactes du kit B7 ; ne pas assimiler aux ressorts B4.2FT.', url: 'https://www.associatedelectrics.com/teamassociated/' },

    { brand: 'XRAY', category: 'Huile amortisseur', name: 'Premium Silicone Oil 400 cSt, 50 ml', reference: '359248', detail: 'Exemple ; vérifier disponibilité et viscosité.', url: 'https://www.teamxray.com/eshop/' },
    { brand: 'HUDY', category: 'Huile amortisseur', name: 'Premium Silicone Oil 50 000 cSt', reference: '106350', detail: 'Exemple de viscosité/référence ; choisir selon le véhicule.', url: 'https://www.hudy.net/' },
    { brand: 'Team Associated', category: 'Huile amortisseur', name: 'Factory Team Shock Oil 35 wt', reference: '5435', detail: 'Exemple ; confirmer compatibilité et catalogue actuel.', url: 'https://www.associatedelectrics.com/teamassociated/parts/fluids/' },
    { brand: 'Donuts Racing', category: 'Huile amortisseur', name: 'Huile silicone amortisseur', reference: 'Viscosité à préciser', detail: 'Référence selon viscosité/disponibilité du revendeur.', url: 'https://www.donuts-racing.com/huiles-silicones/99-huile-amortisseur-rc.html' },
    { brand: 'XRAY', category: 'Ressort', name: 'C1.9 Springs (2)', reference: '308390', detail: 'Vérifier génération et compatibilité châssis.', url: 'https://www.teamxray.com/eshop/' },
    { brand: 'HUDY', category: 'Outil', name: 'Professional Allen Wrench 2.0 mm', reference: '189080', detail: 'Outil hexagonal 2,0 mm.', url: 'https://www.hudy.net/' }
  ];
  const root = document.getElementById('materialsApp');
  if (!root) return;
  let savedItems = loadSaved();
  let activeTab = 'catalog';
  function loadSaved() { try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
  function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); return true; } catch { alert('Stockage local plein : retire une fiche ou libère de l’espace.'); return false; } }
  function esc(value) { return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c]); }
  function allMaterials() { return [...catalog, ...savedItems]; }
  function materialLabel(item) { return `${item.brand} ${item.name}${item.reference ? ` — réf. ${item.reference}` : ''}`; }
  function refreshPickers() {
    document.querySelectorAll('[data-library-category]').forEach((select) => {
      const category = select.dataset.libraryCategory;
      const current = select.value;
      const items = allMaterials().filter((item) => item.category === category);
      select.innerHTML = '<option value="">Choisir dans la bibliothèque…</option>' + items.map((item) => `<option value="${esc(materialLabel(item))}">${esc(materialLabel(item))}</option>`).join('');
      if (items.some((item) => materialLabel(item) === current)) select.value = current;
    });
  }
  function render() {
    const brands = [...new Set(allMaterials().map((item) => item.brand))].sort((a,b) => a.localeCompare(b,'fr'));
    const categories = [...new Set(allMaterials().map((item) => item.category))].sort((a,b) => a.localeCompare(b,'fr'));
    root.innerHTML = `<div class="panel material-controls"><div class="material-tabs"><button type="button" class="material-tab ${activeTab === 'catalog' ? 'active' : ''}" data-tab="catalog">Bibliothèque (${catalog.length})</button><button type="button" class="material-tab ${activeTab === 'mine' ? 'active' : ''}" data-tab="mine">Mon matériel (${savedItems.length})</button></div><div class="material-filter-row"><input id="materialSearch" type="search" placeholder="Rechercher marque, référence, catégorie…"><select id="brandFilter"><option value="">Toutes les marques</option>${brands.map((v) => `<option>${esc(v)}</option>`).join('')}</select><select id="categoryFilter"><option value="">Toutes les catégories</option>${categories.map((v) => `<option>${esc(v)}</option>`).join('')}</select></div><p class="catalog-note">Les références peuvent varier selon l’échelle et la génération : vérifie la fiche fabricant.</p></div><div class="material-add-row"><button type="button" class="button button-primary" id="showMaterialForm">＋ Ajouter manuellement</button></div><form id="materialForm" class="panel material-form hidden"><h2>Ajouter à ma bibliothèque</h2><div class="material-form-grid"><label>Marque<input name="brand" required placeholder="Ex. Schumacher"></label><label>Catégorie<select name="category"><option>Pneus / roues</option><option>Huile amortisseur</option><option>Ressort</option><option>Variateur (ESC)</option><option>Moteur</option><option>Servo</option><option>Radio / récepteur</option><option>Outil</option><option>Autre</option></select></label><label>Nom<input name="name" required></label><label>Référence<input name="reference"></label><label>Quantité<input name="quantity" type="number" min="0" step="1"></label><label>Compatibilité<input name="compatibility" placeholder="Échelle / châssis"></label><label class="material-wide">Notes<textarea name="detail" rows="2"></textarea></label><label class="material-wide">Lien fiche produit<input name="url" type="url" placeholder="https://…"></label></div><div class="actions-row"><button class="button button-primary" type="submit">Enregistrer</button><button class="button button-soft" id="cancelMaterialForm" type="button">Annuler</button></div></form><div id="materialCards" class="material-grid"></div>`;
    root.querySelectorAll('.material-tab').forEach((b) => b.addEventListener('click', () => { activeTab = b.dataset.tab; render(); }));
    root.querySelector('#showMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.toggle('hidden'));
    root.querySelector('#cancelMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.add('hidden'));
    root.querySelector('#materialForm').addEventListener('submit', addItem);
    root.querySelector('#materialSearch').addEventListener('input', renderCards);
    root.querySelector('#brandFilter').addEventListener('change', renderCards);
    root.querySelector('#categoryFilter').addEventListener('change', renderCards);
    renderCards(); refreshPickers();
  }
  function renderCards() {
    const q = root.querySelector('#materialSearch').value.trim().toLocaleLowerCase('fr');
    const brand = root.querySelector('#brandFilter').value, category = root.querySelector('#categoryFilter').value;
    const list = (activeTab === 'catalog' ? catalog : savedItems).filter((x) => (!brand || x.brand === brand) && (!category || x.category === category) && (!q || [x.brand,x.category,x.name,x.reference,x.detail,x.compatibility].join(' ').toLocaleLowerCase('fr').includes(q)));
    const cards = root.querySelector('#materialCards');
    cards.innerHTML = list.length ? list.map((item) => {
      const owned = savedItems.some((x) => x.id === item.id);
      return `<article class="material-card"><div class="material-card-head"><span class="material-category">${esc(item.category)}</span><span class="material-brand">${esc(item.brand)}</span></div><h3>${esc(item.name)}</h3><div class="material-reference">Réf. <strong>${esc(item.reference || 'non indiquée')}</strong></div>${item.compatibility ? `<p>Compatibilité : ${esc(item.compatibility)}</p>` : ''}<p>${esc(item.detail || '')}</p><div class="material-card-actions">${item.url ? `<a class="button button-soft" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Fiche ↗</a>` : ''}${owned ? `<button class="button button-quiet danger-action remove-material" data-id="${esc(item.id)}" type="button">Retirer</button>` : `<button class="button button-primary save-material" data-id="${esc(item.id)}" type="button">＋ Mon matériel</button>`}</div></article>`;
    }).join('') : '<div class="empty-state material-empty"><strong>Aucun matériel trouvé</strong><span>Change les filtres ou ajoute ta référence.</span></div>';
    cards.querySelectorAll('.save-material').forEach((b) => b.addEventListener('click', () => { const x = catalog.find((i) => i.id === b.dataset.id); if (!x || savedItems.some((i) => i.brand === x.brand && i.name === x.name && i.reference === x.reference)) return; savedItems.unshift({ ...x, id: `saved-${Date.now()}-${Math.random().toString(16).slice(2,7)}` }); if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); } }));
    cards.querySelectorAll('.remove-material').forEach((b) => b.addEventListener('click', () => { savedItems = savedItems.filter((i) => i.id !== b.dataset.id); if (persist()) { render(); window.dispatchEvent(new Event('rc-materials-updated')); } }));
  }
  function addItem(event) {
    event.preventDefault(); const d = Object.fromEntries(new FormData(event.currentTarget).entries());
    savedItems.unshift({ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2,7)}`, brand: d.brand.trim(), category: d.category, name: d.name.trim(), reference: d.reference.trim(), quantity: d.quantity, compatibility: d.compatibility.trim(), detail: d.detail.trim(), url: d.url.trim() });
    if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); }
  }
  catalog.forEach((item) => { item.id = `${item.brand}|${item.reference}|${item.name}`; });
  render();

  const setupForm = document.getElementById('setupForm');
  if (!setupForm) return;
  const pickerMap = [
    ['frontTires','Pneus / roues'], ['rearTires','Pneus / roues'], ['frontShocks','Huile amortisseur'], ['rearShocks','Huile amortisseur'],
    ['springs','Ressort'], ['motor','Moteur'], ['esc','Variateur (ESC)'], ['servoSteering','Servo'], ['txModel','Radio / récepteur'], ['rxModel','Radio / récepteur'], ['escModel','Variateur (ESC)']
  ];
  for (const [fieldName, category] of pickerMap) {
    const input = setupForm.elements.namedItem(fieldName);
    if (!input || input.dataset.libraryEnhanced) continue;
    input.dataset.libraryEnhanced = 'true';
    const picker = document.createElement('div'); picker.className = 'setup-library-picker';
    const label = document.createElement('span'); label.textContent = 'Bibliothèque';
    const select = document.createElement('select'); select.dataset.libraryCategory = category;
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(label, select);
    input.closest('label').before(picker);
  }
  setupForm.addEventListener('submit', () => {
    const value = (name) => String(setupForm.elements.namedItem(name)?.value || '').trim();
    const radio = [['Émetteur',value('txModel')],['Récepteur / gyro',value('rxModel')],['Dual rate / expo',value('radioExpo')],['EPA',value('radioEPA')],['Trim / failsafe',value('radioTrim')],['Autres',value('radio')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    const escText = [['Modèle ESC',value('escModel')],['Mode / profil',value('escMode')],['Timing / boost',value('escTiming')],['Punch',value('escPunch')],['Frein / drag brake',value('escBrake')],['Cutoff',value('escCutoff')],['Autres paramètres',value('electronicsNotes')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    setupForm.elements.namedItem('radio').value = radio;
    setupForm.elements.namedItem('esc').value = escText;
  }, true);
  window.addEventListener('rc-materials-updated', refreshPickers);
})();
