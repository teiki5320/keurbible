# Keur Bible — règles de rédaction des contenus

À lire avant d'écrire une rubrique, un objet, une occasion, un Top 10, un Psaume ou un article Conseils. Voir aussi `docs/CONTENU.md` (ce que contient chaque page), `src/lib/types.ts` (champs exacts) et `src/lib/contenus/plan.ts` (adresses fixes).

## Ton

1. Tout est en **français**, ton **chaleureux et simple**, sans jargon théologique. On s'adresse à des chrétiens francophones (catholiques, protestants, évangéliques, orthodoxes), en particulier à la diaspora africaine en France, et à ceux qui cherchent un cadeau pour un proche croyant.
2. **Respect de toutes les confessions** : jamais prosélyte, jamais polémique, jamais de jugement entre Églises. Quand les usages diffèrent, on le dit simplement (« les catholiques prient souvent avec un chapelet ; dans les Églises protestantes, on prie plutôt sans objet »).
3. Pas de promesse spirituelle ni miraculeuse (« cet objet vous protégera »). On parle de ce que l'objet est, de son usage et de sa beauté.
4. Vouvoiement. Phrases courtes. Typographie : apostrophe droite ('), guillemets « … » avec espaces.

## Exactitude

1. **Jamais inventés** : prix, avis, notes, nombre de ventes, ASIN, marques ou références précises de produits. `amazonAsin` reste `null` tant qu'il n'a pas été vérifié sur Amazon.fr (fiche ouverte, bouton d'achat présent).
2. Un **objet** est un type d'objet précis (« Crèche de Noël en bois d'olivier de Bethléem », « Chapelet en bois d'olivier »), pas un produit d'une marque. On ne décrit que ce qui est vrai de ce type d'objet ; pas de dimensions inventées.
3. Faits religieux et historiques (fêtes, traditions, traductions de la Bible) : seulement ce qui est sûr. En cas de doute, on ne le dit pas.
4. **Écrit par nous** : jamais recopié ni paraphrasé de près d'un site, d'une fiche produit ou d'une encyclopédie. Pas de citation longue de sources.
5. **Versets bibliques** : uniquement la traduction **Louis Segond 1910** (domaine public), texte exact, avec la référence. Les traductions récentes (Segond 21, TOB, Bible de Jérusalem, Parole de Vie, Semeur, AELF) sont protégées : on les présente, on ne les cite pas.
6. **Numérotation des Psaumes** : toujours les deux numéros, hébraïque puis grec entre parenthèses : « Psaume 23 (22) ».

## Objet (`Objet`)

- `nom` : 3 à 8 mots, sans marque.
- `description` : 2 ou 3 phrases (180 à 380 caractères) : ce que c'est, pour qui, pourquoi on l'aime.
- `traditions` : `"toutes"` si l'objet convient à tous les chrétiens (Bible, croix sans corps, verset mural) ; sinon la liste (`crucifix`, `chapelet`, statue de saint → `["catholique"]` ou `["catholique", "orthodoxe"]` ; icône → `["orthodoxe", "catholique"]`).
- `afro` : `true` pour l'art chrétien afro (Jésus noir, Vierge noire, scènes bibliques afro, crèches africaines, croix éthiopiennes et coptes).
- `occasions` : slugs de `PLAN_OCCASIONS` pour lesquels c'est un bon cadeau (0 à 4).
- `recherche` : 3 à 6 mots que l'on taperait sur Amazon.fr pour trouver ce type d'objet.
- `livre: true` pour les Bibles, livres et coloriages (rayon Livres d'Amazon).

## Rubrique et sous-rubrique

- `titre` : 60 caractères au plus, avec le mot que l'on cherche sur Google (« Bibles : bien choisir son édition et son format »).
- `description` : 70 à 160 caractères.
- `intro` : 3 à 5 phrases (rubrique), 3 ou 4 phrases (sous-rubrique).
- `choisir` : 3 à 5 conseils concrets.
- `faq` : 3 questions que l'on se pose vraiment, réponses de 2 à 4 phrases.

## Top 10

- `title` : « Top 10 des … », 60 caractères au plus. `intro` : 2 ou 3 phrases qui disent le critère (« C'est notre classement, pas un palmarès officiel »).
- `items` : exactement 10 objets du site, chacun avec `why` (2 ou 3 phrases écrites pour l'angle du sujet, pas la copie de la description). Un objet figure dans 2 Top 10 au plus.
- `start` : 2 ou 3 phrases, avec des liens internes `[texte](/chemin)`.
- `faq` : 3 questions.

## Psaume

- `texte` : le texte exact de la Louis Segond 1910 (vérifié mot pour mot sur Wikisource), sans le numéro de verset.
- `pour` : 3 à 6 mots (« Pour les jours d'inquiétude »).
- `presentation` : 4 à 6 phrases écrites par nous : de quoi parle le Psaume, pourquoi il touche, comment il est lu dans les Églises.

## Articles Conseils (`content/conseils/<slug>.md`)

```
---
title: Quelle Bible choisir pour débuter ?
description: (70 à 160 caractères, pour Google)
date: 2026-10-28
theme: choisir
resume: (réponse courte, 2 ou 3 phrases)
objets: slug-objet-1, slug-objet-2
---
Corps en Markdown, parties en « ## ». Liens internes : /<rubrique>, /<rubrique>/<sous-rubrique>, /cadeaux/<occasion>, /top-10/<slug>, /psaumes/<slug>, /conseils/<slug>, /afro.
```

- `title` : la question, terminée par « ? ».
- `date` : un lundi, un mercredi ou un vendredi ; l'article paraît ce jour-là.
- `theme` : `choisir` (Bien choisir), `offrir` (Offrir), `fetes` (Fêtes et traditions), `maison` (La foi à la maison) ou `afrique` (Foi et Afrique).
- Corps : 600 à 900 mots, qui répond vraiment à la question, avec au moins 3 liens internes.
