# Images des objets

Méthode reprise de Keur Kado (docs/IMAGES.md), décidée par Jean le 29 octobre 2026.

- **Une illustration par objet, créée par IA** : OpenArt, modèle Kling 3 Omni (text2image, 1:1, 1k, 10 crédits l'image), à partir du titre du produit Amazon lié (`titre` dans `src/lib/contenus/amazon-asins.json`) ou, sans lien direct, du nom et de la description de l'objet.
- **Style** : photo de produit réaliste, sur un tissu africain plié (wax, bogolan, kente, coton éthiopien à bordure tibeb ou natte de raphia, en alternance), sur une table en bois sombre, mur sable uni (#e6d8bf), lumière chaude venant d'en haut à gauche. L'objet reste fidèle au produit : la touche africaine est dans la mise en scène (choix de Jean : « une connotation africaine », sauf pour la Vierge Marie ou Jésus d'un objet qui n'est pas afro, représentés comme sur le produit). Objets « afro » : personnages aux traits africains.
- **Jamais** : texte, lettres ou titre (couvertures de Bible unies, versets muraux en lignes décoratives illisibles), logo, marque, emballage, personne, main.
- **Figures sacrées** : statues, icônes et tableaux sont représentés tels qu'ils sont (choix de Jean du 29 octobre 2026).
- **Contrôle** : chaque image est regardée avant d'être gardée (texte, main, objet différent, défaut) ; une seule nouvelle tentative, sinon pas d'image.
- **Fichiers** :
  - images brutes 1024 px : `.images/brut/<slug>.png` (non suivies par git) ;
  - `npm run images-objets` (scripts/images-objets.mjs) les convertit en `public/objets/<slug>.webp` (480 × 480, qualité 80) et écrit `src/lib/contenus/images-objets.json` (adresse et texte alternatif de chaque image) ;
  - consignes, textes alternatifs et identifiants OpenArt : `docs/images/consignes.json`.
- **Affichage** (à placer par le design, Claude Design) : `ObjetCarte.image` (`src`, `alt`) dans `src/lib/catalogue.ts`, ou `null` si l'objet n'a pas encore d'image (garder alors une carte sans image). Partout où l'image est montrée, passer `illustrationIA` à `AmazonNote` : la carte affiche « Illustration créée par IA : l'article vendu sur Amazon peut différer. » (reprise dans les mentions légales et les conditions).
- **État au 29 octobre 2026** : 82 images pour les 90 objets des Top 10 (environ 1 120 crédits, essais et nouvelles tentatives compris). 8 objets n'ont pas d'image, les deux tentatives ayant été refusées :
  - icônes et crucifix de style classique, pour lesquels le modèle ajoute toujours des lettres (plaque INRI, lettres grecques) : `crucifix-mural-bois-classique`, `crucifix-christ-noir`, `icone-vierge-de-tendresse`, `icone-vierge-noire-a-l-enfant` ;
  - visages africains non respectés : `toile-cene-africaine` (Jésus au visage européen), `sainte-famille-africaine-bois` ;
  - objet faux : `couronne-de-l-avent-quatre-bougies` (3 ou 5 bougies) ;
  - écartée à la relecture : `croix-de-bapteme-or` (la chaîne enroulée au-dessus de la croix ressemblait à une croix ansée égyptienne).
  Points de fidélité à revoir : `croix-de-saint-damien` (plus proche d'un crucifix peint que du modèle exact), `croix-copte-bois` (bras du bas plus long), `bracelet-dizainier-bois` (croix latine au lieu du tau du produit).
- **Suite** : les 88 autres objets (environ 900 crédits), après l'accord de Jean.
- Les vraies photos des produits ne pourraient venir que des outils officiels d'Amazon Partenaires (API Product Advertising).
