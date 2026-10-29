/**
 * Plan du site : adresses fixes des rubriques, sous-rubriques, occasions, Top 10, Psaumes et catégories de conseils.
 * Les textes sont dans les autres fichiers de src/lib/contenus/ ; les tests vérifient qu'ils suivent ce plan.
 */

/** Rubriques d'objets, dans l'ordre du menu, avec leurs sous-rubriques (slug → nom). */
export const PLAN_RUBRIQUES = [
  {
    slug: "bibles",
    nom: "Bibles",
    sous: {
      "editions-et-traductions": "Éditions et traductions",
      "bibles-pour-enfants": "Bibles pour enfants",
      "formats-et-gros-caracteres": "Formats et gros caractères",
      "etuis-et-couvertures": "Étuis et couvertures",
    },
  },
  {
    slug: "croix-et-crucifix",
    nom: "Croix et crucifix",
    sous: {
      "croix-murales": "Croix murales",
      crucifix: "Crucifix",
      "croix-a-poser": "Croix à poser",
      "croix-ethiopiennes-et-coptes": "Croix éthiopiennes et coptes",
      "pendentifs-croix": "Pendentifs croix",
    },
  },
  {
    slug: "chapelets-et-priere",
    nom: "Chapelets et prière",
    sous: {
      chapelets: "Chapelets",
      "dizainiers-et-bracelets": "Dizainiers et bracelets",
      "bougies-et-veilleuses": "Bougies et veilleuses",
      "coin-priere": "Coin prière",
      "carnets-de-priere": "Carnets de prière",
    },
  },
  {
    slug: "art-chretien",
    nom: "Art chrétien",
    sous: {
      "tableaux-et-toiles": "Tableaux et toiles",
      icones: "Icônes",
      "versets-muraux": "Versets muraux",
      "jesus-noir-et-vierge-noire": "Jésus noir et Vierge noire",
    },
  },
  {
    slug: "statues-et-vierges",
    nom: "Statues et Vierges",
    sous: {
      "statues-de-la-vierge": "Statues de la Vierge",
      "vierges-noires": "Vierges noires",
      "statues-de-saints": "Statues de saints",
      anges: "Anges",
    },
  },
  {
    slug: "creches-et-noel",
    nom: "Crèches et Noël",
    sous: {
      creches: "Crèches",
      "creches-africaines": "Crèches africaines",
      "santons-et-personnages": "Santons et personnages",
      "calendriers-de-l-avent": "Calendriers de l'Avent",
      "deco-de-noel-chretienne": "Déco de Noël chrétienne",
    },
  },
  {
    slug: "livres-et-coloriages",
    nom: "Livres et coloriages",
    sous: {
      "histoires-bibliques-pour-enfants": "Histoires bibliques pour enfants",
      "coloriages-et-activites": "Coloriages et activités",
      "livres-de-priere": "Livres de prière",
      "livres-de-foi": "Livres de foi",
    },
  },
] as const;

/** Occasions de cadeaux (/cadeaux/<slug>), dans l'ordre de la page Cadeaux. */
export const PLAN_OCCASIONS = {
  bapteme: "Baptême",
  "premiere-communion": "Première communion",
  "profession-de-foi": "Profession de foi",
  confirmation: "Confirmation",
  mariage: "Mariage",
  "fete-des-meres": "Fête des mères",
  "fete-des-peres": "Fête des pères",
  noel: "Noël",
  paques: "Pâques",
  condoleances: "Condoléances",
} as const;

/** Les 10 Top 10, dans l'ordre des onglets (le premier s'ouvre sur /top-10). */
export const PLAN_TOP10 = [
  "creches-de-noel",
  "cadeaux-chretiens-de-noel",
  "art-chretien-afro",
  "cadeaux-de-bapteme",
  "bibles-pour-enfants",
  "bibles-a-offrir",
  "croix-murales",
  "versets-muraux",
  "cadeaux-de-premiere-communion",
  "statues-de-la-vierge-marie",
] as const;

/** Les 12 Psaumes du carrousel de l'accueil, dans l'ordre des cartes (/psaumes/<slug>). */
export const PLAN_PSAUMES = [
  "psaume-23",
  "psaume-27",
  "psaume-91",
  "psaume-121",
  "psaume-46",
  "psaume-139",
  "psaume-118",
  "psaume-119",
  "psaume-34",
  "psaume-37",
  "psaume-100",
  "psaume-103",
] as const;

export type SlugRubrique = (typeof PLAN_RUBRIQUES)[number]["slug"];
export type SlugOccasion = keyof typeof PLAN_OCCASIONS;
