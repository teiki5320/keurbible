/**
 * Configuration générale du site.
 * Les valeurs propres à l'entreprise se règlent via les variables d'environnement (voir .env.example).
 */
/** Hébergeur du site : Cloudflare Pages. */
const defaultHost = { name: "Cloudflare", full: "Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis — cloudflare.com" };

/**
 * Sous-dossier éventuel du site (vide sur keurbible.com).
 * next/link l'ajoute tout seul ; pour les images et le HTML des articles, passer par withBase().
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

/** Chemin interne (« /authors/x.jpg ») préfixé du sous-dossier du site. */
export const withBase = (path: string) => (path.startsWith("/") && !path.startsWith("//") ? `${BASE_PATH}${path}` : path);


export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Keur Bible",
  tagline: "Objets chrétiens pour la maison et à offrir",
  description:
    "Bibles, croix, chapelets, art chrétien afro, crèches et cadeaux de baptême : notre guide d'objets chrétiens pour la maison et à offrir, pour toutes les Églises.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://keurbible.com").replace(/\/$/, ""),
  locale: "fr_FR",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "keurbible@toakeur.com",
};

/**
 * Google AdSense : identifiant d'éditeur (public par conception : il figure dans le code de chaque page et dans ads.txt).
 * Vide = aucune publicité ni script Google sur le site.
 */
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-2680784147246798";

/**
 * Identifiants des blocs d'annonces AdSense (Annonces → Par bloc d'annonces, blocs « Keur Bible - … »), publics eux aussi.
 * Un emplacement sans identifiant n'affiche rien (aucun bloc créé pour l'instant : le site n'est pas encore validé).
 * Pages sans annonce : accueil, Top 10, liste d'envies, Psaumes, pages légales, 404.
 * - rubrique : 1 annonce en bas d'une rubrique, d'une sous-rubrique ou d'une occasion, après les objets ;
 * - article : 2 annonces dans un conseil (au milieu du texte, puis en fin de page), 1 en fin d'article d'actu.
 */
export const ADSENSE_SLOTS = {
  rubrique: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RUBRIQUE ?? "",
  article: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "",
};
export type AdPlacement = keyof typeof ADSENSE_SLOTS;

/** Code de vérification de Bing Webmaster Tools (balise msvalidate.01, public par conception : il figure dans chaque page). */
export const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "8BA824DE3FC8A5F0EC901A67D71AB314";

/** Informations légales de l'éditeur, affichées dans les mentions légales et les conditions d'utilisation. */
export const legalConfig = {
  companyName: process.env.NEXT_PUBLIC_LEGAL_COMPANY_NAME || "ALOHASH",
  tradeName: process.env.NEXT_PUBLIC_LEGAL_TRADE_NAME || "TOA CORP",
  legalForm: process.env.NEXT_PUBLIC_LEGAL_FORM || "SAS (société par actions simplifiée) au capital de 200 €",
  address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || "587 La Petite Sigonnière, 85190 Maché, France",
  siret: process.env.NEXT_PUBLIC_LEGAL_SIRET || "938 522 596 00015",
  rcs: process.env.NEXT_PUBLIC_LEGAL_RCS || "RCS La Roche-sur-Yon 938 522 596",
  vat: process.env.NEXT_PUBLIC_LEGAL_VAT || "FR16 938 522 596",
  director: process.env.NEXT_PUBLIC_LEGAL_DIRECTOR || "le président de la société ALOHASH",
  phone: process.env.NEXT_PUBLIC_LEGAL_PHONE || "",
  host: process.env.NEXT_PUBLIC_LEGAL_HOST || defaultHost.full,
  hostName: process.env.NEXT_PUBLIC_LEGAL_HOST_NAME || defaultHost.name,
};

