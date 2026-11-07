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
