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
- **Modèles** : Kling 3 Omni pour toutes les images, sauf 3 reprises faites avec GPT Image 2 (text2image, 1:1, 1k, qualité medium, 40 crédits l'image), qui respecte mieux une forme exacte : `croix-de-saint-damien`, `croix-copte-bois`, `bracelet-dizainier-bois` (champ `modele` dans `docs/images/consignes.json`). Les anciennes versions sont gardées dans `.images/ecartees/v1/`.
- **État au 29 octobre 2026** : 159 images pour les 178 objets (environ 2 330 crédits en tout, essais et nouvelles tentatives compris) : 82 pour les objets des Top 10, puis 77 pour les 88 autres. 19 objets n'ont pas d'image, deux tentatives ayant été refusées :
  - icônes et crucifix, auxquels le modèle ajoute toujours des lettres (plaque INRI, IC XC, lettres grecques) : `crucifix-mural-bois-classique`, `crucifix-christ-noir`, `crucifix-orthodoxe-trois-traverses`, `icone-vierge-de-tendresse`, `icone-vierge-noire-a-l-enfant`, `icone-christ-pantocrator`, `icone-de-la-resurrection` ;
  - croix de forme particulière rendues en croix latine : `pendentif-croix-orthodoxe` (trois traverses), `pendentif-croix-huguenote` (croix de Malte à huit pointes) ;
  - nombre de grains ou de nœuds faux (le modèle ne sait pas compter les dizaines) : `chapelet-cristal`, `chapelet-argent`, `chapelet-missionnaire-cinq-continents`, `chapelet-corde-a-noeuds`, `dizainier-de-poche`, `couronne-de-l-avent-quatre-bougies` (3 ou 5 bougies) ;
  - visages africains non respectés : `toile-cene-africaine` (Jésus au visage européen), `sainte-famille-africaine-bois` ;
  - texte visible : `coloriages-versets-adultes` ;
  - écartée à la relecture : `croix-de-bapteme-or` (la chaîne enroulée au-dessus de la croix ressemblait à une croix ansée égyptienne).
  Petits écarts acceptés : `bracelet-dizainier-bois` (11 grains au lieu de 10, mais la croix en tau est juste), `pendentif-croix-ethiopienne` (croix ajourée plus générique qu'une vraie croix de Lalibela), `animaux-de-la-creche` (deux moutons), `statue-sainte-therese-de-lisieux` (roses à ses pieds).
- **Suite possible** : pour les 19 objets sans image, il faudrait une image de référence (mode image2image) ou les vraies photos d'Amazon.
- Les vraies photos des produits ne pourraient venir que des outils officiels d'Amazon Partenaires (API Product Advertising).
