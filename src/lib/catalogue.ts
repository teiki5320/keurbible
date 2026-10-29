/**
 * Accès aux contenus (rubriques, objets, occasions, Top 10, Psaumes) et données prêtes pour les cartes.
 * Fonctions pures : utilisées par les pages, le plan du site et les tests.
 */
import { amazonUrl, type AmazonEmplacement } from "./amazon";
import { IMAGES_OBJETS, OBJETS, OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "./contenus";
import type { Objet, Occasion, Psaume, Rubrique, SousRubrique, Tradition } from "./types";

export { OBJETS, OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S };

/** Libellés des traditions, dans l'ordre du filtre. */
export const TRADITIONS: Record<Tradition, string> = {
  catholique: "Catholique",
  protestante: "Protestante",
  evangelique: "Évangélique",
  orthodoxe: "Orthodoxe",
};

export const rubriqueBySlug = (slug: string): Rubrique | undefined => RUBRIQUES.find((r) => r.slug === slug);
export const sousRubriqueBySlug = (rubrique: string, slug: string): SousRubrique | undefined =>
  SOUS_RUBRIQUES.find((s) => s.rubrique === rubrique && s.slug === slug);
export const sousRubriquesOf = (rubrique: string): SousRubrique[] => SOUS_RUBRIQUES.filter((s) => s.rubrique === rubrique);
export const occasionBySlug = (slug: string): Occasion | undefined => OCCASIONS.find((o) => o.slug === slug);
export const psaumeBySlug = (slug: string): Psaume | undefined => PSAUMES.find((p) => p.slug === slug);
export const objetBySlug = (slug: string): Objet | undefined => OBJETS.find((o) => o.slug === slug);

/** Sous-rubrique d'un objet (chaque objet en a une, vérifié par les tests). */
export function sousRubriqueOf(objet: Objet): SousRubrique {
  const s = SOUS_RUBRIQUES.find((x) => x.slug === objet.sousRubrique);
  if (!s) throw new Error(`Objet « ${objet.slug} » : sous-rubrique inconnue « ${objet.sousRubrique} ».`);
  return s;
}

export const objetsOfSousRubrique = (slug: string): Objet[] => OBJETS.filter((o) => o.sousRubrique === slug);
export const objetsOfRubrique = (rubrique: string): Objet[] => OBJETS.filter((o) => sousRubriqueOf(o).rubrique === rubrique);
export const objetsOfOccasion = (occasion: string): Objet[] => OBJETS.filter((o) => o.occasions.includes(occasion));
export const objetsAfro = (): Objet[] => OBJETS.filter((o) => o.afro);

/** Adresse de la sous-rubrique d'un objet, avec l'ancre de sa carte : « /bibles/bibles-pour-enfants#bible-eveil ». */
export function objetPath(objet: Objet): string {
  const s = sousRubriqueOf(objet);
  return `/${s.rubrique}/${s.slug}#${objet.slug}`;
}

/** Top 10 qui citent un objet (avec son rang). */
export function top10sOfObjet(slug: string) {
  return TOP10S.flatMap((t) => {
    const i = t.items.findIndex((it) => it.slug === slug);
    return i < 0 ? [] : [{ top: t, rank: i + 1 }];
  });
}

/** Traditions d'un objet, en clair : « Toutes les Églises » ou « Catholique · Orthodoxe ». */
export function traditionsLabel(objet: Pick<Objet, "traditions">): string {
  return objet.traditions === "toutes" ? "Toutes les Églises" : objet.traditions.map((t) => TRADITIONS[t]).join(" · ");
}

/** Une tradition convient-elle à l'objet ? (« toutes » : oui). */
export const convientA = (objet: Pick<Objet, "traditions">, t: Tradition) => objet.traditions === "toutes" || objet.traditions.includes(t);

/** Données d'une carte objet (composant ObjetCard), lien Amazon selon l'emplacement. */
export interface ObjetCarte {
  slug: string;
  nom: string;
  description: string;
  traditions: string;
  /** Classes du filtre de tradition (« trad-catholique trad-orthodoxe »). */
  classesTradition: string;
  afro: boolean;
  amazonUrl: string;
  /** Lien direct vers la fiche Amazon (ASIN vérifié) ou recherche. */
  lienDirect: boolean;
  /** Sous-rubrique de l'objet (nom et adresse). */
  sousRubrique: { nom: string; href: string };
  /**
   * Image de l'objet créée par IA (public/objets/<slug>.webp, 480 × 480) et son texte alternatif, ou null.
   * Partout où elle est affichée, mettre la mention « Illustration créée par IA : l'article vendu sur Amazon peut différer. »
   * (AmazonNote avec illustrationIA).
   */
  image: { src: string; alt: string } | null;
  path: string;
}

export function toCarte(objet: Objet, emplacement: AmazonEmplacement): ObjetCarte {
  const s = sousRubriqueOf(objet);
  return {
    slug: objet.slug,
    nom: objet.nom,
    description: objet.description,
    traditions: traditionsLabel(objet),
    classesTradition: (Object.keys(TRADITIONS) as Tradition[])
      .filter((t) => convientA(objet, t))
      .map((t) => `trad-${t}`)
      .join(" "),
    afro: objet.afro,
    amazonUrl: amazonUrl(objet, emplacement),
    lienDirect: Boolean(objet.amazonAsin),
    sousRubrique: { nom: s.nom, href: `/${s.rubrique}/${s.slug}` },
    path: objetPath(objet),
    image: IMAGES_OBJETS[objet.slug] ? { src: IMAGES_OBJETS[objet.slug].image, alt: IMAGES_OBJETS[objet.slug].alt } : null,
  };
}

export const toCartes = (objets: Objet[], emplacement: AmazonEmplacement) => objets.map((o) => toCarte(o, emplacement));

/** « Psaume 23 (22) » : numérotation hébraïque, puis grecque entre parenthèses si elle diffère. */
export function psaumeRef(p: Pick<Psaume, "numero" | "numeroGrec">): string {
  return p.numero === p.numeroGrec ? `Psaume ${p.numero}` : `Psaume ${p.numero} (${p.numeroGrec})`;
}

/** « Psaume 23 (22), 1-2 ». */
export const psaumeRefVersets = (p: Pick<Psaume, "numero" | "numeroGrec" | "versets">) => `${psaumeRef(p)}, ${p.versets}`;
