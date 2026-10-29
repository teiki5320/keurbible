/** Catégories de la rubrique Conseils. */
export const CONSEIL_CATEGORIES = {
  choisir: "Bien choisir",
  offrir: "Offrir",
  fetes: "Fêtes et traditions",
  maison: "La foi à la maison",
  afrique: "Foi et Afrique",
} as const;

export type ConseilCategory = keyof typeof CONSEIL_CATEGORIES;

export const isConseilCategory = (v: string): v is ConseilCategory => v in CONSEIL_CATEGORIES;
