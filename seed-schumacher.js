(() => {
  // Schumacher 1/10 buggy tires: seed the personal library once so they are usable in setup selectors.
  const key = 'rc-setup-materials-v1';
  const seededKey = 'rc-setup-schumacher-tires-seeded-v1';
  if (localStorage.getItem(seededKey)) return;
  const tires = [
    ['Mini Dart — avant 4x2', 'U6830', 'Avant 2WD, buggy 1/10. Confirmer le composé et la version avant achat.'],
    ['Cactus Fusion 2 — avant 4x4', 'U6895', 'Avant 4WD, buggy 1/10. Référence à vérifier selon montage/composé.'],
    ['Cactus Fusion 2 — avant 4x4 monté/collé', 'U6898', 'Avant 4WD, buggy 1/10. Confirmer cette variante dans le catalogue.'],
    ['Mezzo — arrière', 'U6885', 'Arrière buggy 1/10. Vérifier le composé choisi.'],
    ['Mezzo — arrière (variante composée)', 'U6886', 'Arrière buggy 1/10. Vérifier gomme/version.'],
    ['Mezzo — avant 4x4', 'U6888', 'Avant 4WD, buggy 1/10. Vérifier le composé.'],
    ['Mini Spike 2 — avant 4WD', 'U6517', 'Avant 4WD, buggy 1/10. Vérifier l’insert et le composé.'],
    ['Mini Spike 2 — arrière', 'U6518', 'Arrière buggy 1/10. Vérifier l’insert et le composé.'],
    ['Cut Stagger Low Profile — avant 2WD', 'U6770', 'Avant 2WD, buggy 1/10. Variante selon composé.'],
    ['Cut Stagger Low Profile — avant 2WD (variante)', 'U6775', 'Avant 2WD, buggy 1/10. Confirmer composé/version.'],
    ['Fusion Slim — avant 2WD', 'U6901', 'Avant 2WD, buggy 1/10. Vérifier gomme et génération.'],
    ['Fusion Slim — avant 2WD (variante)', 'U6902', 'Avant 2WD, buggy 1/10. Vérifier gomme et génération.'],
    ['Cactus — arrière 2WD', 'U6838', 'Arrière 2WD, buggy 1/10. Vérifier gomme et version.'],
    ['Splinter Slim — avant 2WD jaune', 'U6906Y', 'Avant 2WD, buggy 1/10. Code composé à confirmer.'],
    ['Splinter Slim — avant 2WD silver', 'U6908S', 'Avant 2WD, buggy 1/10. Code composé à confirmer.'],
    ['Azami — arrière', 'U6905', 'Arrière buggy 1/10. Vérifier composé/version.'],
    ['Azami — arrière (variante)', 'U6912', 'Arrière buggy 1/10. Vérifier composé/version.']
  ].map(([name, reference, detail]) => ({brand:'Schumacher', category:'Pneus / roues', name, reference, detail, url:'https://www.racing-cars.com/wheels-tyres'}));
  try {
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    const list = Array.isArray(current) ? current : [];
    for (const tire of tires) {
      if (!list.some((item) => item.brand === tire.brand && item.name === tire.name && item.reference === tire.reference)) {
        list.push({...tire, id:`seed-schumacher-${tire.reference}`, addedAt:new Date().toISOString()});
      }
    }
    localStorage.setItem(key, JSON.stringify(list));
    localStorage.setItem(seededKey, 'true');
  } catch (error) {
    console.error('Échec ajout bibliothèque Schumacher', error);
  }
})();
