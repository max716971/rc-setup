(() => {
  // RSRC-listed XRT silicone oils; shock and differential oils are separate categories.
  const storageKey = 'rc-setup-materials-v1';
  const seedKey = 'rc-setup-rsrc-xrt-oils-v2';
  const products = [
    ['Huile silicone XRT Ronnefalk 10 WT — amortisseurs, 150 ml', '10 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Disponibilité à vérifier sur RSRC.', 'https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT Ronnefalk 30 WT — amortisseurs, 150 ml', '30 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Disponibilité à vérifier sur RSRC.', 'https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT 400 cSt — amortisseurs, 80 ml', '400 cSt / 80 ml', 'Huile silicone XRT listée chez RSRC ; vérifier la viscosité et les unités.', 'https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html', 'Huile amortisseur'],
    ['Huile silicone XRT 1500 cSt — différentiel, 80 ml', '1500 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC.', 'https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 8000 cSt — différentiel, 80 ml', '8000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC.', 'https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 400 000 cSt — différentiel, 80 ml', '400000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC.', 'https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 1 500 000 cSt — différentiel, 80 ml', '1500000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC.', 'https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html', 'Huile différentiel']
  ];
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const items = Array.isArray(data) ? data : [];
    if (!localStorage.getItem(seedKey) || !products.every(([name, reference]) => items.some(item => item.brand === 'XRT' && item.name === name && item.reference === reference))) {
      products.forEach(([name, reference, detail, url, category], index) => {
        const existing = items.find(item => item.name === name && item.reference === reference && ['XTR','XRT'].includes(item.brand));
        if (existing) Object.assign(existing, {brand:'XRT', category, detail, url});
        else items.push({brand:'XRT', category, name, reference, detail, url, id:`seed-rsrc-xrt-oils-v2-${index}`, addedAt:new Date().toISOString()});
      });
      localStorage.setItem(storageKey, JSON.stringify(items));
      localStorage.setItem(seedKey, 'true');
    }
  } catch (error) { console.error('Échec ajout des huiles XRT de RSRC', error); }
})();
