# INFRA — fiche technique

Mis à jour le 29 octobre 2026, d'après le code du dépôt. Aucun secret ici : uniquement des noms de variables et de consoles.

## En bref

- **Plateforme** : site web éditorial, en français, sur ordinateur et mobile
- **Stack** : Next.js 16 en export statique, React 19, Tailwind CSS 4
- **Backend** : aucun — site statique, sans base ni compte
- **Distribution** : Cloudflare Pages, publié par GitHub Actions (pas encore en ligne)
- **Site** : keurbible.com (85 adresses dans le sitemap au lancement)
- **IA et outils** : veille actus (à brancher), IndexNow

## Parcours

- 🌐 **Web** : 🐙 GitHub — main [ok] → ⚙️ GitHub Actions — lint, types, tests, build [ok] → ☁️ Cloudflare Pages — projet keurbible, secrets à ajouter [à faire] → 🌍 keurbible.com — domaine à relier au projet [à faire]
- 📝 **Contenu** : ✍️ Articles Conseils — 5 publiés, 3 programmés [ok] → ⚙️ GitHub Actions — publie lundi, mercredi, vendredi [ok] → 📡 IndexNow — après chaque publication et chaque lundi [pas encore] → 🔍 Google — Search Console à créer [à faire]
- 📰 **Veille actus** : 📡 Tâche de veille — Keur Bible à ajouter [à faire] → 🐙 Dépôt veille — actus/keurbible.json [pas encore] → 🌍 keurbible.com — accueil (4), /actus (20) [pas encore]
- 🛒 **Affiliation** : 🛍️ Cartes objets — bouton « Voir sur Amazon » [ok] → 🛒 Amazon Partenaires (affiliation) — tag keurbible-21 [ok] → 🔗 Liens directs — 0 ASIN vérifié sur 178 objets, recherches Amazon [à faire]
- 📰 **Publicité** : 📰 AdSense (publicité web) — script en place, aucun bloc créé [en cours] → ✅ Validation du site — site à déclarer [à faire] → 💶 Revenus — aucun [pas encore]

## Vue d'ensemble

- **Plateforme** : boutique-guide en français d'objets chrétiens pour la maison et à offrir, pour toutes les Églises, en priorité la diaspora africaine en France.
- **Stack** : Next.js 16 (export statique) + React 19 + Tailwind CSS 4, TypeScript, Marked pour les articles Markdown. Contenus dans `src/lib/contenus/` (plan, rubriques et objets, occasions, Top 10, Psaumes) et `content/conseils/`. Base technique reprise de Keurbook (code seulement).
- **Backend** : aucun. Site entièrement statique (dossier `out/`), sans base de données ni compte. La liste d'envies reste dans le navigateur du visiteur. Seuls cookies : ceux de Google AdSense, après accord dans le bandeau de consentement.
- **Taille** : 85 adresses dans le sitemap au lancement (accueil, 7 rubriques, 31 sous-rubriques, page Cadeaux et 10 occasions, page afro, 10 Top 10, page Psaumes et 12 Psaumes, page Conseils et 5 articles publiés, page Actus, notre démarche, 3 pages légales). 178 objets.
- **Particularités** : interrupteur de maintenance dans `content/maintenance.json` (désactivé), tests de cohérence des contenus dans `tests/`, contrôle du site construit avant chaque mise en ligne (`tests/sortie/`).

## GitHub

- **Rôle** : dépôt public du code et des contenus (branche `main` uniquement), et trois workflows :
  - `deploy.yml` (« Publier le site ») : lint, types, tests, build, contrôle du site construit, puis publication sur Cloudflare Pages à chaque push sur `main`, chaque lundi, mercredi et vendredi à 23 h 15 UTC la veille (articles programmés), chaque jour à 11 h 50 et 18 h 50 UTC (articles d'actus) et à la main. Crée le projet Pages `keurbible` s'il n'existe pas ; échoue en rouge si un secret Cloudflare manque ; vérifie ensuite que `https://keurbible.com/version.txt` sert la nouvelle version ;
  - `indexnow.yml` : signale le sitemap publié à IndexNow après chaque publication réussie, chaque lundi et à la demande ;
  - `maintenance.yml` : met le site en pause ou le rouvre, puis republie.
- **Console** : https://github.com/teiki5320/keurbible
- **Secrets** : `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`, à régler dans les secrets Actions du dépôt (pas encore faits au 29 octobre 2026), jamais dans le code.

## Hébergement web (Cloudflare Pages)

- **Fournisseur** : Cloudflare Pages, projet `keurbible`, publié par `wrangler` depuis `deploy.yml` (pas encore publié).
- **En-têtes** : `public/_headers` (politique de sécurité limitée au site, à Google AdSense, à Cloudflare Web Analytics et à `teiki5320.github.io` pour la veille, HSTS, cache) ; adresses `*.pages.dev` en `noindex`, fichiers `.txt` internes de Next.js en `noindex` (sauf `ads.txt`, `robots.txt` et la clé IndexNow).
- **Redirections** : `public/_redirects`.
- **Console** : tableau de bord Cloudflare, rubrique Workers & Pages → `keurbible`.

## Nom de domaine

- **Domaine** : `keurbible.com`, adresse canonique sans www.
- **Registraire et DNS** : Cloudflare (serveurs de noms Cloudflare). Le domaine n'est pas encore relié au projet Pages (aucune adresse au 29 octobre 2026).
- **Adresse de contact** : `keurbible@toakeur.com` par défaut (`NEXT_PUBLIC_CONTACT_EMAIL`), à confirmer.
- **Console** : tableau de bord Cloudflare, rubrique Domaines → `keurbible.com`.

## Amazon Partenaires (affiliation)

- **Rôle** : les boutons « Voir sur Amazon » (au moins 44 px de haut) mènent à Amazon.fr avec le tag `keurbible-21` (`src/lib/amazon.ts`, réglable par `NEXT_PUBLIC_AMAZON_TAG`). Un code par emplacement (rubrique, occasion, top, conseil) dans la table unique `AMAZON_TAGS`, tous à `keurbible-21`.
- **Liens** : aucun ASIN vérifié au 29 octobre 2026 : les 178 objets ouvrent une recherche Amazon (rayon Livres pour les Bibles et les livres). Un ASIN n'est ajouté qu'après vérification de la fiche sur Amazon.fr.
- **Site déclaré** : keurbible.com à déclarer sur le compte Amazon Partenaires.
- **Console** : https://partenaires.amazon.fr

## AdSense (publicité web)

- **Rôle** : annonces Google, une fois le site validé. Même compte que Keurbook (`pub-2680784147246798`, géré avec `admin@toakeur.com`). Script et balise `google-adsense-account` dans `src/app/layout.tsx` ; identifiant dans `src/lib/config.ts` (`ADSENSE_CLIENT`). `public/ads.txt` publié avec le site.
- **Emplacements** (composant `AdSlot`, mention « Publicité ») : 1 en bas des rubriques, sous-rubriques et occasions (`NEXT_PUBLIC_ADSENSE_SLOT_RUBRIQUE`), 2 dans les articles Conseils et 1 en fin d'article d'actu (`NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE`). Aucun bloc créé au 29 octobre 2026 : rien ne s'affiche.
- **Validation du site et revenus** : site à déclarer dans AdSense après la mise en ligne ; aucun revenu.
- **Console** : https://adsense.google.com

## Analytics (mesure d'usage)

- **Fournisseur** : Cloudflare Web Analytics, gratuit et sans cookie, à activer sur le projet après la mise en ligne (la politique de sécurité l'autorise déjà).

## Veille actus

- **Rôle** : actus de la culture chrétienne en Afrique et dans la diaspora (fêtes et pèlerinages, gospel, art sacré et patrimoine, livres et films ; sans politique ni scandale), même mécanique que Keurbook.
- **Lecture** : le site lit `https://teiki5320.github.io/veille/actus/keurbible.json` dans le navigateur (fichier absent = bloc absent, page intacte) et, au build, les articles complets `articles/keurbible/`. **Keur Bible n'est pas encore ajouté à la tâche de veille** (29 octobre 2026).
- **Fiches pour la veille** : `public/veille/entites.json` (7 rubriques et 10 occasions, tags `rubrique:<slug>` et `occasion:<slug>`), généré à chaque build.
- **Console** : https://github.com/teiki5320/veille
