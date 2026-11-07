(() => {
  // RSRC XRT silicone oils. Shock oils and differential oils are separate categories.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const seedKey = 'rc-setup-rsrc-xrt-oils-v2';
  const xrtProducts = [
    ['Huile silicone XRT Ronnefalk 10 WT — amortisseurs, 150 ml', '10 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT Ronnefalk 30 WT — amortisseurs, 150 ml', '30 WT / 150 ml', 'Huile d’amortisseur XRT, édition Ronnefalk. Référence relevée chez RSRC ; disponibilité à vérifier.', 'https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XRT 400 cSt — amortisseurs, 80 ml', '400 cSt / 80 ml', 'Huile silicone XRT listée chez RSRC. Vérifier la compatibilité des unités de viscosité avec ton setup.', 'https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html', 'Huile amortisseur'],
    ['Huile silicone XRT 1500 cSt — différentiel, 80 ml', '1500 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 8000 cSt — différentiel, 80 ml', '8000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 400 000 cSt — différentiel, 80 ml', '400000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XRT 1 500 000 cSt — différentiel, 80 ml', '1500000 cSt / 80 ml', 'Huile de différentiel XRT listée chez RSRC ; distincte de l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html', 'Huile différentiel']
  ];

  const readItems = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  try {
    const items = readItems();
    if (!localStorage.getItem(seedKey)) {
      xrtProducts.forEach(([name, reference, detail, url, category], index) => {
        const item = {
          brand: 'XRT',
          category,
          name,
          reference,
          detail,
          url,
          id: `seed-rsrc-xrt-oils-v2-${index}`,
          addedAt: new Date().toISOString()
        };
        if (!items.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) {
          items.push(item);
        }
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem(seedKey, 'true');
    }
  } catch (error) {
    console.error('Échec ajout des huiles XRT de RSRC', error);
  }
})();
