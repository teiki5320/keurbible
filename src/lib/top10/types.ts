import type { Faq } from "../types";

/**
 * Page « Top 10 » : un onglet par sujet, chacun avec sa propre adresse (/top-10/<slug>).
 * Exactement 10 objets du site par sujet, numérotés de 1 à 10 (notre classement, pas un palmarès officiel).
 * Pas de prix, pas de note, pas d'avis inventés.
 */
export interface Top10 {
  slug: string;
  /** Libellé court de l'onglet. */
  tab: string;
  /** Titre de la page (h1) : « Top 10 des … », 60 caractères au plus. */
  title: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** 2 ou 3 phrases : comment la sélection est faite (le critère du classement). */
  intro: string;
  /** Les 10 objets, du n° 1 au n° 10, avec pour chacun « Pourquoi on l'a choisi » (2 ou 3 phrases, écrites pour l'angle du sujet). */
  items: Array<{ slug: string; why: string }>;
  /** « Par où commencer » : texte court, liens internes écrits [texte](/chemin). */
  start: string;
  /** 3 questions fréquentes (liens internes possibles). */
  faq: Faq[];
}
