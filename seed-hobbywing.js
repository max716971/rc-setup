(() => {
  const key = 'rc-setup-materials-v1';
  const seedVersion = 'rc-setup-hobbywing-esc-v1';
  const source = 'https://www.hobbywing.com/en/rc-systems/rc-cars-power-system/xerun';
  const products = [
    ['XeRun XR10 Pro Legacy','30112800','ESC compétition 1/10.'],
    ['XeRun XR10 Pro G3 — variante noire','30112619','ESC compétition 1/10 ; vérifier la couleur/version régionale.'],
    ['XeRun XR10 Pro G3 — variante rouge','30112620','ESC compétition 1/10 ; vérifier la couleur/version régionale.'],
    ['XeRun XR10 Pro WP','30112618','ESC 1/10 waterproof.'],
    ['XeRun XR10 PRO DR','30112621','ESC pour drag racing.'],
    ['XeRun XR10 Stock Spec G2','30112402','ESC stock 1/10.'],
    ['XeRun XR10 Justock G3S','30112005','ESC stock 1/10.'],
    ['XeRun XR10 Justock G3 Handout','30112004','ESC stock/handout 1/10.'],
    ['XeRun XR8 PRO G3','30113400','ESC compétition 1/8.'],
    ['XeRun XR8 Plus G2S','30113304','ESC 1/8 ; vérifier la révision exacte.'],
    ['XeRun XR14 Sensored','30112622','ESC sensored ; vérifier l’échelle et la compatibilité.'],
    ['XeRun AXE 5IVE R3','3011400','ESC crawler/large scale ; référence à recouper selon kit.'],
    ['XeRun AXE PLUS R3','30113201','ESC crawler FOC ; vérifier le combo compatible.'],
    ['EzRun MAX10 G2 80A','Référence à vérifier','ESC brushless 1/10 ; le SKU peut varier par version/région.'],
    ['EzRun MAX10 G2 140A','Référence à vérifier','ESC brushless 1/10 ; le SKU peut varier par version/région.'],
    ['EzRun MAX8 / MAX6 / MAX5','Référence à vérifier','Familles ESC brushless haute puissance ; choisir génération et courant selon véhicule.'],
    ['QuicRun 10BL60 G2','Référence à vérifier','Famille ESC brushless 1/10 ; vérifier sensored/révision.'],
    ['QuicRun 10BL120 G2','Référence à vérifier','Famille ESC brushless ; vérifier version et compatibilité.'],
    ['QuicRun WP 10BL80','Référence à vérifier','ESC brushless waterproof ; choisir la version précise au catalogue.'],
    ['QuicRun WP 1080','Référence à vérifier','ESC brushed crawler waterproof ; vérifier génération.'],
    ['QuicRun 1060 brushed','Référence à vérifier','ESC brushed waterproof ; vérifier version et tension.'],
    ['QuicRun Fusion / Fusion Pro','Référence à vérifier','Système crawler 2-en-1 moteur + ESC ; choisir taille/génération.'],
    ['XeRun AXE R3','Référence à vérifier','Famille crawler FOC ; références variables selon combo et KV.']
  ];
  try {
    if (localStorage.getItem(seedVersion)) return;
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const list = Array.isArray(stored) ? stored : [];
    products.forEach(([name, reference, detail], index) => {
      const item = { brand:'Hobbywing', category:'Variateur (ESC)', name, reference, detail, url:source, id:`seed-hobbywing-esc-v1-${index}`, addedAt:new Date().toISOString() };
      if (!list.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) list.push(item);
    });
    localStorage.setItem(key, JSON.stringify(list));
    localStorage.setItem(seedVersion, 'true');
  } catch (error) { console.error('Échec ajout des variateurs Hobbywing', error); }
})();
