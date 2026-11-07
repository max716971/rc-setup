(() => {
  // Seed RSRC XRT oils and Team Associated buggy springs into the local materials inventory.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const readItems = () => {
    try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; }
    catch { return []; }
  };
  const xrtOils = [
    ['Huile silicone XRT Ronnefalk 10 WT — amortisseurs, 150 ml','10 WT / 150 ml','Huile d’amortisseur XRT, édition Ronnefalk. Disponibilité à vérifier sur RSRC.','https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html','Huile amortisseur'],
    ['Huile silicone XRT Ronnefalk 30 WT — amortisseurs, 150 ml','30 WT / 150 ml','Huile d’amortisseur XRT, édition Ronnefalk. Disponibilité à vérifier sur RSRC.','https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html','Huile amortisseur'],
    ['Huile silicone XRT 400 cSt — amortisseurs, 80 ml','400 cSt / 80 ml','Huile silicone XRT listée chez RSRC ; vérifier la viscosité et les unités.','https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html','Huile amortisseur'],
    ['Huile silicone XRT 1500 cSt — différentiel, 80 ml','1500 cSt / 80 ml','Huile de différentiel XRT listée chez RSRC.','https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html','Huile différentiel'],
    ['Huile silicone XRT 8000 cSt — différentiel, 80 ml','8000 cSt / 80 ml','Huile de différentiel XRT listée chez RSRC.','https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html','Huile différentiel'],
    ['Huile silicone XRT 400 000 cSt — différentiel, 80 ml','400000 cSt / 80 ml','Huile de différentiel XRT listée chez RSRC.','https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html','Huile différentiel'],
    ['Huile silicone XRT 1 500 000 cSt — différentiel, 80 ml','1500000 cSt / 80 ml','Huile de différentiel XRT listée chez RSRC.','https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html','Huile différentiel']
  ];
  const springSets = [
    {model:'RC10B4.2 FT', url:'https://www.teamassociated.com/pdf/cars_and_trucks/RC10B4.2/Team/Spring_Color_Codes.pdf', front:[[91374,'bleu','3.60'],[91375,'vert','3.80'],[91376,'jaune','4.00'],[91377,'orange','4.20'],[91378,'rouge','4.40']], rear:[[91379,'bleu','1.85'],[91380,'vert','1.96'],[91381,'jaune','2.11'],[91382,'orange','2.30'],[91383,'rouge','2.60']]},
    {model:'RC10B6.2', url:'https://www.teamassociated.com/pdf/cars_and_trucks/RC10B6.2/Team/TeamAssociated-12mmShockSprings.pdf', front:[[91890,'noir','3.40'],[91891,'violet','3.60'],[91892,'bleu','3.80'],[91893,'vert','4.00'],[91894,'jaune','4.20'],[91895,'orange','4.40'],[91896,'rouge','4.60']], rear:[[91897,'noir','1.44'],[91898,'violet','1.57'],[91899,'bleu','1.70'],[91900,'vert','1.84'],[91901,'jaune','1.96'],[91902,'orange','2.11'],[91903,'rouge','2.30']]},
    {model:'RC10B7', url:'https://www.teamassociated.com/pdf/cars_and_trucks/RC10B7/Team/TeamAssociated-RC10B7_ShockSpringChart.pdf', front:[[92340,'noir','3.40'],[92341,'violet','3.60'],[92342,'bleu','3.80'],[92343,'vert','4.00'],[92344,'jaune','4.20'],[92345,'orange','4.40'],[92346,'rouge','4.60']], rear:[[92350,'noir','1.44'],[92351,'violet','1.57'],[92352,'bleu','1.70'],[92353,'vert','1.84'],[92354,'jaune','1.96'],[92355,'orange','2.11'],[92356,'rouge','2.30']]}
  ];
  const seeds = [];
  xrtOils.forEach(([name,reference,detail,url,category],i) => seeds.push({brand:'XRT',category,name,reference,detail,url,id:`seed-rsrc-xrt-oils-v3-${i}`}));
  springSets.forEach(set => [['avant',set.front],['arrière',set.rear]].forEach(([axle,rows]) => rows.forEach(([reference,color,rate]) => seeds.push({
    brand:'Team Associated', category:'Ressort', name:`${set.model} — ressort ${axle} ${color} (${rate} lb/in)`, reference:String(reference),
    detail:`Ressort d’amortisseur ${axle} ; couleur et raideur d’après le tableau Team Associated.`, url:set.url,
    id:`seed-associated-spring-v1-${reference}`
  }))));

  // Upsert these seed records without deleting or replacing the user's other inventory.
  try {
    const items = readItems();
    for (const seed of seeds) {
      const existing = items.find(item => item.id === seed.id || (item.reference === seed.reference && item.name === seed.name && ['XTR','XRT',seed.brand].includes(item.brand)));
      if (existing) Object.assign(existing, seed);
      else items.push({...seed, addedAt:new Date().toISOString()});
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) { console.error('Échec ajout des références de matériel', error); }

  // Searchable editable Hobbywing selectors in the setup form.
  const form = document.getElementById('setupForm');
  if (form) {
    const items = readItems();
    for (const [fieldName,category,placeholder] of [['motor','Moteur','Choisir un moteur Hobbywing…'],['escModel','Variateur (ESC)','Choisir un variateur Hobbywing…'],['esc','Variateur (ESC)','Choisir un variateur Hobbywing…']]) {
      const input = form.elements.namedItem(fieldName);
      if (!input || input.dataset.hobbywingPicker === 'true') continue;
      input.dataset.hobbywingPicker = 'true';
      const picker = document.createElement('label'); picker.className = 'setup-library-picker';
      picker.append(document.createTextNode('Bibliothèque Hobbywing'));
      const select = document.createElement('select');
      select.innerHTML = `<option value="">${placeholder}</option>` + items.filter(item => item.brand === 'Hobbywing' && item.category === category).map(item => {
        const label = `${item.name} — réf. ${item.reference}`;
        return `<option value="${escape(label)}">${escape(label)}</option>`;
      }).join('');
      select.addEventListener('change', () => { if (select.value) input.value = select.value; });
      picker.append(select); input.closest('label')?.before(picker);
    }
  }

  // Materials module renders before this script. Add all local inventory items to the
  // catalog tab too, so seeded items are visible/searchable without a desktop console.
  const root = document.getElementById('materialsApp');
  if (!root) return;
  const categorySelect = root.querySelector('#categoryFilter');
  if (categorySelect) for (const category of ['Ressort','Huile amortisseur','Huile différentiel']) {
    if (![...categorySelect.options].some(option => option.value === category)) categorySelect.add(new Option(category,category));
  }
  const brandSelect = root.querySelector('#brandFilter');
  if (brandSelect) for (const brand of ['XRT','Team Associated']) {
    if (![...brandSelect.options].some(option => option.value === brand)) brandSelect.add(new Option(brand,brand));
  }
  const syncCatalog = () => {
    const cards = root.querySelector('#materialCards');
    if (!cards || !root.querySelector('.material-tab.active[data-tab="catalog"]')) return;
    const query = (root.querySelector('#materialSearch')?.value || '').trim().toLocaleLowerCase('fr');
    const brandFilter = root.querySelector('#brandFilter')?.value || '';
    const categoryFilter = root.querySelector('#categoryFilter')?.value || '';
    for (const item of readItems()) {
      if ((brandFilter && item.brand !== brandFilter) || (categoryFilter && item.category !== categoryFilter)) continue;
      if (query && ![item.brand,item.category,item.name,item.reference,item.detail].join(' ').toLocaleLowerCase('fr').includes(query)) continue;
      const identity = `${item.brand || ''}|${item.name || ''}|${item.reference || ''}`;
      if ([...cards.querySelectorAll('.material-card')].some(card => card.dataset.personalMaterial === identity)) continue;
      const card = document.createElement('article'); card.className = 'material-card'; card.dataset.personalMaterial = identity;
      const header = document.createElement('div'); header.className = 'material-card-head';
      const category = document.createElement('span'); category.className = 'material-category'; category.textContent = item.category || 'Matériel';
      const brand = document.createElement('span'); brand.className = 'material-brand'; brand.textContent = item.brand || '';
      header.append(category,brand);
      const title = document.createElement('h3'); title.textContent = item.name || 'Référence sans nom';
      const reference = document.createElement('p'); reference.textContent = `Réf. ${item.reference || 'non renseignée'}`;
      const detail = document.createElement('p'); detail.textContent = item.detail || '';
      card.append(header,title,reference,detail);
      if (item.url) { const link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Voir le document / produit ↗'; card.append(link); }
      cards.append(card);
    }
  };
  const cards = root.querySelector('#materialCards');
  if (cards) {
    new MutationObserver(syncCatalog).observe(cards,{childList:true});
    root.addEventListener('input',event => { if (event.target.id === 'materialSearch') requestAnimationFrame(syncCatalog); });
    root.addEventListener('change',event => { if (event.target.id === 'brandFilter' || event.target.id === 'categoryFilter') requestAnimationFrame(syncCatalog); });
    root.addEventListener('click',event => { if (event.target.closest('.material-tab[data-tab="catalog"]')) requestAnimationFrame(syncCatalog); });
    syncCatalog();
  }
})();
