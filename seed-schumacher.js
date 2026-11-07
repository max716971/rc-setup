(() => {
  // Schumacher tire reference list compiled from manufacturer and specialist-retailer listings.
  // Retailer SKUs/position/compound can conflict by generation; uncertainty is shown per entry.
  const storageKey = 'rc-setup-materials-v1';
  const seedPrefix = 'seed-schumacher-';
  const source = 'https://www.racing-cars.com/tyres-wheels';
  const amain = 'https://www.amainhobbies.com/schumacher-tire/s?cID=17862';
  const rows = [
    // Product pages found in retailer results; SKU, position and compound explicitly listed.
    ['SCHU6909','Splinter Slim — Avant 2WD — Bleu','Avant 2WD','Bleu', '1/10 buggy. Listing retailer; confirm current Schumacher code.', 'https://www.amainhobbies.com/schumacher-splinter-2.2-slim-ultralow-profile-front-2wd-buggy-tires-2-blue-schu6909/p1571800'],
    ['SCHU6859','Honeycomb — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Listing retailer; confirm current Schumacher code.', 'https://www.amainhobbies.com/schumacher-honeycomb-2.2-1-10-2wd-buggy-front-tires-2-yellow-schu6859/p846488'],
    ['SCHU6888','Mezzo — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Listing retailer; confirm compound variants.', 'https://www.amainhobbies.com/schumacher-mezzo-1-10-4wd-buggy-front-tires-2-yellow-schu6888/p1281472'],
    ['SCHU6595','Full Spike — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Listing retailer; other compounds may exist.', 'https://www.amainhobbies.com/schumacher-full-spike-2.2-1-10-4wd-buggy-front-tires-2-yellow-schu6595/p362293'],
    ['SCHU6839','Cactus — Arrière — Jaune pré-monté','Arrière 2WD/4WD','Jaune pré-monté','1/10 buggy. Retailer listing describes pre-mounted carpet tire.', 'https://www.amainhobbies.com/schumacher-cactus-2.2-rear-1-10-buggy-premounted-carpet-tire-2-yellow-schu6839/p700369'],
    ['SCHU6887','Mezzo — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Retailer listing; check variant and stock.', amain],
    ['SCHU6596','Full Spike — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Retailer listing; check variant and stock.', amain],

    // Additional U-codes transcribed from specialist tire tables and retailer listings.
    // Codes where sources disagree or do not make mounted/compound version clear are marked to verify.
    ['U6770','Cut Stagger Low Profile — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Specialist-table listing; verify SKU/compound.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6775','Cut Stagger Low Profile — Avant 2WD — Silver','Avant 2WD','Silver','1/10 buggy. Specialist-table listing; verify SKU/compound.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6901','Fusion Slim — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Specialist retailer listing.', 'https://www.rsrclab.com/fr/pneus-schumacher/18898-pneus-fusion-slim-avant-2wd.html'],
    ['U6902','Fusion Slim — Avant 2WD — composé à confirmer','Avant 2WD','À confirmer','1/10 buggy. Some listings associate this code to an alternate compound; verify before purchase.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6906','Splinter Slim — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Verify current generation and exact compound.', 'https://www.speedrc.fr/fr/37_pneus-schumacher'],
    ['U6908','Splinter Slim — Avant 2WD — Silver','Avant 2WD','Silver','1/10 buggy. Verify current generation and exact compound.', 'https://www.speedrc.fr/fr/37_pneus-schumacher'],
    ['U6909','Splinter Slim — Avant 2WD — Bleu','Avant 2WD','Bleu','1/10 buggy. Retailer product listing uses SCHU6909; U-code may vary by market.', 'https://www.amainhobbies.com/schumacher-splinter-2.2-slim-ultralow-profile-front-2wd-buggy-tires-2-blue-schu6909/p1571800'],
    ['U6885','Mezzo — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Specialist-table listing; verify exact variant.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6886','Mezzo — Arrière — Silver','Arrière 2WD/4WD','Silver','1/10 buggy. Specialist-table listing; verify exact variant.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6887','Mezzo — Arrière — Bleu','Arrière 2WD/4WD','Bleu','1/10 buggy. Compound attribution differs across listings; confirm product page.', amain],
    ['U6888','Mezzo — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Retailer product page confirms this variant.', 'https://www.amainhobbies.com/schumacher-mezzo-1-10-4wd-buggy-front-tires-2-yellow-schu6888/p1281472'],
    ['U6889','Mezzo — Avant 4WD — Silver','Avant 4WD','Silver','1/10 buggy. Specialist-table listing; verify current availability.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6890','Mezzo — Avant 4WD — Bleu','Avant 4WD','Bleu','1/10 buggy. Specialist-table listing; verify current availability.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6838','Cactus — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Specialist retailer listing.', 'https://www.speedrc.fr/fr/accueil/29010-2p-shumacher-cactus-jaune-2wd-arriere.html'],
    ['U6839','Cactus — Arrière — Jaune pré-monté','Arrière 2WD/4WD','Jaune pré-monté','1/10 buggy carpet tire; listing says pre-mounted.', 'https://www.amainhobbies.com/schumacher-cactus-2.2-rear-1-10-buggy-premounted-carpet-tire-2-yellow-schu6839/p700369'],
    ['U6895','Cactus Fusion 2 — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Specialist tables; confirm unmounted/mounted version.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6898','Cactus Fusion 2 — Avant 4WD — version à confirmer','Avant 4WD','À confirmer','1/10 buggy. Reported alternate/mounted SKU; verify exact product before purchase.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6905','Azami — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Specialist retailer listing; verify current version.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6912','Azami — Arrière — pré-monté / composé à confirmer','Arrière 2WD/4WD','À confirmer','1/10 buggy. Reported alternate listing; confirm mounted status and compound.', 'https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['U6907','Shard — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Specialist-table listing; verify generation.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6517','Mini Spike 2 — Avant — composé à confirmer','Avant 4WD?','À confirmer','1/10 buggy. Conflicting tables give different SKU/position; verify before use.', 'https://www.rccarshop.co.uk/schumacher-1-10-buggy-tyres'],
    ['U6518','Mini Spike 2 — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. Conflicting tables give different SKU/position; verify before use.', 'https://www.rccarshop.co.uk/schumacher-1-10-buggy-tyres'],
    ['U6557','Mini Spike 2 — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Retailer/reference-table listing; verify against current catalogue.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6558','Mini Spike 2 — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Retailer/reference-table listing; verify against current catalogue.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6779','Mini Pin — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Specialist-table listing; verify current generation.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6602','Mini Pin — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. Code reported in specialist lists; exact version/compound unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6608','Mini Pin — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. Code reported in specialist lists; exact version/compound unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6778','Mini Pin — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. Code reported in specialist lists; exact version/compound unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6771','Cut Stagger — Avant 2WD — Green','Avant 2WD','Green','1/10 buggy. Specialist-table listing; verify SKU and current availability.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6776','Cut Stagger — Avant 2WD — Bleu','Avant 2WD','Bleu','1/10 buggy. Specialist-table listing; verify SKU and current availability.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6785','Block — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. SKU/compound from retailer table; product generation unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6786','Block — Arrière — composé à confirmer','Arrière','À confirmer','1/10 buggy. SKU/compound from retailer table; product generation unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6787','Block — Avant 4WD — composé à confirmer','Avant 4WD','À confirmer','1/10 buggy. SKU/compound from retailer table; product generation unclear.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6859','Honeycomb — Avant 2WD — Jaune','Avant 2WD','Jaune','1/10 buggy. Retailer product listing confirms position and compound.', 'https://www.amainhobbies.com/schumacher-honeycomb-2.2-1-10-2wd-buggy-front-tires-2-yellow-schu6859/p846488'],
    ['U6861','Honeycomb — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Specialist-table listing; verify current SKU.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6863','Honeycomb — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Specialist-table listing; verify current SKU.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6595','Full Spike — Avant 4WD — Jaune','Avant 4WD','Jaune','1/10 buggy. Retailer product page confirms position and compound.', 'https://www.amainhobbies.com/schumacher-full-spike-2.2-1-10-4wd-buggy-front-tires-2-yellow-schu6595/p362293'],
    ['U6596','Full Spike — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Retailer category listing; verify compound variants.', 'https://www.amainhobbies.com/schumacher-tire/s?cID=17862'],
    ['U6830','Mini Dart — Avant 2WD — composé à confirmer','Avant 2WD?','À confirmer','1/10 buggy. Position differs between retailer/table entries; treat as uncertain.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6831','Mini Dart — Avant 4WD — Silver','Avant 4WD','Silver','1/10 buggy. Specialist-table listing; verify generation.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6829','Mini Dart — Arrière — Bleu','Arrière 2WD/4WD','Bleu','1/10 buggy. Conflicts with some seller pages that associate this code to another family; verify before purchase.', 'https://www.racing-cars.com/tyres-wheels'],
    ['U6835','Mini Dart — Arrière — Jaune','Arrière 2WD/4WD','Jaune','1/10 buggy. Specialist-table listing; verify generation.', 'https://www.racing-cars.com/tyres-wheels']
  ];
  const entries = rows.map(([reference, name, position, compound, note, url]) => ({
    brand: 'Schumacher', category: 'Pneus / roues', name, reference,
    detail: `Échelle : buggy 1/10 · Position : ${position} · Composé : ${compound}. ${note}`,
    url, id: `${seedPrefix}v3-${reference}`, addedAt: new Date().toISOString()
  }));
  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const list = (Array.isArray(existing) ? existing : []).filter(item => !String(item.id || '').startsWith(seedPrefix));
    for (const entry of entries) list.push(entry);
    localStorage.setItem(storageKey, JSON.stringify(list));
    localStorage.setItem('rc-setup-schumacher-tires-seed-v3', 'true');
  } catch (error) {
    console.error('Échec ajout références Schumacher', error);
  }
})();
