/**
 * Tous les contenus écrits du site, rassemblés (rubriques, sous-rubriques, objets, occasions, Top 10, Psaumes).
 * Nouveau contenu : l'écrire dans son fichier ; pages, sitemap et tests suivent.
 */
import type { Top10 } from "../top10/types";
import type { Objet, Rubrique, SousRubrique } from "../types";
import asins from "./amazon-asins.json";
import images from "./images-objets.json";
import { PLAN_TOP10 } from "./plan";
import * as artChretien from "./rubriques/art-chretien";
import * as bibles from "./rubriques/bibles";
import * as chapelets from "./rubriques/chapelets-et-priere";
import * as creches from "./rubriques/creches-et-noel";
import * as croix from "./rubriques/croix-et-crucifix";
import * as livres from "./rubriques/livres-et-coloriages";
import * as statues from "./rubriques/statues-et-vierges";
import { top as artAfro } from "./top10/art-chretien-afro";
import { top as biblesAOffrir } from "./top10/bibles-a-offrir";
import { top as biblesEnfants } from "./top10/bibles-pour-enfants";
import { top as cadeauxBapteme } from "./top10/cadeaux-de-bapteme";
import { top as cadeauxCommunion } from "./top10/cadeaux-de-premiere-communion";
import { top as cadeauxNoel } from "./top10/cadeaux-chretiens-de-noel";
import { top as crechesNoel } from "./top10/creches-de-noel";
import { top as croixMurales } from "./top10/croix-murales";
import { top as statuesVierge } from "./top10/statues-de-la-vierge-marie";
import { top as versetsMuraux } from "./top10/versets-muraux";

export { OCCASIONS } from "./occasions";
export { PSAUMES } from "./psaumes";

/** Fichiers des rubriques, dans l'ordre du menu (celui de PLAN_RUBRIQUES). */
const FICHIERS = [bibles, croix, chapelets, artChretien, statues, creches, livres];

export const RUBRIQUES: Rubrique[] = FICHIERS.map((f) => f.rubrique);
export const SOUS_RUBRIQUES: SousRubrique[] = FICHIERS.flatMap((f) => f.sousRubriques);
/**
 * ASIN vérifiés sur Amazon.fr (src/lib/contenus/amazon-asins.json, tenu par scripts/verifier-produits.mjs) :
 * produit ouvert, titre conforme à l'objet, bouton d'achat présent. Les autres objets gardent une recherche Amazon.
 */
export const AMAZON_ASINS: Record<string, { asin: string; titre: string; verifie_le: string }> = asins.actifs;

/**
 * Images des objets créées par IA (public/objets/<slug>.webp, 480 × 480), avec leur texte alternatif :
 * src/lib/contenus/images-objets.json, écrit par scripts/images-objets.mjs (méthode : docs/IMAGES.md).
 */
export const IMAGES_OBJETS: Record<string, { image: string; alt: string }> = images;

export const OBJETS: Objet[] = FICHIERS.flatMap((f) => f.objets).map((o) => ({ ...o, amazonAsin: AMAZON_ASINS[o.slug]?.asin ?? o.amazonAsin }));

const TOPS: Top10[] = [artAfro, biblesAOffrir, biblesEnfants, cadeauxBapteme, cadeauxCommunion, cadeauxNoel, crechesNoel, croixMurales, statuesVierge, versetsMuraux];

/** Les Top 10, dans l'ordre des onglets (PLAN_TOP10). */
export const TOP10S: Top10[] = PLAN_TOP10.map((slug) => {
  const t = TOPS.find((x) => x.slug === slug);
  if (!t) throw new Error(`Top 10 « ${slug} » introuvable.`);
  return t;
});

/** Date de mise à jour des Top 10 (affichée en tête de page et dans le sitemap). */
export const TOP10_UPDATED = "2026-10-29";
