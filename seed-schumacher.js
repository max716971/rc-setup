(() => {
  // Broad RC reference starter library for brands requested by the user.
  // These are catalog leads, not a guarantee of current stock or complete manufacturer coverage.
  // Exact SKU/specification is marked in the detail when it may vary by scale, compound, generation, or bottle size.
  const storageKey = 'rc-setup-materials-v1';
  const versionKey = 'rc-setup-multibrand-seed-v1';
  const rows = [
    // Schumacher 1/10 buggy tires: exact position and compound included where reported by product listings.
    ['Schumacher','Pneus / roues','Splinter Slim 2.2 — avant 2WD — Bleu','SCHU6909','1/10 buggy · avant 2WD · bleu. Revendeur listing; variantes de gomme/génération possibles.','https://www.amainhobbies.com/schumacher-splinter-2.2-slim-ultralow-profile-front-2wd-buggy-tires-2-blue-schu6909/p1571800'],
    ['Schumacher','Pneus / roues','Honeycomb 2.2 — avant 2WD — Jaune','SCHU6859','1/10 buggy · avant 2WD · jaune.','https://www.amainhobbies.com/schumacher-honeycomb-2.2-1-10-2wd-buggy-front-tires-2-yellow-schu6859/p846488'],
    ['Schumacher','Pneus / roues','Mezzo — avant 4WD — Jaune','SCHU6888','1/10 buggy · avant 4WD · jaune.','https://www.amainhobbies.com/schumacher-mezzo-1-10-4wd-buggy-front-tires-2-yellow-schu6888/p1281472'],
    ['Schumacher','Pneus / roues','Full Spike 2.2 — avant 4WD — Jaune','SCHU6595','1/10 buggy · avant 4WD · jaune.','https://www.amainhobbies.com/schumacher-full-spike-2.2-1-10-4wd-buggy-front-tires-2-yellow-schu6595/p362293'],
    ['Schumacher','Pneus / roues','Cactus 2.2 — arrière — Jaune pré-monté','SCHU6839','1/10 buggy · arrière · jaune prémonté pour moquette.','https://www.amainhobbies.com/schumacher-cactus-2.2-rear-1-10-buggy-premounted-carpet-tire-2-yellow-schu6839/p700369'],
    ['Schumacher','Pneus / roues','Mezzo — arrière — Jaune','SCHU6887','1/10 buggy · arrière · jaune. Vérifier la variante exacte.','https://www.amainhobbies.com/schumacher-tire/s?cID=17862'],
    ['Schumacher','Pneus / roues','Full Spike 2.2 — arrière — Jaune','SCHU6596','1/10 buggy · arrière · jaune. Vérifier la variante exacte.','https://www.amainhobbies.com/schumacher-tire/s?cID=17862'],
    ['Schumacher','Pneus / roues','Cut Stagger Low Profile — avant 2WD — Jaune','U6770','1/10 buggy · avant 2WD · jaune (table de spécialiste, confirmer la référence).','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Cut Stagger Low Profile — avant 2WD — Silver','U6775','1/10 buggy · avant 2WD · silver (table de spécialiste, confirmer la référence).','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Fusion Slim — avant 2WD — Jaune','U6901','1/10 buggy · avant 2WD · jaune.','https://www.rsrclab.com/fr/pneus-schumacher/18898-pneus-fusion-slim-avant-2wd.html'],
    ['Schumacher','Pneus / roues','Fusion Slim — avant 2WD — variante','U6902','1/10 buggy · avant 2WD · composé à vérifier.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Splinter Slim — avant 2WD — Jaune','U6906','1/10 buggy · avant 2WD · jaune rapporté; confirmer code/génération.','https://www.speedrc.fr/fr/37_pneus-schumacher'],
    ['Schumacher','Pneus / roues','Splinter Slim — avant 2WD — Silver','U6908','1/10 buggy · avant 2WD · silver rapporté; confirmer code/génération.','https://www.speedrc.fr/fr/37_pneus-schumacher'],
    ['Schumacher','Pneus / roues','Mezzo — arrière — Jaune','U6885','1/10 buggy · arrière · jaune. Vérifier gamme en cours.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Mezzo — arrière — Silver','U6886','1/10 buggy · arrière · silver rapporté; à confirmer.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Mezzo — arrière — Bleu','U6887','1/10 buggy · arrière · bleu rapporté; variantes selon catalogue.','https://www.amainhobbies.com/schumacher-tire/s?cID=17862'],
    ['Schumacher','Pneus / roues','Mezzo — avant 4WD — Silver','U6889','1/10 buggy · avant 4WD · silver rapporté; à confirmer.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Mezzo — avant 4WD — Bleu','U6890','1/10 buggy · avant 4WD · bleu rapporté; à confirmer.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Cactus — arrière 2WD — Jaune','U6838','1/10 buggy · arrière 2WD · jaune.','https://www.speedrc.fr/fr/accueil/29010-2p-shumacher-cactus-jaune-2wd-arriere.html'],
    ['Schumacher','Pneus / roues','Cactus Fusion 2 — avant 4WD — Jaune','U6895','1/10 buggy · avant 4WD · jaune, confirmer version non montée/prémontée.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Cactus Fusion 2 — avant 4WD — variante','U6898','1/10 buggy · avant 4WD · variante signalée, montage/composé à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Azami — arrière — Jaune','U6905','1/10 buggy · arrière · jaune rapporté; à confirmer.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Azami — arrière — variante','U6912','1/10 buggy · arrière · composé/montage à vérifier.','https://www.rsrclab.com/fr/30-pneus-schumacher'],
    ['Schumacher','Pneus / roues','Shard — avant 4WD — Jaune','U6907','1/10 buggy · avant 4WD · rapporté, confirmer génération.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Spike 2 — avant 4WD — Jaune','U6557','1/10 buggy · avant 4WD · table/revendeur, confirmer au catalogue actuel.','https://www.rccarshop.co.uk/schumacher-1-10-buggy-tyres'],
    ['Schumacher','Pneus / roues','Mini Spike 2 — arrière — Jaune','U6558','1/10 buggy · arrière · table/revendeur, confirmer au catalogue actuel.','https://www.rccarshop.co.uk/schumacher-1-10-buggy-tyres'],
    ['Schumacher','Pneus / roues','Mini Pin — avant 2WD — Jaune','U6779','1/10 buggy · avant 2WD · référence rapportée, vérifier.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Pin — arrière — variante','U6602','1/10 buggy · arrière · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Pin — arrière — variante','U6608','1/10 buggy · arrière · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Pin — arrière — variante','U6778','1/10 buggy · arrière · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Cut Stagger — avant 2WD — Green','U6771','1/10 buggy · avant 2WD · vert rapporté; vérifier disponibilité.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Cut Stagger — avant 2WD — Bleu','U6776','1/10 buggy · avant 2WD · bleu rapporté; vérifier disponibilité.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Block — arrière — variante','U6785','1/10 buggy · arrière · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Block — arrière — variante','U6786','1/10 buggy · arrière · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Block — avant 4WD — variante','U6787','1/10 buggy · avant 4WD · composé/génération à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Honeycomb — avant 4WD — Jaune','U6861','1/10 buggy · avant 4WD · jaune, table de spécialiste à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Honeycomb — arrière — Jaune','U6863','1/10 buggy · arrière · jaune, table de spécialiste à confirmer.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Dart — avant 4WD — Silver','U6831','1/10 buggy · avant 4WD · silver rapporté; génération à vérifier.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Dart — arrière — Bleu','U6829','1/10 buggy · arrière · bleu rapporté; certaines listes divergent.','https://www.racing-cars.com/wheels-tyres'],
    ['Schumacher','Pneus / roues','Mini Dart — arrière — Jaune','U6835','1/10 buggy · arrière · jaune rapporté; génération à vérifier.','https://www.racing-cars.com/wheels-tyres'],

    // Hobbywing motors and ESCs: selected SKUs and common model families; variants by KV, turn, scale, and revision.
    ['Hobbywing','Variateur (ESC)','XeRun XR10 Pro Legacy','30112800','ESC sensored 1/10; référence de la version legacy. Vérifier révision.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Variateur (ESC)','XeRun XR10 Pro G2S','30112609','ESC compétition 1/10; confirmer SKU régional et révision.','https://www.hobbywing.com/goods.php?id=716&pid=1'],
    ['Hobbywing','Variateur (ESC)','XR10 Justock G3','30112003','ESC stock 1/10; vérifier règles de course et variante.','https://www.hobbywing.com/goods.php?id=726&pid=1'],
    ['Hobbywing','Variateur (ESC)','XeRun XR8 Plus G2S','30113305','ESC compétition 1/8; confirmer génération/connecteurs.','https://www.hobbywing.com/goods.php?id=750&pid=0'],
    ['Hobbywing','Variateur (ESC)','EzRun MAX10 G2S 80A','30102700','ESC 1/10; vérifier version exacte.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Variateur (ESC)','EzRun MAX10 G2S 140A','30102500','ESC 1/10; vérifier version exacte.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Variateur (ESC)','QuicRun WP 10BL80 Crawler','30108002','ESC crawler; vérifier tension et compatibilité moteur.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Variateur (ESC)','QuicRun 10BL60 Sensored G2','30108001','ESC sensored; vérifier révision.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Variateur (ESC)','QuicRun WP 10BL60','30109000','Famille ESC QuicRun; numéro à recouper selon version/région.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Moteur','XeRun V10 G4 4.5T','30401159','Moteur 1/10 stock/mod; vérifier fiche et compatibilité.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun V10 G4 5.5T','30401161','Moteur 1/10; référence selon winding.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun V10 G4 6.5T','Référence selon bobinage','Famille 1/10; références exactes par nombre de tours, génération et marché.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun V10 G4 7.5T','Référence selon bobinage','Famille 1/10; références exactes par nombre de tours, génération et marché.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun V10 G4 8.5T','Référence selon bobinage','Famille 1/10; références exactes par nombre de tours, génération et marché.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun V10 G4 10.5T','Référence selon bobinage','Famille 1/10; références exactes par nombre de tours, génération et marché.','https://www.hobbywing.com/goods.php?id=718&pid=1'],
    ['Hobbywing','Moteur','XeRun 4268SD G3 1900KV','30402653','Moteur 1/8; vérifier nombre de pôles, KV et révision.','https://www.hobbywing.com/goods.php?id=699&pid=1'],
    ['Hobbywing','Moteur','Justock G2.1 10.5T','30408010','Moteur stock 1/10; vérifier version.','https://www.hobbywing.com/goods.php?id=719&pid=1'],
    ['Hobbywing','Moteur','EzRun 3660 / 3665 G3','KV à choisir','Moteurs 1/10; référence varie avec taille, KV et génération.','https://www.hobbywing.com/en/rc-systems'],
    ['Hobbywing','Moteur','XeRun AXE crawler','KV à choisir','Gamme crawler; moteurs et combos dépendent de la transmission/échelle.','https://www.hobbywing.com/en/rc-systems'],

    // XRAY, HUDY, Team Associated, Donuts Racing: oil families/viscosities. Exact bottle numbers may differ by market/package.
    ...['100 cSt','200 cSt','300 cSt','350 cSt','400 cSt','500 cSt','600 cSt','700 cSt','800 cSt','900 cSt','1000 cSt','1500 cSt','2000 cSt','2500 cSt','3000 cSt','3500 cSt','4000 cSt','5000 cSt','6000 cSt','7000 cSt','8000 cSt','10000 cSt','15000 cSt','20000 cSt','30000 cSt','50000 cSt'].map(v => ['XRAY','Huile amortisseur',`Premium Silicone Shock Oil ${v}`,`Viscosité ${v}`,'Viscosité indicative; référence de bouteille à vérifier selon catalogue XRAY, unité cSt.','https://www.teamxray.com/eshop/']),
    ...['100 cSt','200 cSt','300 cSt','350 cSt','400 cSt','500 cSt','600 cSt','700 cSt','800 cSt','900 cSt','1000 cSt','1500 cSt','2000 cSt','2500 cSt','3000 cSt','3500 cSt','4000 cSt','5000 cSt','6000 cSt','7000 cSt','8000 cSt','10000 cSt','15000 cSt','20000 cSt','30000 cSt','50000 cSt'].map(v => ['HUDY','Huile amortisseur',`Premium Silicone Oil ${v}`,`Viscosité ${v}`,'Famille de viscosité HUDY; numéro de produit et disponibilité à confirmer par format.','https://www.hudy.net/hudy_products.php?kategoria=12&katName=Oils%20%26%20Lubricants&podkategoria=125']),
    ...['10 wt','15 wt','20 wt','25 wt','27.5 wt','30 wt','32.5 wt','35 wt','37.5 wt','40 wt','42.5 wt','45 wt','50 wt','55 wt','60 wt'].map(v => ['Team Associated','Huile amortisseur',`Factory Team Shock Oil ${v}`,`Viscosité ${v}`,'Viscosité de gamme; SKU de bouteille à vérifier, les échelles wt et cSt ne sont pas directement équivalentes.','https://www.associatedelectrics.com/teamassociated/parts/fluids/']),
    ...['100 cSt','200 cSt','300 cSt','400 cSt','500 cSt','600 cSt','700 cSt','800 cSt','900 cSt','1000 cSt','1500 cSt','2000 cSt','2500 cSt','3000 cSt','4000 cSt','5000 cSt','6000 cSt','7000 cSt','8000 cSt','10000 cSt'].map(v => ['Donuts Racing','Huile amortisseur',`Huile silicone amortisseur ${v}`,`Viscosité ${v}`,'Entrée indicative de gamme par viscosité; référence/stock de bouteille à vérifier chez Donuts Racing.','https://www.donuts-racing.com/huiles-silicones/99-huile-amortisseur-rc.html']),
    ['XRAY','Ressort','C1.9 Springs (2)','308390','Référence rapportée; vérifier plateforme et génération.','https://www.teamxray.com/eshop/'],
    ['HUDY','Outil','Professional Allen Wrench 2.0 mm','189080','Référence d’outil rapportée.','https://www.hudy.net/'],
    ['Team Associated','Huile amortisseur','Factory Team Shock Oil 35 wt','5435','Référence rapportée; vérifier bouteille et disponibilité.','https://www.associatedelectrics.com/teamassociated/parts/fluids/'],
    ['Donuts Racing','Huile amortisseur','Huile silicone amortisseur RC','Viscosité à choisir','Entrée générique pour retrouver la gamme; saisir la viscosité exacte du flacon.','https://www.donuts-racing.com/huiles-silicones/99-huile-amortisseur-rc.html']
  ];
  try {
    if (localStorage.getItem(versionKey)) return;
    const current = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const items = Array.isArray(current) ? current : [];
    const stamp = new Date().toISOString();
    rows.forEach(([brand, category, name, reference, detail, url], index) => {
      if (items.some(item => item.brand === brand && item.name === name && item.reference === reference)) return;
      items.push({ brand, category, name, reference, detail, url, id: `seed-multibrand-v1-${index}`, addedAt: stamp });
    });
    localStorage.setItem(storageKey, JSON.stringify(items));
    localStorage.setItem(versionKey, 'true');
  } catch (error) {
    console.error('Échec ajout de la bibliothèque multimarque', error);
  }
})();
