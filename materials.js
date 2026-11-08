(() => {
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const catalog = [
    // HOBBYWING RC CARS — catalogue actuel + références historiques officielles.
    // Les variantes sont séparées quand le constructeur publie un SKU distinct.
    ...[
      // XeRun — ESC compétition / crawler actuels et historiques.
      ['Variateur (ESC)','XeRun XR10 Pro Legacy','30112800','1/10','Actuel / Legacy : ESC sensored 150 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro G3','30112619','1/10','ESC sensored compétition 160 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro G3X','30112620','1/10','Variante G3X du XR10 Pro, 160 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro DR','30112621','1/10 Drag Racing','ESC sensored dédié Drag Racing, 200 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro WP','30112618','1/10','Version waterproof du XR10 Pro, 160 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Stock Spec G2','30112402','1/10 Stock','ESC sensored Stock Spec, 80 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Stock Spec 1S','30112751','1/10 Stock 1S','ESC sensored Stock Spec 1S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Justock G3S','30112005','1/10, 1/12','ESC sensored 60 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Justock G3 Handout','30112004','1/10, 1/12','Version Handout 60 A, 2S.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Justock G3','30112003','1/10, 1/12','Version Justock G3 ; référence listée dans le catalogue Hobbywing.','xerun'],
      ['Variateur (ESC)','XeRun XR14','30112622','1/14, 1/12','ESC sensored 70 A, 2S, mode zéro timing.','xerun'],
      ['Variateur (ESC)','XeRun XR8 Pro G3','30113400','1/8','ESC sensored compétition 200 A, 2–4S.','xerun'],
      ['Variateur (ESC)','XeRun XR8 Plus G2S','30113304','1/8','ESC sensored 200 A, 2–6S.','xerun'],
      ['Variateur (ESC)','XeRun XD10 Pro — noir','30112614','1/10 Drift','ESC sensored drift 100 A, variante noire.','xerun'],
      ['Variateur (ESC)','XeRun XD10 Pro — rouge','30112615','1/10 Drift','ESC sensored drift 100 A, variante rouge.','xerun'],
      ['Variateur (ESC)','XeRun XD10 Pro — violet','30112616','1/10 Drift','ESC sensored drift 100 A, variante violette.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro 1S Heavy Duty','30112609','1/12','ESC sensored 1S, version Heavy Duty 120 A.','xerun'],
      ['Variateur (ESC)','XeRun XR10 Pro 1S','30112603','1/12','Ancienne version XR10 Pro 1S, 120 A. Arrêtée.','archive'],
      ['Variateur (ESC)','XeRun XR10 Pro G2 — orange','30112607','1/10, 1/12','Ancienne génération G2, 160 A. Arrêtée.','archive'],
      ['Variateur (ESC)','XeRun XR10 Pro G2 — noir','30112608','1/10, 1/12','Ancienne génération G2, 160 A. Arrêtée.','archive'],
      ['Variateur (ESC)','XeRun XR10 Pro G2S','30112613','1/10','Version G2S, référence du catalogue des produits arrêtés.','archive'],
      ['Variateur (ESC)','XeRun XR10 Pro Elite G2S','30112617','1/10','Version Pro Elite G2S, référence du catalogue des produits arrêtés.','archive'],
      ['Variateur (ESC)','XeRun XR10 Pro 160A — première génération','30112600 / 30112601','1/10','Ancienne génération XR10 Pro 160 A ; plusieurs variantes de référence.','archive'],
      ['Variateur (ESC)','XeRun XR8 Pro G2','—','1/8','Ancienne génération XR8 Pro G2 ; référence non détaillée dans la liste d’archives consultée.','archive'],
      ['Variateur (ESC)','XeRun XR8 Plus','30113300','1/8','Ancien ESC sensored 150 A. Arrêté.','archive'],
      ['Variateur (ESC)','XeRun XR8 SCT','30113301','1/8, 1/10 SCT','ESC sensored 140 A pour SCT / truck / buggy. Arrêté.','archive'],
      ['Variateur (ESC)','XeRun XR8 Pro SE','—','1/8','Version XR8 Pro SE présente dans la documentation historique ; SKU non publié sur la page consultée.','archive'],
      ['Variateur (ESC)','XeRun SCT Pro','—','1/10 SCT','Ancienne gamme SCT Pro ; SKU non détaillé dans l’index support.','archive'],
      ['Variateur (ESC)','XeRun XR10 90A V2','—','1/10','Ancienne génération 90 A V2.','archive'],
      ['Variateur (ESC)','XeRun XR10 120A V2','—','1/10','Ancienne génération 120 A V2.','archive'],
      ['Variateur (ESC)','XeRun XR10 90A V2.1','—','1/10','Ancienne génération 90 A V2.1.','archive'],
      ['Variateur (ESC)','XeRun XR10 120A V2.1','—','1/10','Ancienne génération 120 A V2.1.','archive'],
      ['Variateur (ESC)','XeRun XR10 120A V3','—','1/10','Ancienne génération 120 A V3.','archive'],
      ['Variateur (ESC)','XeRun XR10 120A V3.1 1S','—','1/10, 1/12','Ancienne version 1S V3.1.','archive'],
      ['Variateur (ESC)','XeRun XR10 120A V3.1 2–3S','—','1/10','Ancienne version 2–3S V3.1.','archive'],
      ['Variateur (ESC)','XeRun Justock Spec Race','81020000 / 81020001','1/10, 1/12','Ancien ESC Justock Spec Race, références de la gamme historique.','archive'],
      ['Variateur (ESC)','XeRun Xtreme Stock','81020010 / 81020011','1/10, 1/12','Ancien ESC Xtreme Stock, références de la gamme historique.','archive'],
      ['Variateur (ESC)','XeRun AXE 5IVE R3','3011400','1/5, 1/6 Crawler','ESC sensored crawler 220 A, 3–8S.','xerun'],
      ['Variateur (ESC)','XeRun AXE Plus R3','30113201','1/10, 1/8, 1/6 Crawler','ESC crawler sensored 135 A, 2–6S.','xerun'],
      ['Variateur (ESC)','XeRun AXE R2','30112102','1/10 Crawler','Ancien ESC crawler sensored 80 A. Arrêté.','archive'],

      // EzRun — ESC actuels et générations précédentes.
      ['Variateur (ESC)','EzRun MAX10 G2S 80A','30102700','1/10','ESC sensored 80 A, 2–3S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX10 G2S 140A','30102500','1/10','ESC sensored 140 A, 2–4S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX10 G2 140A','30102603','1/10','ESC sensored 140 A, 2–4S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX10 SCT','30102601','1/10 SCT','Ancien ESC sensorless 120 A, 2–4S. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun MAX10 — ancienne version','30102602','1/10','Ancien ESC sensorless 60 A, 2–3S. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun MAX8 G2S','30103205','1/8','ESC sensored 160 A, 3–6S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX8','30103200','1/8','Ancien ESC sensorless 150 A, 3–6S. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun MAX6 G2','30105100','1/6, 1/7','ESC sensored 200 A, 3–8S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX6','30105000','1/6','Ancien ESC sensorless 160 A, 3–8S. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun MAX5 HV Plus G2','30104300','1/5, 1/7, 1/8','ESC sensored 330 A, 6–12S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX5 HV G2','30104200','1/5','ESC sensored 250 A, 6–12S.','ezrun'],
      ['Variateur (ESC)','EzRun MAX5 — ancienne version','30104000','1/5','Ancien ESC sensorless 200 A, 3–8S. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun MAX4 HV','30104002','1/5','ESC sensorless 300 A, 6–12S.','ezrun'],
      ['Variateur (ESC)','EzRun MiNi28','30101300','1/28','ESC sensored 30 A, 2S.','ezrun'],
      ['Variateur (ESC)','EzRun WP 80A','81010390','1/10','Ancien ESC waterproof sensorless 80 A. Arrêté.','archive'],
      ['Variateur (ESC)','EzRun 150A PRO','81010240','1/8, 1/5','Ancien ESC EzRun 150A PRO pour voiture / truck. Arrêté.','archive'],

      // QuicRun — ESC brushless et brushed, générations actuelles et historiques.
      ['Variateur (ESC)','QuicRun WP 10BL80 Crawler','30108002','1/10 Crawler','ESC sensorless waterproof 80 A, 2–4S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 16BL30 G2','30110001','1/16, 1/18','ESC brushless 30 A, 2–3S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 12BL45 G2','30107000','1/12, 1/14','ESC brushless 45 A, 2–3S.','quicrun'],
      ['Variateur (ESC)','QuicRun 10BL60 Sensored G2','30108001','1/10, 1/12, 1/14','ESC sensored 60 A, 2S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP Mini24','30404318 / 30404317','1/24, 1/16, 1/18 Crawler','ESC brushless / brushed compact ; références des variantes publiées par Hobbywing.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 10BL60 G2','30107300','1/10','ESC brushless waterproof 60 A, 2–3S.','quicrun'],
      ['Variateur (ESC)','QuicRun 10BL120 Sensored G2','30125002','1/10','ESC sensored 120 A, 2–3S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 8BL150 G2','30109003','1/8','ESC waterproof 150 A, 3–6S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 10BL120 G2','30107200','1/10','ESC waterproof 120 A, 2–4S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 1080 G2','30112750','1/10 Crawler','ESC brushed waterproof 80 A, 2–3S.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 880 Dual','30120301','1/10, 1/8 Crawler','ESC brushed double sortie, waterproof 80 A.','quicrun'],
      ['Variateur (ESC)','QuicRun WP 1060','30120200','1/10','ESC brushed waterproof 60 A.','quicrun'],
      ['Variateur (ESC)','QuicRun WP Crawler Brushed — ancienne version','30112750','1/10, 1/8 Crawler','Ancienne fiche crawler brushed du catalogue arrêté.','archive'],
      ['Variateur (ESC)','QuicRun WP 8BL150 — ancienne version','30109002','1/8','Ancien ESC sensorless 150 A, 2–6S. Arrêté.','archive'],
      ['Variateur (ESC)','QuicRun WP 16BL30 — ancienne version','30110000','1/16, 1/18','Ancien ESC sensorless 30 A. Arrêté.','archive'],
      ['Variateur (ESC)','QuicRun WP 860 Dual','30105400','1/8, 1/10 Crawler','Ancien ESC brushed double moteur 60 A. Arrêté.','archive'],
      ['Variateur (ESC)','QuicRun WP 10BL60 — ancienne version','30107100','1/10','Ancien ESC waterproof 60 A. Arrêté.','archive'],
      ['Variateur (ESC)','QuicRun 10BL60 & 120 Sensored — ancienne série','30108000 / 30125000','1/10','Ancienne série sensored 60 A / 120 A. Arrêtée.','archive'],

      // XeRun — moteurs actuels et générations historiques.
      ['Moteur','XeRun V10 G5 13.5T Standard','30401762','1/10, 1/12 Stock','4050 kV. Version Standard ; rotor PN 30820461.','v10g5'],
      ['Moteur','XeRun V10 G5 13.5T Torque','30401763','1/10, 1/12 Stock','3900 kV. Version Torque ; rotor PN 30820462.','v10g5'],
      ['Moteur','XeRun V10 G5 17.5T Torque','30401764','1/10, 1/12 Stock','3000 kV. Version Torque.','v10g5'],
      ['Moteur','XeRun V10 G5 21.5T Torque','30401767','1/10, 1/12 Stock','2500 kV. Version Torque.','v10g5'],
      ['Moteur','XeRun V10 G5 25.5T Torque','30401768','1/10, 1/12 Stock','2100 kV. Version Torque.','v10g5'],
      ['Moteur','XeRun Bandit G4R 3800KV','30401861','1/10 Outlaw Stock','Moteur sensored 1/10, 3800 kV.','xerun'],
      ['Moteur','XeRun Bandit G4R 3200KV','30401860','1/10 Outlaw Stock','Moteur sensored 1/10, 3200 kV.','xerun'],
      ['Moteur','XeRun Bandit G4R 2500KV','30401862','1/10 Outlaw Stock','Moteur sensored 1/10, 2500 kV.','xerun'],
      ['Moteur','XeRun AXE 4987 R3S 1600KV','30401402','1/5, 1/6 Crawler','Moteur sensored crawler 1600 kV.','xerun'],
      ['Moteur','XeRun 3652 G3 5300KV','30401065','1/10 Short Course 2WD','Moteur sensored 3652 G3, 5300 kV.','xerun'],
      ['Moteur','XeRun 3652 G3 4500KV','30401064','1/10','Moteur sensored 3652 G3, 4500 kV.','xerun'],
      ['Moteur','XeRun 3660 G3 4200KV','30401154','1/10 Short Course 4WD','Moteur sensored 3660 G3, 4200 kV.','xerun'],
      ['Moteur','XeRun 3660 G3 3200KV','30401153','1/10 Truck / Monster Truck','Moteur sensored 3660 G3, 3200 kV.','xerun'],
      ['Moteur','XeRun 4268SD G3','—','1/8','Moteur sensored 4268SD G3 ; déclinaisons kV selon fiche constructeur.','xerun'],
      ['Moteur','XeRun 4274SD G3','—','1/8','Moteur sensored 4274SD G3 ; déclinaisons kV selon fiche constructeur.','xerun'],
      ['Moteur','XeRun V10 G3R 13.5T','30401130','1/10 Stock','Ancienne génération V10 G3R, 13.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R 17.5T','30401131','1/10 Stock','Ancienne génération V10 G3R, 17.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R 21.5T','30401132','1/10 Stock','Ancienne génération V10 G3R, 21.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R 25.5T','30401133','1/10 Stock','Ancienne génération V10 G3R, 25.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R JMRCA 13.5T','30401127','1/10 Stock JMRCA','Version homologuée JMRCA, 13.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R JMRCA 17.5T','30401128','1/10 Stock JMRCA','Version homologuée JMRCA, 17.5T. Arrêtée.','archive'],
      ['Moteur','XeRun V10 G3R JMRCA 21.5T','30401129','1/10 Stock JMRCA','Version homologuée JMRCA, 21.5T. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G4 3200KV','30401857','1/10 Stock Outlaw','Ancienne version Bandit G4, 3200 kV. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G4 2500KV','30401858','1/10 Stock Outlaw','Ancienne version Bandit G4, 2500 kV. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G2R 13.5T','30401854','1/10 Stock','Ancienne génération Bandit G2R, 13.5T. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G2R 17.5T','30401855','1/10 Stock','Ancienne génération Bandit G2R, 17.5T. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G2R 21.5T','30401856','1/10 Stock','Ancienne génération Bandit G2R, 21.5T. Arrêtée.','archive'],
      ['Moteur','XeRun Bandit G2','—','1/10','Ancienne génération Bandit G2 sensored.','archive'],
      ['Moteur','XeRun Bandit V10','—','1/10','Ancienne génération Bandit V10 sensored.','archive'],
      ['Moteur','XeRun V10 G2','—','1/10','Ancienne génération V10 G2 sensored.','archive'],
      ['Moteur','XeRun V10 — première génération','—','1/10','Ancienne génération V10 sensored.','archive'],
      ['Moteur','XeRun V10 3GR','—','1/10','Variante V10 3GR documentée dans l’index support Hobbywing.','archive'],
      ['Moteur','XeRun 3600 Series G3','—','1/10','Famille 3600 Series ; variantes et kV selon fiche technique.','xerun'],
      ['Moteur','XeRun DRX 3652','—','1/10 Drag Racing','Moteur DRX 3652 ; variantes de bobinage selon fiche constructeur.','xerun'],
      ['Moteur','XeRun DRX 3662','—','1/10 Drag Racing','Moteur DRX 3662 ; variantes de bobinage selon fiche constructeur.','xerun'],
      ['Moteur','XeRun D10','—','1/10 Drift','Moteur sensored D10 pour drift ; variantes de bobinage selon fiche constructeur.','xerun'],
      ['Moteur','XeRun 3652SD G2','—','1/10','Ancienne génération 3652SD G2 sensored.','archive'],
      ['Moteur','XeRun 3660SD G2','—','1/10','Ancienne génération 3660SD G2 sensored.','archive'],
      ['Moteur','XeRun 4268SD G2','—','1/8','Ancienne génération 4268SD G2 sensored.','archive'],
      ['Moteur','XeRun 4274SD G2','—','1/8','Ancienne génération 4274SD G2 sensored.','archive'],
      ['Moteur','XeRun AXE 540 1200KV','30401351','1/10 Crawler','Ancienne motorisation crawler AXE 540, 1200 kV. Arrêtée.','archive'],
      ['Moteur','XeRun AXE 540 1800KV','30401350','1/10 Crawler','Ancienne motorisation crawler AXE 540, 1800 kV. Arrêtée.','archive'],
      ['Moteur','XeRun AXE 550 2300KV','30401250','1/10 Crawler','Ancienne motorisation crawler AXE 550, 2300 kV. Arrêtée.','archive'],
      ['Moteur','XeRun AXE 550 2700KV','30401251','1/10 Crawler','Ancienne motorisation crawler AXE 550, 2700 kV. Arrêtée.','archive'],
      ['Moteur','XeRun AXE 550 3300KV','30401252','1/10 Crawler','Ancienne motorisation crawler AXE 550, 3300 kV. Arrêtée.','archive'],

      // EzRun — moteurs sensorless/sensored actuels et anciens.
      ['Moteur','EzRun 3652 SD G3 3300KV','30402603','1/10','Moteur 3652 SD G3 ; version 3300 kV.','ezrun'],
      ['Moteur','EzRun 3652 SD G3 4100KV','30402605','1/10','Moteur 3652 SD G3 ; version 4100 kV.','ezrun'],
      ['Moteur','EzRun 3652 SD G3 5400KV','30402606','1/10','Moteur 3652 SD G3 ; version 5400 kV.','ezrun'],
      ['Moteur','EzRun 3665 SD G3','—','1/10','Moteur 3665 SD G3 ; plusieurs versions kV au catalogue.','ezrun'],
      ['Moteur','EzRun 4268 SD G2R 2500KV','30402140','1/8','Moteur sensored 4268 SD G2R, 2500 kV.','ezrun'],
      ['Moteur','EzRun 4278 SD G2R 2250KV','30402141','1/8','Moteur sensored 4278 SD G2R, 2250 kV.','ezrun'],
      ['Moteur','EzRun 5690 SL G2 2400KV','30402904','1/7, 1/8','Moteur sensorless 5690 SL G2, 2400 kV.','ezrun'],
      ['Moteur','EzRun 56118 SL G2 1600KV','30402905','1/5','Moteur sensorless 56118 SL G2, 1600 kV.','ezrun'],
      ['Moteur','EzRun 4990 SD G2 1650KV','30402450','1/5, 1/6','Moteur 4990 SD G2, 1650 kV.','ezrun'],
      ['Moteur','EzRun 5690 SD G2 1250KV','30402350','1/5, 1/6','Moteur 5690 SD G2, 1250 kV.','ezrun'],
      ['Moteur','EzRun 56118 SD G2 650KV','30402902','1/5','Moteur 56118 SD G2, 650 kV.','ezrun'],
      ['Moteur','EzRun 56118 SD G2 800KV','30402901','1/5','Moteur 56118 SD G2, 800 kV.','ezrun'],
      ['Moteur','EzRun 56118 SD G2 1100KV','30402903','1/5','Moteur 56118 SD G2, 1100 kV.','ezrun'],
      ['Moteur','EzRun 1626 3500KV','30402653','1/28','Moteur sensored 1626, 3500 kV.','ezrun'],
      ['Moteur','EzRun 1626 5000KV','30402654','1/28','Moteur sensored 1626, 5000 kV.','ezrun'],
      ['Moteur','EzRun 1626 6500KV','30402655','1/28','Moteur sensored 1626, 6500 kV.','ezrun'],
      ['Moteur','EzRun 1626 4000KV','30402150','1/28','Moteur sensored 1626, 4000 kV.','ezrun'],
      ['Moteur','EzRun 70125 SD 560KV','30402850','1/5','Moteur sensorless 70125 SD, 560 kV.','ezrun'],
      ['Moteur','EzRun 4985 800KV','30402900','1/5, 1/6','Moteur sensorless 4985, 800 kV.','ezrun'],
      ['Moteur','EzRun 4985 1100KV','30402550','1/5, 1/6','Moteur sensorless 4985, 1100 kV.','ezrun'],
      ['Moteur','EzRun 4985 1650KV','30402950','1/5, 1/6','Moteur sensorless 4985, 1650 kV.','ezrun'],
      ['Moteur','EzRun 3652 SL G2','30402650 / 30402651 / 30402652','1/10','Ancienne gamme 3652 SL G2 ; plusieurs kV et références. Arrêtée.','archive'],
      ['Moteur','EzRun 3660 SL G2','—','1/10','Ancienne gamme 3660 SL G2 ; plusieurs kV. Arrêtée.','archive'],

      // QuicRun — moteurs brushless et systèmes intégrés.
      ['Moteur','QuicRun Outer 3530 SL 1700KV','30404850','1/10 Crawler','Moteur outer-rotor sensorless, 1700 kV.','quicrun'],
      ['Moteur','QuicRun Outer 3530 SL 2200KV','30404850','1/10 Crawler','Moteur outer-rotor sensorless, 2200 kV.','quicrun'],
      ['Moteur','QuicRun 2840 SL G2','30404805','1/12, 1/14, 1/16','Moteur brushless SL G2, variante 2840.','quicrun'],
      ['Moteur','QuicRun 2850 SL G2','30404804 / 30404803','1/12, 1/14, 1/16','Moteur brushless SL G2, variante 2850 ; références selon version.','quicrun'],
      ['Moteur','QuicRun Outer 1621 SL 3500KV','—','1/24 Crawler','Moteur sensored outer-rotor 1621, 3500 kV.','quicrun'],
      ['Moteur','QuicRun 2030 G2 5000KV','30404800','1/18','Moteur sensorless 2030 G2, 5000 kV.','quicrun'],
      ['Moteur','QuicRun 2030 G2 6500KV','30404801','1/18','Moteur sensorless 2030 G2, 6500 kV.','quicrun'],
      ['Moteur','QuicRun 2030 G2 7800KV','30404802','1/18','Moteur sensorless 2030 G2, 7800 kV.','quicrun'],
      ['Moteur','QuicRun 4268 SL G2','30404700','1/8','Moteur brushless SL G2, format 4268.','quicrun'],
      ['Moteur','QuicRun 4274 SL G2','30404600','1/8','Moteur brushless SL G2, format 4274.','quicrun'],
      ['Moteur','QuicRun 3652 SL G2','30404400','1/10','Moteur brushless SL G2, format 3652.','quicrun'],
      ['Moteur','QuicRun 3660 SL G2','30404401 / 30404402','1/10','Moteur brushless SL G2, format 3660 ; références selon version.','quicrun'],
      ['Moteur','QuicRun 2435 SL G3 4500KV','30404002','1/16, 1/18','Moteur sensorless 2435 SL G3, 4500 kV.','quicrun'],
      ['Moteur','QuicRun 2435 SL G3 6500KV','30404003','1/16, 1/18','Moteur sensorless 2435 SL G3, 6500 kV.','quicrun'],
      ['Moteur','QuicRun 2435 G2 4500KV','30404001','1/16, 1/18','Ancienne version 2435 G2, 4500 kV. Arrêtée.','archive'],
      ['Moteur','QuicRun Fusion Pro Elite FOC — moteur intégré','30120500','1/10 Crawler','Système FOC intégré moteur + ESC, 2300 kV.','quicrun'],
      ['Variateur (ESC)','QuicRun Fusion Pro Elite FOC — ESC intégré','30120500','1/10 Crawler','Système FOC intégré moteur + ESC, 2300 kV.','quicrun'],
      ['Moteur','QuicRun Fusion 8IGHT SE FOC — moteur intégré','30109100','1/8 Crawler','Système FOC intégré moteur + ESC, 1800 kV.','quicrun'],
      ['Variateur (ESC)','QuicRun Fusion 8IGHT SE FOC — ESC intégré','30109100','1/8 Crawler','Système FOC intégré moteur + ESC, 1800 kV.','quicrun'],
      ['Moteur','QuicRun Fusion 8IGHT FOC — moteur intégré','30120404','1/8 Crawler','Système FOC intégré moteur + ESC, 2300 kV.','quicrun'],
      ['Variateur (ESC)','QuicRun Fusion 8IGHT FOC — ESC intégré','30120404','1/8 Crawler','Système FOC intégré moteur + ESC, 2300 kV.','quicrun'],
      ['Moteur','QuicRun Fusion Mini16 FOC — moteur intégré','30120403','1/16, 1/18 Crawler','Système FOC intégré moteur + ESC, 3000 kV.','quicrun'],
      ['Variateur (ESC)','QuicRun Fusion Mini16 FOC — ESC intégré','30120403','1/16, 1/18 Crawler','Système FOC intégré moteur + ESC, 3000 kV.','quicrun'],
      ['Moteur','QuicRun Fusion SE 1200KV — moteur intégré','30404318','1/10 Crawler','Système FOC intégré moteur + ESC, version 1200 kV.','quicrun'],
      ['Moteur','QuicRun Fusion SE 1800KV — moteur intégré','30404317','1/10 Crawler','Système FOC intégré moteur + ESC, version 1800 kV.','quicrun'],
      ['Variateur (ESC)','QuicRun Fusion SE — ESC intégré','30404318 / 30404317','1/10 Crawler','Système FOC intégré moteur + ESC ; versions 1200 et 1800 kV.','quicrun'],
      ['Moteur','QuicRun Fusion BL SYS Crawler 540 1200KV','30120400','1/10 Crawler','Ancien système brushless sensored intégré, 1200 kV. Arrêté.','archive'],
      ['Moteur','QuicRun Fusion BL SYS Crawler 540 1800KV','30120401','1/10 Crawler','Ancien système brushless sensored intégré, 1800 kV. Arrêté.','archive']
    ].map(([category,name,reference,compatibility,detail,family]) => ({
      brand:'Hobbywing',category,name,reference:reference==='—'?'':reference,compatibility,
      detail:detail+(family==='archive'?' Statut : modèle arrêté, conservé depuis les archives officielles.':''),
      url:family==='archive'?'https://www.hobbywing.com/en/discontinued-products':
        family==='v10g5'?'https://www.hobbywing.com/en/products/xerun-v10-g5':
        family==='ezrun'?'https://www.hobbywing.com/en/rc-systems/rc-cars-power-system/ezrun':
        family==='quicrun'?'https://www.hobbywing.com/en/rc-systems/rc-cars-power-system/quicrun':
        'https://www.hobbywing.com/en/rc-systems/rc-cars-power-system/xerun'
    })),
    { brand:'Hobbywing', category:'Programmation', name:'LCD Program Box Pro', reference:'30502002', detail:'Boîtier de programmation pour matériels compatibles Hobbywing.', url:'https://www.hobbywing.com/en/rc-systems' },

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



    // SAVOX + SRT — catalogue officiel enrichi : gammes actuelles et références historiques identifiées.
    // Les caractéristiques chiffrées ne sont ajoutées que lorsqu'elles sont publiées sur une fiche constructeur.
    ...[
      ['B-12KG','B-12KG','Analogique, moteur DC ; servo standard.'],
      ['SA-1230SG+','SA-1230SG+','Numérique, moteur coreless, pignons acier.'],
      ['SA-1231SG','SA-1231SG','Numérique, moteur coreless, pignons acier.'],
      ['SA-1256TG+','SA-1256TG+','Numérique, moteur coreless, pignons titane.'],
      ['SA-1258TG+','SA-1258TG+','Numérique, moteur coreless, pignons titane.'],
      ['SA-1283SG+','SA-1283SG+','Numérique, moteur coreless, pignons acier.'],
      ['SB-2230SG+','SB-2230SG+','Brushless, HV, pignons acier.'],
      ['SB-2236MG','SB-2236MG','Brushless, HV, pignons métal.'],
      ['SB-2251SG','SB-2251SG','Brushless, pignons acier.'],
      ['SB-2252MG','SB-2252MG','Brushless, pignons métal.'],
      ['SB-2262SG','SB-2262SG','Brushless, HV, pignons acier.'],
      ['SB-2263MG','SB-2263MG','Brushless, pignons métal.'],
      ['SB-2264MG','SB-2264MG','Brushless, HV, pignons métal.'],
      ['SB-2265MG Black Edition','SB-2265MGB','Brushless, HV, pignons métal, Black Edition.'],
      ['SB-2267SG+','SB-2267SG+','Brushless, HV, pignons acier.'],
      ['SB-2270SG+','SB-2270SG+','Brushless, HV, pignons acier.'],
      ['SB-2271SG+','SB-2271SG+','Brushless, HV, pignons acier.'],
      ['SB-2272MG+','SB-2272MG+','Brushless, HV, pignons métal.'],
      ['SB-2273SG+','SB-2273SG+','Brushless, HV, pignons acier.'],
      ['SB-2274SG+','SB-2274SG+','Brushless, HV, pignons acier.'],
      ['SB-2275MG','SB-2275MG','Brushless, HV, pignons métal.'],
      ['SB-2280SG','SB-2280SG','Brushless, HV, pignons acier.'],
      ['SB-2283MG','SB-2283MG','Brushless, HV, pignons métal.'],
      ['SB-2290SG','SB-2290SG','Brushless, HV, pignons acier.'],
      ['SB-2291SG','SB-2291SG','Brushless, HV, pignons acier.'],
      ['SB-2292SG','SB-2292SG','Brushless, HV, pignons acier.'],
      ['SB-2295SG','SB-2295SG','Brushless, HV, pignons acier.'],
      ['SB-3262SG','SB-3262SG','Brushless, HV, pignons acier, format grand servo à vérifier.'],
      ['SB-3290SG','SB-3290SG','Brushless, HV, pignons acier, format grand servo à vérifier.'],
      ['SB-3292SG','SB-3292SG','Brushless, HV, pignons acier, format grand servo à vérifier.'],
      ['SC-0251MG+','SC-0251MG+','Moteur DC, pignons métal.'],
      ['SC-0252MG+','SC-0252MG+','Moteur DC, pignons métal.'],
      ['SC-0253MG+','SC-0253MG+','Moteur DC, pignons métal.'],
      ['SC-0254MG+','SC-0254MG+','Moteur DC, pignons métal.'],
      ['SC-0352+','SC-0352+','Moteur DC, servo compact.'],
      ['SC-1251MG+','SC-1251MG+','Moteur coreless, pignons métal, low profile.'],
      ['SC-1252MG+','SC-1252MG+','Moteur coreless, pignons métal, low profile.'],
      ['SC-1256TG+','SC-1256TG+','Moteur coreless, pignons titane.'],
      ['SC-1258TG+','SC-1258TG+','Moteur coreless, pignons titane.'],
      ['SC-1267SG+','SC-1267SG+','Moteur coreless, HV, pignons acier.'],
      ['SC-1268SG+','SC-1268SG+','Moteur coreless, HV, pignons acier.'],
      ['SG-0211MG','SG-0211MG','Moteur coreless, pignons métal.'],
      ['SG-0212MG','SG-0212MG','Moteur coreless, pignons métal.'],
      ['SG-0351+','SG-0351+','Moteur DC, servo compact.'],
      ['SG-1211MG','SG-1211MG','Moteur coreless, HV, pignons métal.'],
      ['SG-1212MG','SG-1212MG','Moteur coreless, HV, pignons métal.'],
      ['SG-1213MG','SG-1213MG','Moteur coreless, HV, pignons métal.'],
      ['SH-0254+','SH-0254+','Moteur DC, format micro.'],
      ['SH-0255MG+','SH-0255MG+','Moteur DC, pignons métal, format micro.'],
      ['SH-0256+','SH-0256+','Moteur DC, format micro.'],
      ['SH-0257MG+','SH-0257MG+','Moteur DC, pignons métal, format micro.'],
      ['SH-0263MG+','SH-0263MG+','Moteur DC, pignons métal, format micro.'],
      ['SH-0264MG+','SH-0264MG+','Moteur DC, pignons métal, format micro.'],
      ['SH-0266MG','SH-0266MG','Moteur DC, pignons métal, format micro.'],
      ['SH-0350+','SH-0350+','Moteur DC, format micro.'],
      ['SH-1290MG+','SH-1290MG+','Moteur coreless, pignons métal, format micro.'],
      ['SH-1350+','SH-1350+','Moteur coreless, format micro.'],
      ['SV-0220MG+','SV-0220MG+','Moteur DC, HV, pignons métal.'],
      ['SV-0235MG+','SV-0235MG+','Moteur DC, HV, pignons métal.'],
      ['SV-0236MG+','SV-0236MG+','Moteur DC, HV, pignons métal.'],
      ['SV-0255MG+','SV-0255MG+','Moteur DC, HV, pignons métal.'],
      ['SV-0258MG+','SV-0258MG+','Moteur DC, HV, pignons métal.'],
      ['SV-0320+','SV-0320+','Moteur DC, HV.'],
      ['SV-1232MG','SV-1232MG','Moteur coreless, HV, pignons métal.'],
      ['SV-1250MG+','SV-1250MG+','Moteur coreless, HV, pignons métal.'],
      ['SV-1251MG+','SV-1251MG+','Moteur coreless, HV, pignons métal.'],
      ['SV-1254MG+','SV-1254MG+','Moteur coreless, HV, pignons métal.'],
      ['SV-1257MG+','SV-1257MG+','Moteur coreless, HV, pignons métal.'],
      ['SV-1259MG','SV-1259MG','Moteur coreless, HV, pignons métal.'],
      ['SV-1260MG','SV-1260MG','Moteur coreless, HV, pignons métal.'],
      ['SV-1261MG','SV-1261MG','Moteur coreless, HV, pignons métal.'],
      ['SV-1262MG','SV-1262MG','Moteur coreless, HV, pignons métal.'],
      ['SV-1270TG+','SV-1270TG+','Moteur coreless, HV, pignons titane.'],
      ['SV-1271SG+','SV-1271SG+','Moteur coreless, HV, pignons acier.'],
      ['SV-1272SG+','SV-1272SG+','Moteur coreless, HV, pignons acier.'],
      ['SV-1280SG','SV-1280SG','Moteur coreless, HV, pignons acier.'],
      ['SV-1281SG','SV-1281SG','Moteur coreless, HV, pignons acier.'],
      ['SW-0230MG+','SW-0230MG+','Waterproof, HV, moteur DC, pignons métal.'],
      ['SW-0231MG+','SW-0231MG+','Waterproof, moteur DC, pignons métal.'],
      ['SW-0240MG+','SW-0240MG+','Waterproof, HV, moteur DC, pignons métal.'],
      ['SW-0241MG+','SW-0241MG+','Waterproof, HV, moteur DC, pignons métal.'],
      ['SW-0250MG+','SW-0250MG+','Waterproof, moteur DC, pignons métal.'],
      ['SW-0267MG','SW-0267MG','Waterproof, format micro, pignons métal.'],
      ['SW-1210SG+','SW-1210SG+','Waterproof, moteur coreless, pignons acier.'],
      ['SW-1211SG+','SW-1211SG+','Waterproof, moteur coreless, pignons acier.'],
      ['SW-1212SG+','SW-1212SG+','Waterproof, moteur coreless, pignons acier.'],
      ['SW-1212SGB+','SW-1212SGB+','Waterproof, Black Series, moteur coreless, pignons acier.'],
      ['SW-1213SG','SW-1213SG','Waterproof, HV, moteur coreless, pignons acier.'],
      ['SW-1240SG','SW-1240SG','Waterproof, moteur coreless, pignons acier.'],
      ['SW-1250MG','SW-1250MG','Waterproof, HV, moteur coreless, pignons métal.'],
      ['SW-2210SG','SW-2210SG','Waterproof, HV, brushless, pignons acier.'],
      ['SW-2290SG','SW-2290SG','Waterproof, HV, brushless, pignons acier.'],
      ['SW-2293SG','SW-2293SG','Waterproof, brushless, pignons acier.'],
      ['SW-2294SG','SW-2294SG','Waterproof, brushless, pignons acier.']
    ].map(([name,reference,detail]) => ({
      brand:'Savöx', category:'Servo', name, reference,
      detail:detail+' Référence catalogue constructeur ; contrôler dimensions, tension et cannelures avant montage.',
      url:'https://savox-servo.com/en/catalog/servos/all-servos'
    })),
    ...[
      ['SA-1230SG','SA-1230SG','Coreless, pignons acier ; ancienne version remplacée par SA-1230SG+.'],
      ['SA-1256TG','SA-1256TG','Coreless, pignons titane ; ancienne version remplacée par SA-1256TG+.'],
      ['SA-1258TG','SA-1258TG','Coreless, pignons titane ; ancienne version remplacée par SA-1258TG+.'],
      ['SB-2261MG','SB-2261MG','Brushless, pignons métal ; ancienne référence.'],
      ['SB-2265MG','SB-2265MG','Brushless HV, pignons métal ; ancienne référence.'],
      ['SB-2271SG','SB-2271SG','Brushless HV, pignons acier ; ancienne référence.'],
      ['SB-2271SG Black Edition','SB-2271SGBE','Brushless HV, Black Edition ; ancienne référence.'],
      ['SB-2273SG','SB-2273SG','Brushless HV, pignons acier ; ancienne référence.'],
      ['SC-0352','SC-0352','Servo digital compact, ancienne version.'],
      ['SC-1258TG','SC-1258TG','Coreless, pignons titane ; ancienne version.'],
      ['SC-1258TG Black Edition','SC-1258TGBE','Coreless, Black Edition ; ancienne version.'],
      ['SC-1267SG Black Edition','SC-1267SGBE','Coreless HV, Black Edition ; ancienne version.'],
      ['SH-0253','SH-0253','Servo micro ; ancienne version.'],
      ['SH-0263MG','SH-0263MG','Servo micro à pignons métal ; ancienne version.'],
      ['SH-0350','SH-0350','Servo micro ; ancienne version.']
    ].map(([name,reference,detail]) => ({
      brand:'Savöx', category:'Servo', name, reference,
      detail:detail+' Fiche archivée ; données de couple/vitesse à confirmer selon révision.',
      url:'https://savox-servo.com/en/catalog/servos/all-servos'
    })),
    ...[
      ['BH125W','BH125W','Brushless HV, waterproof.'],
      ['BHX9','BHX9','Brushless HV.'],
      ['BHX8','BHX8','Brushless HV.'],
      ['BHX6','BHX6','Brushless HV.'],
      ['BHX2S','BHX2S','Brushless HV.'],
      ['BHMX2','BHMX2','Brushless HV.'],
      ['T75','T75','Brushless HV.'],
      ['T6S','T6S','Brushless HV.'],
      ['BH815S','BH815S','Brushless HV ; répertorié dans la gamme On-road.'],
      ['BH927S','BH927S','Brushless HV.'],
      ['BH922S','BH922S','Brushless HV ; répertorié dans la gamme On-road.'],
      ['BH615S','BH615S','Brushless HV.'],
      ['BH8015','BH8015','Brushless HV low profile ; répertorié dans la gamme On-road.'],
      ['BH9037','BH9037','Brushless HV.'],
      ['BH9032','BH9032','Brushless HV.'],
      ['BH9027','BH9027','Brushless HV.'],
      ['BH9022','BH9022','Brushless HV ; répertorié dans la gamme On-road.'],
      ['BH6027','BH6027','Brushless HV.'],
      ['BH6022','BH6022','Brushless HV.'],
      ['T55','T55','Coreless HV.'],
      ['T45','T45','Coreless HV.'],
      ['W45','W45','Coreless HV waterproof.'],
      ['W35','W35','Coreless HV waterproof.'],
      ['Min6','Min6','Coreless HV ; répertorié dans la gamme On-road.'],
      ['M11','M11','Coreless HV ; répertorié dans la gamme On-road.'],
      ['CH712S','CH712S','Coreless HV ; répertorié dans la gamme On-road.'],
      ['D1S','D1S','Coreless HV.'],
      ['CH7015','CH7015','Coreless HV ; répertorié dans la gamme On-road.'],
      ['CH7012','CH7012','Coreless HV ; répertorié dans la gamme On-road.'],
      ['CH6012','CH6012','Coreless HV.'],
      ['CH635S','CH635S','Coreless HV.'],
      ['CH620S','CH620S','Coreless HV.'],
      ['CL6030','CL6030','Coreless LV waterproof.'],
      ['DH85W','DH85W','Servo digital waterproof HV.'],
      ['W25','W25','Servo digital waterproof LV.'],
      ['T06','T06','Servo digital HV.'],
      ['DL5020','DL5020','Servo digital LV waterproof.'],
      ['DL5015','DL5015','Servo digital LV waterproof.'],
      ['DL3020','DL3020','Servo digital LV waterproof.'],
      ['DL3017','DL3017','Servo digital LV.']
    ].map(([name,reference,detail]) => ({
      brand:'SRT', category:'Servo', name, reference,
      detail:detail+' Référence publiée par SRT ; vérifier gabarit, tension et cannelures selon le véhicule.',
      url:'https://www.srt-rc.com/index.php?catid=11'
    })),

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

    // XRAY — références officielles vérifiées : huiles silicone et ressorts Big Bore.
    ...[
      ['359210','100'],['359215','150'],['359220','200'],['359225','250'],['359230','300'],['359240','400'],['359245','450'],['359260','600'],['359270','700'],['359280','800'],['359290','900'],['359301','1000'],['359302','2000'],['359305','5000']
    ].map(([reference,cst])=>({brand:'XRAY',category:'Huile amortisseur',name:'XRAY Premium Silicone Oil '+cst+' cSt',reference,detail:'Huile silicone XRAY, viscosité fabricant '+cst+' cSt.',url:'https://www.teamxray.com/teamxray/products/prodpart.php?catName=&kategoria=5715&prod_id=5715'})),
    ...[
      ['Avant','368384','42.5 mm','4 points'],['Avant','368385','42.5 mm','5 points'],['Avant','368392','49 mm','2 points'],['Arrière','368481','57.5 mm','1 point'],['Arrière','368482','57.5 mm','2 points'],['Arrière','368483','57.5 mm','3 points'],['Arrière','368484','57.5 mm','4 points'],['Arrière','368485','57.5 mm','5 points'],['Arrière','368492','67 mm','2 points']
    ].map(([position,reference,length,rate])=>({brand:'XRAY',category:'Ressort',name:'XRAY Big Bore Conical Spring '+position+' '+length+' — '+rate,reference,compatibility:'XRAY buggy 1/10 — '+position.toLowerCase(),detail:'Ressort conique Big Bore XRAY, longueur '+length+', repérage '+rate+'. Vérifier la génération d’amortisseur.',url:'https://www.teamxray.com/teamxray/products/prodpart.php'})),
    // HOT RACE — pneus buggy 1/10, références catalogue avec position, gomme et surface.
    ...[
      ['Bangkok Dirt Supersoft','003-0011','Arrière 2WD/4WD','Supersoft','Terre'],['Bangkok Dirt Soft','003-0021','Arrière 2WD/4WD','Soft','Terre'],['Bangkok Dirt Medium','003-0031','Arrière 2WD/4WD','Medium','Terre'],['Bangkok Dirt Clay','003-0051','Arrière 2WD/4WD','Clay','Terre'],
      ['Bangkok Dirt Supersoft','003-0111','Avant 4WD','Supersoft','Terre'],['Bangkok Dirt Soft','003-0121','Avant 4WD','Soft','Terre'],['Bangkok Dirt Medium','003-0131','Avant 4WD','Medium','Terre'],['Bangkok Dirt Clay','003-0151','Avant 4WD','Clay','Terre'],
      ['Sahara Dirt Supersoft','003-1111','Avant 4WD','Supersoft','Terre'],['Sahara Dirt Soft','003-1121','Avant 4WD','Soft','Terre'],['Sahara Dirt Medium','003-1131','Avant 4WD','Medium','Terre'],['Sahara Dirt Clay','003-1151','Avant 4WD','Clay','Terre'],
      ['Sahara Dirt Soft','003-1221','Avant 2WD','Soft','Terre'],['Sahara Dirt Medium','003-1231','Avant 2WD','Medium','Terre'],['Sahara Dirt Clay','003-1251','Avant 2WD','Clay','Terre'],
      ['Sahara V2 Dirt Supersoft','003-1061','Arrière 2WD/4WD','Supersoft','Terre'],['Sahara V2 Dirt Soft','003-1071','Arrière 2WD/4WD','Soft','Terre'],['Sahara V2 Dirt Clay','003-1081','Arrière 2WD/4WD','Clay','Terre'],
      ['Sahara V2 Dirt Supersoft','003-1161','Avant 4WD','Supersoft','Terre'],['Sahara V2 Dirt Soft','003-1171','Avant 4WD','Soft','Terre'],['Sahara V2 Dirt Clay','003-1181','Avant 4WD','Clay','Terre'],
      ['Sahara V2 Dirt Supersoft','003-1261','Avant 2WD','Supersoft','Terre'],['Sahara V2 Dirt Soft','003-1271','Avant 2WD','Soft','Terre'],['Sahara V2 Dirt Clay','003-1281','Avant 2WD','Clay','Terre'],
      ['Carpet 2WD Soft','003-0311','Avant 2WD','Soft','Moquette'],['Carpet 2WD Medium','003-0321','Avant 2WD','Medium','Moquette'],['Carpet 2WD Hard','003-0351','Avant 2WD','Hard','Moquette'],['Astro 2WD Soft','003-0361','Avant 2WD','Soft','Astro'],['Astro 2WD Medium','003-0371','Avant 2WD','Medium','Astro'],['Astro 2WD Hard','003-0381','Avant 2WD','Hard','Astro'],
      ['Carpet 4WD Soft','003-0411','Avant 4WD','Soft','Moquette'],['Carpet 4WD Medium','003-0451','Avant 4WD','Medium','Moquette'],['Carpet 4WD Hard','003-0461','Avant 4WD','Hard','Moquette'],
      ['V1 Carpet Rear Soft','003-0611','Arrière 2WD/4WD','Soft','Moquette'],['V1 Carpet Rear Medium','003-0631','Arrière 2WD/4WD','Medium','Moquette'],['V1 Carpet Rear Hard','003-0641','Arrière 2WD/4WD','Hard','Moquette'],['V2 Carpet Rear Soft','003-0651','Arrière 2WD/4WD','Soft','Moquette'],['V2 Carpet Rear Medium','003-0671','Arrière 2WD/4WD','Medium','Moquette'],['V1 Astro Rear Soft','003-0711','Arrière 2WD/4WD','Soft','Astro'],['V1 Astro Rear Medium','003-0721','Arrière 2WD/4WD','Medium','Astro']
    ].map(([model,reference,position,compound,surface])=>({brand:'Hot Race Tires',category:'Pneus / roues',name:model+' — '+position+' — '+compound+' — '+surface,reference,compatibility:'Buggy 1/10 — '+position+' — '+surface,detail:'Pneu Hot Race buggy 1/10. Gomme '+compound+', surface '+surface+'. Référence catalogue fabricant.',url:'https://www.hotracetyres.eu/282-110-buggy-dirt'})),
    ...[
      ['Insert arrière 1/10 closed cell','003-0502','Arrière 2WD/4WD'],['Insert avant 1/10 closed cell','003-0501','Avant 4WD'],['Insert avant 1/10 gris','003-0503','Avant 4WD'],['Insert arrière 1/10 gris','003-0504','Arrière 2WD/4WD']
    ].map(([name,reference,position])=>({brand:'Hot Race Tires',category:'Insert pneu',name,reference,compatibility:'Buggy 1/10 — '+position,detail:'Insert Hot Race pour buggy 1/10, '+position+'.',url:'https://www.hotracetyres.eu/283-110-buggy-astrocarpet'})),
    // Tekin — modèles de servos et familles d'ESC présentes au catalogue officiel.
    ...['T-120','T-130','T-180','T-190','T-250','T-300','T-360','T-440'].map(model=>({brand:'Tekin',category:'Servo',name:model,reference:model,detail:'Servo Tekin série '+model+'. Caractéristiques exactes à relever sur la fiche constructeur de cette révision.',url:'https://www.teamtekin.com/servos.html'})),
    ...['RX8','RX8 Gen2','RX8 Gen3','RX4','RSX','RSX PRO','RS GEN3','RS GEN3 SPEC','RS PRO','RS SPEC','FX Series','B1 Series'].map(model=>({brand:'Tekin',category:'Variateur (ESC)',name:model,reference:'',detail:'Famille / génération Tekin identifiée dans le catalogue et les archives constructeur ; SKU non attribué sans preuve.',url:'https://www.teamtekin.com/archive.html'})),
  ];

  // Compléments catalogue vérifiés : Schumacher 1/10, 6MIK 1/10 et Team Associated historique.
  const supplementalMaterials = [
    ...[
      ['Mini Dart','U6824','Avant 2WD','Yellow'],['Mini Dart','U6825','Avant 4WD','Yellow'],['Mini Dart','U6826','Arrière 2WD/4WD','Yellow'],
      ['Mini Dart','U6827','Avant 2WD','Blue'],['Mini Dart','U6828','Avant 4WD','Blue'],['Mini Dart','U6829','Arrière 2WD/4WD','Blue'],
      ['Mini Dart','U6830','Avant 2WD','Silver'],['Mini Dart','U6831','Avant 4WD','Silver'],['Mini Dart','U6832','Arrière 2WD/4WD','Silver'],
      ['Mini Dart pré-collé','U6833','Avant 2WD','Yellow'],['Mini Dart pré-collé','U6834','Avant 4WD','Yellow'],['Mini Dart pré-collé','U6835','Arrière 2WD/4WD','Yellow'],
      ['Cactus','U6838','Arrière 2WD/4WD','Yellow'],['Cactus','U6840','Avant 4WD','Yellow'],['Cactus','U6842','Arrière 2WD/4WD','Silver'],['Cactus','U6843','Avant 4WD','Silver'],['Cactus','U6844','Arrière 2WD/4WD','Blue'],['Cactus','U6845','Avant 4WD','Blue'],
      ['Mezzo','U6885','Arrière 2WD/4WD','Yellow'],['Mezzo','U6888','Avant 4WD','Yellow'],['Mezzo pré-collé','U6891','Arrière 2WD/4WD','Yellow'],
      ['Azami','U6905','Arrière 2WD/4WD','Yellow'],['Splinter','U6906','Avant 2WD','Yellow'],['Shard','U6907','Avant 4WD','Yellow']
    ].map(([model,reference,position,compound])=>({brand:'Schumacher',category:'Pneus / roues',name:model+' 1/10 — '+position+' — '+compound,reference,compatibility:'Buggy 1/10 — '+position+' — moquette / astro selon gomme',detail:'Pneu Schumacher, gomme '+compound+'. Référence issue des catalogues et listes de pièces Schumacher.',url:'https://www.racing-cars.com/'})),
    ...[
      ['Insert mousse avant dur','U6652','Avant 4WD'],['Insert mousse arrière dur','U6653','Arrière 2WD/4WD'],['Insert mousse avant medium','U6733','Avant 4WD'],['Insert mousse arrière medium','U6734','Arrière 2WD/4WD'],['Insert tubby medium avant','U6746','Avant 4WD'],['Insert tubby medium arrière','U6747','Arrière 2WD/4WD']
    ].map(([name,reference,position])=>({brand:'Schumacher',category:'Insert pneu',name,reference,compatibility:'Buggy 1/10 — '+position,detail:'Insert mousse Schumacher pour pneus buggy 1/10.',url:'https://www.racing-cars.com/'})),
    ...[
      ['AXIAL','T113','Avant 2WD','Moquette / astro'],['AXIAL','TM113','Avant 2WD','Moquette / astro'],['AXIAL','TJ113','Avant 2WD','Moquette / astro']
    ].map(([model,reference,position,surface])=>({brand:'6MIK',category:'Pneus / roues',name:model+' — AXIAL 1/10 — '+position,reference,compatibility:'Buggy 1/10 — '+position+' — '+surface,detail:'Pneu AXIAL 6MIK développé pour l’avant des 2WD modernes ; utilisable avec ou sans mousse interne.',url:'https://6mik-racing.com/axial-tire/'})),
    ...[
      ['Insert Wasabi avant 4WD','PM113S','Avant 4WD'],['Insert Wasabi arrière','PM114','Arrière 2WD/4WD'],['Pack pneu + insert Wasabi avant','TM111S','Avant 4WD'],['Pack pneu + insert Wasabi arrière','TM112S','Arrière 2WD/4WD']
    ].map(([name,reference,position])=>({brand:'6MIK',category:name.startsWith('Insert')?'Insert pneu':'Pneus / roues',name,reference,compatibility:'Buggy 1/10 — '+position+' — moquette',detail:'Référence 6MIK Wasabi. Les références TM111S / TM112S correspondent aux ensembles pneu + mousse ; PM113S / PM114 aux mousses dédiées.',url:'https://6mik-racing.com/wasabi-1-10-tires/'})),
    ...[
      ['10','5420'],['15','5427'],['20','5421'],['22.5','5424'],['25','5428'],['27.5','5426'],['30','5422'],['32.5','5432'],['35','5429'],['37.5','5433'],['40','5423'],['42.5','5434'],['45','5430'],['47.5','5438'],['50','5435'],['55','5431'],['60','5436'],['70','5437'],['80','5425']
    ].map(([weight,reference])=>({brand:'Team Associated',category:'Huile amortisseur',name:'Silicone Shock Fluid '+weight+' wt — 2 oz',reference,compatibility:'Amortisseurs RC Team Associated — viscosité exprimée en wt',detail:'Huile silicone amortisseur Team Associated, flacon 2 oz. Référence catalogue pièces RC10T4.2.',url:'https://www.teamassociated.com/pdf/cars_and_trucks/RC10T4.2/RSRTR/manual_T4.2RS.pdf'})),
    ...[
      ['Arrière','6482','Gris','2.33 lb/in'],['Arrière','7434','Bleu','2.55 lb/in'],['Arrière','7435','Or','2.75 lb/in'],['Arrière','7436','Rouge','2.95 lb/in'],
      ['Arrière','6481','Noir','—'],['Arrière','6480','Vert','—'],['Arrière','6478','Argent','—'],
      ['Avant','8232','Noir','—'],['Avant','6494','Vert','—'],['Avant','6496','Argent','—']
    ].map(([position,reference,color,rate])=>({brand:'Team Associated',category:'Ressort',name:'Ressort amortisseur '+position+' — '+color+(rate!=='—'?' ('+rate+')':''),reference,compatibility:'Buggy / truck Team Associated 1/10 — '+position.toLowerCase(),detail:'Ressort Team Associated issu des catalogues de pièces RC10B2 / RC10T4.2. La dureté n’est indiquée que lorsqu’elle est publiée.',url:'https://www.teamassociated.com/pdf/cars_and_trucks/RC10T4.2/RSRTR/manual_T4.2RS.pdf'}))
,
    // JConcepts — pneus buggy 1/10, références fabricant.
    ...[['Double Bar','4140-03','Arrière 2WD/4WD','Aqua A2'],['Double Bar','4140-06','Arrière 2WD/4WD','Silver'],['Double Bar','4141-03','Avant 2WD','Aqua A2'],['Double Bar','4141-06','Avant 2WD','Silver'],['Sprinter 2.2','3133-01','Arrière 2WD/4WD','Blue'],['Sprinter 2.2','3133-02','Arrière 2WD/4WD','Green'],['Sprinter 2.2','3134-01','Avant 2WD','Blue'],['Sprinter 2.2','3134-02','Avant 2WD','Green'],['Sprinter 2.2','3135-01','Avant 4WD','Blue'],['Sprinter 2.2','3135-02','Avant 4WD','Green'],['Kosmos','4182-02','Arrière 2WD/4WD','Green'],['Kosmos','4183-02','Avant 4WD','Green']].map(([model,reference,position,compound])=>({brand:'JConcepts',category:'Pneus / roues',name:model+' — '+position+' — '+compound,reference,compatibility:'Buggy 1/10 — '+position+' — roue 2.2 pouces',detail:'Pneu JConcepts, gomme '+compound+'. Référence fabricant ; vérifier le profil et la surface recommandés avant achat.',url:model==='Kosmos'?'https://blog.jconcepts.net/2026/06/jconcepts-new-release-110th-off-road-kosmos-tires/':model==='Sprinter 2.2'?'https://blog.jconcepts.net/2019/06/jconcepts-new-release-sprinter-2-2-buggy-tires/':'https://blog.jconcepts.net/2025/10/jconcepts-new-release-double-bar-fr-110th-off-road-tires/'})),
    // LRP — moteurs X10 Outlaw et variateurs Flow X.
    ...[['6.5T','520015'],['8.5T','520016'],['10.5T','520017'],['13.5T','520018'],['17.5T','520019'],['21.5T','520020']].map(([turn,reference])=>({brand:'LRP',category:'Moteur',name:'X10 Outlaw Brushless — '+turn,reference,compatibility:'1/10 Stock / compétition — sensored',detail:'Moteur brushless sensored LRP X10 Outlaw, timing fixe 30°, rotor 12,5 mm. Référence officielle.',url:'https://www.lrp.cc/en/product/'+reference+'/'})),
    ...[['Flow X Offroad','500003','ESC compétition 1/10 buggy off-road, 220 A, 2S.'],['Flow X TC Spec','500004','ESC compétition 1/10 touring car, 220 A, 2S.'],['Flow X StockSpec','500005','ESC compétition 1/10 Stock, 220 A, logiciel StockSpec.']].map(([name,reference,detail])=>({brand:'LRP',category:'Variateur (ESC)',name,reference,compatibility:'1/10 — LiPo 2S',detail,url:'https://www.lrp.cc/en/product/'+reference+'/'})),
    // Futaba — servos voiture du catalogue constructeur.
    ...[['S-C400','S-C400','Servo 1/10 touring et buggy électrique ; 8,0 kgf·cm à 7,4 V, 0,08 s/60°.'],['S-C401','S-C401','Servo numérique 1/10 ; 13,8 kgf·cm à 7,4 V, 0,09 s/60°, modes UR/SR.'],['S-CD400','S-CD400','Servo numérique 1/10 drift ; 8,0 kgf·cm à 7,4 V, 0,08 s/60°.'],['S-C300','S-C300','Servo standard 1/10 ; 9,6 kgf·cm à 7,4 V.'],['HPS-CT501','HPS-CT501','Servo brushless 1/10 touring ; 21,0 kgf·cm à 7,4 V, 0,06 s/60°.'],['BLS-CM600','BLS-CM600','Servo brushless compact 1/12 ; 6,7 kgf·cm à 7,4 V.']].map(([name,reference,detail])=>({brand:'Futaba',category:'Servo',name,reference,compatibility:'Servo voiture RC — vérifier encombrement, tension et mode radio',detail,url:'https://www.rc.futaba.co.jp/products/servo_car/'})),
    // Tekin — moteurs, ESC et servos aux références officielles.
    ...[['PRO4','TT2500','4600 kV'],['PRO4','TT2501','4000 kV'],['PRO4','TT2502','3300 kV'],['PRO4','TT2507','2400 kV'],['PRO4','TT2508','1900 kV'],['PRO4','TT2509','1400 kV']].map(([family,reference,kv])=>({brand:'Tekin',category:'Moteur',name:family+' brushless — '+kv,reference,compatibility:'Moteur sensored 1/10 Short Course / truck selon KV',detail:'Moteur Tekin '+family+' ; référence et KV issus de la fiche constructeur.',url:'https://www.teamtekin.com/pro4.html'})),
    ...[['GEN4 Modified','TT2766','9.5T'],['GEN4 Modified','TT2767','8.5T'],['GEN4 Modified','TT2768','7.5T'],['GEN4 Modified','TT2769','6.5T'],['GEN4 Modified','TT2770','5.5T']].map(([family,reference,turn])=>({brand:'Tekin',category:'Moteur',name:'Redline '+family+' — '+turn,reference,compatibility:'Moteur brushless sensored 1/10 Modified',detail:'Moteur Tekin GEN4 Modified ; référence fabricant.',url:'https://www.teamtekin.com/gen4.html'})),
    ...[['RS GEN3 ESC','TT1156'],['T-120 LP Speed Servo','TT1500'],['T-180 LP Torque Servo','TT1501'],['T-130 Standard Speed Servo','TT1502'],['T-190 Standard Torque Servo','TT1503'],['T-250 1/8 Speed Servo','TT1504'],['T-300 1/8 Torque Servo','TT1505'],['T-360 1/8 / Crawler Torque Servo','TT1506'],['T-440 1/8 / Crawler Torque Servo','TT1507']].map(([name,reference])=>({brand:'Tekin',category:name.includes('ESC')?'Variateur (ESC)':'Servo',name,reference,detail:'Référence officielle Tekin. Vérifier format, tension et compatibilité avec le véhicule.',url:name.includes('ESC')?'https://www.teamtekin.com/rs.html':'https://www.teamtekin.com/t120.html'})),
    // TLR — ressorts et entretien des amortisseurs.
    {brand:'TLR',category:'Ressort',name:'Ressort amortisseur avant 16 mm EVO — gris 5.5 (paire)',reference:'TLR344021',compatibility:'TLR 8IGHT 8B4 — avant',detail:'Ressorts avant 16 mm EVO, raideur 5.5, gris, vendus par paire.',url:'https://www.tlracing.com/on/demandware.static/-/Sites-horizon-master/default/dw0f1eca92/Manuals/TLR04008-Exploded-View-MULTI.pdf'},
    {brand:'TLR',category:'Ressort',name:'Ressort amortisseur arrière 16 mm EVO — jaune 4.2 (paire)',reference:'TLR344025',compatibility:'TLR 8IGHT 8B4 — arrière',detail:'Ressorts arrière 16 mm EVO, raideur 4.2, jaune, vendus par paire.',url:'https://www.tlracing.com/on/demandware.static/-/Sites-horizon-master/default/dw0f1eca92/Manuals/TLR04008-Exploded-View-MULTI.pdf'},
    {brand:'TLR',category:'Graisse',name:'Shock O-ring Grease 8cc',reference:'TLR77002',detail:'Graisse TLR pour joints toriques d’amortisseurs.',url:'https://www.tlracing.com/shop-by-tlr-vehicle/tlr-22-5.0-dc-roller-parts/'},
    {brand:'TLR',category:'Huile différentiel',name:'Silicone Diff Fluid 7000 cSt',reference:'TLR5281',detail:'Fluide silicone TLR pour différentiel, viscosité 7000 cSt.',url:'https://www.tlracing.com/on/demandware.static/-/Sites-horizon-master/default/dw508ed556/Manuals/TLR03012-Parts_Explosion-MULTI.pdf'},
    // OPTIMA by 6MIK — outil universel d’entretien de transmission.
    {brand:'6MIK',category:'Outil',name:'OPTIMA Dogbone Shaft Replacement Tool',reference:'PW0130-115',detail:'Outil aluminium CNC anodisé pour remplacer les goupilles de cardans 1/8 et la plupart des 1/10.',url:'https://6mik-racing.com/optima-tool/'}

,
    // Pro-Line — pneus buggy 1/10 : références du tarif fabricant 2021.
    ...[
      ['Prism','8278-104','Avant 2WD','Z4 soft carpet','Avant 2WD'],['Wedge Gen 3','8283-103','Avant 2WD','Z3 medium carpet','Avant 2WD'],
      ['Prism 2.0','8284-103','Avant 4WD','Z3 medium carpet','Avant 4WD'],['Prism 2.0','8284-104','Avant 4WD','Z4 soft carpet','Avant 4WD'],
      ['Hole Shot 3.0','8282-02','Arrière 2WD/4WD','M3 soft','Arrière 2WD/4WD'],['Hole Shot 3.0','8282-03','Arrière 2WD/4WD','M4 super soft','Arrière 2WD/4WD'],
      ['Resistor','8281-17','Arrière 2WD/4WD','MC clay','Arrière 2WD/4WD'],['Shadow','8286-17','Arrière 2WD/4WD','MC clay','Arrière 2WD/4WD'],['Shadow','8286-203','Arrière 2WD/4WD','S3 soft','Arrière 2WD/4WD']
    ].map(([model,reference,position,compound,fit])=>({brand:'Pro-Line',category:'Pneus / roues',name:model+' 2.2" — '+position+' — '+compound,reference,compatibility:'Buggy 1/10 — '+fit+' — pneu arrière ou avant selon fiche',detail:'Référence du tarif Pro-Line ; gomme '+compound+'. Les versions Z sont destinées aux surfaces moquette.',url:'https://teams.prolineracing.com/Images/pricelist.pdf'})),
    // Reedy — moteurs Sonic M4 / SP5 et variateurs Blackbox, références constructeur.
    ...[['9.5T','27438'],['8.5T','27439'],['8.0T','27440'],['7.5T','27441'],['7.0T','27442'],['6.5T 1/12','27443'],['6.5T','27444'],['6.0T','27445'],['5.5T','27446'],['5.0T','27451'],['4.5T','27452'],['4.0T','27453'],['3.5T','27454']].map(([turn,reference])=>({brand:'Reedy',category:'Moteur',name:'Sonic 540-M4 — '+turn,reference,compatibility:'Moteur brushless compétition 1/10 (6.5T 1/12 : échelle 1/12)',detail:'Moteur sensored Reedy Sonic 540-M4, timing réglable et entièrement démontable.',url:'https://img2.associatedelectrics.com/pdf/cars_and_trucks/shared/Sonic_540_M4_Manual_ONLINE.pdf'})),
    ...[['25.5T','27478'],['21.5T','27479'],['17.5T','27480'],['13.5T','27481'],['10.5T','27482']].map(([turn,reference])=>({brand:'Reedy',category:'Moteur',name:'Sonic 540-SP5 — '+turn,reference,compatibility:'Moteur brushless compétition 1/10 Stock',detail:'Référence Reedy Sonic SP5 indiquée dans le catalogue constructeur Associated.',url:'https://60years.associatedelectrics.com/flat-sensor-wire-175-mm-6-89-in/'})),
    ...[['Blackbox 410R','27000','Variateur sensored compétition 1S–2S.'],['Blackbox 410R avec PROgrammer','27001','Variateur sensored compétition 1S–2S avec programmateur.'],['Blackbox 800Z','27002','Variateur sensored zéro timing 2S.'],['Blackbox 1000Z+','27003','Variateur compétition 2S.'],['Blackbox 510R','27004','Variateur sensored compétition.'],['Blackbox 510R avec PROgrammer 2','27005','Variateur sensored compétition avec programmateur.'],['Blackbox 600Z','27006','Variateur sensored zéro timing 2S.'],['Blackbox 850R','27007','Variateur sensored compétition 1/8.'],['Blackbox 850R avec PROgrammer2','27008','Variateur sensored compétition 1/8 avec programmateur.'],['Blackbox 510R 1S','27009','Variateur sensored compétition 1S.'],['Blackbox 510R 1S avec PROgrammer 2','27010','Variateur sensored compétition 1S avec programmateur.'],['Blackbox 610R','27016','Variateur sensored compétition.'],['Blackbox 610R avec programmateur','27017','Variateur sensored compétition avec programmateur.'],['Blackbox 1000Z+ Pro','27033','Variateur sensored compétition Pro.']].map(([name,reference,detail])=>({brand:'Reedy',category:'Variateur (ESC)',name,reference,compatibility:'Variateur Reedy — vérifier nombre de cellules et catégorie avant montage',detail,url:'https://60years.associatedelectrics.com/flat-sensor-wire-150-mm-5-91-in/'})),
    // Corsatec — moteurs et contrôleurs électriques avec références de produit.
    {brand:'Corsatec',category:'Moteur',name:'Race Pro 1/10 — 4.5T',reference:'CT40011',compatibility:'Moteur brushless 1/10 compétition',detail:'Moteur Corsatec Race Pro 4.5T ; référence produit CT40011.',url:'https://www.corsatec.net/electro/37-corsatec-race-pro-motor-1-10-45-t-0651637033758.html'},
    {brand:'Corsatec',category:'Variateur (ESC)',name:'Race Pro ESC 1/10 — 220A',reference:'CT30010',compatibility:'Variateur brushless 1/10',detail:'Contrôleur Corsatec Race Pro 1/10 annoncé 220 A ; référence CT30010.',url:'https://www.corsatec.net/electro/32-corsatec-race-pro-esc-1-10-150-a-0651637025036.html'},
    {brand:'Corsatec',category:'Variateur (ESC)',name:'PCB CTX-10RS',reference:'CT30200',compatibility:'Électronique Corsatec 1/10 — série CTX-10RS',detail:'Référence produit Corsatec CT30200 ; désignation commerciale PCB CTX-10RS.',url:'https://www.corsatec.net/110/372-corsatec-pcb-ctx-10rs-corsatec-ct30200-0651637384959.html'},
    // 1UP Racing — graisses de différentiel à billes, joints et articulations.
    {brand:'1UP Racing',category:'Graisse',name:'Gold Anti-Wear Grease',reference:'1UP-120101',detail:'Graisse anti-usure dorée pour pièces mobiles et surfaces de contact.',url:'https://www.rc-drift-shop.com/epages/78656774.sf/en_US/?ViewObjectPath=%2FShops%2F78656774%2FCategories%2F1UP_Racing'},
    {brand:'1UP Racing',category:'Graisse',name:'Blue O-Ring Grease — 3 g',reference:'1UP-120301',detail:'Graisse bleue dédiée aux joints toriques ; aide à conserver leur souplesse.',url:'https://www.team-trion.jp/products/products_Znew230106.html'},
    {brand:'1UP Racing',category:'Graisse différentiel à billes',name:'Pro Ball Diff Grease Set',reference:'1UP-120504',detail:'Kit de graisses Gold et Pink pour entretien et montage du différentiel à billes.',url:'https://www.rc-drift-shop.com/epages/78656774.sf/en_US/?ViewObjectPath=%2FShops%2F78656774%2FCategories%2F1UP_Racing'},
    {brand:'1UP Racing',category:'Graisse différentiel à billes',name:'Pink Ball Diff Grease — 3 g',reference:'1UP-120601',detail:'Graisse rose haute adhérence dédiée aux différentiels à billes.',url:'https://www.rc-drift-shop.com/epages/78656774.sf/en_US/?ViewObjectPath=%2FShops%2F78656774%2FCategories%2F1UP_Racing'},
    {brand:'1UP Racing',category:'Graisse différentiel à billes',name:'Pink Ball Diff Grease XL — 8 g',reference:'1UP-120602',detail:'Version grand format 8 g de la graisse rose pour différentiel à billes.',url:'https://www.dms-racing.com/product-category/fluids-oils-additives-lubes-glues/'},
    {brand:'1UP Racing',category:'Huile transmission',name:'Red CV Joint Oil — 8 ml',reference:'1UP-120402',detail:'Huile rouge pour lubrifier les articulations et cardans homocinétiques.',url:'https://www.rc-drift-shop.com/epages/78656774.sf/en_US/?ViewObjectPath=%2FShops%2F78656774%2FCategories%2F1UP_Racing'},
    // WS-Line — huiles silicone et graisses de transmission / amortisseurs.
    {brand:'WS Line',category:'Graisse',name:'Graisse Bleu Premium — joints d’amortisseurs',reference:'—',detail:'Graisse WS-Line bleue premium destinée aux joints d’amortisseurs.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Graisse',name:'Graisse Teflon blanche — couples coniques et engrenages',reference:'—',detail:'Graisse blanche au PTFE pour couples coniques et engrenages droits.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Graisse',name:'Graisse cuivre — cardans et accouplements',reference:'—',detail:'Graisse cuivre WS-Line destinée aux couples coniques et accouplements de cardan.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Huile amortisseur',name:'Huile silicone amortisseur — flacon 100 ml (grades wt au choix)',reference:'—',detail:'Huile silicone WS-Line pour amortisseurs ; choisir le grade wt dans la liste fournisseur.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Huile différentiel',name:'Huile silicone différentiel haut grade — pot 100 ml (grades cSt au choix)',reference:'—',detail:'Huile silicone WS-Line haut grade pour différentiel ; choisir la viscosité cSt.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Huile différentiel',name:'Huile silicone différentiel — flacon 100 ml (grades CPS au choix)',reference:'—',detail:'Huile silicone WS-Line pour différentiel ; choisir la viscosité CPS.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Colle',name:'Colle cyano ultra fluide spéciale pneus — 20 g',reference:'WS-CYANO20',detail:'Colle cyanoacrylate WS-Line ultra fluide destinée au collage des pneus.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'},
    {brand:'WS Line',category:'Frein filet',name:'Frein filet bleu médium — 30 g',reference:'WS-FREINFILET30',detail:'Frein filet bleu de force moyenne WS-Line pour visserie métallique.',url:'https://www.wartelle-shop.com/consommables-ws-line-huiles-graisses-colles-c102x4272956'}

  ];
  for (const item of supplementalMaterials) {
    if (!catalog.some(existing => existing.brand === item.brand && existing.reference === item.reference && existing.name === item.name)) catalog.push(item);
  }
  // Déduplique les références fabricant identiques, même si le nom a été saisi en français ou en anglais.
  // Une référence fabricant non vide identifie un seul article dans une même marque et catégorie.
  const uniqueCatalog = new Map();
  for (const item of catalog) {
    const reference = String(item.reference || '').trim().toLocaleUpperCase('fr');
    if (!reference || reference === '—' || reference === '-') {
      uniqueCatalog.set(Symbol(), item);
      continue;
    }
    const key = [String(item.brand || '').trim().toLocaleLowerCase('fr'), String(item.category || '').trim().toLocaleLowerCase('fr'), reference].join('|');
    const existing = uniqueCatalog.get(key);
    if (!existing) {
      uniqueCatalog.set(key, item);
      continue;
    }
    // Conserver la fiche la plus complète et fusionner les informations utiles sans répéter le produit.
    const score = value => ['name','compatibility','detail','url'].reduce((total, field) => total + (String(value[field] || '').trim() ? 1 : 0), 0);
    if (score(item) > score(existing)) uniqueCatalog.set(key, item);
  }
  catalog.length = 0;
  for (const item of uniqueCatalog.values()) catalog.push(item);
  const knownBrands = ['Corsatec', 'WS Line', 'Cayote', 'REDS', 'OPTIMA', 'Hobbywing', 'XTR Racing', '6MIK', 'Team Associated', '1UP Racing', 'SRT', 'Power HD', 'Savöx', 'Schumacher'];
  // Wordmarks SVG intégrés : ils ne dépendent d'aucun hébergeur externe et restent visibles hors ligne.
  function brandWordmark(label, color, secondary = '#222222') {
    const fontSize = label.length > 12 ? 23 : label.length > 8 ? 27 : 34;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72"><rect width="240" height="72" rx="9" fill="#fff"/><path d="M12 57H228" stroke="${color}" stroke-width="5" stroke-linecap="round"/><text x="120" y="43" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize}" font-weight="900" letter-spacing="-.8" fill="${secondary}">${label}</text></svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }
  // Emblème XTR redessiné en SVG local à partir du logo de sponsor XTR Professional Products.
  // Intégré au code : pas de dépendance à un hébergeur externe.
  function xtrBrandLogo() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 100">
      <rect width="260" height="100" rx="8" fill="#fff"/>
      <circle cx="130" cy="49" r="43" fill="none" stroke="#111" stroke-width="3"/>
      <circle cx="130" cy="49" r="37" fill="none" stroke="#111" stroke-width="1.5"/>
      <path d="M20 38 L238 38 L252 49 L238 61 L20 61 L7 49 Z" fill="#fff" stroke="#111" stroke-width="3"/>
      <text x="130" y="60" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="48" font-style="italic" font-weight="900" letter-spacing="-4" fill="#111">XTR</text>
      <text x="130" y="17" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="7.5" font-weight="900" letter-spacing="1.1" fill="#111">PROFESSIONAL</text>
      <text x="130" y="88" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="7.5" font-weight="900" letter-spacing="1.4" fill="#111">PRODUCTS</text>
      <path d="M34 75h45M181 75h45" stroke="#111" stroke-width="2"/>
      <path d="M20 49h13M227 49h13" stroke="#111" stroke-width="2"/>
    </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }
  const MATERIAL_BRAND_LOGOS = {
    'Fan RC': './assets/fan-rc-logo.svg',
    'F.A.N. RC': './assets/fan-rc-logo.svg',
    'X-Factory': './assets/x-factory-logo.svg',
    'Kyosho': 'https://cdn.brandfetch.io/idXDBNlT9W/w/568/h/133/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1792896373403',
    'PR Racing': 'https://i0.wp.com/circusrc.com/CRC/wp-content/uploads/2019/09/PR-Racing.jpg?fit=1024%2C512&ssl=1',
    'Mugen Seiki': 'https://www.autocollant-tuning.com/3061-product_main/sticker-et-autocollant-mugen-seiki.jpg',

    'Team Losi': 'https://images.seeklogo.com/logo-png/32/1/team-losi-racing-logo-png_seeklogo-324214.png',
    'Traxxas': 'https://www.kindpng.com/picc/m/72-728397_traxxas-logo-png-transparent-png.png',
    'Hobbywing': 'https://www.hobbywingdirect.com/cdn/shop/files/HW3x6-Viewing-only_3c0904dc-0c98-46e5-8dd3-f2d44df564c8_1600x.jpg?v=1697845198',
    'Team Associated': 'https://apps.associatedelectrics.com/downloads/thumbs/TeamAssociated-color-lightBG-300.png',
    'Schumacher': 'https://schumacher-racing.com/wp-content/uploads/2024/01/Schumacher_racing_pink-gelb-1.png',
    'Savöx': 'https://atomfire.com/cdn/shop/collections/savox-logo-square.png?v=1701816872',
    'OPTIMA': 'https://6mik-racing.com/wp-content/uploads/2020/04/logo-OPTIMA-2016-1200.jpg',
    '6MIK': 'https://cdn.houseofrc.com/storage/images/13021/conversions/Bnrxbkcd4O8n0rPCSktrvsl3mYbwWcyXVnilYn8A-display.jpg',
    'Cayote': 'https://www.hearnshobbies.com/cdn/shop/files/banner_1.png?v=1731377454&width=2169',
    'Corsatec': 'https://www.corsatec.net/img/cms/Logo%20%281%29.png',
    'Hot Race Tires': 'https://www.hotrace-asia.com/media/12/45/d9/1746796312/hotrace.png?ts=1746796313',
    'Jetko': 'https://techtonichobbies.com.au/cdn/shop/products/logo.jpg?v=1697259873&width=901',
    'Power HD': 'https://chd.hk/images/logo.jpg',
    'REDS': 'https://rsrc.biz/img/m/26.jpg',
    'Sanwa': 'https://thepihut.com/cdn/shop/files/sanwa-logo_500x.jpg?v=1663172495',
    'XRAY': 'https://www.xraystore.cz/user/categories/orig/xray-1.png',
    'SRT': 'https://www.srt-rc.com/data/upload/image/201805/112c8f371d4d46d72955761ae81ced0d.jpg',
    'Tekin': 'https://www.teamtekin.com/images/tekin_logo_hires_2015.png?crc=4065896322',
    'VP-Pro': 'https://cdn.hardwickrctrack.co.uk/static/logos/vpracing.webp',
    'WS Line': 'https://www.wartelle-shop.com/Files/132405/Img/10/logowsvi11.jpg',
    'XTR Racing': xtrBrandLogo(),
    'Yokomo': 'https://cdn.ecommercedns.uk/files/7/229017/4/49342684/yokomo-logo-retro.png',
    '1UP Racing': 'https://i.ytimg.com/vi/ndTXtEMba2c/maxresdefault.jpg',
    'Futaba': 'https://images.seeklogo.com/logo-png/40/1/futaba-logo-png_seeklogo-409265.png',
    'HUDY': 'https://one7rc.co.nz/cdn/shop/files/Hudyproductimage_3a316267-126f-4592-b00a-2f1c3a8af14e_1200x1200.jpg?v=1765234176',
    'JConcepts': 'https://rcvisions.com/cdn/shop/collections/JConcepts.jpg?v=1646700975&width=1081',
    'LRP': 'https://wp.logos-download.com/wp-content/uploads/2024/01/LRP_Logo-3000x899.png',
    'Pro-Line': 'https://images.seeklogo.com/logo-png/22/1/pro-line-logo-png_seeklogo-226869.png',
    'Reedy': 'https://www.cmldistribution.co.uk/brands/reedy.png',
    'Tamiya': 'https://www.most-models.com/files/tamiya-modelbouw.png',
    'TLR': 'https://cdn.houseofrc.com/storage/images/360/conversions/tlr-preview.jpg'
  };
  const root = document.getElementById('materialsApp');
  if (!root) return;
  let activeTab = 'catalog';
  let selectedBrand = '';
  const MATERIAL_PAGE_SIZE = 60;
  let visibleMaterialCount = MATERIAL_PAGE_SIZE;
  function loadSaved() { try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
  // Move automatically seeded catalogue entries out of the personal inventory.
  const legacyPrefixes = ['seed-hobbywing-esc-v1-', 'seed-hobbywing-motors-v3-', 'seed-hobbywing-motor-v2-', 'seed-rsrc-xrt-oils-v3-', 'seed-associated-spring-v1-'];
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

  // Index texte et index par catégorie : calculés une seule fois, invalidés uniquement
  // lorsqu'une référence est ajoutée ou retirée. Les quantités ne changent pas l'index.
  const searchableText = new WeakMap();
  let materialIndex = null;
  function getSearchText(item) {
    let value = searchableText.get(item);
    if (value === undefined) {
      value = [item.brand,item.category,item.name,item.reference,item.detail,item.compatibility,item.type].join(' ').toLocaleLowerCase('fr');
      searchableText.set(item,value);
    }
    return value;
  }
  function getMaterialIndex() {
    if (materialIndex) return materialIndex;
    const byCategory = new Map();
    for (const item of catalog) {
      if (!byCategory.has(item.category)) byCategory.set(item.category,[]);
      byCategory.get(item.category).push(item);
    }
    for (const item of savedItems) {
      if (!byCategory.has(item.category)) byCategory.set(item.category,[]);
      byCategory.get(item.category).push(item);
    }
    materialIndex = byCategory;
    return materialIndex;
  }
  function invalidateMaterialIndex() { materialIndex = null; }

  function refreshPickers() {
    const index = getMaterialIndex();
    const carSelect = document.querySelector('#setupForm select[name="carId"]');
    const hasSelectedCar = Boolean(carSelect?.value);
    const drive = carSelect?.selectedOptions?.[0]?.dataset?.drive || '';
    document.querySelectorAll('[data-library-category]').forEach((select) => {
      const categories = select.dataset.libraryCategory.split('|');
      const search = select.parentElement.querySelector('[data-library-search]');
      const query = (search?.value || '').trim().toLocaleLowerCase('fr');
      const current = select.value;
      const fieldName = select.dataset.libraryField || '';
      const candidates = categories.flatMap(category => index.get(category) || []);
      const items = candidates.filter((item) => {
        // Respecter la position et la transmission de la voiture choisie.
        const compatibility = String(item.compatibility || '').trim().toLocaleLowerCase('fr');
        if (hasSelectedCar && fieldName === 'frontTires') {
          if (drive === '2WD' && compatibility && !compatibility.startsWith('avant 2wd')) return false;
          if (drive === '4WD' && compatibility && !compatibility.startsWith('avant 4wd')) return false;
          if (!drive && compatibility && !compatibility.startsWith('avant')) return false;
        }
        if (hasSelectedCar && fieldName === 'rearTires' && compatibility.startsWith('avant')) return false;
        return !query || getSearchText(item).includes(query);
      });
      select.innerHTML = '<option value="">Choisir un article…</option>' + items.map((item) => {
        const label = materialLabel(item);
        return `<option value="${esc(label)}">${esc(item.category)} · ${esc(label)}</option>`;
      }).join('');
      if (items.some((item) => materialLabel(item) === current)) select.value = current;
    });
  }
  let pickerRefreshTimer = null;
  function schedulePickerRefresh() {
    if (pickerRefreshTimer) clearTimeout(pickerRefreshTimer);
    pickerRefreshTimer = setTimeout(() => { pickerRefreshTimer = null; refreshPickers(); }, 120);
  }
  function updateInventorySummary() {
    const totalQty = savedItems.reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0), 0);
    const lowStock = savedItems.filter(item => Number(item.quantity) <= 2).length;
    const summary = root.querySelector('.inventory-summary');
    if (summary) summary.innerHTML = `<div class="inventory-stat"><span>Références possédées</span><strong>${savedItems.length}</strong></div><div class="inventory-stat"><span>Quantité totale</span><strong>${totalQty}</strong></div><div class="inventory-stat"><span>Stock faible / nul</span><strong>${lowStock}</strong></div>`;
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
    ['materialSearch','categoryFilter','positionFilter','scaleFilter','vehicleTypeFilter','stockFilter'].forEach(id=>root.querySelector('#'+id).addEventListener(id==='materialSearch'?'input':'change',()=>{ visibleMaterialCount=MATERIAL_PAGE_SIZE; renderCards(); }));
    root.querySelector('#materialBrandPicker').addEventListener('click',event=>{const button=event.target.closest('[data-brand]');if(!button)return;selectedBrand=selectedBrand===button.dataset.brand?'':button.dataset.brand;visibleMaterialCount=MATERIAL_PAGE_SIZE;renderCards();});
    root.querySelector('#clearBrandFilter').addEventListener('click',()=>{selectedBrand='';visibleMaterialCount=MATERIAL_PAGE_SIZE;renderCards();});
    renderCards(); refreshPickers();
  }
  function renderCards() {
    const q = root.querySelector('#materialSearch').value.trim().toLocaleLowerCase('fr');
    const brand = selectedBrand, category = root.querySelector('#categoryFilter').value, position = root.querySelector('#positionFilter').value, scale=root.querySelector('#scaleFilter').value, vehicleType=root.querySelector('#vehicleTypeFilter').value, stock = root.querySelector('#stockFilter').value;
    const source = activeTab === 'catalog' ? catalog : savedItems;
    const positionQuery=position.toLocaleLowerCase('fr'), scaleQuery=scale.toLocaleLowerCase('fr'), typeQuery=vehicleType.toLocaleLowerCase('fr');
    const list = source.filter((x) => {
      const quantity=Number(x.quantity)||0, searchable=getSearchText(x);
      return (!brand || x.brand === brand) && (!category || x.category === category) && (!positionQuery || searchable.includes(positionQuery)) && (!scaleQuery || searchable.includes(scaleQuery)) && (!typeQuery || searchable.includes(typeQuery)) && (!stock || (activeTab==='mine' && (stock==='available'?quantity>2:stock==='low'?quantity>0&&quantity<=2:quantity===0))) && (!q || searchable.includes(q));
    });
    root.querySelectorAll('#materialBrandPicker [data-brand]').forEach(button=>{const active=brand===button.dataset.brand;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});
    root.querySelector('#clearBrandFilter').classList.toggle('active',!brand);
    const cards = root.querySelector('#materialCards');
    const visibleList = list.slice(0,visibleMaterialCount);
    cards.innerHTML = visibleList.length ? visibleList.map((item) => {
      const owned = savedItems.some((x) => x.id === item.id), quantity=Math.max(0,Number(item.quantity)||0);
      const stockState=quantity===0?'Épuisé':quantity<=2?'Stock faible':'En stock';
      const stockMarkup=owned?`<div class="inventory-quantity"><span class="stock-state ${quantity===0?'stock-empty':quantity<=2?'stock-low':'stock-ok'}">${stockState}</span><div class="quantity-controls"><button class="quantity-step" data-id="${esc(item.id)}" data-step="-1" type="button" aria-label="Diminuer la quantité">−</button><input class="quantity-value" data-id="${esc(item.id)}" type="number" min="0" step="1" value="${quantity}" aria-label="Quantité possédée"><button class="quantity-step" data-id="${esc(item.id)}" data-step="1" type="button" aria-label="Augmenter la quantité">＋</button></div></div>`:'';
      return `<article class="material-card"><div class="material-card-head"><span class="material-category">${esc(item.category)}</span><span class="material-brand">${esc(item.brand)}</span></div><h3>${esc(item.name)}</h3><div class="material-reference">Réf. <strong>${esc(item.reference || 'non indiquée')}</strong></div>${item.compatibility ? `<p>Compatibilité : ${esc(item.compatibility)}</p>` : ''}<p>${esc(item.detail || '')}</p>${stockMarkup}<div class="material-card-actions">${item.url ? `<a class="button button-soft" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Fiche ↗</a>` : ''}${owned ? `<button class="button button-quiet danger-action remove-material" data-id="${esc(item.id)}" type="button">Retirer</button>` : `<button class="button button-primary save-material" data-id="${esc(item.id)}" type="button">＋ Ajouter à mon stock</button>`}</div></article>`;
    }).join('') : '<div class="empty-state material-empty"><strong>Aucun matériel trouvé</strong><span>Change les filtres ou ajoute ta référence.</span></div>';
    if (list.length > visibleList.length) cards.insertAdjacentHTML('beforeend', `<div class="material-load-more"><button type="button" class="button button-soft" id="loadMoreMaterials">Afficher ${Math.min(MATERIAL_PAGE_SIZE,list.length-visibleList.length)} références supplémentaires · ${list.length-visibleList.length} restantes</button></div>`);
    root.querySelector('#loadMoreMaterials')?.addEventListener('click',()=>{visibleMaterialCount+=MATERIAL_PAGE_SIZE;renderCards();});
    cards.querySelectorAll('.save-material').forEach((b) => b.addEventListener('click', () => { const x = catalog.find((i) => i.id === b.dataset.id); if (!x || savedItems.some((i) => i.brand === x.brand && i.name === x.name && i.reference === x.reference)) return; const saved={ ...x, quantity:1, id: `saved-${Date.now()}-${Math.random().toString(16).slice(2,7)}` }; savedItems.unshift(saved); if (persist()) { invalidateMaterialIndex(); activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); } else savedItems=savedItems.filter(i=>i.id!==saved.id); }));
    cards.querySelectorAll('.remove-material').forEach((b) => b.addEventListener('click', () => { if(!confirm('Retirer cette référence de ton inventaire personnel ?'))return; const previous=savedItems; savedItems = savedItems.filter((i) => i.id !== b.dataset.id); if (persist()) { invalidateMaterialIndex(); render(); window.dispatchEvent(new Event('rc-materials-updated')); } else savedItems=previous; }));
    cards.querySelectorAll('.quantity-step').forEach(button=>button.addEventListener('click',()=>{const item=savedItems.find(x=>x.id===button.dataset.id);if(!item)return;const previous=item.quantity;item.quantity=Math.max(0,(Number(item.quantity)||0)+Number(button.dataset.step));if(persist()){updateInventorySummary();renderCards();}else item.quantity=previous;}));
    cards.querySelectorAll('.quantity-value').forEach(input=>input.addEventListener('change',()=>{const item=savedItems.find(x=>x.id===input.dataset.id);if(!item)return;const previous=item.quantity;item.quantity=Math.max(0,Math.floor(Number(input.value)||0));if(persist()){updateInventorySummary();renderCards();}else input.value=previous;}));
  }
  function addItem(event) {
    event.preventDefault(); const d = Object.fromEntries(new FormData(event.currentTarget).entries());
    const item={ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2,7)}`, brand: d.brand.trim(), category: d.category, name: d.name.trim(), reference: d.reference.trim(), quantity: Math.max(0, Math.floor(Number(d.quantity)||0)), compatibility: d.compatibility.trim(), detail: d.detail.trim(), url: d.url.trim() };
    savedItems.unshift(item);
    if (persist()) { invalidateMaterialIndex(); activeTab = 'mine'; render(); window.dispatchEvent(new Event('rc-materials-updated')); }
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
  const setupCarSelect = setupForm.elements.namedItem('carId');
  if (setupCarSelect) setupCarSelect.addEventListener('change', refreshPickers);
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
    const select = document.createElement('select'); select.dataset.libraryCategory = categories; select.dataset.libraryField = fieldName; select.setAttribute('aria-label', 'Choisir un matériel de la bibliothèque');
    search.addEventListener('input', () => { select.value = ''; schedulePickerRefresh(); });
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(label, search, select);
    // Keep the library controls inside their field label so they do not break the form grid.
    input.closest('label').insertBefore(picker, input);
  }

  // Add searchable library selectors to the current equipment fields in the garage.
  const carForm = document.getElementById('carForm');
  if (carForm) {
    const carPickerMap = [
      ['engineEquipment', 'Moteur', 'moteur'],
      ['escEquipment', 'Variateur (ESC)', 'variateur / ESC'],
      ['servoEquipment', 'Servo', 'servo']
    ];
    for (const [fieldName, categories, labelText] of carPickerMap) {
      const input = carForm.elements.namedItem(fieldName);
      if (!input || input.dataset.libraryEnhanced) continue;
      input.dataset.libraryEnhanced = 'true';
      const picker = document.createElement('div');
      picker.className = 'setup-library-picker car-library-picker';
      const label = document.createElement('span');
      label.textContent = 'Bibliothèque · ' + labelText;
      const search = document.createElement('input');
      search.type = 'search';
      search.placeholder = 'Rechercher ' + labelText + ' (marque, modèle, référence)…';
      search.setAttribute('aria-label', label.textContent);
      search.dataset.librarySearch = 'true';
      const select = document.createElement('select');
      select.dataset.libraryCategory = categories;
      select.setAttribute('aria-label', 'Choisir un équipement de la bibliothèque');
      search.addEventListener('input', () => { select.value = ''; schedulePickerRefresh(); });
      select.addEventListener('change', () => { if (select.value) input.value = select.value; });
      picker.append(label, search, select);
      input.closest('label')?.insertBefore(picker, input);
    }
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
  window.RCSetupMaterials={exportData:()=>savedItems.map(item=>({...item})),getCatalog:()=>catalog.map(item=>({...item})),getAll:()=>allMaterials().map(item=>({...item})),importData:items=>{if(!Array.isArray(items)||items.some(item=>!item||typeof item!=='object'||!item.brand||!item.name||!item.category))return false;const previous=savedItems;savedItems=items.map(item=>({...item}));if(!persist()){savedItems=previous;return false;}invalidateMaterialIndex();render();window.dispatchEvent(new Event('rc-materials-updated'));return true;}};
})();
