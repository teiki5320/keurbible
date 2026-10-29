import { objetBySlug, sousRubriqueOf, toCarte, TOP10S, type ObjetCarte } from "@/lib/catalogue";
import type { Top10 } from "@/lib/top10/types";

/** Objet d'un Top 10 : carte de l'objet, rang et texte « Pourquoi on l'a choisi » propre au sujet. */
export interface Top10Objet extends ObjetCarte {
  rank: number;
  why: string;
  rubrique: string;
}

export const getTop10s = (): Top10[] => TOP10S;
export const getTop10BySlug = (slug: string): Top10 | undefined => TOP10S.find((t) => t.slug === slug);

/** Les 10 objets d'un Top 10, dans l'ordre (liens Amazon de l'emplacement « top »). */
export function getTop10Objets(top: Top10): Top10Objet[] {
  return top.items.map((it, i) => {
    const o = objetBySlug(it.slug);
    if (!o) throw new Error(`Top 10 « ${top.slug} » : objet inconnu « ${it.slug} ».`);
    return { ...toCarte(o, "top"), rank: i + 1, why: it.why, rubrique: sousRubriqueOf(o).nom };
  });
}
