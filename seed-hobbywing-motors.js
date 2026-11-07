(() => {
  const key = 'rc-setup-materials-v1';
  const seedVersion = 'rc-setup-hobbywing-motors-v1';
  const sources = {
    xerun: 'https://www.hobbywingdirect.com/collections/xerun-v10-g4',
    carMotors: 'https://www.hobbywingdirect.com/collections/hw-brushless-motor',
    global: 'https://www.hobbywing.com/list.php?c=RC%20Car%20Motors'
  };
  const products = [
    // Exact manufacturer item numbers copied from Hobbywing product/catalog listings where available.
    ['XeRun V10 G4 13.5T','30401140','Moteur brushless compétition 1/10. Référence issue d’un listing constructeur; confirmer variante/région.',sources.xerun],
    ['XeRun V10 G4 17.5T','30401141','Moteur brushless compétition 1/10. Référence issue d’un listing constructeur; confirmer variante/région.',sources.xerun],
    ['XeRun V10 G4 21.5T','30401142','Moteur brushless compétition 1/10. Référence issue d’un listing constructeur; confirmer variante/région.',sources.xerun],
    ['XeRun V10 G4R 13.5T','Référence à vérifier','Version G4R stock 1/10; référence exacte à confirmer selon marché et homologation.',sources.xerun],
    ['XeRun V10 G4R 17.5T','Référence à vérifier','Version G4R stock 1/10; référence exacte à confirmer selon marché et homologation.',sources.xerun],
    ['XeRun V10 G4R 21.5T','Référence à vérifier','Version G4R stock 1/10; référence exacte à confirmer selon marché et homologation.',sources.xerun],
    ['XeRun 4268SD G3 1900KV','30402611','Moteur brushless sensored 1/8; référence/variante à vérifier sur la fiche du produit.',sources.global],
    ['XeRun 4268SD G3 2200KV','30402612','Moteur brushless sensored 1/8; référence/variante à vérifier sur la fiche du produit.',sources.global],
    ['XeRun 4274SD G3 2000KV','30402712','Moteur brushless sensored 1/8; vérifier compatibilité châssis et ESC.',sources.global],
    ['XeRun 4274SD G3 2250KV','30402713','Moteur brushless sensored 1/8; vérifier compatibilité châssis et ESC.',sources.global],
    ['EzRun 3652 G2 3250KV','30401550','Moteur brushless sensorless; vérifier la version et le format moteur.',sources.global],
    ['EzRun 3652 G2 4000KV','30401551','Moteur brushless sensorless; vérifier la version et le format moteur.',sources.global],
    ['EzRun 3660 G2 3200KV','30401650','Moteur brushless sensorless; vérifier la version et le format moteur.',sources.global],
    ['EzRun 3660 G2 4000KV','30401651','Moteur brushless sensorless; vérifier la version et le format moteur.',sources.global],
    ['EzRun 3665','Référence à vérifier','Famille 1/10; références dépendent de la génération et du KV.',sources.carMotors],
    ['EzRun 4268 2200KV','30402650','Moteur brushless; vérifier la génération et la compatibilité avec ESC.',sources.global],
    ['EzRun 4274','KV et référence à choisir','Famille moteur; SKU/KV à sélectionner selon voiture et génération.',sources.carMotors],
    ['Justock 3650 G2.1 17.5T','30408050','Moteur sensored stock 1/10; confirmer la version de gamme.',sources.global],
    ['Justock 3650 G2.1 21.5T','30408051','Moteur sensored stock 1/10; confirmer la version de gamme.',sources.global],
    ['Justock 3650 G2 13.5T','30408020','Moteur sensored stock 1/10; vérifier génération/région.',sources.global],
    ['Justock 3650 G2 17.5T','30408021','Moteur sensored stock 1/10; vérifier génération/région.',sources.global],
    ['Justock 3650 G2 21.5T','30408022','Moteur sensored stock 1/10; vérifier génération/région.',sources.global],
    ['XeRun AXE 540 crawler','KV à choisir','Moteur crawler sensored FOC; variantes 2700/3300KV rapportées, vérifier combo et génération.',sources.global],
    ['XeRun AXE 550 crawler','KV/référence à vérifier','Famille crawler; choisir taille/KV et version R2/R3 selon ESC.',sources.global],
    ['QuicRun Fusion / Fusion Pro','Combo moteur + ESC; référence à vérifier','Système crawler intégré 2-en-1; plusieurs tailles et générations.',sources.global]
  ];
  try {
    if (localStorage.getItem(seedVersion)) return;
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const list = Array.isArray(stored) ? stored : [];
    products.forEach(([name, reference, detail, url], index) => {
      const item = { brand:'Hobbywing', category:'Moteur', name, reference, detail, url, id:`seed-hobbywing-motor-v1-${index}`, addedAt:new Date().toISOString() };
      if (!list.some(existing => existing.id === item.id || (existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference))) list.push(item);
    });
    localStorage.setItem(key, JSON.stringify(list));
    localStorage.setItem(seedVersion, 'true');
  } catch (error) { console.error('Échec ajout des moteurs Hobbywing', error); }
})();
