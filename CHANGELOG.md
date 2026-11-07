## 2026-11-07 — Impression des fiches et comparaisons
- Ajout d’une commande « Imprimer / PDF » dans la fiche détaillée d’un setup et dans le comparateur.
- Mise en page dédiée à l’impression, avec les réglages, conditions de piste, chronos, notes et photos disponibles.
- Les actions de modification ne sont pas incluses dans le document imprimé. Le navigateur permet d’imprimer sur papier ou d’enregistrer en PDF.

## 2026-11-07 — Architecture des différentiels par voiture
- Proposition automatique : 1 différentiel pour les 2WD, 2 pour les 4WD au 1/10 et 3 pour les 4WD au 1/8.
- Le nombre de différentiels est modifiable manuellement dans la fiche voiture (1, 2 ou 3).
- Les setups affichent uniquement les différentiels correspondant à la voiture sélectionnée : arrière seul, avant/arrière ou avant/central/arrière.
- Les positions non disponibles sont marquées absentes dans la fiche enregistrée.

# Historique des versions — RC SETUP

## Version de travail 1.1 — 7 novembre 2026

Cette version ajoute des fonctions d'analyse et de suivi des essais.

- Carnet de test par session : nombre de tours, meilleur temps, moyenne, régularité, comportement à l'entrée, au milieu et à la sortie du virage, motricité, stabilité, modifications testées, bilan et prochain essai.
- Calculateur de transmission : rapport pignon/couronne, rapport total avec rapport interne facultatif et développement théorique avec diamètre de roue.
- Aide au diagnostic : pistes de vérification selon le symptôme, le niveau d'adhérence et l'architecture 2WD/4WD.
- Mode piste : commandes et champs plus lisibles sur smartphone.
- Bibliothèque matériel : filtre supplémentaire par compatibilité et position.
- Export individuel d'un setup en JSON et import partagé dans un autre garage, sans écraser les données déjà présentes.
- Conservation des fonctions déjà présentes : comparaison de setups, historique et restauration des anciennes versions d'un setup, favoris, recherche et filtres, sauvegarde automatique locale, export/import JSON.

### Retour à la version précédente

La version stable précédant cette évolution est conservée sur la branche GitHub :

`backup/stable-2026-11-07`

Pour revenir en arrière, restaurer cette branche vers `main`. Les données personnelles de l'application sont stockées localement dans le navigateur et ne sont pas remplacées par une restauration du code. Il reste recommandé d'exporter un fichier JSON avant toute opération de restauration ou de changement d'appareil.

### Limites à connaître

- Les sauvegardes automatiques IndexedDB restent sur le navigateur et l'appareil concernés.
- Le calculateur ne peut donner le rapport total que si le rapport interne exact du châssis est renseigné.
- Les conseils du diagnostic sont des pistes de test génériques : modifier un seul paramètre à la fois et vérifier le résultat sur la piste.


## Complément Schumacher — pneus TT 1/10

Bibliothèque enrichie avec les variantes Mini Spike 2 (avant 2WD Slim, avant 4WD et arrière), ainsi que les modèles avant 2WD et leurs gommes documentées : Mini Pin, Stagger Rib, Cut Stagger, Cut Stagger Low Profile, 2 Row Stud, Mini Dart, Slim Rib Spike, Honeycomb, Fusion Slim et Splinter. Les profils et les positions sont affichés dans le nom et la compatibilité. Les références pré-collées Fusion Slim et Splinter sont également distinguées.


## Conditions de piste — surfaces et adhérence
- Ajout d'une liste de surfaces typiques TT 1/10 (tartan/EOS, moquettes, astro, terres/clay, herbe, béton, bitume, parquet/sol de gymnase, bois, mixte et autre).
- Ajout d'un niveau d'adhérence distinct : très faible, faible, moyenne, forte et très forte.
- Les pistes conservent leur surface et leur adhérence habituelles ; chaque setup peut préciser les conditions réellement rencontrées lors de la session.
- Filtres de setups par surface et par niveau d'adhérence, avec affichage des conditions dans les fiches et les listes. Les anciennes fiches restent compatibles.


## Distinction des surfaces indoor
- Séparation du tartan et de la moquette EOS dans les choix de surface des pistes et des sessions.


## Gestion manuelle des voitures et modification des pistes
- Le formulaire d'ajout de voiture est explicitement identifié comme ajout manuel, en complément du catalogue de modèles prédéfinis.
- Ajout de l'édition des pistes existantes : modification du nom, de la surface, de l'adhérence, du type, du lieu et des détails sans supprimer les setups associés.


## Accueil de présentation et aide — 7 novembre 2026
- Enrichissement de la page d'accueil avec une présentation des points forts et des accès directs au garage, aux pistes, aux setups, à la bibliothèque matériel, aux outils et à l'aide.
- Ajout d'une page « Aide & tutoriels » avec un parcours de démarrage en cinq étapes, des raccourcis vers les fonctions et une FAQ sur les données, les sauvegardes, le transfert, les références manquantes et l'installation.


## Inventaire matériel enrichi — 7 novembre 2026
- Ajout d'un tableau de bord d'inventaire : références possédées, quantité totale et références en stock faible ou nul.
- Les références ajoutées depuis le catalogue démarrent à une unité ; la quantité peut être modifiée directement depuis chaque fiche avec les boutons + / − ou la saisie numérique.
- Statuts automatiques : épuisé (0), stock faible (1 à 2), en stock (plus de 2), avec filtre dédié.
- Extension des catégories de saisie manuelle aux inserts, huiles de différentiel et graisses.
- Les quantités restent incluses dans les sauvegardes et exports JSON existants.


## Galerie photo du garage — 7 novembre 2026
- Chaque voiture du garage peut désormais conserver jusqu'à trois photos, qu'elle provienne du catalogue ou d'un ajout manuel.
- Ajout, aperçu et suppression des photos depuis le formulaire de création ou de modification d'une voiture.
- Les images sont redimensionnées et compressées automatiquement avant stockage ; les anciennes voitures restent compatibles sans migration manuelle.
- Les photos sont affichées dans la fiche de chaque voiture et restent incluses dans la sauvegarde et l'export JSON existants.


## Déploiement — 7 novembre 2026
- Relance propre de la publication GitHub Pages après détection d'artefacts de déploiement dupliqués dans une ancienne tentative.
