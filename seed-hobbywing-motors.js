(() => {
  const key = 'rc-setup-materials-v1';
  const seedVersion = 'rc-setup-hobbywing-motors-v2';
  const source = 'https://www.hobbywingdirect.com/products/xerun-v10-g3r-motor-spec-class-13-5t-25-5t';
  const products = [
    ['XeRun V10 G3R 13.5T', '30401130', 'Moteur stock 1/10; référence constructeur confirmée pour la version G3R.', source],
    ['XeRun V10 G3R 17.5T', '30401131', 'Moteur stock 1/10; référence constructeur confirmée pour la version G3R.', source],
    ['XeRun V10 G3R 21.5T', '30401132', 'Moteur stock 1/10; référence constructeur confirmée pour la version G3R.', source],
    ['XeRun V10 G3', 'Référence à vérifier', 'Famille G3 ; plusieurs versions et plages de turns selon marché, la référence exacte varie selon fiche et région.', 'https://www.hobbywing.com/goods.php?id=571&filter_attr=114.0.0.0'],
    ['XeRun V10 G3R', 'Référence selon turn', 'Famille G3R ; références exactes affichées par turns (13.5T/17.5T/21.5T) sur la fiche constructeur.', source],
    ['XeRun V10 G4 13.5T', '30401140', 'Moteur brushless compétition 1/10; référence constructeur confirmée.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun V10 G4 17.5T', '30401141', 'Moteur brushless compétition 1/10; référence constructeur confirmée.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun V10 G4 21.5T', '30401142', 'Moteur brushless compétition 1/10; référence constructeur confirmée.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun V10 G4R 13.5T', 'Référence à vérifier', 'Version G4R stock 1/10 ; référence exacte à confirmer selon marché/homologation.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun V10 G4R 17.5T', 'Référence à vérifier', 'Version G4R stock 1/10 ; référence exacte à confirmer selon marché/homologation.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun V10 G4R 21.5T', 'Référence à vérifier', 'Version G4R stock 1/10 ; référence exacte à confirmer selon marché/homologation.', 'https://www.hobbywingdirect.com/collections/xerun-v10-g4'],
    ['XeRun 4268SD G3 1900KV', '30402611', 'Moteur brushless sensored 1/8 ; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['XeRun 4268SD G3 2200KV', '30402612', 'Moteur brushless sensored 1/8 ; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['XeRun 4274SD G3 2000KV', '30402712', 'Moteur brushless sensored 1/8 ; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['XeRun 4274SD G3 2250KV', '30402713', 'Moteur brushless sensored 1/8 ; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['EzRun 3652 G2 3250KV', '30401550', 'Moteur brushless sensorless 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['EzRun 3652 G2 4000KV', '30401551', 'Moteur brushless sensorless 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['EzRun 3660 G2 3200KV', '30401650', 'Moteur brushless sensorless 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['EzRun 3660 G2 4000KV', '30401651', 'Moteur brushless sensorless 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['EzRun 3665', 'Référence à vérifier', 'Famille moteur; SKU exact dépend du KV et du marché.', 'https://www.hobbywingdirect.com/collections/hw-brushless-motor'],
    ['EzRun 4268 2200KV', '30402650', 'Moteur brushless; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['Justock 3650 G2.1 17.5T', '30408050', 'Moteur sensored stock 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['Justock 3650 G2.1 21.5T', '30408051', 'Moteur sensored stock 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['Justock 3650 G2 13.5T', '30408020', 'Moteur sensored stock 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['Justock 3650 G2 17.5T', '30408021', 'Moteur sensored stock 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['Justock 3650 G2 21.5T', '30408022', 'Moteur sensored stock 1/10; référence constructeur confirmée.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['XeRun AXE 540', 'KV selon variante', 'Moteur crawler sensored FOC; références exactes selon KV / génération / gamme.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'],
    ['XeRun AXE 550', 'Référence selon variante', 'Famille crawler; vérifier la version (R2/R3) avant achat.', 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors']
  ];
  try {
    if (localStorage.getItem(seedVersion)) return;
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const list = Array.isArray(stored) ? stored : [];
    products.forEach(([name, reference, detail, url], index) => {
      const item = { brand:'Hobbywing', category:'Moteur', name, reference, detail, url, id:`seed-hobbywing-motor-v2-${index}`, addedAt:new Date().toISOString() };
      if (!list.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) list.push(item);
    });
    localStorage.setItem(key, JSON.stringify(list));
    localStorage.setItem(seedVersion, 'true');
  } catch (error) { console.error('Échec ajout des moteurs Hobbywing G3/G4', error); }
})();
