(() => {
  // XRT oils from RSRC: install them locally, retain the user's inventory, and
  // make saved inventory visible in the catalog even if materials.js renders first.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const XRT_SEED_KEY = 'rc-setup-rsrc-xrt-oils-v2';
  const xrtProducts = [
    ['Huile silicone XRT Ronnefalk 10 WT — amortisseurs, 150 ml', '10 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT Ronnefalk 30 WT — amortisseurs, 150 ml', '30 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT 400 cSt — amortisseurs, 80 ml', '400 cSt / 80 ml', 'Huile silicone XRT listée chez RSRC ; vérifier les unités de viscosité selon l’usage.', 'https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html', 'Huile amortisseur'],
    ['Huile silicone XRT 1500 cSt — différentiel, 80 ml', '1500 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 8000 cSt — différentiel, 80 ml', '8000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 400 000 cSt — différentiel, 80 ml', '400000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 1 500 000 cSt — différentiel, 80 ml', '1500000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html', 'Huile différentiel']
  ];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const readItems = () => {
    try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; }
    catch { return []; }
  };

  // Seed once, while also repairing older XTR/XRT seed variants if present.
  try {
    const items = readItems();
    const alreadyPresent = xrtProducts.every(([name, reference]) => items.some(item => item.brand === 'XRT' && item.name === name && item.reference === reference));
    if (!localStorage.getItem(XRT_SEED_KEY) || !alreadyPresent) {
      xrtProducts.forEach(([name, reference, detail, url, category], index) => {
        const existing = items.find(item => item.name === name && item.reference === reference && ['XTR','XRT'].includes(item.brand));
        if (existing) {
          existing.brand = 'XRT';
          existing.category = category;
          existing.detail = detail;
          existing.url = url;
        } else {
          items.push({ brand:'XRT', category, name, reference, detail, url, id:`seed-rsrc-xrt-oils-v2-${index}`, addedAt:new Date().toISOString() });
        }
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem(XRT_SEED_KEY, 'true');
    }
  } catch (error) { console.error('Échec ajout des huiles XRT de RSRC', error); }

  const form = document.getElementById('setupForm');
  if (form) {
    const items = readItems();
    for (const [fieldName, category, placeholder] of [
      ['motor','Moteur','Choisir un moteur Hobbywing…'],
      ['escModel','Variateur (ESC)','Choisir un variateur Hobbywing…'],
      ['esc','Variateur (ESC)','Choisir un variateur Hobbywing…']
    ]) {
      const input = form.elements.namedItem(fieldName);
      if (!input || input.dataset.hobbywingPicker === 'true') continue;
      input.dataset.hobbywingPicker = 'true';
      const label = document.createElement('label'); label.className = 'setup-library-picker';
      label.append(document.createTextNode('Bibliothèque Hobbywing'));
      const select = document.createElement('select');
      select.innerHTML = `<option value="">${placeholder}</option>` + items.filter(item => item.brand === 'Hobbywing' && item.category === category).map(item => {
        const text = `${item.name} — réf. ${item.reference}`;
        return `<option value="${escape(text)}">${escape(text)}</option>`;
      }).join('');
      select.addEventListener('change', () => { if (select.value) input.value = select.value; });
      label.append(select); input.closest('label')?.before(label);
    }
  }

  const root = document.getElementById('materialsApp');
  if (!root) return;
  const syncSavedMaterialsIntoCatalog = () => {
    const cards = root.querySelector('#materialCards');
    if (!cards || !root.querySelector('.material-tab.active[data-tab="catalog"]')) return;
    const query = (root.querySelector('#materialSearch')?.value || '').trim().toLocaleLowerCase('fr');
    const brandFilter = root.querySelector('#brandFilter')?.value || '';
    const categoryFilter = root.querySelector('#categoryFilter')?.value || '';
    for (const item of readItems()) {
      if ((brandFilter && item.brand !== brandFilter) || (categoryFilter && item.category !== categoryFilter)) continue;
      if (query && ![item.brand,item.category,item.name,item.reference,item.detail].join(' ').toLocaleLowerCase('fr').includes(query)) continue;
      const key = `${item.brand || ''}|${item.name || ''}|${item.reference || ''}`;
      if ([...cards.querySelectorAll('.material-card')].some(card => card.dataset.personalMaterial === key)) continue;
      const card = document.createElement('article'); card.className = 'material-card'; card.dataset.personalMaterial = key;
      const head = document.createElement('div'); head.className = 'material-card-head';
      const category = document.createElement('span'); category.className = 'material-category'; category.textContent = item.category || 'Matériel';
      const brand = document.createElement('span'); brand.className = 'material-brand'; brand.textContent = item.brand || '';
      head.append(category, brand);
      const title = document.createElement('h3'); title.textContent = item.name || 'Référence sans nom';
      const ref = document.createElement('p'); ref.textContent = `Réf. ${item.reference || 'non renseignée'}`;
      const detail = document.createElement('p'); detail.textContent = item.detail || '';
      card.append(head, title, ref, detail);
      if (item.url) { const link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Voir chez RSRC ↗'; card.append(link); }
      cards.append(card);
    }
  };
  const categorySelect = root.querySelector('#categoryFilter');
  if (categorySelect) {
    for (const category of ['Huile amortisseur','Huile différentiel']) {
      if (![...categorySelect.options].some(option => option.value === category)) categorySelect.add(new Option(category, category));
    }
  }
  const cards = root.querySelector('#materialCards');
  if (cards) {
    new MutationObserver(syncSavedMaterialsIntoCatalog).observe(cards, { childList:true });
    root.addEventListener('input', event => { if (event.target.id === 'materialSearch') requestAnimationFrame(syncSavedMaterialsIntoCatalog); });
    root.addEventListener('change', event => { if (event.target.id === 'brandFilter' || event.target.id === 'categoryFilter') requestAnimationFrame(syncSavedMaterialsIntoCatalog); });
    root.addEventListener('click', event => { if (event.target.closest('.material-tab[data-tab="catalog"]')) requestAnimationFrame(syncSavedMaterialsIntoCatalog); });
    syncSavedMaterialsIntoCatalog();
  }
})();
