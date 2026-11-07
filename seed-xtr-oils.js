(() => {
  // RSRC-listed XTR silicone oils. Shock oils and differential oils are separated by category.
  const storageKey = 'rc-setup-materials-v1';
  const seedKey = 'rc-setup-rsrc-xtr-oils-v1';
  const products = [
    ['Huile silicone XTR Ronnefalk 10 WT — amortisseurs, 150 ml', '10 WT / 150 ml', 'Huile d’amortisseur XTR, édition Ronnefalk. Référence relevée chez RSRC; vérifier le stock actuel.', 'https://rsrc.biz/huiles/1883-huile-silicone-10-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XTR Ronnefalk 30 WT — amortisseurs, 150 ml', '30 WT / 150 ml', 'Huile d’amortisseur XTR, édition Ronnefalk. Référence relevée chez RSRC; vérifier le stock actuel.', 'https://rsrc.biz/huiles/1878-huile-silicone-30-wt-150ml-ronnefalk-edition.html', 'Huile amortisseur'],
    ['Huile silicone XTR 400 cSt — amortisseurs, 80 ml', '400 cSt / 80 ml', 'Huile silicone XTR listée dans la gamme RSRC. Vérifier que la viscosité correspond à l’usage et au système de mesure souhaités.', 'https://rsrc.biz/huiles/2440-huile-silicone-xtr-400cst-80ml.html', 'Huile amortisseur'],
    ['Huile silicone XTR 1500 cSt — différentiel, 80 ml', '1500 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC. Ne pas confondre avec l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2433-huile-silicone-xtr-1500cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 8000 cSt — différentiel, 80 ml', '8000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC. Ne pas confondre avec l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2443-huile-silicone-xtr-8000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 400 000 cSt — différentiel, 80 ml', '400000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC. Ne pas confondre avec l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2446-huile-silicone-xtr-400000cst-80ml.html', 'Huile différentiel'],
    ['Huile silicone XTR 1 500 000 cSt — différentiel, 80 ml', '1500000 cSt / 80 ml', 'Huile de différentiel XTR listée chez RSRC. Ne pas confondre avec l’huile d’amortisseur.', 'https://rsrc.biz/huiles/2449-huile-silicone-xtr-1500000cst-80ml.html', 'Huile différentiel']
  ];
  try {
    if (localStorage.getItem(seedKey)) return;
    const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const items = Array.isArray(stored) ? stored : [];
    products.forEach(([name, reference, detail, url, category], index) => {
      const item = { brand: 'XTR', category, name, reference, detail, url, id: `seed-rsrc-xtr-oil-v1-${index}`, addedAt: new Date().toISOString() };
      if (!items.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) items.push(item);
    });
    localStorage.setItem(storageKey, JSON.stringify(items));
    localStorage.setItem(seedKey, 'true');
  } catch (error) {
    console.error('Échec ajout des huiles XTR de RSRC', error);
  }
})();
