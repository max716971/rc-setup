(() => {
  // Schumacher 1/10 buggy tire reference index (position and compound explicitly labelled).
  // Catalogues and retailer listings can vary by generation; ambiguous/non-confirmed SKUs are intentionally omitted.
  const storageKey = 'rc-setup-materials-v1';
  const seedVersionKey = 'rc-setup-schumacher-tires-seed-v2';
  const sourceUrl = 'https://www.racing-cars.com/tyres-wheels';
  const rows = [
    ['U6770', 'Cut Stagger Low Profile', 'Avant 2WD', 'Jaune'],
    ['U6775', 'Cut Stagger Low Profile', 'Avant 2WD', 'Silver'],
    ['U6901', 'Fusion Slim', 'Avant 2WD', 'Jaune'],
    ['U6906', 'Splinter Slim', 'Avant 2WD', 'Jaune'],
    ['U6908', 'Splinter Slim', 'Avant 2WD', 'Silver'],
    ['U6885', 'Mezzo', 'Arrière', 'Jaune'],
    ['U6886', 'Mezzo', 'Arrière', 'Silver'],
    ['U6887', 'Mezzo', 'Arrière', 'Bleu'],
    ['U6888', 'Mezzo', 'Avant 4WD', 'Jaune'],
    ['U6889', 'Mezzo', 'Avant 4WD', 'Silver'],
    ['U6890', 'Mezzo', 'Avant 4WD', 'Bleu'],
    ['U6838', 'Cactus', 'Arrière', 'Jaune'],
    ['U6839', 'Cactus pré-monté', 'Arrière', 'Jaune'],
    ['U6895', 'Cactus Fusion 2', 'Avant 4WD', 'Jaune'],
    ['U6905', 'Azami', 'Arrière', 'Jaune'],
    ['U6912', 'Azami pré-monté', 'Arrière', 'Jaune'],
    ['U6907', 'Shard', 'Avant 4WD', 'Jaune'],
    ['U6557', 'Mini Spike 2', 'Avant 4WD', 'Jaune'],
    ['U6558', 'Mini Spike 2', 'Arrière', 'Jaune'],
    ['U6779', 'Mini Pin', 'Avant 2WD', 'Jaune'],
    ['U6602', 'Mini Pin', 'Arrière', 'Composé à confirmer'],
    ['U6608', 'Mini Pin', 'Arrière', 'Composé à confirmer'],
    ['U6778', 'Mini Pin', 'Arrière', 'Composé à confirmer'],
    ['U6771', 'Cut Stagger', 'Avant 2WD', 'Green'],
    ['U6776', 'Cut Stagger', 'Avant 2WD', 'Bleu'],
    ['U6785', 'Block', 'Arrière', 'Composé à confirmer'],
    ['U6786', 'Block', 'Arrière', 'Composé à confirmer'],
    ['U6787', 'Block', 'Avant 4WD', 'Composé à confirmer'],
    ['U6595', 'Full Spike', 'Avant 4WD', 'Composé à confirmer'],
    ['U6596', 'Full Spike', 'Arrière', 'Composé à confirmer'],
    ['U6859', 'Honeycomb', 'Avant 2WD', 'Jaune'],
    ['U6861', 'Honeycomb', 'Avant 4WD', 'Jaune'],
    ['U6863', 'Honeycomb', 'Arrière', 'Jaune'],
    ['U6831', 'Mini Dart', 'Avant 4WD', 'Silver'],
    ['U6829', 'Mini Dart', 'Arrière', 'Bleu'],
    ['U6835', 'Mini Dart', 'Arrière', 'Jaune']
  ].map(([reference, model, position, compound]) => ({
    brand: 'Schumacher',
    category: 'Pneus / roues',
    name: `${model} — ${position} — ${compound}`,
    reference,
    detail: `Buggy 1/10 · Position : ${position} · Composé : ${compound}. Contrôle la version et la disponibilité du fabricant avant achat.`,
    url: sourceUrl,
    id: `seed-schumacher-v2-${reference}`,
    addedAt: new Date().toISOString()
  }));

  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const items = Array.isArray(existing) ? existing : [];
    // Replace prior auto-seeded entries (including earlier position/compound-ambiguous entries),
    // without deleting manually added user products or unrelated saved items.
    const kept = items.filter((item) => !String(item.id || '').startsWith('seed-schumacher-'));
    for (const tire of rows) {
      if (!kept.some((item) => item.brand === tire.brand && item.reference === tire.reference && item.name === tire.name)) kept.push(tire);
    }
    localStorage.setItem(storageKey, JSON.stringify(kept));
    localStorage.setItem(seedVersionKey, 'true');
  } catch (error) {
    console.error('Échec de mise à jour des références Schumacher', error);
  }
})();
