# Keur Bible — définition du contenu

Document de référence (contenu et structure), validé par Jean le 29 octobre 2026. Le design sera fait séparément.

## Cadrage

1. Boutique-guide d'**objets chrétiens pour la maison et à offrir**, en français.
2. Public : chrétiens francophones (catholiques, protestants, évangéliques, orthodoxes), en priorité la **diaspora africaine en France**.
3. Ton chaleureux, respectueux de toutes les confessions, jamais prosélyte ni polémique (voir docs/REDACTION.md).
4. Revenus : **Amazon Partenaires** (tag `keurbible-21`) et **Google AdSense** (même compte que Keurbook) ; le site ne vend rien.
5. Base technique : celle de Keurbook (site statique Next.js, contenus dans le code, Cloudflare Pages). Aucun contenu éditorial de Keurbook n'est repris.

## Arborescence

1. **Accueil** — `/` : accroche, **carrousel des Psaumes** (12 cartes, Louis Segond 1910), rubriques, bloc « Art chrétien afro », cadeaux par occasion, Top 10, derniers conseils, actus. Aucun lien Amazon.
2. **7 rubriques d'objets** — `/<rubrique>` (guide d'achat) et `/<rubrique>/<sous-rubrique>` : Bibles · Croix et crucifix · Chapelets et prière · Art chrétien · Statues et Vierges · Crèches et Noël · Livres et coloriages (adresses fixes dans `src/lib/contenus/plan.ts`).
3. **Cadeaux par occasion** — `/cadeaux` et `/cadeaux/<occasion>` : baptême, première communion, profession de foi, confirmation, mariage, fête des mères, fête des pères, Noël, Pâques, condoléances.
4. **Art chrétien afro** — `/afro` : page phare, tous les objets afro des rubriques (Jésus noir, Vierge noire, crèches africaines, croix éthiopiennes et coptes…).
5. **Top 10** — `/top-10` (ouvre le premier onglet) et `/top-10/<slug>` : 10 sujets.
6. **Psaumes** — `/psaumes` et `/psaumes/<slug>` : 12 Psaumes, texte Louis Segond 1910 et double numérotation « Psaume 23 (22) ».
7. **Conseils** — `/conseils` et `/conseils/<slug>` : trois articles par semaine (lundi, mercredi, vendredi).
8. **Actus** — `/actus` : culture chrétienne en Afrique et dans la diaspora (fêtes et pèlerinages, gospel, art sacré et patrimoine, livres et films), sans politique ni scandale ; lues en direct depuis la veille (`actus/keurbible.json`).
9. **Ma liste d'envies** — `/ma-liste` : dans le navigateur, sans compte, partageable par WhatsApp ou par lien (non indexée).
10. **Notre démarche** — `/notre-demarche`.
11. **Pages légales** — `/mentions-legales`, `/confidentialite`, `/conditions` (mention Partenaires Amazon). Pied de page « Un site TOA KEUR ».

Menu : Cadeaux · Art afro · Top 10 · Psaumes · Conseils · Actus · Ma liste d'envies ; bande des 7 rubriques sous l'en-tête (grand écran).

## Modèles de pages

1. **Rubrique** : fil d'Ariane, présentation, sous-rubriques, « Comment choisir », objets rangés par sous-rubrique avec le filtre « Pour quelle tradition ? », Top 10 et conseils liés, 3 questions fréquentes, 1 annonce, autres rubriques.
2. **Sous-rubrique** : présentation, objets avec le filtre, Top 10 et conseils liés, 1 annonce, sous-rubriques voisines.
3. **Carte objet** (pas de fiche par objet, pour éviter les pages trop minces) : traditions, mention « Art afro », nom, notre description, bouton « Voir sur Amazon » (fiche si l'ASIN est vérifié, sinon recherche) avec la mention partenaire, bouton « Ma liste ». Pas de photo pour l'instant (aucune image trompeuse).
4. **Occasion** : ce qu'est la fête dans les différentes Églises, « Selon celui qui offre », idées de cadeaux, Top 10 et conseils liés, questions fréquentes, 1 annonce.
5. **Top 10** : onglets, intro avec le critère (« notre classement, pas un palmarès officiel »), 10 objets avec « Pourquoi on l'a choisi », « Par où commencer », questions fréquentes, « Voir aussi ». Sans publicité.
6. **Psaume** : verset en grand, présentation, « Quand le lire », objets liés, autres Psaumes. Sans publicité.
7. **Article Conseils** : question, réponse courte, sommaire, texte (600 à 900 mots), 1 annonce au milieu, objets cités en cartes, articles liés, 1 annonce en fin de page.

## Top 10 (ordre des onglets)

1. Crèches de Noël, dont crèches africaines
2. Cadeaux chrétiens de Noël
3. Art chrétien afro
4. Cadeaux de baptême
5. Bibles pour enfants
6. Bibles à offrir
7. Croix murales, dont croix éthiopiennes
8. Versets muraux
9. Cadeaux de première communion
10. Statues de la Vierge Marie, dont Vierge noire

En réserve : chapelets à offrir, cadeaux de mariage chrétiens, coloriages bibliques, fête des mères.

## Images

Choix de Jean (29 octobre 2026), à revoir plus tard : illustrations Keur Bible de scènes d'objets (Bible ouverte, croix, bougie, crèche), **sans visage de Jésus, de Marie ni des saints** ; pas de photo sur les cartes objet tant que les images officielles d'Amazon Partenaires ne sont pas accessibles. Les épingles Pinterest verticales (1000 × 1500) des Top 10 et des articles viendront avec ces illustrations.
