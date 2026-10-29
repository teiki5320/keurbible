@AGENTS.md

- Site en français : textes UI, commentaires et messages en français.
- Règles de travail de Jean : réponses et choix numérotés, questions par lots de 3 au plus ; git uniquement sur la branche `main` (aucune autre branche, aucune pull request).
- Contenus : respecter docs/REDACTION.md (textes écrits par nous, ton respectueux de toutes les Églises, jamais d'ASIN, de prix, d'avis ni de note inventés, versets en Louis Segond 1910 uniquement).
- Ce que contient chaque page : docs/CONTENU.md. Design en place : « Lumière » (thème sombre, Cinzel et Mulish, orbe et nuage de points sur l'accueil), validé par Jean le 29/10/2026 ; couleurs dans src/app/globals.css (« white » = surface sombre des cartes).
- Données : tout est écrit dans src/lib/contenus/ (plan.ts pour les adresses fixes, un fichier par rubrique, un par Top 10, occasions.ts, psaumes.ts) et content/conseils/ ; on y accède par src/lib/catalogue.ts. Site statique, sans base.
- Liens Amazon : uniquement par src/lib/amazon.ts (tag `keurbible-21`, table AMAZON_TAGS par emplacement). Sans ASIN vérifié sur Amazon.fr, le bouton ouvre une recherche.
- Vérifications : `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, puis `npm run test:sortie` (contrôle du site construit dans `out/` : un seul h1, description, canonique, JSON-LD lisible, titres de 60 caractères au plus, liens Amazon, AdSense, en-têtes). La publication lance les mêmes contrôles avant la mise en ligne.
- Dates du plan du site : rien à lancer à la main. `npm run build` met d'abord à jour `src/lib/lastmod.json` (« prebuild » → `scripts/lastmod.mjs`). Après un changement de contenu, mets `src/lib/lastmod.json` dans le même commit s'il a changé.

## Fiches à jour à chaque changement (règle de Jean)

Le Studio de Jean affiche les fiches de ce dépôt (docs/INFRA.md, docs/MARKETING.md, docs/PUBLICATION.md) et le README. Elles doivent toujours dire la vérité d'aujourd'hui.

- Dès qu'un travail change un fait affiché par ces fiches — site en ligne ou non, date de mise en ligne, hébergement ou domaine, service ajouté ou retiré, code Amazon Partenaires, état AdSense ou Pinterest, monétisation, nombre de contenus publiés —, mets à jour **dans le même envoi** toutes les phrases concernées des trois fiches (En bref, Parcours, Boutiques, Vue d'ensemble, Ce qui reste…) et du README.
- Une ancienne valeur ne reste qu'au passé, datée.
- Ne recopie jamais de secret ni de clé dans ces fichiers.
