import type { Objet } from "./types";

/** Programme Partenaires Amazon : identifiant du site, ajouté à tous les liens vers Amazon.fr. */
export const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "keurbible-21";

/**
 * Emplacements des boutons « Voir sur Amazon » :
 * - rubrique : rubriques, sous-rubriques, page afro et liste d'envies ;
 * - occasion : pages Cadeaux ;
 * - top : pages Top 10 ;
 * - conseil : articles Conseils et pages Psaumes.
 */
export type AmazonEmplacement = "rubrique" | "occasion" | "top" | "conseil";

/**
 * Table unique des codes de suivi Amazon, un par emplacement : c'est le seul endroit à modifier quand
 * des codes propres à chaque emplacement auront été créés dans Amazon Partenaires.
 * Pour l'instant, tous les emplacements utilisent le code du site.
 */
export const AMAZON_TAGS: Record<AmazonEmplacement, string> = {
  rubrique: AMAZON_TAG,
  occasion: AMAZON_TAG,
  top: AMAZON_TAG,
  conseil: AMAZON_TAG,
};

/**
 * Lien d'achat d'un objet : la fiche Amazon.fr si l'ASIN est connu (vérifié à la main),
 * sinon une recherche Amazon avec les mots de l'objet (rayon Livres pour les Bibles et les livres).
 * Le code de suivi dépend de l'emplacement du bouton (table AMAZON_TAGS).
 */
export function amazonUrl(objet: Pick<Objet, "amazonAsin" | "recherche" | "livre">, emplacement: AmazonEmplacement): string {
  const tag = AMAZON_TAGS[emplacement];
  if (objet.amazonAsin) return `https://www.amazon.fr/dp/${encodeURIComponent(objet.amazonAsin)}?tag=${tag}`;
  return `https://www.amazon.fr/s?k=${encodeURIComponent(objet.recherche)}${objet.livre ? "&i=stripbooks" : ""}&tag=${tag}`;
}

/** Mention obligatoire du programme Partenaires Amazon. */
export const AMAZON_DISCLOSURE =
  "En tant que Partenaire Amazon, Keur Bible réalise un bénéfice sur les achats remplissant les conditions requises.";
