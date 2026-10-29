import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { nettoyerArticle, nettoyerFichier, type Actu, type ArticleActu } from "@/lib/veille";
import { OCCASIONS, RUBRIQUES, TOP10S } from "@/lib/catalogue";
import { getConseils } from "./conseils";

/**
 * Articles complets des actus, lus au moment de la construction (fichier .veille/articles.json écrit par
 * scripts/veille-articles.mjs). Fichier absent ou illisible : aucun article, sans erreur.
 */
interface Donnees {
  actus: Actu[];
  articles: ArticleActu[];
}

let cache: Donnees | null = null;

function lire(): Donnees {
  if (cache) return cache;
  try {
    const brut = JSON.parse(readFileSync(join(process.cwd(), ".veille", "articles.json"), "utf8")) as { actus?: unknown; articles?: unknown };
    const actus = nettoyerFichier({ actus: brut.actus })?.actus ?? [];
    const articles = (Array.isArray(brut.articles) ? brut.articles : [])
      .map(nettoyerArticle)
      .filter((a): a is ArticleActu => a !== null)
      .sort((a, b) => Date.parse(b.publie_le) - Date.parse(a.publie_le));
    cache = { actus, articles };
  } catch {
    cache = { actus: [], articles: [] };
  }
  return cache;
}

/** Articles construits avec le site, du plus récent au plus ancien. */
export function getArticlesActus(): ArticleActu[] {
  return lire().articles;
}

export function getArticleActu(slug: string): ArticleActu | undefined {
  return lire().articles.find((a) => a.slug === slug);
}

/** Pages construites : id de l'actu → adresse /actus/<slug>/ (donné aux cartes d'actus). */
export function getConstruits(): Record<string, string> {
  return Object.fromEntries(lire().articles.map((a) => [a.id, a.slug]));
}

/** Actus lues au moment de la construction (pour « Autres actus »). */
export function getActusConstruction(): Actu[] {
  return lire().actus;
}

/**
 * Pages du site que la veille peut citer : tag → page (« rubrique:creches-et-noel » → /creches-et-noel,
 * « occasion:noel » → /cadeaux/noel). Même liste que public/veille/entites.json (scripts/veille-entites.mjs).
 */
export function getFichesVeille(): Record<string, { href: string; nom: string }> {
  return Object.fromEntries([
    ...RUBRIQUES.map((r) => [`rubrique:${r.slug}`, { href: `/${r.slug}`, nom: r.nom }]),
    ...OCCASIONS.map((o) => [`occasion:${o.slug}`, { href: `/cadeaux/${o.slug}`, nom: `Cadeaux : ${o.nom.toLowerCase()}` }]),
  ]);
}

/** Liens internes d'un article d'actu : le Top 10 et le conseil proches des rubriques et occasions citées. */
export interface LiensActu {
  top: { href: string; titre: string } | null;
  conseil: { href: string; titre: string } | null;
}

/**
 * Top 10 et conseil proches de l'article : d'après ses tags (rubriques et occasions), le premier Top 10 dont un objet
 * est de la même rubrique ou de la même occasion, et le premier conseil qui renvoie vers ces pages.
 * Jamais de lien Amazon ici.
 */
export function getLiensActu(article: ArticleActu): LiensActu {
  const pages = (article.tags ?? []).flatMap((t) => getFichesVeille()[t]?.href ?? []);
  if (pages.length === 0) return { top: null, conseil: null };
  const top = TOP10S.find((t) => pages.some((p) => t.start.includes(`(${p})`) || t.start.includes(`(${p}/`))) ?? null;
  const conseil = getConseils().find((c) => pages.some((p) => c.body.includes(`(${p})`) || c.body.includes(`(${p}/`))) ?? null;
  return {
    top: top ? { href: `/top-10/${top.slug}`, titre: top.title } : null,
    conseil: conseil ? { href: `/conseils/${conseil.slug}`, titre: conseil.title } : null,
  };
}
