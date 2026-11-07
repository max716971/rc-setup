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
