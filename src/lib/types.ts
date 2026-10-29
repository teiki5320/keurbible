/**
 * Types des contenus de Keur Bible. Règles de rédaction : docs/REDACTION.md.
 * Tout est écrit dans le code (src/lib/contenus/, content/conseils/) : site statique, sans base.
 */

/** Traditions chrétiennes (étiquette « Pour quelle tradition ? » des objets). */
export type Tradition = "catholique" | "protestante" | "evangelique" | "orthodoxe";

/** Question fréquente (réponse avec liens internes possibles, écrits [texte](/chemin)). */
export interface Faq {
  q: string;
  a: string;
}

/** Rubrique d'objets (« Bibles », « Croix et crucifix »…) : page /<slug>, un guide d'achat. */
export interface Rubrique {
  slug: string;
  /** Nom court (menu, cartes). */
  nom: string;
  /** Titre de la page (h1), 60 caractères au plus. */
  titre: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** Présentation de la rubrique : 3 à 5 phrases. */
  intro: string;
  /** « Comment choisir » : 3 à 5 conseils, une ou deux phrases chacun. */
  choisir: string[];
  /** 3 questions fréquentes. */
  faq: Faq[];
}

/** Sous-rubrique : page /<rubrique>/<slug>. */
export interface SousRubrique {
  slug: string;
  rubrique: string;
  nom: string;
  /** Titre de la page (h1), 60 caractères au plus. */
  titre: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** Présentation : 3 ou 4 phrases. */
  intro: string;
}

/**
 * Objet conseillé. Un objet est un type d'objet précis (« Crèche de Noël en bois d'olivier ») : tant que l'ASIN
 * n'a pas été vérifié sur Amazon.fr, le bouton ouvre une recherche Amazon avec `recherche`.
 * Jamais de prix, d'avis, de note ni d'ASIN inventés.
 */
export interface Objet {
  slug: string;
  /** Sous-rubrique (slug) ; la rubrique s'en déduit. */
  sousRubrique: string;
  nom: string;
  /** 2 ou 3 phrases écrites par nous : ce que c'est, pour qui, pourquoi on l'aime. */
  description: string;
  /** Traditions auxquelles l'objet convient ; « toutes » si l'objet convient à toutes. */
  traditions: Tradition[] | "toutes";
  /** Objet de la sélection « Art chrétien afro » (page /afro). */
  afro: boolean;
  /** Occasions (slugs de src/lib/contenus/occasions.ts) pour lesquelles c'est un bon cadeau. */
  occasions: string[];
  /** Mots de la recherche Amazon (3 à 6 mots). */
  recherche: string;
  /** Rayon Livres d'Amazon (Bibles, livres, coloriages). */
  livre?: boolean;
  /** ASIN vérifié sur Amazon.fr (fiche ouverte, bouton d'achat présent), sinon null. */
  amazonAsin: string | null;
}

/** Occasion de cadeau : page /cadeaux/<slug>. */
export interface Occasion {
  slug: string;
  nom: string;
  /** Titre de la page (h1), 60 caractères au plus. */
  titre: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** Ce qu'est cette fête ou cette étape, et l'esprit du cadeau : 3 à 5 phrases. */
  intro: string;
  /** « De la part de qui » : idées selon celui qui offre (parrain, marraine, grands-parents…). */
  deQui: Array<{ qui: string; idee: string }>;
  /** 3 questions fréquentes. */
  faq: Faq[];
}

/** Psaume du carrousel de l'accueil et de la page /psaumes/<slug>. */
export interface Psaume {
  slug: string;
  /** Numéro dans la numérotation hébraïque (Bibles protestantes, Louis Segond). */
  numero: number;
  /** Numéro dans la numérotation grecque (liturgie catholique et orthodoxe). */
  numeroGrec: number;
  /** Versets cités, ex. « 1 » ou « 1-2 ». */
  versets: string;
  /** Texte exact de la Louis Segond 1910 (domaine public). */
  texte: string;
  /** Ligne courte de la carte : « Pour les jours d'inquiétude ». */
  pour: string;
  /** Titre de la page (h1), 60 caractères au plus. */
  titre: string;
  /** Description pour Google (70 à 160 caractères). */
  description: string;
  /** Présentation écrite par nous : 4 à 6 phrases. */
  presentation: string;
  /** Moments où on le lit (« un baptême », « un deuil »…) : 2 à 4. */
  quand: string[];
  /** Objets liés (slugs), 0 à 3. */
  objets: string[];
}
