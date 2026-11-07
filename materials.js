(() => {
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const catalog = [
    // Hobbywing RC car ESCs and motors. Variants/bobinages are separated where a manufacturer SKU is known.
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro Legacy', reference: '30112800', detail: 'ESC brushless sensored. Vérifier révision et compatibilité constructeur.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro G3', reference: '30112619', detail: 'Variateur compétition 1/10 brushless sensored, génération G3.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro G3X', reference: '30112620', detail: 'Version G3X du variateur compétition XR10 Pro.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro DR', reference: '30112621', detail: 'Version dédiée Drag Racing du XR10 Pro.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro WP', reference: '30112618', detail: 'Version waterproof du XR10 Pro pour compétition 1/10.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Stock Spec G2 2S', reference: '30112402', detail: 'Variateur Stock Spec sensored 1/10, génération G2, alimentation 2S.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Stock Spec 1S', reference: '30112751', detail: 'Version Stock Spec 1S pour compétition 1/10.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Justock G3S', reference: '30112005', detail: 'Variateur sensored 60 A, 2S, pour 1/10 et 1/12.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Justock G3 Handout', reference: '30112004', detail: 'Version Handout du Justock G3, référence dédiée.', url: 'https://www.hobbywing.com/en/products?id=23' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Stock Spec', reference: '30112401', detail: 'Version Stock Spec 2S d’origine, 80 A.', url: 'https://www.hobbywing.com/en/products/xerun-xr10-stock-spec48.html' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR10 Pro G2S', reference: '30112609', detail: 'ESC compétition 1/10. Vérifier révision et compatibilité moteur.', url: 'https://www.hobbywing.com/goods.php?id=716&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XR10 Justock G3', reference: '30112003', detail: 'ESC stock 1/10 ; vérifier version et règlement de course.', url: 'https://www.hobbywing.com/goods.php?id=726&pid=1' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'XeRun XR8 Plus G2S', reference: '30113305', detail: 'ESC compétition 1/8 ; vérifier génération et connecteurs.', url: 'https://www.hobbywing.com/goods.php?id=750&pid=0' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 80A', reference: '30102700', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'EzRun MAX10 G2S 140A', reference: '30102500', detail: 'Confirmer la version du modèle au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL80 Crawler', reference: '30108002', detail: 'Gamme QuicRun crawler ; vérifier compatibilité.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun 10BL60 Sensored G2', reference: '30108001', detail: 'Vérifier la révision exacte.', url: 'https://www.hobbywing.com/en/rc-systems' },
    { brand: 'Hobbywing', category: 'Variateur (ESC)', name: 'QuicRun WP 10BL60', reference: '30109000', detail: 'Famille QuicRun ; confirmer la référence de la version au catalogue.', url: 'https://www.hobbywing.com/en/rc-systems' },


    { brand: 'Hobbywing', category: 'Moteur', name: 'XeRun 4268SD G3 1900KV', reference: '30402653', detail: 'Moteur brushless 1/8 ; contrôler KV et compatibilité véhicule.', url: 'https://www.hobbywing.com/goods.php?id=699&pid=1' },
    { brand: 'Hobbywing', category: 'Moteur', name: 'Justock G2.1 10.5T', reference: '30408010', detail: 'Moteur stock 1/10 ; vérifier la combinaison ESC/moteur.', url: 'https://www.hobbywing.com/goods.php?id=719&pid=1' },
    
    
    { brand: 'Hobbywing', category: 'Programmation', name: 'LCD Program Box Pro', reference: '30502002', detail: 'Boîtier de programmation pour matériels compatibles Hobbywing.', url: 'https://www.hobbywing.com/en/rc-systems' },

    // Pneus Schumacher TT 1/10 — modèles, position, profil et gomme.
    ...[
      // Mini Spike 2 : avant 2WD slim, avant 4WD et arrière.
      ['Mini Spike 2','U6549','Avant 2WD','Bleu','Slim'],
      ['Mini Spike 2','U6550','Avant 2WD','Vert','Slim'],
      ['Mini Spike 2','U6581','Avant 2WD','Jaune','Slim'],
      ['Mini Spike 2','U6761','Avant 2WD','Silver','Slim'],
      ['Mini Spike 2','U6515','Avant 4WD','Vert','Standard'],
      ['Mini Spike 2','U6517','Avant 4WD','Bleu','Standard'],
      ['Mini Spike 2','U6557','Avant 4WD','Jaune','Standard'],
      ['Mini Spike 2','U6762','Avant 4WD','Silver','Standard'],
      ['Mini Spike 2','U6516','Arrière 2WD/4WD','Vert','Standard'],
      ['Mini Spike 2','U6518','Arrière 2WD/4WD','Bleu','Standard'],
      ['Mini Spike 2','U6558','Arrière 2WD/4WD','Jaune','Standard'],
      ['Mini Spike 2','U6763','Arrière 2WD/4WD','Silver','Standard'],

      // Pneus avant 2WD slim et medium : toutes les gommes documentées.
      ['2 Row Stud','T654','Avant 2WD medium','Jaune','Slim / medium'],
      ['Mini Pin','U6609','Avant 2WD','Jaune','Slim'],
      ['Mini Pin','U6779','Avant 2WD','Silver','Slim'],
      ['Stagger Rib','U6592','Avant 2WD','Jaune','Slim'],
      ['Cut Stagger','U6759','Avant 2WD','Jaune','Slim'],
      ['Cut Stagger','U6765','Avant 2WD','Vert','Slim'],
      ['Cut Stagger Low Profile','U6770','Avant 2WD','Jaune','Low Profile'],
      ['Cut Stagger Low Profile','U6771','Avant 2WD','Vert','Low Profile'],
      ['Cut Stagger Low Profile','U6775','Avant 2WD','Silver','Low Profile'],
      ['Cut Stagger Low Profile','U6776','Avant 2WD','Bleu','Low Profile'],
      ['Mini Dart','U6824','Avant 2WD','Jaune','Slim'],
      ['Mini Dart','U6827','Avant 2WD','Bleu','Slim'],
      ['Mini Dart','U6830','Avant 2WD','Silver','Slim'],
      ['Slim Rib Spike','U6847','Avant 2WD','Jaune','Slim'],
      ['Slim Rib Spike','U6848','Avant 2WD','Bleu','Slim'],
      ['Honeycomb','U6859','Avant 2WD','Jaune','Standard'],
      ['Fusion Slim','U6901','Avant 2WD','Jaune','Slim'],
      ['Fusion Slim','U6902','Avant 2WD','Silver','Slim'],
      ['Fusion Slim','U6903','Avant 2WD','Bleu','Slim'],
      ['Splinter','U6906','Avant 2WD','Jaune','Slim ultra-low'],
      ['Splinter','U6907','Avant 2WD','Bleu','Slim ultra-low'],
      ['Splinter','U6908','Avant 2WD','Silver','Slim ultra-low'],
      ['Fusion Slim','U6904','Avant 2WD','Jaune','Pré-collé'],
      ['Splinter','U6910','Avant 2WD','Jaune','Pré-collé'],

      // Variantes avant 4WD / arrière déjà présentes dans la bibliothèque.
      ['Mini Dart','U6825','Avant 4WD','Jaune','Standard'],['Mini Dart','U6826','Arrière 2WD/4WD','Jaune','Standard'],
      ['Mini Dart','U6828','Avant 4WD','Bleu','Standard'],['Mini Dart','U6829','Arrière 2WD/4WD','Bleu','Standard'],
      ['Mini Dart','U6831','Avant 4WD','Silver','Standard'],['Mini Dart','U6832','Arrière 2WD/4WD','Silver','Standard'],
      ['Cactus','U6838','Arrière 2WD/4WD','Jaune','Standard'],['Cactus','U6840','Avant 4WD','Jaune','Standard'],
      ['Cactus','U6842','Arrière 2WD/4WD','Silver','Standard'],['Cactus','U6843','Avant 4WD','Silver','Standard'],
      ['Cactus','U6844','Arrière 2WD/4WD','Bleu','Standard'],['Cactus','U6845','Avant 4WD','Bleu','Standard'],
      ['Wide Stagger Rib','U6810','Avant 4WD','Jaune','Wide'],
      ['Wide Stagger Rib','U6811','Avant 4WD','Silver','Wide'],
      ['Wide Stagger Rib','U6846','Avant 4WD','Bleu','Wide'],
      ['Mini Pin 1','U6817','Arrière 2WD/4WD','Jaune','Standard'],
      ['Mini Pin 1','U6819','Arrière 2WD/4WD','Bleu','Standard'],
      ['Mini Pin 1','U6820','Arrière 2WD/4WD','Silver','Standard'],
      ['Mini Pin 2','U6803','Arrière 2WD/4WD','Bleu','Standard'],
      ['Mini Pin 2','U6804','Arrière 2WD/4WD','Jaune','Standard'],
      ['Mini Pin 2','U6805','Arrière 2WD/4WD','Silver','Standard'],
      ['Mini Pin 2','U6821','Avant 4WD','Jaune','Standard']
    ].map(([name, reference, position, compound, profile]) => ({
      brand: 'Schumacher', category: 'Pneus / roues',
      name: name + ' — ' + position + ' — ' + compound + ' — ' + profile,
      reference, compatibility: position,
      detail: 'Paire de pneus TT 1/10. Position : ' + position + '. Gomme : ' + compound + '. Profil : ' + profile + '.',
      url: 'https://www.racing-cars.com/wheels-tyres'
    })),
    // Pneus TT 1/10 HUDY — références catalogue, position et gomme distinctes.
    ...[
      ['Pneu 2WD avant Carpet 101','812101','Avant 2WD','Carpet','Standard'],
      ['Pneu 2WD avant Carpet 102','812102-M','Avant 2WD','Carpet','Medium'],
      ['Pneu 2WD avant Astro 101A','812201-S','Avant 2WD','Astro','Soft'],
      ['Pneu 2WD avant Astro 101A','812201-M','Avant 2WD','Astro','Medium'],
      ['Pneu 4WD avant Carpet 101','814101','Avant 4WD','Carpet','Standard'],
      ['Pneu 4WD avant Carpet 102','814102-M','Avant 4WD','Carpet','Medium'],
      ['Pneu 4WD avant Astro 101A','814201-S','Avant 4WD','Astro','Soft'],
      ['Pneu 4WD avant Astro 101A','814201-M','Avant 4WD','Astro','Medium'],
      ['Pneu arrière Carpet 101','816101','Arrière 2WD/4WD','Carpet','Standard'],
      ['Pneu arrière Carpet 102','816102-M','Arrière 2WD/4WD','Carpet','Medium'],
      ['Pneu arrière Astro 201','816201-S','Arrière 2WD/4WD','Astro','Soft'],
      ['Pneu arrière Astro 201','816201-M','Arrière 2WD/4WD','Astro','Medium'],
      ['Pneu 2WD avant Dirt 302','812302D-S','Avant 2WD','Dirt','Soft'],
      ['Pneu 2WD avant Dirt 302','812302D-M','Avant 2WD','Dirt','Medium'],
      ['Pneu 4WD avant Dirt 301','814301D-S','Avant 4WD','Dirt','Soft'],
      ['Pneu 4WD avant Dirt 301','814301D-M','Avant 4WD','Dirt','Medium'],
      ['Pneu arrière Dirt 301','816301D-S','Arrière 2WD/4WD','Dirt','Soft'],
      ['Pneu arrière Dirt 301','816301D-M','Arrière 2WD/4WD','Dirt','Medium']
    ].map(([name,reference,position,surface,compound]) => ({
      brand:'HUDY', category:'Pneus / roues', name:name+' — '+position+' — '+surface+' — '+compound,
      reference, compatibility:position, detail:'Pneu TT 1/10 HUDY. Position : '+position+'. Surface : '+surface+'. Gomme : '+compound+'.',
      url:'https://www.hudy-shop.net/142-tires-and-wheels'
    })),

    // Jetko TT 1/10 — pneus seuls uniquement ; les versions montées collées ont des SKU différents.
    ...[
      ['Arena','JK2001E','Avant 2WD','EOS jaune'],['Arena','JK2001CM','Avant 2WD','Medium'],['Arena','JK2001CS','Avant 2WD','Soft'],['Arena','JK2001CSS','Avant 2WD','Super Soft'],
      ['Arena','JK2003E','Arrière 2WD/4WD','EOS jaune'],
      ['Challenger','JK2002E','Avant 4WD','EOS jaune'],['Challenger','JK2002CM','Avant 4WD','Medium EOS'],['Challenger','JK2002CS','Avant 4WD','Soft'],['Challenger','JK2002CSS','Avant 4WD','Super Soft'],
      ['Challenger','JK2004E','Arrière 2WD/4WD','EOS jaune'],['Challenger','JK2004CM','Arrière 2WD/4WD','Medium EOS'],['Challenger','JK2004CS','Arrière 2WD/4WD','Soft'],['Challenger','JK2004CSS','Arrière 2WD/4WD','Super Soft'],
      ['Desirer','JK2008SS','Avant 2WD','Super Soft'],['Desirer','JK2008US','Avant 2WD','Ultra Soft'],
      ['Desirer','JK2009US','Avant 4WD','Ultra Soft'],['Desirer','JK2010SS','Arrière 2WD/4WD','Super Soft'],['Desirer','JK2010US','Arrière 2WD/4WD','Ultra Soft']
    ].map(([name,reference,position,compound]) => ({
      brand:'Jetko', category:'Pneus / roues', name:name+' — '+position+' — '+compound,
      reference, compatibility:position, detail:'Pneu buggy TT 1/10 Jetko. Position : '+position+'. Gomme : '+compound+'. Vérifier insert et version montée ou non.',
      url:'https://rc.kyosho.com/en/jetko-tire/tire/1-10.html'
    })),

    // Hot Race TT 1/10 — gammes terre et moquette/astro.
    ...[
      ['Bangkok','HR-003-0122','Avant 4WD','Terre','Soft'],['Bangkok','HR-003-0132','Avant 4WD','Terre','Medium'],['Bangkok','HR-003-0142','Avant 4WD','Terre','Hard'],['Bangkok','HR-003-0152','Avant 4WD','Terre','Clay'],
      ['Bangkok','HR-003-0012','Arrière 2WD/4WD','Terre','Super Soft'],['Bangkok','HR-003-0022','Arrière 2WD/4WD','Terre','Soft'],['Bangkok','HR-003-0032','Arrière 2WD/4WD','Terre','Medium'],['Bangkok','HR-003-0042','Arrière 2WD/4WD','Terre','Hard'],['Bangkok','HR-003-0052','Arrière 2WD/4WD','Terre','Clay'],
      ['Sahara','HR-003-1112','Avant 4WD','Terre','Super Soft'],['Sahara','HR-003-1122','Avant 4WD','Terre','Soft'],['Sahara','HR-003-1132','Avant 4WD','Terre','Medium'],['Sahara','HR-003-1142','Avant 4WD','Terre','Hard'],['Sahara','HR-003-1152','Avant 4WD','Terre','Clay'],
      ['Sahara','HR-003-1012','Arrière 2WD/4WD','Terre','Super Soft'],['Sahara','HR-003-1022','Arrière 2WD/4WD','Terre','Soft'],['Sahara','HR-003-1032','Arrière 2WD/4WD','Terre','Medium'],['Sahara','HR-003-1042','Arrière 2WD/4WD','Terre','Hard'],['Sahara','HR-003-1052','Arrière 2WD/4WD','Terre','Clay'],
      ['Carpet LP','HR-003-0412','Avant 4WD','Carpet / Astro','Soft'],['Carpet LP','HR-003-0452','Avant 4WD','Carpet / Astro','Medium'],['Carpet LP','HR-003-0462','Avant 4WD','Carpet / Astro','Hard'],
      ['Carpet LP','HR-003-0432','Avant 2WD','Carpet / Astro','Medium'],['Carpet LP','HR-003-0442','Avant 2WD','Carpet / Astro','Hard'],
      ['Carpet LP','HR-003-2211','Avant 2WD/4WD','Carpet / Astro','White'],['Carpet LP','HR-003-2111','Arrière 2WD/4WD','Carpet / Astro','White'],
      ['V1','HR-003-0712','Arrière 2WD/4WD','Carpet / Astro','Soft'],['V1','HR-003-0622','Arrière 2WD/4WD','Carpet / Astro','Medium Soft'],['V1','HR-003-0722','Arrière 2WD/4WD','Carpet / Astro','Medium'],
      ['V2','HR-003-0652','Arrière 2WD/4WD','Carpet / Astro','Soft'],['V2','HR-003-0662','Arrière 2WD/4WD','Carpet / Astro','Medium Soft']
    ].map(([name,reference,position,surface,compound]) => ({
      brand:'Hot Race Tires', category:'Pneus / roues', name:name+' — '+position+' — '+surface+' — '+compound,
      reference, compatibility:position, detail:'Pneu TT 1/10 Hot Race. Position : '+position+'. Surface : '+surface+'. Gomme : '+compound+'.',
      url:'https://www.sodialed.com/rc-setup-tips/1-10-off-road-race-tire-chart'
    })),

    // JConcepts TT 1/10 — références individuelles et gommes fabricant.
    ...[
      ['Dirt Webs','JCO3077-02','Avant 2WD','Terre','Green'],['Dirt Webs','JCO3077-01','Avant 2WD','Terre','Blue'],['Dirt Webs','JCO3077-03','Avant 2WD','Terre','Aqua A2'],['Dirt Webs','JCO3077-06','Avant 2WD','Terre','Silver'],
      ['Double Bar','JCO4141-02','Avant 2WD','Terre','Green'],['Double Bar','JCO4141-01','Avant 2WD','Terre','Blue'],['Double Bar','JCO4141-03','Avant 2WD','Terre','Aqua A2'],['Double Bar','JCO4141-06','Avant 2WD','Terre','Silver'],
      ['Double Bar','JCO4140-02','Arrière 2WD/4WD','Terre','Green'],['Double Bar','JCO4140-01','Arrière 2WD/4WD','Terre','Blue'],['Double Bar','JCO4140-03','Arrière 2WD/4WD','Terre','Aqua A2'],['Double Bar','JCO4140-06','Arrière 2WD/4WD','Terre','Silver'],
      ['Ellipse','JCO3197-02','Avant 2WD','Terre','Green'],['Ellipse','JCO3197-01','Avant 2WD','Terre','Blue'],['Ellipse','JCO3197-03','Avant 2WD','Terre','Aqua A2'],['Ellipse','JCO3197-06','Avant 2WD','Terre','Silver'],
      ['Ellipse','JCO3198-02','Avant 4WD','Terre','Green'],['Ellipse','JCO3198-01','Avant 4WD','Terre','Blue'],['Ellipse','JCO3198-03','Avant 4WD','Terre','Aqua A2'],['Ellipse','JCO3198-06','Avant 4WD','Terre','Silver'],
      ['Ellipse','JCO3196-02','Arrière 2WD/4WD','Terre','Green'],['Ellipse','JCO3196-01','Arrière 2WD/4WD','Terre','Blue'],['Ellipse','JCO3196-03','Arrière 2WD/4WD','Terre','Aqua A2'],['Ellipse','JCO3196-06','Arrière 2WD/4WD','Terre','Silver'],
      ['Goose Bumps','JCO3018-02','Arrière 2WD/4WD','Terre','Green'],['Double Dees V2','JCO3160-02','Avant 2WD','Terre','Green'],['Double Dees V2','JCO3160-01','Avant 2WD','Terre','Blue'],
      ['Double Dees V2','JCO3161-02','Avant 4WD','Terre','Green'],['Double Dees V2','JCO3161-01','Avant 4WD','Terre','Blue'],['Double Dees V2','JCO3159-02','Arrière 2WD/4WD','Terre','Green'],['Double Dees V2','JCO3159-01','Arrière 2WD/4WD','Terre','Blue'],
      ['Fuzz Bite LP','JCO3165-010','Avant 2WD','Carpet / Astro','Pink'],['Fuzz Bite LP','JCO3108-010','Avant 4WD','Carpet / Astro','Pink'],['Fuzz Bite LP','JCO3152-010','Arrière 2WD/4WD','Carpet / Astro','Pink'],['Fuzz Bite LP','JCO3152-012','Arrière 2WD/4WD','Carpet / Astro','Brown'],['Fuzz Bite LP','JCO3152-011','Arrière 2WD/4WD','Carpet / Astro','Purple'],
      ['Pin Swag','JCO3182-010','Avant 4WD','Carpet / Astro','Pink'],['Pin Swag','JCO3180-010','Arrière 2WD/4WD','Carpet / Astro','Pink'],['Pin Swag Slim','JCO3181-010','Avant 2WD','Carpet / Astro','Pink'],['Pin Swag Slim','JCO3181-012','Avant 2WD','Carpet / Astro','Brown'],['Pin Swag Slim','JCO3181-011','Avant 2WD','Carpet / Astro','Purple'],
      ['3DP','JCO4174-010','Avant 2WD','Carpet / Astro','Pink'],['3DP','JCO4174-012','Avant 2WD','Carpet / Astro','Brown'],['3DP','JCO4174-011','Avant 2WD','Carpet / Astro','Purple'],['3DP','JCO4169-010','Arrière 2WD/4WD','Carpet / Astro','Pink'],['3DP','JCO4169-012','Arrière 2WD/4WD','Carpet / Astro','Brown'],['3DP','JCO4169-011','Arrière 2WD/4WD','Carpet / Astro','Purple']
    ].map(([name,reference,position,surface,compound]) => ({
      brand:'JConcepts', category:'Pneus / roues', name:name+' — '+position+' — '+surface+' — '+compound,
      reference, compatibility:position, detail:'Pneu buggy TT 1/10 JConcepts. Position : '+position+'. Surface : '+surface+'. Gomme : '+compound+'.',
      url:'https://jconcepts.net/product_index.asp?page=2'
    })),

    // Pro-Line TT 1/10 — gamme terre et carpet/astro.
    ...[
      ['Electron 2.0','PRO8321-203','Avant 2WD','Terre','S3'],['Electron 2.0','PRO8320-203','Avant 4WD','Terre','S3'],['Electron 2.0','PRO8322-203','Arrière 2WD/4WD','Terre','S3'],
      ['Electron 2.0','PRO8321-17','Avant 2WD','Terre / Clay','MC'],['Electron 2.0','PRO8320-17','Avant 4WD','Terre / Clay','MC'],['Electron 2.0','PRO8322-17','Arrière 2WD/4WD','Terre / Clay','MC'],
      ['Hole Shot 3.0','PRO8291-02','Avant 4WD','Terre','M3'],['Hole Shot 3.0','PRO8291-03','Avant 4WD','Terre','M4'],
      ['Hole Shot 3.0','PRO8290-02','Avant 2WD','Terre','M3'],['Hole Shot 3.0','PRO8290-03','Avant 2WD','Terre','M4'],
      ['Hole Shot 3.0','PRO8282-02','Arrière 2WD/4WD','Terre','M3'],['Hole Shot 3.0','PRO8282-03','Arrière 2WD/4WD','Terre','M4'],
      ['Blockade','PRO8252-02','Avant 4WD','Terre','M3'],['Blockade','PRO8231-02','Arrière 2WD/4WD','Terre','M3'],
      ['Fugitive','PRO8295-203','Avant 2WD','Terre','S3'],['Fugitive','PRO8296-203','Avant 4WD','Terre','S3'],['Fugitive','PRO8296-03','Avant 4WD','Terre','M4'],
      ['Positron','PRO8256-204','Arrière 2WD/4WD','Terre','S4'],['Positron','PRO8256-17','Arrière 2WD/4WD','Terre / Clay','MC'],
      ['Harpoon','PRO8306-303','Avant 2WD','Carpet / Astro','CR3'],['Harpoon','PRO8306-304','Avant 2WD','Carpet / Astro','CR4'],
      ['Harpoon','PRO8307-303','Avant 4WD','Carpet / Astro','CR3'],['Harpoon','PRO8307-304','Avant 4WD','Carpet / Astro','CR4'],['Harpoon','PRO8305-304','Arrière 2WD/4WD','Carpet / Astro','CR4'],
      ['Prism','PRO8278-303','Avant 2WD','Carpet / Astro','CR3'],['Prism','PRO8278-304','Avant 2WD','Carpet / Astro','CR4'],
      ['Prism 2.0','PRO8284-303','Avant 4WD','Carpet / Astro','CR3'],['Prism 2.0','PRO8284-304','Avant 4WD','Carpet / Astro','CR4'],
      ['Prism 2.0','PRO8277-303','Arrière 2WD/4WD','Carpet / Astro','CR3'],['Prism 2.0','PRO8277-304','Arrière 2WD/4WD','Carpet / Astro','CR4'],
      ['Pyramid','PRO8267-303','Arrière 2WD/4WD','Astro','CR3'],['Pyramid','PRO8267-103','Arrière 2WD/4WD','Astro','Z3']
    ].map(([name,reference,position,surface,compound]) => ({
      brand:'Pro-Line', category:'Pneus / roues', name:name+' — '+position+' — '+surface+' — '+compound,
      reference, compatibility:position, detail:'Pneu buggy TT 1/10 Pro-Line. Position : '+position+'. Surface : '+surface+'. Gomme : '+compound+'.',
      url:'https://www.prolineracing.com/'
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
      name, reference: '',
      detail: product + ' XTR. Utilisation fabricant : ' + use + '.',
      url: 'https://xtr-rc.com/en/232-greases-lubricants'
    })),
        
    
    
    { brand: 'Savöx', category: 'Servo', name: 'SC-1258TG Black Edition', reference: 'SC-1258TG', detail: 'Servo numérique à pignons titane ; vérifier tension d’alimentation et dimensions.', url: 'https://www.savoxusa.com/' },
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
    
    

    // Ressorts Team Associated — couleur, taux en lb/in, position et diamètre clairement affichés.
    ...[
      ['Avant','91325','BRN','Marron','2.85'],['Avant','91326','BLK','Noir','3.00'],['Avant','91327','GRN','Vert','3.15'],['Avant','91328','WHT','Blanc','3.30'],['Avant','91329','GRY','Gris','3.45'],['Avant','91330','BLU','Bleu','3.60'],['Avant','91331','YLW','Jaune','3.75'],['Avant','91332','RED','Rouge','3.90'],['Avant','91333','ORN','Orange','4.05'],['Avant','91334','PRL','Violet nacré','4.20'],
      ['Arrière','91335','BLK','Noir','1.90'],['Arrière','91336','GRN','Vert','2.00'],['Arrière','91337','WHT','Blanc','2.10'],['Arrière','91338','GRY','Gris','2.20'],['Arrière','91339','BLU','Bleu','2.30'],['Arrière','91340','YLW','Jaune','2.40']
    ].map(([position,reference,code,color,rate]) => ({
      brand:'Team Associated', category:'Ressort',
      name:`RC10B4.2FT — ${position} — ${color} (${rate} lb/in)`,
      reference,
      compatibility:`RC10B4.2FT — ressort 12 mm — ${position.toLowerCase()}`,
      detail:`Ressort ${position.toLowerCase()} 12 mm. Couleur : ${color} (code ${code}). Dureté : ${rate} lb/in. Référence fabricant : ${reference}.`,
      url:'https://apps.associatedelectrics.com/aereferencelibrary/manuals/manual_B4.2RS.pdf'
    })),
    ...[
      ['91341','Avant','Soft'],['91342','Avant','Medium'],['91343','Avant','Hard'],
      ['91344','Arrière','Soft'],['91345','Arrière','Medium']
    ].map(([reference,position,grade])=>({
      brand:'Team Associated',category:'Ressort',name:'12 mm Big Bore — kit '+position.toLowerCase()+' '+grade,
      reference,compatibility:'Amortisseurs Big Bore 12 mm — '+position.toLowerCase(),
      detail:'Kit de ressorts '+grade.toLowerCase()+' Team Associated pour amortisseurs Big Bore 12 mm.',
      url:'https://apps.associatedelectrics.com/aereferencelibrary/manuals/manual_B4.2RS.pdf'
    })),
    ...[
      ['Avant','91830','Vert','3.1'],['Avant','91831','Blanc','3.4'],['Avant','91832','Gris','3.6'],['Avant','91833','Bleu','3.9'],['Avant','91834','Jaune','4.3'],['Avant','91835','Rouge','4.6'],['Avant','91836','Orange','5.1'],
      ['Arrière','91837','Vert','1.8'],['Arrière','91838','Blanc','1.9'],['Arrière','91839','Gris','2.0'],['Arrière','91840','Bleu','2.2'],['Arrière','91841','Jaune','2.3']
    ].map(([position,reference,color,rate]) => ({
      brand:'Team Associated', category:'Ressort',
      name:`RC10B6.2 — ${position} — ${color} (${rate} lb/in)`,
      reference, compatibility:`RC10B6.2 — ressort 12 mm — ${position.toLowerCase()}`,
      detail:`Ressort ${position.toLowerCase()} 12 mm. Couleur : ${color}. Dureté : ${rate} lb/in. Référence fabricant : ${reference}.`,
      url:'https://www.sodialed.com/rc-setup-tips/team-associated-rc10b6-2-manual'
    })),
    ...[
      ['Avant','91939','Vert','3.1'],['Avant','91940','Blanc','3.3'],['Avant','91941','Gris','3.4'],['Avant','91942','Bleu','3.6'],['Avant','91943','Jaune','3.8'],['Avant','91944','Rouge','4.0'],['Avant','91945','Orange','4.3'],['Avant','91946','Violet','4.6'],
      ['Arrière','91961','Noir','1.7'],['Arrière','91947','Vert','1.8'],['Arrière','91948','Blanc','1.9'],['Arrière','91949','Gris','2.0'],['Arrière','91950','Bleu','2.2'],['Arrière','91951','Jaune','2.3'],['Arrière','91957','Rouge','2.4']
    ].map(([position,reference,color,rate]) => ({
      brand:'Team Associated', category:'Ressort',
      name:`RC10B7 — ${position} — ${color} (${rate} lb/in)`,
      reference, compatibility:`RC10B7 — ressort 13 mm — ${position.toLowerCase()}`,
      detail:`Ressort ${position.toLowerCase()} 13 mm. Couleur : ${color}. Dureté : ${rate} lb/in. Référence fabricant : ${reference}.`,
      url:'https://hobbydex.com/rc/platforms/team-associated/rc10b7/parts/shock-spring/'
    })),
    

    // Les variantes VP-Pro détaillées sont listées plus bas avec leurs SKU complets.

    // Huiles Yokomo — viscosités constructeur exprimées en indice Yokomo, pas en CST.
    ...['475','575','600'].map(value => ({
      brand:'Yokomo', category:'Huile amortisseur', name:'Super Blend Shock Oil #'+value,
      reference:'YS-'+value+'B — 35 cc',
      detail:'Huile silicone amortisseur Yokomo. L’indice Yokomo n’est pas une conversion directe en WT/CST.',
      url:'https://teamyokomo.com/parts/YS-600B/'
    })),
    // Yokomo — viscosités supplémentaires de la gamme Super Blend Shock Oil.
    ...[
      ['YS-300B','300'],['YS-350B','350'],['YS-375B','375'],['YS-400B','400'],['YS-425B','425'],
      ['YS-450B','450'],['YS-500B','500'],['YS-525B','525'],['YS-550B','550']
    ].map(([reference,grade])=>({
      brand:'Yokomo',category:'Huile amortisseur',name:'Super Blend Shock Oil #'+grade+' — 35 cc',
      reference,detail:'Huile silicone Yokomo pour amortisseurs ; indice de viscosité constructeur #'+grade+'.',
      url:'https://teamyokomo.com/downloadfiles/%2102%21MANUAL/%2105%21ON-ROAD_KIT/MS2.0_Instruction_Manual.pdf'
    })),
    // Ressorts TLR 1/10 — familles 12 mm Low Frequency et 13 mm G3, références et taux fabricant.
    ...[
      ['TLR233046','Avant','Argent','3.18','12'],['TLR233047','Avant','Vert','3.38','12'],['TLR233048','Avant','Bleu','3.53','12'],
      ['TLR233049','Avant','Noir','3.68','12'],['TLR233050','Avant','Marron','3.85','12'],['TLR233051','Avant','Violet','4.03','12'],
      ['TLR233052','Avant','Bleu ciel','4.23','12'],['TLR233053','Avant','Jaune','4.45','12'],['TLR233054','Avant','Or','4.70','12'],
      ['TLR233055','Arrière','Gris','1.96','12'],['TLR233056','Arrière','Blanc','2.02','12'],['TLR233057','Arrière','Jaune','2.06','12'],
      ['TLR233058','Arrière','Rose','2.11','12'],['TLR233059','Arrière','Rouge','2.16','12'],
      ['TLR-1188','Arrière','Jaune','2.10','13'],['TLR-1189','Arrière','Orange','1.98','13'],['TLR-1190','Arrière','Vert','2.22','13'],
      ['TLR-1191','Arrière','Bleu','2.37','13'],['TLR-1202','Arrière','Rouge','1.87','13'],['TLR-1208','Arrière','Violet','2.54','13'],
      ['TLR-1199','Avant','Rouge','3.56','13'],['TLR-1200','Avant','Marron','3.39','13'],['TLR-1203','Avant','Violet','4.75','13'],
      ['TLR-1204','Avant','Jaune','3.95','13'],['TLR-1205','Avant','Orange','3.75','13'],['TLR-1206','Avant','Bleu','4.45','13'],
      ['TLR-1207','Avant','Vert','4.19','13']
    ].map(([reference,position,color,rate,diameter])=>({
      brand:'TLR',category:'Ressort',name:'TLR 22 — '+position+' — '+color+' ('+rate+' lb/in)',
      reference,compatibility:'TLR 22 / 22X — ressort '+diameter+' mm — '+position.toLowerCase(),
      detail:'Ressort TLR '+diameter+' mm '+position.toLowerCase()+'. Couleur : '+color+'. Taux : '+rate+' lb/in.',
      url:diameter==='12'?'https://www.tlracing.com/on/demandware.static/-/Sites-horizon-master/default/dw6b76f28c/Manuals/TLR03022-Parts-MULTI.pdf':'https://hobbydex.com/rc/releases/tlr/tlr-1233/'
    })),
    ...[
      ['YS-650B','650'],['YS-700B','700'],['YS-750B','750'],['YS-800AB','800'],
      ['YS-850A','850'],['YS-900B','900'],['YS-950B','950'],['YS-1000B','1000'],
      ['YS-1500A','1500'],['YS-2000B','2000'],['YS-3000A','3000']
    ].map(([reference,grade])=>({
      brand:'Yokomo',category:'Huile amortisseur',name:'Super Blend Shock Oil #'+grade+' — 35 cc',
      reference,detail:'Huile silicone Yokomo pour amortisseurs ; indice de viscosité constructeur #'+grade+'.',
      url:'https://teamyokomo.com/downloadfiles/%2102%21MANUAL/%2104%21OFF-ROAD_KIT/SO3.0_Instruction_Manual.pdf'
    })),
    // Ressorts Yokomo TT 1/10 — références de gammes RPU/Yatabe ; compatibilité à contrôler selon châssis.
    ...[
      ['Avant','YS-A750','Orange'],['Avant','YS-A775','Green'],['Avant','YS-A800','Pink'],['Avant','YS-A850','Red'],['Avant','YS-A875','Yellow'],['Avant','YS-A900','Gold'],
      ['Arrière','YS-A1200','Green'],['Arrière','YS-A1175','Orange']
    ].map(([position,reference,colour]) => ({
      brand:'Yokomo', category:'Ressort', name:'Ressort '+position+' TT 1/10 — '+colour+' — taux non communiqué',
      reference, compatibility:'Buggy 1/10 Yokomo — vérifier longueur et diamètre',
      detail:'Couleur : '+colour+'. Dureté : taux lb/in non communiqué dans la documentation consultée. Référence de ressort Yokomo issue des tableaux TT 1/10 ; vérifier la famille de châssis avant montage.',
      url:'https://www.sodialed.com/rc-setup-tips/yokomo-1-10-off-road-car-shock-spring-list'
    })),
    { brand:'Tamiya', category:'Graisse', name:'RC Anti-Wear Grease', reference:'53439', detail:'Graisse anti-usure haute viscosité pour arbres, joints et engrenages de différentiel. Tube 3 g.', url:'https://www.tamiyausa.com/shop/maintenance-supplies/rc-anti-wear-grease/' },
    

    // Moteurs brushless 1/10 Reedy et LRP.
    ...['9.5','8.5','8.0','7.5','7.0','6.5','6.0','5.5','5.0','4.5','4.0','3.5'].map((turn,i) => ({
      brand:'Reedy', category:'Moteur', name:'Sonic 540-M4 '+turn+'T',
      reference:String([27438,27439,27440,27441,27442,27444,27445,27446,27451,27452,27453,27454][i]),
      detail:'Moteur brushless sensored 540 compétition 1/10. Vérifier règlement de catégorie et compatibilité ESC.',
      url:'https://apps.associatedelectrics.com/aereferencelibrary/pages/reedy_motors.html'
    })),

    // Variateurs 1/10.
    { brand:'Reedy', category:'Variateur (ESC)', name:'Blackbox 610R Competition', reference:'27016', detail:'Variateur compétition 1/10, 160 A, compatible moteurs brushless sensored.', url:'https://www.cml-racing.com/fr/369-1-10' },
    { brand:'Reedy', category:'Programmation', name:'Blackbox ESC Programmer 2', reference:'27027', detail:'Boîtier de programmation pour ESC Reedy Blackbox compatibles.', url:'https://www.cml-racing.com/fr/369-1-10' },
    // Servos de direction.
    { brand:'Sanwa', category:'Servo', name:'PGS-CL II', reference:'107A54514B', detail:'Servo programmable low-profile, compatible CODE10 dont MT-5 ; 16,6 kg·cm à 7,4 V.', url:'https://www.sanwa-denshi.co.jp/rc/car/servo/pgs-cl%E2%85%A1.html' },
    { brand:'Futaba', category:'Servo', name:'S9470SV', reference:'01000837', detail:'Servo numérique surface ; vérifier dimensions, tension et mode de transmission requis.', url:'https://futaba.fr/5-servos' },


    // Compléments détaillés : modèles 1/10 identifiés, références fabricant et variantes séparées.
    { brand:'TLR', category:'Graisse', name:'Silicone Differential Grease 8cc', reference:'TLR2952', detail:'Graisse silicone pour différentiel TLR.', url:'https://hobbydex.com/rc/releases/tlr/tlr-1233/' },
    { brand:'TLR', category:'Graisse', name:'High-Pressure Black Grease 8cc', reference:'TLR77000', detail:'Graisse noire haute pression TLR.', url:'https://hobbydex.com/rc/releases/tlr/tlr-1233/' },
    // TLR silicone shock oils : grades WT proposés dans la gamme 60 ml ; SKU individuel non affiché.
    ...['17.5','20','22.5','25','27.5','30','32.5','35','37.5','40','45','50','55','60','70','80','90'].map(wt => ({
      brand:'TLR', category:'Huile amortisseur',
      name:'Silicone Shock Oil — '+wt+' WT — 60 ml',
      reference:wt+' WT / 60 ml',
      detail:'Huile silicone TLR pour amortisseurs. Grade WT distinct ; le WT n’est pas strictement interchangeable entre fabricants.',
      url:'https://www.rcteam.com/en/collections/shock-absorber-oil'
    })),

    // Tekin Redline GEN4 SPEC-R : bobinages 1/10 stock clairement identifiés.
    ...[
      ['17.5','TT2762'],['13.5','TT2763'],['10.5','TT2765']
    ].map(([turn,reference]) => ({
      brand:'Tekin', category:'Moteur', name:'Redline SPEC-R GEN4 — '+turn+'T 540',
      reference, compatibility:'Buggy 1/10 / Touring 1/10 selon bobinage',
      detail:'Moteur brushless sensored Tekin SPEC-R GEN4. Bobinage et référence fabricant distincts.',
      url:'https://www.teamtekin.com/specr.html'
    })),

    // Tekin Redline GEN3 : gamme complète de bobinages répertoriés par le fabricant.
    ...[
      ['25.5','TT2701'],['21.5','TT2703'],['17.5','TT2705'],['13.5','TT2707'],
      ['10.5','TT2708'],['9.5','TT2709'],['8.5','TT2710'],['7.5','TT2711'],
      ['6.5','TT2712'],['5.5','TT2713'],['5.0','TT2714'],['4.5','TT2715'],
      ['3.5','TT2716'],['2.5','TT2717']
    ].map(([turn,reference]) => ({
      brand:'Tekin', category:'Moteur', name:'Redline GEN3 — '+turn+'T 540',
      reference, compatibility:'Moteur brushless sensored 1/10',
      detail:'Moteur Tekin Redline GEN3 ; bobinage et référence fabricant.',
      url:'https://www.teamtekin.com/redline_gen3.html'
    })),

    // Variateurs Tekin : modèles précis, pas de fiche générique.
    { brand:'Tekin', category:'Variateur (ESC)', name:'RS GEN3 ESC', reference:'TT1156', detail:'Variateur compétition brushless/brushed sensored 1/10, BEC 6.0/7.4 V.', url:'https://www.teamtekin.com/rs.html' },
    { brand:'Tekin', category:'Variateur (ESC)', name:'RS GEN3 SPEC ESC', reference:'TT1157', detail:'Variateur stock 1/10 SPEC, mode blinky, prévu pour moteur 13.5T et plus.', url:'https://www.teamtekin.com/rs_spec.html' },
    { brand:'Tekin', category:'Variateur (ESC)', name:'RS PRO Black Edition', reference:'TT1158', detail:'Variateur compétition Tekin RS PRO Black Edition ; vérifier configuration et application.', url:'https://www.teamtekin.com/rspro.html' },
    { brand:'Tekin', category:'Variateur (ESC)', name:'RSX PRO', reference:'TT1159', detail:'Variateur brushless compétition 1/10, destiné notamment aux configurations modified.', url:'https://www.teamtekin.com/product10.html' },

    // Variateurs LRP avec référence exacte.
    { brand:'LRP', category:'Variateur (ESC)', name:'Flow X Offroad', reference:'500003', detail:'Variateur compétition brushless sensored 1/10, version Offroad.', url:'https://www.lrp.cc/en/service/setup-sheets/' },
    { brand:'LRP', category:'Variateur (ESC)', name:'Flow X TC Spec', reference:'500004', detail:'Variateur compétition brushless sensored 1/10, version Touring Car.', url:'https://www.lrp.cc/en/product/500004/' },
    { brand:'LRP', category:'Variateur (ESC)', name:'Flow X StockSpec', reference:'500005', detail:'Variateur compétition brushless sensored 1/10, logiciel StockSpec.', url:'https://www.lrp.cc/en/product/500005/' },
    { brand:'LRP', category:'Variateur (ESC)', name:'Spin Super Brushless', reference:'80230', detail:'Variateur brushless sensored polyvalent 1/10, 2S à 4S LiPo.', url:'https://www.lrp.cc/en/product/80230/' },
    { brand:'LRP', category:'Variateur (ESC)', name:'Nexxt 4X Sensorless', reference:'86500', detail:'Variateur sensorless 1/10 à partir de 7.5T ; non compatible avec moteurs 1/10 à stack LRP.', url:'https://www.lrp.cc/en/product/86500/' },

    // Moteurs LRP Dynamic10 : chaque KV et référence constitue une fiche distincte.
    { brand:'LRP', category:'Moteur', name:'Dynamic10 BL 3700 kV', reference:'53540', detail:'Moteur brushless 540/550, 4 pôles, sensored/sensorless.', url:'https://www.lrp.cc/en/product/53540/' },
    { brand:'LRP', category:'Moteur', name:'Dynamic10 BL 3800 kV', reference:'53430', detail:'Moteur brushless 540/550, 4 pôles, sensored/sensorless.', url:'https://www.lrp.cc/en/product/53430/' },
    { brand:'LRP', category:'Moteur', name:'Dynamic10 BL 4800 kV', reference:'53440', detail:'Moteur brushless 540/550, 4 pôles, sensored/sensorless.', url:'https://www.lrp.cc/en/product/53440/' },
    { brand:'LRP', category:'Moteur', name:'Dynamic10L BL 4700 kV', reference:'53550', detail:'Moteur brushless 540/550 long, 4 pôles, sensored/sensorless.', url:'https://www.lrp.cc/en/product/53550/' },


    // JConcepts : références fabricant confirmées pour pneus et inserts buggy 1/10.
    ...[
      ['Dirt-Tech 2WD avant','3231','Avant 2WD','Insert closed-cell medium/firm'],
      ['Dirt-Tech 4WD avant','3230','Avant 4WD','Insert closed-cell medium/firm'],
      ['Dirt-Tech arrière 2WD/4WD','3232','Arrière 2WD/4WD','Insert closed-cell medium/firm']
    ].map(([name,reference,position,detail]) => ({
      brand:'JConcepts', category:'Insert pneu', name, reference, compatibility:position,
      detail:'Insert Dirt-Tech JConcepts pour buggy 1/10. '+detail+'. Réutilisable.',
      url:reference==='3231'?'https://jconcepts.net/dirttech-110th-buggy-22-2wd-front-insert-2pc':reference==='3230'?'https://jconcepts.net/dirttech-110th-buggy-22-4wd-front-insert-2pc':'https://jconcepts.net/dirttech-110th-buggy-22-2wd-4wd-rear-insert-2pc'
    })),
    ...[
      ['Double Dees V2','3160','Avant 2WD','Pneu à picots pour terre meuble et conditions variées'],
      ['Double Dees V2','3161','Avant 4WD','Pneu avant 4WD, profil Double Dees V2'],
      ['Double Dees V2','3159','Arrière 2WD/4WD','Pneu arrière Double Dees V2'],
      ['Drop Step','3059-010','Arrière 2WD/4WD','Gomme rose, picots hauts pour gazon synthétique et surfaces profondes']
    ].map(([name,reference,position,detail]) => ({
      brand:'JConcepts', category:'Pneus / roues', name:name+' — '+position,
      reference, compatibility:position,
      detail:'Pneu buggy TT 1/10 JConcepts. '+detail+'.',
      url:reference==='3160'?'https://jconcepts.net/double-dees-v2-2wd-buggy-front':reference==='3059-010'?'https://jconcepts.net/drop-step--22-buggy-rear':'https://jconcepts.net/product_index.asp?page=2'
    })),
    // Références issues du guide d'application JConcepts (gamme catalogue historique).
    ...[
      ['Groovy','3000','Avant 2WD','J82'],['Groovy','3004','Avant 2WD','Standard'],
      ['Rounder','3005','Avant 2WD','Standard'],['Bar Codes','3017','Avant 2WD','Standard'],
      ['Double Dee’s','3003','Avant 4WD','Standard'],['Goose Bumps','3019','Avant 4WD','Standard'],
      ['Bar Codes','3020','Avant 4WD','Standard'],['Double Dee’s','3002','Arrière 2WD/4WD','Standard'],
      ['Bar Codes','3016','Arrière 2WD/4WD','Standard'],['Goose Bumps','3018','Arrière 2WD/4WD','Standard']
    ].map(([name,reference,position,compound]) => ({
      brand:'JConcepts', category:'Pneus / roues', name:name+' — '+position+' — '+compound,
      reference, compatibility:position,
      detail:'Référence de pneu buggy 1/10 figurant dans le guide d’application JConcepts. Gamme catalogue historique ; disponibilité actuelle à vérifier.',
      url:'https://www.horizonhobby.com/on/demandware.static/Sites-horizon-us-Site/Sites-horizon-master/default/Manuals/JConcepts_Tire_guide.pdf'
    })),
    // VP-Pro : variantes individuelles par gomme et position, SKU de la gamme 1/10.
    ...[
      ['Shock Wave Evo','VP-416U-M3','Arrière 2WD/4WD','M3'],
      ['Shock Wave Evo','VP-416U-M4','Arrière 2WD/4WD','M4'],
      ['Shock Wave Evo','VP-316U-M3','Avant 4WD','M3'],
      ['Shock Wave Evo','VP-316U-M4','Avant 4WD','M4'],
      ['Gripz Evo','VP-413U-M3','Arrière 2WD/4WD','M3'],
      ['Gripz Evo','VP-413U-M4','Arrière 2WD/4WD','M4'],
      ['Cactus Evo','VP-208U-M3','Avant 2WD','M3'],
      ['Cactus Evo','VP-208U-M4','Avant 2WD','M4'],
      ['Cactus Evo','VP-308U-M3','Avant 4WD','M3'],
      ['Cactus Evo','VP-308U-M4','Avant 4WD','M4'],
      ['Cactus Evo','VP-408U-M3','Arrière 2WD/4WD','M3'],
      ['Cactus Evo','VP-408U-M4','Arrière 2WD/4WD','M4']
    ].map(([name,reference,position,compound]) => ({
      brand:'VP-Pro', category:'Pneus / roues',
      name:name+' — '+position+' — '+compound+' — sans jante',
      reference, compatibility:position,
      detail:'Pneu VP-Pro buggy TT 1/10. Gomme '+compound+'. Version sans jante ; consulter la fiche fabricant pour les variantes montées.',
      url:'https://www.vp-racing.com/products/vppro/tires/1-10-buggy'
    })),


    // Compléments de références commerciales vérifiées — gamme réellement disponible par marque.
    ...[
      ['U6652','Insert mousse avant buggy 1/10 — Hard','Avant 4WD / 2WD','Hard'],
      ['U6653','Insert mousse arrière buggy 1/10 — Hard','Arrière 2WD/4WD','Hard'],
      ['U6733','Insert mousse avant buggy 1/10 — Medium','Avant 4WD / 2WD','Medium'],
      ['U6734','Insert mousse arrière buggy 1/10 — Medium','Arrière 2WD/4WD','Medium'],
      ['U6746','Insert Tubby avant buggy 1/10 — Medium','Avant 4WD','Tubby Medium'],
      ['U6747','Insert Tubby arrière buggy 1/10 — Medium','Arrière 2WD/4WD','Tubby Medium'],
      ['U6668','Insert mousse buggy 1/10 — Soft Ultra Wide','Largeur ultra-wide','Soft'],
      ['U6669','Insert mousse buggy 1/10 — Hard Ultra Wide','Largeur ultra-wide','Hard']
    ].map(([reference,name,position,compound]) => ({
      brand:'Schumacher', category:'Insert pneu', name, reference, compatibility:position,
      detail:'Insert mousse Schumacher pour buggy 1/10. Densité : '+compound+'.',
      url:'https://www.racing-cars.com/wheels-tyres'
    })),
    ...[
      ['PM113S','Insert avant 1/10 4WD Slim pour Wasabi','Avant 4WD','Slim'],
      ['PM114','Insert arrière buggy 1/10','Arrière 2WD/4WD','Standard'],
      ['PM114H','Insert arrière buggy 1/10 — Hard','Arrière 2WD/4WD','Hard']
    ].map(([reference,name,position,compound]) => ({
      brand:'6MIK', category:'Insert pneu', name, reference, compatibility:position,
      detail:'Insert 6MIK pour buggy 1/10. Version : '+compound+'.',
      url:'https://6mik-racing.com/new-1-10-foams/'
    })),
    ...[
      ['JK6221BK','Insert Jetko buggy 1/10 — avant 4WD','Avant 4WD','Noir'],
      ['JK6222BK','Insert Jetko buggy 1/10 — arrière','Arrière 2WD/4WD','Noir']
    ].map(([reference,name,position,compound]) => ({
      brand:'Jetko', category:'Insert pneu', name, reference, compatibility:position,
      detail:'Insert mousse Jetko buggy 1/10. Couleur : '+compound+'.',
      url:'https://www.rccarshop.co.uk/1-10-buggy-inserts'
    })),
    // 1UP Racing — graisses et lubrifiants classés uniquement dans les catégories existantes.
    { brand:'1UP Racing', category:'Graisse', name:'Gold AW Grease', reference:'120101', detail:'Graisse anti-usure 1UP Racing.', url:'https://www.rcpro.it/en/139-greases-oils' },
    { brand:'1UP Racing', category:'Graisse', name:'Blue O-Ring Grease', reference:'120301', detail:'Graisse bleue pour joints toriques et joints d’amortisseurs.', url:'https://www.rcpro.it/en/139-greases-oils' },
    { brand:'1UP Racing', category:'Graisse', name:'Red CV Joint Oil', reference:'120401', detail:'Lubrifiant rouge pour articulations CV/CVD ; rangé dans Graisse faute de catégorie dédiée aux huiles de transmission.', url:'https://www.rcpro.it/en/139-greases-oils' },
    // Tamiya — huiles de différentiel officielles.
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #500000', reference:'54418', detail:'Huile silicone de différentiel 500 000 ; flacon 30 ml.', url:'https://www.tamiya.com/english/products/54418/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #1000000', reference:'54419', detail:'Huile silicone de différentiel 1 000 000 ; flacon 30 ml.', url:'https://www.tamiya.com/english/products/54419/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Oil #700 — usage différentiel', reference:'54715', detail:'Huile silicone Tamiya utilisable dans les différentiels selon le fabricant (grades #700 à #1000).', url:'https://www.tamiya.com/english/products/54715/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Oil #800 — usage différentiel', reference:'54716', detail:'Huile silicone Tamiya utilisable dans les différentiels selon le fabricant (grades #700 à #1000).', url:'https://www.tamiya.com/english/products/54716/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Oil #900 — usage différentiel', reference:'54717', detail:'Huile silicone Tamiya utilisable dans les différentiels selon le fabricant (grades #700 à #1000).', url:'https://www.tamiya.com/english/products/54717/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Oil #1000 — usage différentiel', reference:'54718', detail:'Huile silicone Tamiya utilisable dans les différentiels selon le fabricant (grades #700 à #1000).', url:'https://www.tamiya.com/english/products/54718/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #4000', reference:'22006', detail:'Huile silicone de différentiel 4 000 cSt.', url:'https://www.rcteam.com/collections/accessoires-et-pieces-huiles-graisses-colles-huile-et-graisse-differentiel-huile-de-differentiel' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #5000', reference:'22007', detail:'Huile silicone de différentiel 5 000 cSt.', url:'https://www.rcteam.com/collections/accessoires-et-pieces-huiles-graisses-colles-huile-et-graisse-differentiel-huile-de-differentiel' },
    // WS Line — références de modèles et codes produit relevés sur les fiches détaillées.
    { brand:'WS Line', category:'Servo', name:'Servo brushless low profile WS-3LP', reference:'WS-3LP', detail:'Servo low profile brushless HV, 25 dents ; 20 kg·cm à 6 V, 26 kg·cm à 7,4 V, 30 kg·cm à 8,4 V.', url:'https://www.wartelle-shop.com/servo-brushless-low-profil-ws-3lp-ws-line-c2x40885683' },
    { brand:'WS Line', category:'Moteur', name:'Moteur brushless 1/10 V2 — bobinage au choix', reference:'WS1005', detail:'Moteur 1/10 avec timing ajustable et double prise capteur ; bobinage à sélectionner sur la fiche.', url:'https://www.wartelle-shop.com/moteur-brushless-1-10eme-v2-ws-line-c2x32540276' },
    { brand:'WS Line', category:'Moteur', name:'Moteur brushless Stock 1/10 — 10.5T', reference:'WS10-10.5T-STOCK', detail:'Moteur brushless stock 1/10, 10.5T.', url:'https://www.wartelle-shop.com/moteur-brushless-1-10-stock-105t-ws-line-c2x42714447' },
    { brand:'WS Line', category:'Moteur', name:'Moteur brushless Stock 1/10 — 13.5T', reference:'WS10-13.5T-STOCK', detail:'Moteur brushless stock 1/10, 13.5T.', url:'https://www.wartelle-shop.com/moteur-brushless-1-10-stock-135t-ws-line-c2x42714458' },
    { brand:'WS Line', category:'Huile différentiel', name:'Huile silicone différentiel 100 ml — grade CPS au choix', reference:'WSDIFF1000', detail:'Référence de base du flacon ; viscosité CPS à sélectionner sur la fiche produit.', url:'https://www.wartelle-shop.com/huile-silicone-de-differentiel-100ml-choix-de-grade-cps-ws-line-c2x38716175' },
    { brand:'WS Line', category:'Huile différentiel', name:'Huile silicone différentiel haut grade 100 ml — CST au choix', reference:'WSDIFFPOT-2M', detail:'Référence de base du pot ; viscosité CST à sélectionner sur la fiche produit.', url:'https://www.wartelle-shop.com/huile-silicone-de-differentiel-haut-grade-en-pot-100ml-choix-de-grade-cst-ws-line-c2x38716211' },
    { brand:'WS Line', category:'Graisse', name:'Graisse cuivre 75 g', reference:'WSGRAISSE-CUIVRE', detail:'Graisse pour couples coniques de différentiel et articulations de cardans CVA.', url:'https://www.wartelle-shop.com/graisse-cuivre-en-pot-75gr-ws-line-c2x38716223' },
    // Corsatec — moteurs et électronique de compétition 1/10.
    { brand:'Corsatec', category:'Moteur', name:'Race Pro 1/10 — 3.5T', reference:'CT40010', detail:'Moteur brushless 540 sensored pour buggy/piste 1/10.', url:'https://www.corsatec.net/electro/36-corsatec-race-pro-motor-1-10-35-t-0651637033475.html' },
    { brand:'Corsatec', category:'Moteur', name:'Race Pro 1/10 — 4.5T', reference:'CT40011', detail:'Moteur brushless 540 sensored pour buggy/piste 1/10.', url:'https://www.corsatec.net/electro/37-corsatec-race-pro-motor-1-10-45-t-0651637033758.html' },
    { brand:'Corsatec', category:'Moteur', name:'CT-R Race Pro 1/10 — 6.5T', reference:'CT40014', detail:'Moteur brushless 540 sensored ; dimensions 52 × 34 mm.', url:'https://www.rcteam.com/products/corsatec-moteur-race-pro-1-10' },
    { brand:'Corsatec', category:'Moteur', name:'CT-R Race Pro 1/10 — 7.5T', reference:'CT40015', detail:'Moteur brushless 540 sensored ; dimensions 52 × 34 mm.', url:'https://www.rcteam.com/products/corsatec-moteur-brushless-ct-r-race-pro-1-10' },
    { brand:'Corsatec', category:'Variateur (ESC)', name:'Race Pro ESC 1/10 220A Black Edition', reference:'CT30010BK', detail:'Variateur compétition brushless sensored 1/10.', url:'https://www.corsatec.net/110/284-corsatec-race-pro-esc-1-10-220a-black-edition-corsatec-ct30010bk.html' },
    { brand:'Corsatec', category:'Programmation', name:'PCB de programmation CTX-10RS', reference:'CT30200', detail:'Carte de programmation Corsatec CTX-10RS.', url:'https://www.corsatec.net/110/372-corsatec-pcb-ctx-10rs-corsatec-ct30200-0651637384959.html' },
    // Cayote — gamme Crest 1/10.
    { brand:'Cayote', category:'Variateur (ESC)', name:'Crest RS120 1/10 Stock 120A', reference:'CYEA11002', detail:'Variateur compétition sensored 1/10.', url:'https://www.senditrc.com/brand/cayote' },
    { brand:'Cayote', category:'Variateur (ESC)', name:'Crest RS80 1/10 Stock 80A', reference:'CYEA11003', detail:'Variateur compétition sensored 1/10.', url:'https://www.senditrc.com/brand/cayote' },
    { brand:'Cayote', category:'Moteur', name:'Crest 1/10 Stock — 25.5T', reference:'CYEB11014', detail:'Moteur brushless sensored compétition 1/10.', url:'https://www.senditrc.com/brand/cayote' },
    { brand:'Cayote', category:'Programmation', name:'Program Box Cayote X-Link', reference:'CACPB01', detail:'Boîtier de programmation pour variateurs Cayote compatibles.', url:'https://www.senditrc.com/brand/cayote' },
    // REDS Racing — électronique 1/10 et programmation.
    { brand:'REDS', category:'Variateur (ESC)', name:'ZX PRO 160A 1/10 GEN3', reference:'SPCO0018', detail:'Variateur brushless sensored 1/10, BEC 6–7,4 V / 10 A ; programmation via application.', url:'https://www.reds-racing.com/shop/ESC-REDS-ZX-PRO-160A-1-10-GEN3-p646849677' },
    { brand:'REDS', category:'Programmation', name:'LCD Program Box REDS Z-Line 1/10', reference:'SPCS0015', detail:'Boîtier de programmation pour ESC REDS 1/10 compatibles.', url:'https://www.reds-racing.com/download' },
    { brand:'REDS', category:'Moteur', name:'VX3 540 Stock Pro Factory Selected — 13.5T', reference:'MTTE0036PC', detail:'Moteur brushless sensored 540, version Factory Selected High Torque, stator mis à jour.', url:'https://www.reds-racing.com/vx3factoryselectedmotors' },
    { brand:'REDS', category:'Moteur', name:'VX3 540 Stock Pro Factory Selected — 17.5T', reference:'MTTE0037PC', detail:'Moteur brushless sensored 540, version Factory Selected, stator mis à jour.', url:'https://www.reds-racing.com/vx3factoryselectedmotors' },
    { brand:'REDS', category:'Moteur', name:'VX3 540 Stock Pro Factory Selected — 21.5T', reference:'MTTE0038PC', detail:'Moteur brushless sensored 540, version Factory Selected, stator mis à jour.', url:'https://www.reds-racing.com/vx3factoryselectedmotors' },
    // SRT / Power HD / Sanwa / Futaba : modèles réels plutôt que fiches génériques.
    { brand:'SRT', category:'Servo', name:'BH8015 HV Brushless Low Profile', reference:'BH8015', detail:'Servo brushless low profile 1/10, 13 kg·cm à 7,4 V et 0,055 s/60°.', url:'https://srt-rc.com/index.php?id=43' },
    { brand:'Power HD', category:'Servo', name:'GTS-2 Low Profile Brushless HV', reference:'HD-GTS-2', detail:'Servo brushless low profile HV, 23 kg·cm / 0,06 s selon fiche revendeur.', url:'https://rc78.fr/75-servos' },
    { brand:'Power HD', category:'Servo', name:'B4S Brushless HV', reference:'HD-B4S', detail:'Servo brushless HV, câble 32 kg selon fiche revendeur.', url:'https://rc78.fr/75-servos' },
    { brand:'Sanwa', category:'Servo', name:'PGS-LH II Low Profile', reference:'SAN107A54479A', detail:'Servo digital low profile brushless, compatible 2S LiPo selon catalogue distributeur.', url:'https://shop.hoeco.at/download/Sanwa-Katalog.pdf' },
    { brand:'Futaba', category:'Servo', name:'S-C400', reference:'S-C400', detail:'Servo pour voitures électriques 1/10 buggy et touring selon catalogue Futaba.', url:'https://www.rc.futaba.co.jp/products/servo_car/' },


    // Team Associated — huiles d'amortisseurs et graisses avec références constructeur.
    ...[
      ['5420','10 wt'],['5427','15 wt'],['5421','20 wt'],['5424','22.5 wt'],['5428','25 wt'],
      ['5426','27.5 wt'],['5422','30 wt'],['5432','32.5 wt'],['5429','35 wt'],['5433','37.5 wt'],
      ['5423','40 wt'],['5434','42.5 wt'],['5430','45 wt'],['5438','47.5 wt'],['5435','50 wt'],
      ['5431','55 wt'],['5436','60 wt'],['5437','70 wt'],['5425','80 wt']
    ].map(([reference,grade]) => ({
      brand:'Team Associated', category:'Huile amortisseur', name:'Factory Team Silicone Shock Oil — '+grade,
      reference, detail:'Huile silicone d’amortisseur Team Associated, flacon 2 oz.', url:'https://www.associatedelectrics.com/teamassociated/parts/fluids/'
    })),
    // Team Associated Factory Team — gamme officielle d'huiles de différentiel.
    ...[
      ['5450','1 000'],['5451','2 000'],['5452','3 000'],['5444','4 000'],['5453','5 000'],
      ['5446','6 000'],['5454','7 000'],['5445','8 000'],['5449','9 000'],['5455','10 000'],
      ['5466','12 500'],['5447','15 000'],['5467','17 500'],['5456','20 000'],['5457','30 000'],
      ['5468','40 000'],['5458','60 000'],['5448','80 000'],['5459','100 000'],['5461','200 000'],
      ['5462','300 000'],['5464','400 000'],['5463','500 000'],['5465','1 000 000']
    ].map(([reference,grade])=>({
      brand:'Team Associated',category:'Huile différentiel',name:'Factory Team Silicone Diff Fluid — '+grade+' cSt',
      reference,detail:'Huile silicone de différentiel Team Associated, viscosité '+grade+' cSt.',
      url:'https://60years.associatedelectrics.com/parts/factoryteam/fluids/diff_fluid/'
    })),
    { brand:'Team Associated', category:'Graisse', name:'Stealth Black Grease 4cc', reference:'6588', detail:'Graisse noire pour entretien et étanchéité du différentiel.', url:'https://www.senditrc.com/brand/associated/cleaners-adhesives-and-lubricants' },
    { brand:'Team Associated', category:'Graisse', name:'Stealth Diff Lube 4cc', reference:'6591', detail:'Lubrifiant pour différentiel à billes / transmission selon manuel du véhicule.', url:'https://www.senditrc.com/brand/associated/cleaners-adhesives-and-lubricants' },
    { brand:'Team Associated', category:'Graisse', name:'Silicone Grease 4cc', reference:'6636', detail:'Graisse silicone Team Associated.', url:'https://www.senditrc.com/brand/associated/cleaners-adhesives-and-lubricants' },
    { brand:'Team Associated', category:'Graisse', name:'Factory Team Green Slime Shock Lube', reference:'1105', detail:'Lubrifiant pour joints et pièces internes d’amortisseurs.', url:'https://www.senditrc.com/brand/associated/cleaners-adhesives-and-lubricants' },
    // 6MIK / OPTIMA — graisses identifiées par références et huile de différentiel OPTIMA.
    { brand:'6MIK', category:'Graisse', name:'Graisse Blue spéciale joints toriques 35 g', reference:'H009', detail:'Graisse bleue 6MIK pour joints toriques.', url:'https://www.evocrc.com/308_6mik' },
    { brand:'6MIK', category:'Graisse', name:'Graisse haute température anti-grippage 35 g', reference:'H008', detail:'Graisse haute température 6MIK.', url:'https://www.evocrc.com/308_6mik' },
        // OPTIMA (gamme 6MIK) — huiles et ressorts 1/10 référencés.
    ...['10','12.5','15','17.5','20','22.5','25','27.5','30','32.5','35','37.5','40','42.5','45','47.5','50','52.5','55','57.5','60','62.5','65','67.5','70','72.5','75','80','85','90','95'].map(wt=>({
      brand:'OPTIMA',category:'Huile amortisseur',name:'Huile silicone OPTIMA amortisseur — '+wt+' WT',
      reference:'HO125 — variante '+wt+' WT',
      detail:'Huile silicone OPTIMA 100 ml. Variante de viscosité sélectionnable ; double indication WT/CST.',
      url:'https://www.rcteam.com/products/optima-huile-silicone-pour-amortisseur'
    })),
    ...[
      ['1000','1 000'],['2000','2 000'],['3000','3 000'],['4000','4 000'],['5000','5 000'],['6000','6 000'],
      ['7000','7 000'],['8000','8 000'],['9000','9 000'],['10000','10 000'],['12500','12 500'],['15000','15 000'],
      ['20000','20 000'],['25000','25 000'],['30000','30 000'],['40000','40 000'],['50000','50 000'],
      ['80000','80 000'],['100000','100 000'],['120000','120 000'],['150000','150 000'],['200000','200 000'],['300000','300 000']
    ].map(([cst,grade])=>({
      brand:'OPTIMA',category:'Huile différentiel',name:'Huile silicone OPTIMA différentiel — '+grade+' cSt',
      reference:'HO1000 — variante '+grade+' cSt',
      detail:'Huile silicone OPTIMA 100 ml. Variante de viscosité sélectionnable ; double indication WT/CST.',
      url:'https://www.rcteam.com/products/optima-huile-silicone-pour-differentiel'
    })),
    {brand:'OPTIMA',category:'Ressort',name:'Ressorts internes amortisseurs additionnels 1/10',reference:'POR2-115',compatibility:'Buggy 1/10 — ressorts internes d’amortisseurs',detail:'Kit de ressorts internes OPTIMA destiné à limiter le roulis et le tangage. Taux individuels non communiqués dans la fiche consultée.',url:'https://6mik-racing.com/optima-add-110-springs/'},
    // Tamiya — huiles silicone d’amortisseur et références supplémentaires d’huile de différentiel.
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #500', reference:'54712', detail:'Huile silicone d’amortisseur, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54712/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #250', reference:'54707', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54707/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #300', reference:'54708', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54708/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #350', reference:'54709', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54709/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #400', reference:'54710', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54710/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #450', reference:'54711', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54711/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #550', reference:'54713', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54713/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #700', reference:'54715', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54715/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #800', reference:'54716', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54716/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #1000', reference:'54718', detail:'Huile silicone d’amortisseur Tamiya, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54718/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Silicone Oil #600', reference:'54714', detail:'Huile silicone d’amortisseur, grade #600.', url:'https://www.tamiya.com/english/products/54714/index.html' },
    { brand:'Tamiya', category:'Huile amortisseur', name:'Damper Oil #900', reference:'54717', detail:'Huile silicone d’amortisseur, grade #900.', url:'https://www.tamiya.com/english/products/54717/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #100000', reference:'54294', detail:'Huile silicone de différentiel haute viscosité, flacon 40 ml.', url:'https://www.tamiya.com/english/products/54294/index.html' },
    { brand:'Tamiya', category:'Huile différentiel', name:'Silicone Diff Oil #300000', reference:'54988', detail:'Huile silicone de différentiel, grade 300 000 cSt, flacon 30 ml.', url:'https://hobbydex.com/rc/categories/oil-grease/tamiya/' },
    { brand:'Tamiya', category:'Graisse', name:'Molybdenum Grease', reference:'87022', detail:'Graisse au molybdène Tamiya.', url:'https://hobbydex.com/rc/categories/oil-grease/tamiya/' },
    { brand:'Tamiya', category:'Graisse', name:'Ceramic Grease', reference:'87025', detail:'Graisse céramique Tamiya.', url:'https://hobbydex.com/rc/categories/oil-grease/tamiya/' },
    { brand:'Tamiya', category:'Graisse', name:'Cera-Grease HG', reference:'87099', detail:'Graisse haute performance Tamiya.', url:'https://hobbydex.com/rc/categories/oil-grease/tamiya/' },


    // HUDY — inserts 1/10, huiles d'amortisseurs et de différentiels, références catalogue.
    ...[
      ['834201F','Insert HUDY 1/10 avant 4WD — mousse blanche S','Avant 4WD'],
      ['834301F','Insert HUDY 1/10 avant 4WD Dirt — mousse','Avant 4WD'],
      ['834302C','Insert HUDY 1/10 avant 4WD — cellule noire','Avant 4WD'],
      ['836101F','Insert HUDY 1/10 arrière 2WD/4WD Carpet — mousse','Arrière 2WD/4WD'],
      ['836201F','Insert HUDY 1/10 arrière 2WD/4WD — mousse blanche S','Arrière 2WD/4WD'],
      ['836301F','Insert HUDY 1/10 arrière 2WD/4WD Dirt — mousse','Arrière 2WD/4WD'],
      ['836302C','Insert HUDY 1/10 arrière 2WD/4WD — cellule noire','Arrière 2WD/4WD']
    ].map(([reference,name,position]) => ({
      brand:'HUDY', category:'Insert pneu', name, reference, compatibility:position,
      detail:'Insert mousse HUDY buggy 1/10 ; paire.',
      url:'https://hudy.net/xhudy/products/product_main.php?Hudy_Session=cf1596c1b02ac9279b287ee37fa66690&kategoria=11'
    })),
    ...[
      ['08106310','100 cSt'],['08106315','150 cSt'],['08106320','200 cSt'],['08106325','250 cSt'],
      ['08106330','300 cSt'],['08106335','350 cSt'],['08106337','375 cSt'],['08106340','400 cSt'],
      ['08106342','425 cSt'],['08106345','450 cSt'],['08106347','475 cSt'],['08106350','500 cSt'],
      ['08106352','525 cSt'],['08106355','550 cSt'],['08106358','575 cSt'],['08106360','600 cSt'],
      ['08106363','625 cSt'],['08106365','650 cSt'],['08106370','700 cSt'],['08106375','750 cSt'],
      ['08106380','800 cSt'],['08106390','900 cSt']
    ].map(([reference,grade]) => ({
      brand:'HUDY', category:'Huile amortisseur', name:'Premium Silicone Shock Oil — '+grade+' — 50 ml',
      reference, detail:'Huile silicone HUDY pour amortisseurs ; viscosité exprimée en cSt.',
      url:'https://www.hudy-shop.net/249-shocks-oils'
    })),
    ...[
      ['08106410','1 000 cSt'],['08106420','2 000 cSt'],['08106430','3 000 cSt'],['08106440','4 000 cSt'],
      ['08106450','5 000 cSt'],['08106470','7 000 cSt'],['08106480','8 000 cSt'],['08106490','9 000 cSt'],
      ['08106510','10 000 cSt'],['08106515','15 000 cSt'],['08106520','20 000 cSt'],['08106530','30 000 cSt'],
      ['08106540','40 000 cSt'],['08106550','50 000 cSt'],['08106610','100 000 cSt'],['08106620','200 000 cSt'],
      ['08106630','300 000 cSt'],['08106650','500 000 cSt'],['08106690','1 000 000 cSt']
    ].map(([reference,grade]) => ({
      brand:'HUDY', category:'Huile différentiel', name:'Premium Silicone Diff Oil — '+grade,
      reference, detail:'Huile silicone HUDY pour différentiels ; viscosité exprimée en cSt.',
      url:'https://www.hudy-shop.net/250-differentials-oils'
    })),
    { brand:'HUDY', category:'Graisse', name:'Graphite Grease', reference:'106210', detail:'Graisse graphite HUDY pour pièces tournantes et engrenages chargés.', url:'https://www.hudy.net/xhudy/products/product_main.php?Hudy_Session=cf1596c1b02ac9279b287ee37fa66690&kategoria=333' },
    { brand:'HUDY', category:'Graisse', name:'Diff Grease', reference:'106211', detail:'Graisse silicone pour différentiels à billes et butées.', url:'https://www.hudy.net/xhudy/products/proddesc.php?kategoria=333&prod_id=318' },
    { brand:'HUDY', category:'Graisse', name:'Super Differential Grease', reference:'106212', detail:'Graisse plus épaisse pour plaques de différentiel à billes et butées.', url:'https://www.hudy.net/xhudy/products/proddesc.php?Hudy_Session=40d5a8565fc77e6c2393f2300f4143a6&prod_id=537' },
    { brand:'HUDY', category:'Graisse', name:'Joint Grease', reference:'106213', detail:'Graisse spéciale pour joints et articulations de transmission.', url:'https://www.hudy.net/xhudy/products/product_main.php?Hudy_Session=cf1596c1b02ac9279b287ee37fa66690&kategoria=333' },
    // Yokomo — huiles silicone de différentiel et graisses d'entretien.
    ...[
      ['CS-5000B','5 000'],['CS-7500B','7 500'],['CS-10000B','10 000'],['CS-15000B','15 000'],['CS-20000B','20 000'],
      ['CS-30000B','30 000'],['CS-50000OB','50 000']
    ].map(([reference,grade]) => ({
      brand:'Yokomo', category:'Huile différentiel', name:'Super Blend Silicone Oil #'+grade+' — 30 cc',
      reference, detail:'Huile silicone Yokomo pour différentiels ; viscosité nominale '+grade+'.',
      url:'https://hobbydex.com/rc/releases/yokomo/so1-0/'
    })),
    { brand:'Yokomo', category:'Graisse', name:'Black Grease', reference:'CS-BGA', detail:'Graisse noire pour butées de différentiel à billes, arbres et pièces métalliques.', url:'https://www.teamyokomo.com/en/collections/series-bdfwd/products/cs-bga' },
    { brand:'Yokomo', category:'Graisse', name:'Diff Grease', reference:'CS-DGA', detail:'Graisse Yokomo pour différentiel à billes.', url:'https://hobbydex.com/rc/releases/yokomo/so1-0/' },
    { brand:'Yokomo', category:'Graisse', name:'Seal Grease', reference:'CS-SLGA', detail:'Graisse Yokomo pour joints toriques et joints d’étanchéité.', url:'https://hobbydex.com/rc/releases/yokomo/so1-0/' },
    // Pro-Line — inserts 1/10 buggy.
    { brand:'Pro-Line', category:'Insert pneu', name:'V2 Closed Cell Rear Foam 1/10 Buggy', reference:'6185-04', compatibility:'Arrière 2WD/4WD', detail:'Insert arrière cellule fermée V2 pour pneus buggy 2.2 pouces ; paire.', url:'https://www.jetmodel.it/prodotto/proline-closed-cell-v2-inserti/' },
    { brand:'Pro-Line', category:'Insert pneu', name:'Closed Cell 4WD Front Inserts 1/10 Buggy', reference:'6185-02', compatibility:'Avant 4WD', detail:'Insert avant cellule fermée pour buggy 1/10 4WD.', url:'https://www.prolineracing.com/' },
    { brand:'Pro-Line', category:'Insert pneu', name:'Closed Cell 2WD Front Foam Inserts 1/10 Buggy', reference:'6185-03', compatibility:'Avant 2WD', detail:'Insert avant cellule fermée pour buggy 1/10 2WD.', url:'https://www.cml-racing.com/gb/pneus/3891-proline-1-10-closed-2wd-front-foam-inserts-2-proline-pl6185-03-675118156590.html' },
    { brand:'Pro-Line', category:'Insert pneu', name:'Open Cell Medium Rear Foam 1/10 Buggy', reference:'6365-00', compatibility:'Arrière 2WD/4WD', detail:'Insert arrière mousse ouverte medium pour buggy 1/10.', url:'https://teams.prolineracing.com/Images/pricelist.pdf' },


    // Hobbywing — gamme officielle XeRun V10 G3 (Modified, Stock et variantes JMRCA).
    ...[
      ['30401106','3.5T','9 450 kV','Modified 1/12 piste'],
      ['30401102','4.5T','7 340 kV','Modified 1/10 et 1/12 piste'],
      ['30401116','5T','6 500 kV','Modified 1/10 et 1/12 piste'],
      ['30401107','5.5T','5 900 kV','Modified 4WD TT 1/10'],
      ['30401117','6T','5 500 kV','Modified 4WD TT 1/10'],
      ['30401109','6.5T','5 120 kV','Modified 4WD TT 1/10'],
      ['30401118','7T','4 800 kV','Drift et TT 2WD 1/10'],
      ['30401110','7.5T','4 420 kV','Drift et TT 2WD 1/10'],
      ['30401119','8T','4 200 kV','Drift et TT 2WD 1/10'],
      ['30401111','8.5T','3 970 kV','Drift et TT 2WD 1/10'],
      ['30401112','10.5T','4 500 kV','Stock / drift 1/10'],
      ['30401103','13.5T','3 710 kV','Stock 1/10'],
      ['30401104','17.5T','2 830 kV','Stock 1/10'],
      ['30401105','21.5T','2 250 kV','Stock 1/10'],
      ['30401113','25.5T','1 500 kV','Stock 1/10'],
      ['30401120','13.5T JMRCA','3 610 kV','Stock JMRCA 1/10'],
      ['30401121','17.5T JMRCA','2 790 kV','Stock JMRCA 1/10'],
      ['30401122','21.5T JMRCA','2 240 kV','Stock JMRCA 1/10'],
      ['30401123','6.5T OnRoad Spec','6 300 kV','Modified piste 1/10']
    ].map(([reference,turn,kv,application])=>({
      brand:'Hobbywing',category:'Moteur',name:'XeRun V10 G3 '+turn,
      reference,compatibility:application,
      detail:'Moteur brushless sensored 2 pôles, '+kv+', gamme officielle XeRun V10 G3. Application : '+application+'.',
      url:'https://www.hobbywing.com/en/products/xerun-v10-g327'
    })),
    // Hobbywing — versions 1/10 stock officielles XeRun V10 G4 et G4R.
    ...[
      ['30401140','13.5T','3 950 kV'],['30401141','17.5T','3 020 kV'],['30401142','21.5T','2 500 kV']
    ].map(([reference,turn,kv])=>({
      brand:'Hobbywing',category:'Moteur',name:'XeRun V10 G4 '+turn,
      reference,detail:'Moteur brushless sensored 1/10 stock, '+kv+'.',
      url:'https://www.hobbywing.com/en/products/xerun-v10-g434.html'
    })),
    ...[
      ['30401749','13.5T','standard'],['30401746','13.5T','ROAR'],
      ['30401748','17.5T','standard'],['30401745','17.5T','ROAR'],
      ['30401747','21.5T','standard'],['30401744','21.5T','ROAR']
    ].map(([reference,turn,edition])=>({
      brand:'Hobbywing',category:'Moteur',name:'XeRun V10 G4R '+turn+(edition==='ROAR'?' ROAR':''),
      reference,detail:'Moteur brushless sensored 1/10 stock, version '+edition+'.',
      url:'https://www.hobbywing.com/en/products/xerunv10g4r'
    })),
    // LRP — versions Dynamic10 et Dynamic10L documentées par le fabricant.
    {brand:'LRP',category:'Moteur',name:'Dynamic10 BL 5800 kV',reference:'53450',detail:'Moteur brushless 540/550 1/10, version courte Dynamic10.',url:'https://www.lrp.cc/en/product/53450/'},
    {brand:'LRP',category:'Moteur',name:'Dynamic10L BL 2400 kV',reference:'53530',detail:'Moteur brushless 1/10 long 550, 2400 kV.',url:'https://www.lrp.cc/en/product/53530/'},
    // Tekin — bobinages SPEC-R GEN4 1/10 manquants.
    {brand:'Tekin',category:'Moteur',name:'Redline SPEC-R GEN4 — 25.5T 540',reference:'TT2760',compatibility:'Touring 1/10 / Formula 1',detail:'Moteur brushless sensored GEN4, rotor 12.3 mm.',url:'https://www.teamtekin.com/specr.html'},
    {brand:'Tekin',category:'Moteur',name:'Redline SPEC-R GEN4 — 21.5T 540',reference:'TT2761',compatibility:'Touring 1/10 / Pan Car',detail:'Moteur brushless sensored GEN4, rotor 12.5 mm.',url:'https://www.teamtekin.com/specr.html'},
    // Reedy — gamme stock Sonic SP5, distincte des moteurs modified Sonic 540-M4.
    ...[
      ['27482','10.5T'],['27481','13.5T'],['27480','17.5T'],['27479','21.5T'],['27494','25.5T']
    ].map(([reference,turn])=>({
      brand:'Reedy',category:'Moteur',name:'Sonic SP5 540 — '+turn,
      reference,detail:'Moteur brushless sensored stock 1/10 Reedy Sonic SP5.',
      url:'https://roarracing.org/approved_brushless_motors.php?ordby=man'
    })),
    // Cayote — gamme Crest Modi 540 complète 3.5T à 9.5T et Crest Stocki.
    ...[
      ['CYEB11001','3.5T'],['CYEB11002','4.0T'],['CYEB11003','4.5T'],['CYEB11004','5.0T'],
      ['CYEB11005','5.5T'],['CYEB11006','6.0T'],['CYEB11007','6.5T'],['CYEB11008','7.0T'],
      ['CYEB11009','7.5T'],['CYEB11015','8.0T'],['CYEB11016','8.5T'],['CYEB11017','9.0T'],['CYEB11018','9.5T']
    ].map(([reference,turn])=>({
      brand:'Cayote',category:'Moteur',name:'Crest Modi 540 1/10 — '+turn,
      reference,detail:'Moteur brushless sensored compétition 1/10.',
      url:'https://www.senditrc.com/brand/cayote/brushless-motors'
    })),
    ...[
      ['CYEB11010','10.5T'],['CYEB11011','13.5T'],['CYEB11012','17.5T'],['CYEB11013','21.5T']
    ].map(([reference,turn])=>({
      brand:'Cayote',category:'Moteur',name:'Crest Stocki 1/10 — '+turn,
      reference,detail:'Moteur brushless sensored compétition stock 1/10.',
      url:'https://www.senditrc.com/brand/cayote/brushless-motors'
    })),
    // REDS — versions standards non Factory Selected de la gamme VX3 540 Stock Pro.
    ...[
      ['MTTE0036P','13.5T High Torque'],['MTTE0037P','17.5T'],['MTTE0038P','21.5T']
    ].map(([reference,turn])=>({
      brand:'REDS',category:'Moteur',name:'VX3 540 Stock Pro — '+turn,
      reference,detail:'Moteur brushless sensored 2 pôles, version standard (non Factory Selected).',
      url:'https://www.reds-racing.com/1-10-vx3-stock-pro-motor'
    })),
    // Yokomo — gamme ZERO3 1/10 du catalogue constructeur Spring 2026.
    ...[
      ['YM-3BL85A','8.5T'],['YM-3BL105A','10.5T'],['YM-3BL135A','13.5T'],
      ['YM-3BL175A','17.5T'],['YM-3BL215A','21.5T']
    ].map(([reference,turn])=>({
      brand:'Yokomo',category:'Moteur',name:'ZERO3 Brushless 1/10 — '+turn,
      reference,detail:'Moteur brushless sensored Yokomo ZERO3, gamme catalogue 2026.',
      url:'https://teamyokomo.com/downloadfiles/%2103%21CATALOG/2026_Spring_YOKOMO_CATALOG.pdf'
    })),


    // RC10B7 / B7.1 — ressorts 13 mm Team Associated, références et duretés issues des catalogues/manuels.
    ...[
      ['Avant','91940','Blanc','3.3'],['Avant','91941','Gris','3.4'],['Avant','91942','Bleu','3.6'],['Avant','91943','Jaune','3.8'],['Avant','91944','Rouge','4.0'],['Avant','91945','Orange','4.3'],['Avant','91946','Violet','4.6'],
      ['Arrière','91947','Vert','1.8'],['Arrière','91948','Blanc','1.9'],['Arrière','91949','Gris','2.0'],['Arrière','91950','Bleu','2.2'],['Arrière','91951','Jaune','2.3']
    ].map(([position,reference,color,rate])=>({
      brand:'Team Associated',category:'Ressort',
      name:`RC10B7 / B7.1 — ${position} — ${color} (${rate} lb/in)`,
      reference,compatibility:`RC10B7 B7.1 — 1/10 Buggy 2WD — 13 mm — ${position.toLowerCase()}`,
      detail:`Ressort 13 mm Team Associated. Couleur : ${color}. Dureté : ${rate} lb/in. Référence constructeur : ${reference}. Vérifier la génération et la longueur de ressort avant commande.`,
      url:'https://apps.associatedelectrics.com/ateamapps/vehicle_tuning/spring-rates/index.html'
    })),
    ...[
      ['Avant','91946','Violet','4.6'],['Arrière','91959','Violet','2.6']
    ].map(([position,reference,color,rate])=>({
      brand:'Team Associated',category:'Ressort',
      name:`RC10B7.1 Team Kit — ${position} — ${color} (${rate} lb/in)`,
      reference,compatibility:`RC10B7.1 Team Kit — 1/10 Buggy 2WD — 13 mm — ${position.toLowerCase()}`,
      detail:`Ressort violet 13 mm de la déclinaison B7.1 Team Kit. Dureté : ${rate} lb/in. Référence constructeur : ${reference}; à distinguer des kits Carpet / versions précédentes.`,
      url:'https://www.sodialed.com/rc-setup-tips/team-associated-rc10-b7-1-manual-pdf'
    })),
  ];
  const knownBrands = ['Corsatec', 'WS Line', 'Cayote', 'REDS', 'OPTIMA', 'Hobbywing', 'XTR Racing', '6MIK', 'Team Associated', '1UP Racing', 'SRT', 'Power HD', 'Savöx', 'Schumacher'];
  // Wordmarks SVG intégrés : ils ne dépendent d'aucun hébergeur externe et restent visibles hors ligne.
  function brandWordmark(label, color, secondary = '#222222') {
    const fontSize = label.length > 12 ? 23 : label.length > 8 ? 27 : 34;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72"><rect width="240" height="72" rx="9" fill="#fff"/><path d="M12 57H228" stroke="${color}" stroke-width="5" stroke-linecap="round"/><text x="120" y="43" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize}" font-weight="900" letter-spacing="-.8" fill="${secondary}">${label}</text></svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }
  const MATERIAL_BRAND_LOGOS = {
    'Hobbywing': 'https://www.hobbywingdirect.com/cdn/shop/files/HW3x6-Viewing-only_3c0904dc-0c98-46e5-8dd3-f2d44df564c8_1600x.jpg?v=1697845198',
    'Team Associated': 'https://apps.associatedelectrics.com/downloads/thumbs/TeamAssociated-color-lightBG-300.png',
    'Schumacher': 'https://schumacher-racing.com/wp-content/uploads/2024/01/Schumacher_racing_pink-gelb-1.png',
    'Savöx': 'https://atomfire.com/cdn/shop/collections/savox-logo-square.png?v=1701816872',
    'OPTIMA': 'https://6mik-racing.com/wp-content/uploads/2020/04/logo-OPTIMA-2016-1200.jpg',
    '6MIK': 'https://www.rcteam.com/cdn/shop/files/6mik-planche-de-stickers-logo-pg01_large.jpg?v=1705739978',
    'Cayote': 'https://www.hearnshobbies.com/cdn/shop/files/banner_1.png?v=1731377454&width=2169',
    'Corsatec': 'https://static.wixstatic.com/media/ffd67b_a3ca8f4034384219bbc7b9a3d1545674~mv2.png',
    'Hot Race Tires': 'https://www.hotrace-asia.com/media/12/45/d9/1746796312/hotrace.png?ts=1746796313',
    'Jetko': 'https://techtonichobbies.com.au/cdn/shop/products/logo.jpg?v=1697259873&width=901',
    'Power HD': 'https://chd.hk/images/logo.jpg',
    'REDS': 'https://rsrc.biz/img/m/26.jpg',
    'Sanwa': 'https://thepihut.com/cdn/shop/files/sanwa-logo_500x.jpg?v=1663172495',
    'SRT': 'https://www.srt-rc.com/data/upload/image/201805/112c8f371d4d46d72955761ae81ced0d.jpg',
    'Tekin': 'https://www.teamtekin.com/images/tekin_logo_hires_2015.png?crc=4065896322',
    'VP-Pro': 'https://cdn.hardwickrctrack.co.uk/static/logos/vpracing.webp',
    'WS Line': 'https://www.wartelle-shop.com/Files/132405/Img/07/IMG-0614-1-003-zoom.jpg',
    'XTR Racing': 'https://www.inforc.net/wp-content/uploads/2016/04/xtr-racing.jpg',
    'Yokomo': 'https://cdn.ecommercedns.uk/files/7/229017/4/49342684/yokomo-logo-retro.png',
    '1UP Racing': 'https://i.ytimg.com/vi/ndTXtEMba2c/maxresdefault.jpg',
    'Futaba': brandWordmark('FUTABA', '#dc2b30', '#171717'),
    'HUDY': brandWordmark('HUDY', '#e0a21b', '#171717'),
    'JConcepts': brandWordmark('JCONCEPTS', '#252525', '#171717'),
    'LRP': brandWordmark('LRP', '#1764a5', '#171717'),
    'Pro-Line': brandWordmark('PRO-LINE', '#dc2b30', '#171717'),
    'Reedy': brandWordmark('REEDY', '#dc2b30', '#171717'),
    'Tamiya': brandWordmark('TAMIYA', '#dc2b30', '#171717'),
    'TLR': brandWordmark('TLR', '#dc2b30', '#171717')
  };
  const root = document.getElementById('materialsApp');
  if (!root) return;
  let activeTab = 'catalog';
  let selectedBrand = '';
  function loadSaved() { try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
  // Move automatically seeded catalogue entries out of the personal inventory.
  const legacyPrefixes = ['seed-hobbywing-esc-v1-', 'seed-hobbywing-motors-v3-', 'seed-rsrc-xrt-oils-v3-', 'seed-associated-spring-v1-'];
  let savedItems = loadSaved();
  const legacyCatalogItems = savedItems.filter(item => legacyPrefixes.some(prefix => String(item.id || '').startsWith(prefix)));
  for (const item of legacyCatalogItems) {
    if (!catalog.some(existing => existing.brand === item.brand && existing.name === item.name && existing.reference === item.reference)) catalog.push({ ...item, id: undefined });
  }
  if (legacyCatalogItems.length) {
    savedItems = savedItems.filter(item => !legacyPrefixes.some(prefix => String(item.id || '').startsWith(prefix)));
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); } catch {}
  }
  function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems)); window.dispatchEvent(new Event('rc-setup-data-changed')); return true; } catch { alert('Stockage local plein : retire une fiche ou libère de l’espace.'); return false; } }
  function esc(value) { return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c]); }
  function allMaterials() { return [...catalog, ...savedItems]; }
  function materialLabel(item) { return `${item.brand} ${item.name}${item.reference ? ` — réf. ${item.reference}` : ''}`; }
  function refreshPickers() {
    document.querySelectorAll('[data-library-category]').forEach((select) => {
      const categories = select.dataset.libraryCategory.split('|');
      const search = select.parentElement.querySelector('[data-library-search]');
      const query = (search?.value || '').trim().toLocaleLowerCase('fr');
      const current = select.value;
      const items = allMaterials().filter((item) => categories.includes(item.category) &&
        (!query || [item.brand,item.name,item.reference,item.detail].join(' ').toLocaleLowerCase('fr').includes(query)));
      select.innerHTML = '<option value="">Choisir un article…</option>' + items.map((item) => `<option value="${esc(materialLabel(item))}">${esc(item.category)} · ${esc(materialLabel(item))}</option>`).join('');
      if (items.some((item) => materialLabel(item) === current)) select.value = current;
    });
  }
  function render() {
    const brands = [...new Set([...knownBrands, ...allMaterials().map((item) => item.brand)])].sort((a,b) => a.localeCompare(b,'fr'));
    const categories = [...new Set(allMaterials().map((item) => item.category))].sort((a,b) => a.localeCompare(b,'fr'));
    const totalQty = savedItems.reduce((sum,item)=>sum+Math.max(0,Number(item.quantity)||0),0);
    const lowStock = savedItems.filter(item=>Number(item.quantity)<=2).length;
    root.innerHTML = `<div class="inventory-summary"><div class="inventory-stat"><span>Références possédées</span><strong>${savedItems.length}</strong></div><div class="inventory-stat"><span>Quantité totale</span><strong>${totalQty}</strong></div><div class="inventory-stat"><span>Stock faible / nul</span><strong>${lowStock}</strong></div></div><div class="panel material-controls"><div class="material-tabs"><button type="button" class="material-tab ${activeTab === 'catalog' ? 'active' : ''}" data-tab="catalog">Bibliothèque (${catalog.length})</button><button type="button" class="material-tab ${activeTab === 'mine' ? 'active' : ''}" data-tab="mine">Mon matériel (${savedItems.length})</button></div><div class="material-filter-row"><input id="materialSearch" type="search" placeholder="Rechercher marque, référence, catégorie, châssis…"><div class="material-brand-filter"><div class="brand-filter-heading"><strong>Filtrer par marque</strong><button type="button" id="clearBrandFilter" class="brand-clear-button">Toutes les marques</button></div><div id="materialBrandPicker" class="material-brand-grid">${brands.map((v)=>{const logo=MATERIAL_BRAND_LOGOS[v];const initials=esc(v.split(/[\s-]+/).map(w=>w[0]).slice(0,2).join("").toUpperCase());return '<button type="button" class="material-brand-tile'+(logo?' has-brand-logo':'')+'" data-brand="'+esc(v)+'" aria-pressed="false">'+(logo?'<img class="material-brand-logo" src="'+logo+'" alt="" loading="lazy" decoding="async" onload="this.parentElement.classList.add(\'has-logo-loaded\')" onerror="this.parentElement.classList.remove(\'has-brand-logo\');this.remove()">':'')+'<span class="brand-logo-mark">'+initials+'</span><span class="material-brand-name">'+esc(v)+'</span></button>';}).join("")}</div></div><select id="categoryFilter"><option value="">Toutes les catégories</option>${categories.map((v) => `<option>${esc(v)}</option>`).join('')}</select><select id="positionFilter"><option value="">Toutes compatibilités</option><option value="Avant">Avant</option><option value="Arrière">Arrière</option><option value="2WD">2WD</option><option value="4WD">4WD</option></select><select id="scaleFilter"><option value="">Toutes échelles</option><option value="1/10">1/10</option><option value="1/8">1/8</option><option value="1/12">1/12</option><option value="1/16">1/16</option></select><select id="vehicleTypeFilter"><option value="">Tous types de voitures</option><option value="Buggy">Buggy</option><option value="Truggy">Truggy</option><option value="Truck">Truck</option><option value="Short Course">Short Course</option><option value="Touring">Touring</option><option value="Crawler">Crawler</option><option value="Monster Truck">Monster Truck</option></select><select id="stockFilter"><option value="">Tous les stocks</option><option value="available">En stock</option><option value="low">Stock faible (1–2)</option><option value="empty">Épuisé (0)</option></select></div><p class="catalog-note">Recherche globale par marque, référence, catégorie ou compatibilité. Les filtres échelle / type de voiture s’appuient sur les informations de compatibilité renseignées dans chaque fiche ; une référence sans compatibilité précisée ne sera pas classée automatiquement.</p></div><div class="material-add-row"><button type="button" class="button button-primary" id="showMaterialForm">＋ Ajouter manuellement</button></div><form id="materialForm" class="panel material-form hidden"><h2>Ajouter à ma bibliothèque</h2><div class="material-form-grid"><label>Marque<input name="brand" required placeholder="Ex. Schumacher"></label><label>Catégorie<select name="category"><option>Pneus / roues</option><option>Insert pneu</option><option>Huile amortisseur</option><option>Huile différentiel</option><option>Graisse</option><option>Ressort</option><option>Variateur (ESC)</option><option>Moteur</option><option>Servo</option><option>Radio / récepteur</option><option>Outil</option><option>Autre</option></select></label><label>Nom<input name="name" required></label><label>Référence<input name="reference"></label><label>Quantité possédée<input name="quantity" type="number" min="0" step="1" value="1"></label><label>Compatibilité<input name="compatibility" placeholder="Échelle / châssis / avant / arrière"></label><label class="material-wide">Notes<textarea name="detail" rows="2"></textarea></label><label class="material-wide">Lien fiche produit<input name="url" type="url" placeholder="https://…"></label></div><div class="actions-row"><button class="button button-primary" type="submit">Enregistrer</button><button class="button button-soft" id="cancelMaterialForm" type="button">Annuler</button></div></form><div id="materialCards" class="material-grid"></div>`;
    const stockSelect=root.querySelector('#stockFilter');stockSelect.disabled=activeTab!=='mine';stockSelect.title=activeTab==='mine'?'Filtrer les références selon leur quantité disponible':'Le filtre de stock est disponible dans Mon matériel.';
    root.querySelectorAll('.material-tab').forEach((b) => b.addEventListener('click', () => { activeTab = b.dataset.tab; render(); }));
    root.querySelector('#showMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.toggle('hidden'));
    root.querySelector('#cancelMaterialForm').addEventListener('click', () => root.querySelector('#materialForm').classList.add('hidden'));
    root.querySelector('#materialForm').addEventListener('submit', addItem);
    ['materialSearch','categoryFilter','positionFilter','scaleFilter','vehicleTypeFilter','stockFilter'].forEach(id=>root.querySelector('#'+id).addEventListener(id==='materialSearch'?'input':'change',renderCards));
    root.querySelector('#materialBrandPicker').addEventListener('click',event=>{const button=event.target.closest('[data-brand]');if(!button)return;selectedBrand=selectedBrand===button.dataset.brand?'':button.dataset.brand;renderCards();});
    root.querySelector('#clearBrandFilter').addEventListener('click',()=>{selectedBrand='';renderCards();});
    renderCards(); refreshPickers();
  }
  function renderCards() {
    const q = root.querySelector('#materialSearch').value.trim().toLocaleLowerCase('fr');
    const brand = selectedBrand, category = root.querySelector('#categoryFilter').value, position = root.querySelector('#positionFilter').value, scale=root.querySelector('#scaleFilter').value, vehicleType=root.querySelector('#vehicleTypeFilter').value, stock = root.querySelector('#stockFilter').value;
    const list = (activeTab === 'catalog' ? catalog : savedItems).filter((x) => {
      const quantity=Number(x.quantity)||0;
      const searchable=[x.compatibility,x.detail,x.name,x.type].join(' ').toLocaleLowerCase('fr');
      return (!brand || x.brand === brand) && (!category || x.category === category) && (!position || searchable.includes(position.toLocaleLowerCase('fr'))) && (!scale || searchable.includes(scale.toLocaleLowerCase('fr'))) && (!vehicleType || searchable.includes(vehicleType.toLocaleLowerCase('fr'))) && (!stock || (activeTab==='mine' && (stock==='available'?quantity>2:stock==='low'?quantity>0&&quantity<=2:quantity===0))) && (!q || [x.brand,x.category,x.name,x.reference,x.detail,x.compatibility].join(' ').toLocaleLowerCase('fr').includes(q));
    });
    root.querySelectorAll('#materialBrandPicker [data-brand]').forEach(button=>{const active=brand===button.dataset.brand;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});
    root.querySelector('#clearBrandFilter').classList.toggle('active',!brand);
    const cards = root.querySelector('#materialCards');
    cards.innerHTML = list.length ? list.map((item) => {
      const owned = savedItems.some((x) => x.id === item.id), quantity=Math.max(0,Number(item.quantity)||0);
      const stockState=quantity===0?'Épuisé':quantity<=2?'Stock faible':'En stock';
      const stockMarkup=owned?`<div class="inventory-quantity"><span class="stock-state ${quantity===0?'stock-empty':quantity<=2?'stock-low':'stock-ok'}">${stockState}</span><div class="quantity-controls"><button class="quantity-step" data-id="${esc(item.id)}" data-step="-1" type="button" aria-label="Diminuer la quantité">−</button><input class="quantity-value" data-id="${esc(item.id)}" type="number" min="0" step="1" value="${quantity}" aria-label="Quantité possédée"><button class="quantity-step" data-id="${esc(item.id)}" data-step="1" type="button" aria-label="Augmenter la quantité">＋</button></div></div>`:'';
      return `<article class="material-card"><div class="material-card-head"><span class="material-category">${esc(item.category)}</span><span class="material-brand">${esc(item.brand)}</span></div><h3>${esc(item.name)}</h3><div class="material-reference">Réf. <strong>${esc(item.reference || 'non indiquée')}</strong></div>${item.compatibility ? `<p>Compatibilité : ${esc(item.compatibility)}</p>` : ''}<p>${esc(item.detail || '')}</p>${stockMarkup}<div class="material-card-actions">${item.url ? `<a class="button button-soft" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Fiche ↗</a>` : ''}${owned ? `<button class="button button-quiet danger-action remove-material" data-id="${esc(item.id)}" type="button">Retirer</button>` : `<button class="button button-primary save-material" data-id="${esc(item.id)}" type="button">＋ Ajouter à mon stock</button>`}</div></article>`;
    }).join('') : '<div class="empty-state material-empty"><strong>Aucun matériel trouvé</strong><span>Change les filtres ou ajoute ta référence.</span></div>';
    cards.querySelectorAll('.save-material').forEach((b) => b.addEventListener('click', () => { const x = catalog.find((i) => i.id === b.dataset.id); if (!x || savedItems.some((i) => i.brand === x.brand && i.name === x.name && i.reference === x.reference)) return; const saved={ ...x, quantity:1, id: `saved-${Date.now()}-${Math.random().toString(16).slice(2,7)}` }; savedItems.unshift(saved); if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); } else savedItems=savedItems.filter(i=>i.id!==saved.id); }));
    cards.querySelectorAll('.remove-material').forEach((b) => b.addEventListener('click', () => { if(!confirm('Retirer cette référence de ton inventaire personnel ?'))return; const previous=savedItems; savedItems = savedItems.filter((i) => i.id !== b.dataset.id); if (persist()) { render(); window.dispatchEvent(new Event('rc-materials-updated')); } else savedItems=previous; }));
    cards.querySelectorAll('.quantity-step').forEach(button=>button.addEventListener('click',()=>{const item=savedItems.find(x=>x.id===button.dataset.id);if(!item)return;const previous=item.quantity;item.quantity=Math.max(0,(Number(item.quantity)||0)+Number(button.dataset.step));if(persist())render();else item.quantity=previous;}));
    cards.querySelectorAll('.quantity-value').forEach(input=>input.addEventListener('change',()=>{const item=savedItems.find(x=>x.id===input.dataset.id);if(!item)return;const previous=item.quantity;item.quantity=Math.max(0,Math.floor(Number(input.value)||0));if(persist())render();else input.value=previous;}));
  }
  function addItem(event) {
    event.preventDefault(); const d = Object.fromEntries(new FormData(event.currentTarget).entries());
    const item={ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2,7)}`, brand: d.brand.trim(), category: d.category, name: d.name.trim(), reference: d.reference.trim(), quantity: Math.max(0, Math.floor(Number(d.quantity)||0)), compatibility: d.compatibility.trim(), detail: d.detail.trim(), url: d.url.trim() };
    savedItems.unshift(item);
    if (persist()) { activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); }
    else savedItems=savedItems.filter(x=>x.id!==item.id);
  }
  // Une référence Team Associated identifie une seule pièce : conserve la fiche B7 vérifiée et fusionne les doublons.
  const b7SpringRefs = new Set(['91940','91941','91942','91943','91944','91945','91946','91947','91948','91949','91950','91951']);
  const canonicalB7Springs = new Map(catalog.filter(item => item.brand === 'Team Associated' && b7SpringRefs.has(item.reference) && item.name.startsWith('RC10B7 —')).map(item => [item.reference,item]));
  for (let i = catalog.length - 1; i >= 0; i--) {
    const item = catalog[i];
    if (item.brand === 'Team Associated' && b7SpringRefs.has(item.reference) && canonicalB7Springs.get(item.reference) !== item) {
      if (item.reference === '91946' && item.name.includes('RC10B7.1 Team Kit')) {
        const canonical = canonicalB7Springs.get('91946');
        if (canonical) canonical.compatibility = 'RC10B7 et RC10B7.1 Team Kit Carpet — 1/10 Buggy — 13 mm — avant';
      }
      catalog.splice(i,1);
    }
  }
  const rearB7OneSpring = catalog.find(item => item.brand === 'Team Associated' && item.reference === '91961');
  if (rearB7OneSpring) {
    rearB7OneSpring.name = 'RC10B7.1 — Arrière — Noir (1.7 lb/in)';
    rearB7OneSpring.compatibility = 'RC10B7.1 — 1/10 Buggy 2WD — 13 mm — arrière';
    rearB7OneSpring.detail = 'Ressort arrière 13 mm. Couleur : Noir. Dureté : 1.7 lb/in. Référence fabricant : 91961.';
  }
  const rearTruckSpring = catalog.find(item => item.brand === 'Team Associated' && item.reference === '91957');
  if (rearTruckSpring) {
    rearTruckSpring.name = 'RC10T84 — Arrière — Rouge (2.4 lb/in)';
    rearTruckSpring.compatibility = 'RC10T84 — 1/10 Truck — 13 mm — arrière';
    rearTruckSpring.detail = 'Ressort arrière 13 mm. Couleur : Rouge. Dureté : 2.4 lb/in. Référence fabricant : 91957. Compatibilité : RC10T84 Team.';
  }
  catalog.forEach((item) => { item.id = `${item.brand}|${item.reference}|${item.name}`; });
  render();

  const setupForm = document.getElementById('setupForm');
  if (!setupForm) return;
  const pickerMap = [
    ['frontTires','Pneus / roues'], ['rearTires','Pneus / roues'], ['inserts','Insert pneu'], ['frontInserts','Insert pneu'], ['rearInserts','Insert pneu'],
    ['frontShocks','Huile amortisseur'], ['frontSpring','Ressort'], ['rearShocks','Huile amortisseur'], ['rearSpring','Ressort'],
    ['frontDiffOil','Huile différentiel'], ['centerDiffOil','Huile différentiel'], ['rearDiffOil','Huile différentiel'], ['frontDiffGrease','Graisse'], ['centerDiffGrease','Graisse'], ['rearDiffGrease','Graisse'], ['ballDiff','Graisse'],
    ['motor','Moteur'], ['escModel','Variateur (ESC)'], ['servoSteering','Servo'],
    ['txModel','Radio / récepteur'], ['rxModel','Radio / récepteur'],
    ['lubricants','Graisse']
  ];
  for (const [fieldName, categories] of pickerMap) {
    const input = setupForm.elements.namedItem(fieldName);
    if (!input || input.dataset.libraryEnhanced) continue;
    input.dataset.libraryEnhanced = 'true';
    const picker = document.createElement('div'); picker.className = 'setup-library-picker';
    const side = /^(front|rear)/.test(fieldName) ? (fieldName.startsWith('front') ? 'avant' : 'arrière') : '';
    const categoryLabel = ({frontTires:'pneus',rearTires:'pneus',inserts:'inserts',frontInserts:'inserts',rearInserts:'inserts',frontShocks:'huile amortisseur',rearShocks:'huile amortisseur',frontSpring:'ressort',rearSpring:'ressort',frontDiffOil:'huile différentiel avant',centerDiffOil:'huile différentiel central',rearDiffOil:'huile différentiel arrière',frontDiffGrease:'graisse différentiel avant',centerDiffGrease:'graisse différentiel central',rearDiffGrease:'graisse différentiel arrière',ballDiff:'graisse différentiel à billes',motor:'moteur',escModel:'variateur',servoSteering:'servo',txModel:'radio',rxModel:'récepteur',lubricants:'graisse'})[fieldName] || 'matériel';
    const label = document.createElement('span');
    label.textContent = side && ['frontShocks','rearShocks','frontSpring','rearSpring','frontTires','rearTires','frontInserts','rearInserts'].includes(fieldName)
      ? `Bibliothèque · ${categoryLabel} ${side}`
      : `Bibliothèque · ${categoryLabel}`;
    const search = document.createElement('input'); search.type = 'search'; search.placeholder = `Rechercher ${categoryLabel}${side ? ' ' + side : ''} (marque, nom, référence)…`; search.setAttribute('aria-label', label.textContent); search.dataset.librarySearch = 'true';
    const select = document.createElement('select'); select.dataset.libraryCategory = categories; select.setAttribute('aria-label', 'Choisir un matériel de la bibliothèque');
    search.addEventListener('input', () => { select.value = ''; refreshPickers(); });
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(label, search, select);
    // Keep the library controls inside their field label so they do not break the form grid.
    input.closest('label').insertBefore(picker, input);
  }
  // Populate every library selector immediately when the setup form is initialized.
  refreshPickers();
  setupForm.addEventListener('submit', () => {
    const value = (name) => String(setupForm.elements.namedItem(name)?.value || '').trim();
    const radio = [['Émetteur',value('txModel')],['Récepteur / gyro',value('rxModel')],['Dual rate / expo',value('radioExpo')],['EPA',value('radioEPA')],['Trim / failsafe',value('radioTrim')],['Autres',value('radio')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    const escText = [['Modèle ESC',value('escModel')],['Mode / profil',value('escMode')],['Timing / boost',value('escTiming')],['Punch',value('escPunch')],['Frein / drag brake',value('escBrake')],['Cutoff',value('escCutoff')],['Autres paramètres',value('electronicsNotes')]].filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');
    setupForm.elements.namedItem('radio').value = radio;
    setupForm.elements.namedItem('esc').value = escText;
  }, true);
  window.addEventListener('rc-materials-updated', refreshPickers);
  window.RCSetupMaterials={exportData:()=>savedItems.map(item=>({...item})),getCatalog:()=>catalog.map(item=>({...item})),getAll:()=>allMaterials().map(item=>({...item})),importData:items=>{if(!Array.isArray(items)||items.some(item=>!item||typeof item!=='object'||!item.brand||!item.name||!item.category))return false;const previous=savedItems;savedItems=items.map(item=>({...item}));if(!persist()){savedItems=previous;return false;}render();window.dispatchEvent(new Event('rc-materials-updated'));return true;}};
})();
