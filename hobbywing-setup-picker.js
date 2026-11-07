(() => {
  // XTR oils listed by RSRC. Keep shock and differential oils distinct.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const seedKey = 'rc-setup-rsrc-xtr-oils-v1';
  const xtrProducts = [
    ['Huile silicone XTR Ronnefalk 10 WT — amortisseurs, 150 ml', '10 WT / 150 ml', 'Huile d’amortisseur XTR, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XTR Ronnefalk 30 WT — amortisseurs, 150 ml', '30 WT / 150 ml', 'Huile d’amortisseur XTR, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XTR 400 cSt — amortisseurs, 80 ml', '400 cSt / 80 ml', 'Huile silicone XTR listée chez RSRC. Vérifier la compatibilité des unités de viscosité avec ton setup.', 'https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html', 'Huile amortisseur'],
    ['Huile silicone XTR 1500 cSt — différentiel, 80 ml', '1500 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 8000 cSt — différentiel, 80 ml', '8000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 400 000 cSt — différentiel, 80 ml', '400000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 1 500 000 cSt — différentiel, 80 ml', '1500000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html', 'Huile différentiel']
  ];
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const readItems = () => {
    try { const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(value) ? value : []; }
    catch { return []; }
  };

  // Seed the oils before exposing the catalogue UI. Do not overwrite or delete user inventory.
  try {
    const items = readItems();
    if (!localStorage.getItem(seedKey)) {
      xtrProducts.forEach(([name, reference, detail, url, category], index) => {
        const item = { brand:'XTR', category, name, reference, detail, url, id:`seed-rsrc-xtr-oils-v1-${index}`, addedAt:new Date().toISOString() };
        if (!items.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) items.push(item);
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem(seedKey, 'true');
    }
  } catch (error) { console.error('Échec ajout des huiles XTR de RSRC', error); }

  const form = document.getElementById('setupForm');
  if (form) {
    const items = readItems();
    const specs = [
      ['motor', 'Moteur', 'Choisir un moteur Hobbywing…'],
      ['escModel', 'Variateur (ESC)', 'Choisir un variateur Hobbywing…'],
      ['esc', 'Variateur (ESC)', 'Choisir un variateur Hobbywing…']
    ];
    for (const [fieldName, category, placeholder] of specs) {
      const input = form.elements.namedItem(fieldName);
      if (!input || input.dataset.hobbywingPicker === 'true') continue;
      input.dataset.hobbywingPicker = 'true';
      const picker = document.createElement('label'); picker.className = 'setup-library-picker';
      picker.append(document.createTextNode('Bibliothèque Hobbywing'));
      const select = document.createElement('select');
      const options = items.filter(item => item.brand === 'Hobbywing' && item.category === category);
      select.innerHTML = `<option value="">${placeholder}</option>` + options.map(item => {
        const label = `${item.name} — réf. ${item.reference}`;
        return `<option value="${escape(label)}">${escape(label)}</option>`;
      }).join('');
      select.addEventListener('change', () => { if (select.value) input.value = select.value; });
      picker.append(select); input.closest('label')?.before(picker);
    }
  }

  // The main materials module renders before this file; surface all local inventory entries
  // in the catalog tab too, so seeded RSRC oils are immediately usable/searchable there.
  const root = document.getElementById('materialsApp');
  if (!root) return;
  const addSavedCards = () => {
    const cards = root.querySelector('#materialCards');
    if (!cards || !root.querySelector('.material-tab.active[data-tab="catalog"]')) return;
    const search = (root.querySelector('#materialSearch')?.value || '').trim().toLocaleLowerCase('fr');
    const brandFilter = root.querySelector('#brandFilter')?.value || '';
    const categoryFilter = root.querySelector('#categoryFilter')?.value || '';
    for (const item of readItems()) {
      if ((brandFilter && item.brand !== brandFilter) || (categoryFilter && item.category !== categoryFilter)) continue;
      if (search && ![item.brand,item.category,item.name,item.reference,item.detail].join(' ').toLocaleLowerCase('fr').includes(search)) continue;
      const signature = `${item.brand || ''}|${item.name || ''}|${item.reference || ''}`;
      if ([...cards.querySelectorAll('.material-card')].some(card => card.dataset.libraryPersonalItem === signature)) continue;
      const card = document.createElement('article'); card.className = 'material-card'; card.dataset.libraryPersonalItem = signature;
      const head = document.createElement('div'); head.className = 'material-card-head';
      const category = document.createElement('span'); category.className = 'material-category'; category.textContent = item.category || 'Matériel';
      const brand = document.createElement('span'); brand.className = 'material-brand'; brand.textContent = item.brand || '';
      head.append(category, brand);
      const title = document.createElement('h3'); title.textContent = item.name || 'Référence sans nom';
      const reference = document.createElement('p'); reference.className = 'material-reference'; reference.textContent = `Réf. ${item.reference || 'non renseignée'}`;
      const detail = document.createElement('p'); detail.className = 'material-detail'; detail.textContent = item.detail || 'Ajouté à Mon matériel.';
      card.append(head, title, reference, detail);
      if (item.url) { const link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Voir la référence ↗'; card.append(link); }
      cards.append(card);
    }
  };
  const categoryFilter = root.querySelector('#categoryFilter');
  if (categoryFilter && ![...categoryFilter.options].some(option => option.value === 'Huile différentiel')) {
    categoryFilter.add(new Option('Huile différentiel', 'Huile différentiel'));
  }
  const cards = root.querySelector('#materialCards');
  if (cards) {
    new MutationObserver(addSavedCards).observe(cards, { childList: true });
    root.addEventListener('input', event => { if (event.target.id === 'materialSearch') requestAnimationFrame(addSavedCards); });
    root.addEventListener('change', event => { if (event.target.id === 'brandFilter' || event.target.id === 'categoryFilter') requestAnimationFrame(addSavedCards); });
    root.addEventListener('click', event => { if (event.target.closest('.material-tab[data-tab="catalog"]')) requestAnimationFrame(addSavedCards); });
    addSavedCards();
  }
})();
