(() => {
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const catalog = [
    // Hobbywing RC car ESCs and motors. Variants/bobinages are separated where a manufacturer SKU is known.
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro Legacy', reference: '30112800', detail: 'ESC brushless sensored. Vérifier révision et compatibilité constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro G2S', reference: '30112609', detail: 'ESC compétition 1/10. Vérifier révision et compatibilité moteur.', url: 'https://www.hobbywing.com/goods.php?id=716&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XR10 Justock G3', reference: '30112003', detail: 'ESC stock 1/10 ; vérifier version et règlement de course.', url: 'https://www.hobbywing.com/goods.php?id=726&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR8 Plus G2S', reference: '30113305', detail: 'ESC compétition 1/8 ; vérifier génération et connecteurs.', url: 'https://www.hobbywing.com/goods.php?id=750&pid=0' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 80A', reference: '30102700', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 140A', reference: '30102500', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL80 Crawler', reference: '30108002', detail: 'Gamme QuicRun crawler ; vérifier compatibilité.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun 10BL60 Sensored G2', reference: '30108001', detail: 'Vérifier la révision exacte.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL60', reference: '30109000', detail: 'Famille QuicRun ; confirmer la référence de la version au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4 4.5T', reference: '30401159', detail: 'Moteur compétition 1/10 ; vérifier variante et compatibilité ESC.', url: 'https://www.hobbywing.com/goods.php?id=718&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4 5.5T', reference: '30401161', detail: 'Moteur compétition 1/10 ; vérifier variante et compatibilité ESC.', url: 'https://www.hobbywing.com/goods.php?id=718&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun 4268SD G3 1900KV', reference: '30402653', detail: 'Moteur brushless 1/8 ; contrôler KV et compatibilité véhicule.', url: 'https://www.hobbywing.com/goods.php?id=699&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'Justock G2.1 10.5T', reference: '30408010', detail: 'Moteur stock 1/10 ; vérifier la combinaison ESC/moteur.', url: 'https://www.hobbywing.com/goods.php?id=719&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun V10 G4R', reference: 'Bobinage à préciser', detail: 'La référence varie selon le bobinage ; vérifier la fiche constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'EzRun 3660 / 3665 G3', reference: 'KV à préciser', detail: 'Choisir taille et KV selon le véhicule.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Programmation', name: 'LCD Program Box Pro', reference: '30502002', detail: 'Boîtier de programmation pour matériels compatibles Hobbywing.', url: 'https://www.hobbywing.com/en/rc-systems' },

    // Pneus Schumacher TT 1/10 — position explicitement indiquée d'après les références catalogue.
    ...[
      ['Mini Dart','U6825','Avant 4WD','Jaune'],['Mini Dart','U6826','Arrière 2WD/4WD','Jaune'],
      ['Mini Dart','U6828','Avant 4WD','Bleu'],['Mini Dart','U6829','Arrière 2WD/4WD','Bleu'],
      ['Mini Dart','U6831','Avant 4WD','Silver'],['Mini Dart','U6832','Arrière 2WD/4WD','Silver'],
      ['Cactus','U6838','Arrière 2WD/4WD','Jaune'],['Cactus','U6840','Avant 4WD','Jaune'],
      ['Cactus','U6842','Arrière 2WD/4WD','Silver'],['Cactus','U6843','Avant 4WD','Silver'],
      ['Cactus','U6844','Arrière 2WD/4WD','Bleu'],['Cactus','U6845','Avant 4WD','Bleu'],
      ['Wide Stagger Rib','U6810','Avant 4WD','Jaune'],['Wide Stagger Rib','U6811','Avant 4WD','Silver'],
      ['Wide Stagger Rib','U6846','Avant 4WD','Bleu'],
      ['Mini Pin 1','U6817','Arrière 2WD/4WD','Jaune'],['Mini Pin 1','U6819','Arrière 2WD/4WD','Bleu'],
      ['Mini Pin 1','U6820','Arrière 2WD/4WD','Silver'],
      ['Mini Pin 2','U6805','Arrière 2WD/4WD','Silver'],
      ['Mini Pin 2','U6821','Avant 4WD','Jaune']
    ].map(([name, reference, position, compound]) => ({
      brand: 'Schumacher', category: 'Pneus / roues',
      name: name + ' — ' + position + ' — ' + compound,
      reference, compatibility: position,
      detail: 'Paire de pneus TT 1/10. Position : ' + position + '. Gomme : ' + compound + '.',
      url: 'https://www.racing-cars.com/wheels-tyres'
    })),

    // Bibliothèque complémentaire demandée : entrées de gamme sans SKU inventé.
    // Ajouter la référence exacte du flacon lorsque le fabricant/revendeur la confirme.
    // XTR Racing — huiles silicone et graisses. Viscosités/formats relevés sur les catalogues XTR/RSRC.
    ...['10','15','20','22.5','25','27.5','30','32.5','35','37.5','40','42.5','45','47.5','50','52.5','55','57.5','60','65','70'].map(wt => ({
      brand: 'XTR Racing', category: 'Huile amortisseur',
      name: 'Huile silicone amortisseur XTR Ronnefalk — ' + wt + ' WT',
      reference: wt + ' WT — 150 ml',
      detail: 'Huile silicone pure XTR Ronnefalk Edition pour amortisseurs. Contenance catalogue : 150 ml. Référence fabricant/SKU non affichée dans la fiche consultée.',
      url: 'https://rsrc.biz/en/318-oils'
    })),
    ...['525','575'].map(cst => ({
      brand: 'XTR Racing', category: 'Huile amortisseur',
      name: 'Huile silicone amortisseur XTR — ' + cst + ' CST',
      reference: cst + ' CST — 80 ml',
      detail: 'Huile silicone pure XTR pour amortisseurs. Contenance 80 ml ; viscosité CST indiquée au catalogue constructeur.',
      url: 'https://xtr-rc.com/en/235-shock-oils'
    })),
    ...['1000','2000','12500','15000','40000','50000','60000','70000','80000','90000','100000','150000','200000','300000','400000','500000'].map(cst => ({
      brand: 'XTR Racing', category: 'Huile différentiel',
      name: 'Huile silicone différentiel XTR — ' + Number(cst).toLocaleString('fr-FR') + ' CST',
      reference: cst + ' CST — 80 ml (format à confirmer selon viscosité)',
      detail: 'Huile silicone pure XTR pour différentiel. Viscosité CST relevée dans les gammes XTR ; vérifier la contenance disponible pour cette viscosité.',
      url: 'https://xtr-rc.com/en/237-differential-oils'
    })),
    ...[
      ['Graisse transparente XTR','Clear Grease','Tiges d’amortisseurs et joints toriques'],
      ['Graisse bleue premium XTR','Blue Premium Grease','Joints toriques'],
      ['Graisse cuivre XTR','Copper Grease','Engrenages'],
      ['Graisse lithium XTR','Lithium Grease','Sorties de différentiel / outdrives']
    ].map(([name, product, use]) => ({
      brand: 'XTR Racing', category: 'Graisse',
      name, reference: '40 g',
      detail: product + ' XTR. Utilisation fabricant : ' + use + '.',
      url: 'https://xtr-rc.com/en/232-greases-lubricants'
    })),
    { brand: 'XTR Racing', category: 'Huile moteur', name: 'Huile After Run XTR', reference: 'XTR-0234 — 80 ml', detail: 'Huile de conservation après utilisation pour moteurs thermiques.', url: 'https://www.rcnest.it/en/15-oli' },
    { brand: 'XTR Racing', category: 'Huile filtre à air', name: 'Huile XTR pour filtre à air mousse', reference: 'ACE-01 — 100 ml', detail: 'Huile adhésive pour filtre à air mousse de moteur thermique.', url: 'https://www.rcnest.it/en/15-oli' },
    { brand: 'XTR Racing', category: 'Huile roulements', name: 'Huile XTR Long Life pour roulements', reference: 'XTR-0253 — 20 ml', detail: 'Lubrifiant longue durée pour roulements.', url: 'https://www.rcnest.it/en/15-oli' },
        { brand: '1UP Racing', category: 'Graisse', name: 'Graisse RC', reference: 'Référence à confirmer', detail: 'Gamme 1UP Racing ; choisir le produit selon l’application.', url: 'https://1upracing.com/' },
    { brand: 'SRT', category: 'Servo', name: 'Servo SRT', reference: 'Modèle à préciser', detail: 'Catalogue SRT : choisir couple, vitesse, tension et dimensions selon le véhicule.', url: 'https://www.srt-rc.com/' },
    { brand: 'Power HD', category: 'Servo', name: 'Servo Power HD', reference: 'Modèle à préciser', detail: 'Catalogue Power HD : choisir couple, vitesse, tension et dimensions.', url: 'https://www.powerhd.com.tw/' },
    { brand: 'Savox', category: 'Servo', name: 'SC-1258TG Black Edition', reference: 'SC-1258TG', detail: 'Servo numérique à pignons titane ; vérifier tension d’alimentation et dimensions.', url: 'https://www.savoxusa.com/' },
    // Pneus 6MIK TT 1/10 — modèles, positions, gommes et références vérifiés chez revendeurs/catalogue.
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIAL — Avant 2WD — Purple', reference: 'T113P', detail: 'Avant 2WD sur moquette/astro ; pneu AXIAL conçu pour une direction progressive. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIAL — Avant 2WD — Silver', reference: 'T113S', detail: 'Avant 2WD sur moquette/astro ; pneu AXIAL. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 2WD — Blue', reference: 'T103B', detail: 'Avant 2WD ; gomme bleue. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 2WD — Green', reference: 'T103V', detail: 'Avant 2WD ; gomme verte. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 2WD — Inter', reference: 'T103I', detail: 'Avant 2WD ; gomme intermédiaire. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 2WD — Purple', reference: 'T103P', detail: 'Avant 2WD ; gomme purple. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 2WD — Silver', reference: 'T103S', detail: 'Avant 2WD ; gomme silver. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 AXIUM — Avant 4WD — Silver', reference: 'T107S', detail: 'Avant 4WD ; gomme silver. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Blue', reference: 'TM105B', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Blue', reference: 'T105B', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Orange', reference: 'TM105O', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Silver', reference: 'TM105S', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Silver', reference: 'T105S', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Arrière — Yellow', reference: 'TI105Y', detail: 'Paire avec insert ULTRA. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH 2.0 — Avant 4WD — Blue', reference: 'TI101B', detail: 'Paire avec insert. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Arrière — Blue', reference: 'TI105B', detail: 'Paire avec insert. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Arrière — Blue', reference: 'TM102B', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Arrière — Blue', reference: 'T102B', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Arrière — Silver', reference: 'TM102S', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Arrière — Silver', reference: 'T102S', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Avant 4WD — Blue', reference: 'TM101B', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 CRUNCH — Avant 4WD — Orange', reference: 'T101O', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Blue', reference: 'TM112B', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Blue', reference: 'T112B', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Purple', reference: 'TM112P', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Purple', reference: 'T112P', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Silver', reference: 'TM112S', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Silver', reference: 'T112S', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Green', reference: 'TM112V', detail: 'Paire avec mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Green', reference: 'T112V', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Arrière — Green', reference: 'T112G', detail: 'Paire sans mousse ; référence également listée chez certains revendeurs. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Avant 4WD — Blue', reference: 'TM111B', detail: 'Paire avec mousse spécifique avant. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Avant 4WD — Silver', reference: 'TM111S', detail: 'Paire avec mousse spécifique avant. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: '6MIK', category: 'Pneus / roues', name: 'Pneu 1/10 WASABI — Avant 4WD — Silver', reference: 'T111S', detail: 'Paire sans mousse. Référence de pneu 6MIK TT 1/10 ; paire.', url: 'https://www.power-racing.fr/roues-pneus-jantes/roue-buggy-1-10/' },
    { brand: 'Schumacher', category: 'Insert pneu', name: 'Insert mousse buggy 1/10', reference: 'Modèle à préciser', detail: 'Choisir la densité et la forme selon le pneu Schumacher utilisé.', url: 'https://www.racing-cars.com/wheels-tyres' },
    { brand: '6MIK', category: 'Insert pneu', name: 'Insert pneu buggy 1/10', reference: 'Modèle à préciser', detail: 'Choisir la densité et la forme selon le pneu 6MIK utilisé.', url: 'https://www.6mik-racing.com/' },

    // Ressorts Team Associated 12 mm : taux connus pour RC10B4.2FT.
    ...[['BRN','2.85'],['BLK','3.00'],['GRN','3.15'],['WHT','3.30'],['GRY','3.45'],['BLU','3.60'],['YLW','3.75'],['RED','3.90'],['ORN','4.05'],['PRL','4.20']].map(([code,rate]) => ({ brand: 'Team Associated', category: 'Ressort', name: `Ressort avant 12 mm RC10B4.2FT — ${code}`, reference: `${rate}`, detail: `Ressort avant 12 mm ; code couleur ${code}, taux ${rate} (unité selon nomenclature du kit).`, url: 'https://www.associatedelectrics.com/teamassociated/' })),
    ...[['BLK','1.90'],['GRN','2.00'],['WHT','2.10'],['GRY','2.20'],['BLU','2.30'],['YLW','2.40']].map(([code,rate]) => ({ brand: 'Team Associated', category: 'Ressort', name: `Ressort arrière 12 mm RC10B4.2FT — ${code}`, reference: `${rate}`, detail: `Ressort arrière 12 mm ; code couleur ${code}, taux ${rate} (unité selon nomenclature du kit).`, url: 'https://www.associatedelectrics.com/teamassociated/' })),
    ...Array.from({length:12}, (_,i) => ({ brand: 'Team Associated', category: 'Ressort', name: 'Ressort RC10B6.2 — réf. ' + (91830+i), reference: String(91830+i), detail: 'Référence reprise du tableau précédent. Couleur/taux à confirmer avant utilisation ; ressorts 12 mm.', url: 'https://www.associatedelectrics.com/teamassociated/' })),
    ...Array.from({length:12}, (_,i) => ({ brand: 'Team Associated', category: 'Ressort', name: 'Ressort RC10B7 — réf. ' + (91940+i), reference: String(91940+i), detail: 'Référence reprise du tableau précédent. Couleur/taux/longueur à confirmer avant utilisation ; ressorts 13 mm.', url: 'https://www.associatedelectrics.com/teamassociated/' })),

    { brand: 'Team Associated', category: 'Huile amortisseur', name: 'Factory Team Shock Oil 35 wt', reference: '5435', detail: 'Exemple ; confirmer compatibilité et catalogue actuel.', url: 'https://www.associatedelectrics.com/teamassociated/parts/fluids/' },
  ];
  const root = document.getElementById('materialsApp');
  if (!root) return;
  let activeTab = 'catalog';
  function loadSaved() { try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
  // Move automatically seeded catalogue entries out of the personal inventory.
  const legacyPrefixes = ['seed-hobbywing-esc-v1-', 'seed-hobbywing-motors-v3-', 'seed-rsrc-xrt-oils-v3-', 'seed-associated-spring-v1-'];
  const RESET_INVENTORY_KEY = 'rc-setup-materials-reset-20261107';
  let savedItems = loadSaved();
  if (localStorage.getItem(RESET_INVENTORY_KEY) !== 'done') {
    savedItems = [];
    try { localStorage.setItem(STORAGE_KEY, '[]'); localStorage.setItem(RESET_INVENTORY_KEY, 'done'); } catch {}
  }
  const legacyCatalogItems = savedItems.filter(item => legacyPrefixes.some(prefix => String(item.id || '').startsWith(prefix)));
  for (const item of legacyCatalogItems) {
    if (!catalog.some(existing => existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference)) catalog.push({ ...item, id: undefined });
  }
  if (legacyCatalogItems.length) {
    savedItems = savedItems.filter(item => !legacyPrefixes.some(prefix => String(item.id || '').startsWith(prefix)));
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); } catch {}
  }
  function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); return true; } catch { alert('Stockage local plein : retire une fiche ou libère de l’espace.'); return false; } }
  function esc(value) { return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c]); }
  function allMaterials() { return [...catalog, ...savedItems]; }
  function materialLabel(item) { return `${item.brand} ${item.name}${item.reference ? ` — réf. ${item.reference}` : ''}`; }
  function refreshPickers() {
    document.querySelectorAll('[data-library-category]').forEach((select) => {
      const category = select.dataset.libraryCategory;
      const current = select.value;
      const items = allMaterials().filter((item) => item.category === category);
      select.innerHTML = '<option value="">Choisir dans la bibliothèque…</option>' + items.map((item) => `<option value="${esc(materialLabel(item))}">${esc(materialLabel(item))}</option>`).join('');
      if (items.some((item) => materialLabel(item) === current)) select.value = current;
    });
  }
  function render() {
    const brands = [...new Set(allMaterials().map((item) => item.brand))].sort((a,b) => a.localeCompare(b,'fr'));
    const categories = [...new Set(allMaterials().map((item) => item.category))].sort((a,b) => a.localeCompare(b,'fr'));
    root.innerHTML = `<div class="panel material-controls"><div class="material-tabs"><button type="button" class="material-tab ${activeTab === 'catalog' ? 'active' : ''}" data-tab="catalog">Bibliothèque (${catalog.length})</button><button type="button" class="material-tab ${activeTab === 'mine' ? 'active' : ''}" data-tab="mine">Mon matériel (${savedItems.length})</button></div><div class="material-filter-row"><input id="materialSearch" type="search" placeholder="Rechercher marque, référence, catégorie…"><select id="brandFilter"><option value="">Toutes les marques</option>${brands.map((v) => `<option>${esc(v)}</option>`).join('')}</select><select id="categoryFilter"><option value="">Toutes les catégories</option>${categories.map((v) => `<option>${esc(v)}</option>`).join('')}</select></div><p class="catalog-note">Les références peuvent varier selon l’échelle et la génération : vérifie la fiche fabricant.</p></div><div class="material-add-row"><button type="button" class="button button-primary" id="showMaterialForm">＋ Ajouter manuellement</button></div><form id="materialForm" class="panel material-form hidden"><h2>Ajouter à ma bibliothèque</h2><div class="material-form-grid"><label>Marque<input name="brand" required placeholder="Ex. Schumacher"></label><label>Catégorie<select name="category"><option>Pneus / roues</option><option>Huile amortisseur</option><option>Ressort</option><option>Variateur (ESC)</option><option>Moteur</option><option>Servo</option><option>Radio / récepteur</option><option>Outil</option><option>Autre</option></select></label><label>Nom<input name="name" required></label><label>Référence<input name="reference"></label><label>Quantité<input name="quantity" type="number" min="0" step="1"></label><label>Compatibilité<input name="compatibility" placeholder="Échelle / châssis"></label><label class="material-wide">Notes<textarea name="detail" rows="2"></textarea></label><label class="material-wide">Lien fiche produit<input name="url" type="url" placeholder="https://…"></label></div><div class="actions-row"><button class="button button-primary" type="submit">Enregistrer</button><button class="button button-soft" id="cancelMaterialForm" type="button">Annuler</button></div></form><div id="materialCards" class="material-grid"></div>`;
    root.querySelectorAll('.material-tab').forEach((b) => b.addEventListener('click', () => { activeTab = b.dataset.tab; render(); }));
    root.querySelector('#showMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.toggle('hidden'));
    root.querySelector('#cancelMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.add('hidden'));
    root.querySelector('#materialForm').addEventListener('submit', addItem);
    root.querySelector('#materialSearch').addEventListener('input', renderCards);
    root.querySelector('#brandFilter').addEventListener('change', renderCards);
    root.querySelector('#categoryFilter').addEventListener('change', renderCards);
    renderCards(); refreshPickers();
  }
  function renderCards() {
    const q = root.querySelector('#materialSearch').value.trim().toLocaleLowerCase('fr');
    const brand = root.querySelector('#brandFilter').value, category = root.querySelector('#categoryFilter').value;
    const list = (activeTab === 'catalog' ? catalog : savedItems).filter((x) => (!brand || x.brand === brand) && (!category || x.category === category) && (!q || [x.brand,x.category,x.name,x.reference,x.detail,x.compatibility].join(' ').toLocaleLowerCase('fr').includes(q)));
    const cards = root.querySelector('#materialCards');
    cards.innerHTML = list.length ? list.map((item) => {
      const owned = savedItems.some((x) => x.id === item.id);
      return `<article class="material-card"><div class="material-card-head"><span class="material-category">${esc(item.category)}</span><span class="material-brand">${esc(item.brand)}</span></div><h3>${esc(item.name)}</h3><div class="material-reference">Réf. <strong>${esc(item.reference || 'non indiquée')}</strong></div>${item.compatibility ? `<p>Compatibilité : ${esc(item.compatibility)}</p>` : ''}<p>${esc(item.detail || '')}</p><div class="material-card-actions">${item.url ? `<a class="button button-soft" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Fiche ↗</a>` : ''}${owned ? `<button class="button button-quiet danger-action remove-material" data-id="${esc(item.id)}" type="button">Retirer</button>` : `<button class="button button-primary save-material" data-id="${esc(item.id)}" type="button">＋ Mon matériel</button>`}</div></article>`;
    }).join('') : '<div class="empty-state material-empty"><strong>Aucun matériel trouvé</strong><span>Change les filtres ou ajoute ta référence.</span></div>';
    cards.querySelectorAll('.save-material').forEach((b) => b.addEventListener('click', () => { const x = catalog.find((i) => i.id === b.dataset.id); if (!x || savedItems.some((i) => i.brand === x.brand && i.name === x.name && i.reference === x.reference)) return; savedItems.unshift({ ...x, id: `saved-${Date.now()}-${Math.random().toString(16).slice(2,7)}` }); if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); } }));
    cards.querySelectorAll('.remove-material').forEach((b) => b.addEventListener('click', () => { savedItems = savedItems.filter((i) => i.id !== b.dataset.id); if (persist()) { render(); window.dispatchEvent(new Event('rc-materials-updated')); } }));
  }
  function addItem(event) {
    event.preventDefault(); const d = Object.fromEntries(new FormData(event.currentTarget).entries());
    savedItems.unshift({ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2,7)}`, brand: d.brand.trim(), category: d.category, name: d.name.trim(), reference: d.reference.trim(), quantity: d.quantity, compatibility: d.compatibility.trim(), detail: d.detail.trim(), url: d.url.trim() });
    if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); }
  }
  catalog.forEach((item) => { item.id = `${item.brand}|${item.reference}|${item.name}`; });
  render();

  const setupForm = document.getElementById('setupForm');
  if (!setupForm) return;
  const pickerMap = [
    ['frontTires','Pneus / roues'], ['rearTires','Pneus / roues'], ['frontShocks','Huile amortisseur'], ['rearShocks','Huile amortisseur'],
    ['springs','Ressort'], ['motor','Moteur'], ['esc','Variateur (ESC)'], ['servoSteering','Servo'], ['txModel','Radio / récepteur'], ['rxModel','Radio / récepteur'], ['escModel','Variateur (ESC)']
  ];
  for (const [fieldName, category] of pickerMap) {
    const input = setupForm.elements.namedItem(fieldName);
    if (!input || input.dataset.libraryEnhanced) continue;
    input.dataset.libraryEnhanced = 'true';
    const picker = document.createElement('div'); picker.className = 'setup-library-picker';
    const label = document.createElement('span'); label.textContent = 'Bibliothèque';
    const select = document.createElement('select'); select.dataset.libraryCategory = category;
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(label, select);
    input.closest('label').before(picker);
  }
  setupForm.addEventListener('submit', () => {
    const value = (name) => String(setupForm.elements.namedItem(name)?.value || '').trim();
    const radio = [['Émetteur',value('txModel')],['Récepteur / gyro',value('rxModel')],['Dual rate / expo',value('radioExpo')],['EPA',value('radioEPA')],['Trim / failsafe',value('radioTrim')],['Autres',value('radio')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    const escText = [['Modèle ESC',value('escModel')],['Mode / profil',value('escMode')],['Timing / boost',value('escTiming')],['Punch',value('escPunch')],['Frein / drag brake',value('escBrake')],['Cutoff',value('escCutoff')],['Autres paramètres',value('electronicsNotes')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    setupForm.elements.namedItem('radio').value = radio;
    setupForm.elements.namedItem('esc').value = escText;
  }, true);
  window.addEventListener('rc-materials-updated', refreshPickers);
})();
