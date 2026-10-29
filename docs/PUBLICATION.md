# PUBLICATION — état de la mise en ligne

> Mis à jour le 29 octobre 2026, d'après le dépôt et la console GitHub.
>
> Aucun secret ici — uniquement des références.

## En bref

- **Production** : pas encore en ligne
- **Domaine & SSL** : keurbible.com sur Cloudflare, pas encore relié au site
- **Visibilité** : aucune page indexée (site pas encore publié)
- **Contact** : keurbible@toakeur.com (à confirmer)

## Boutiques

| | 🌐 Site |
|---|---|
| État | [à faire] Pas encore publié |
| Hébergement | [à faire] Cloudflare Pages, projet keurbible (créé à la première publication) |
| Domaine | [à faire] keurbible.com, à relier au projet Pages |
| SSL | [pas encore] Certificat Cloudflare, HSTS prévu dans public/_headers |
| Indexation | [pas encore] Search Console à créer |
| Mesure d'audience | [pas encore] Cloudflare Web Analytics à activer |

## Ce qui reste, dans l'ordre

1. ✅ **Code et contenus** : site construit et contrôlé en local le 29 octobre 2026 (85 adresses).
2. **Secrets Cloudflare** : ajouter `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` au dépôt keurbible (Settings → Secrets and variables → Actions), puis relancer « Publier le site ».
3. **Domaine** : dans Cloudflare, Workers & Pages → `keurbible` → Domaines personnalisés : ajouter `keurbible.com` et `www.keurbible.com` (redirection de www vers l'adresse sans www).
4. **Search Console** : propriété de domaine `keurbible.com`, envoi du sitemap.
5. **Amazon Partenaires et AdSense** : déclarer keurbible.com sur les deux comptes, créer les blocs d'annonces.
6. **Veille actus** : ajouter Keur Bible à la tâche de veille (`actus/keurbible.json`).
7. **Design définitif** et illustrations.

## Web · Production

| | |
|---|---|
| Adresse | **Pas encore en ligne** (https://keurbible.com) |
| Hébergeur | Cloudflare Pages (projet `keurbible`), workflow `deploy.yml` |
| Dernière publication | aucune |
| Mise en ligne | à venir |
| Dépôt | https://github.com/teiki5320/keurbible |
| Taille | 85 adresses dans le sitemap construit en local (29 octobre 2026) |
| Contact affiché | `keurbible@toakeur.com` (à confirmer) |
| Maintenance | désactivée (`content/maintenance.json`) |

## Domaine & SSL

- **Domaine** : `keurbible.com` (adresse canonique, sans www).
- **Registraire et DNS** : Cloudflare (serveurs de noms Cloudflare) ; aucune adresse ne pointe encore vers le site.
- **SSL** : sera fourni et renouvelé par Cloudflare ; HSTS prévu dans `public/_headers`.

## Visibilité

- **Sitemap** : `https://keurbible.com/sitemap.xml` une fois en ligne ; `robots.txt` autorise tout et cite le sitemap.
- **Google Search Console** : à créer.
- **IndexNow** : prêt (`indexnow.yml`, clé publiée avec le site).
- **Publicité** : script AdSense et `ads.txt` publiés avec le site ; site à déclarer, aucune annonce.
