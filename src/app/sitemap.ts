import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { TOP10_UPDATED } from "@/lib/contenus";
import { getConseils } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { getArticlesActus } from "@/lib/data/veille-articles";
import { currentHashes, readLedger } from "@/lib/lastmod";

export const dynamic = "force-static";

/** Jour du dernier commit (date de repli d'une page changée dont le registre n'est pas encore à jour), sinon aujourd'hui. */
function commitDay(): string {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs"], { encoding: "utf8" }).trim() || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

/** Mise en route du site, et dernière mise à jour des pages légales. */
const LANCEMENT = "2026-10-29";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Site en maintenance : rien à indexer.
  if (getMaintenance().enabled) return [];
  const base = siteConfig.url;
  const conseils = getConseils();
  // Dernière modification réelle de chaque page : registre src/lib/lastmod.json (empreinte du contenu + jour du changement).
  // Contenu changé depuis la dernière mise à jour du registre : jour du dernier commit.
  const hashes = await currentHashes();
  const ledger = readLedger();
  const fallback = commitDay();
  const changed = (key: string, depuis = LANCEMENT) => {
    const known = ledger[key];
    const d = known && known.h === hashes[key] ? known.d : fallback;
    return d > depuis ? d : depuis;
  };
  const day = (d: string) => new Date(`${d}T00:00:00Z`);
  const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), LANCEMENT);
  const page = (path: string, d: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${base}${path}`,
    lastModified: day(d),
    changeFrequency,
    priority,
  });

  const rubriques = RUBRIQUES.map((r) => ({ path: `/${r.slug}`, d: changed(r.slug) }));
  const sous = SOUS_RUBRIQUES.map((s) => ({ path: `/${s.rubrique}/${s.slug}`, d: changed(`${s.rubrique}/${s.slug}`) }));
  const occasions = OCCASIONS.map((o) => ({ path: `/cadeaux/${o.slug}`, d: changed(`cadeaux/${o.slug}`) }));
  const tops = TOP10S.map((t) => ({ path: `/top-10/${t.slug}`, d: changed(`top-10/${t.slug}`, TOP10_UPDATED) }));
  const psaumes = PSAUMES.map((p) => ({ path: `/psaumes/${p.slug}`, d: changed(`psaumes/${p.slug}`) }));
  const articles = conseils.map((c) => ({ path: `/conseils/${c.slug}`, d: changed(`conseils/${c.slug}`, c.date) }));
  const dernier = latest([...rubriques, ...occasions, ...tops, ...articles].map((x) => x.d));

  return [
    page("", dernier, 1, "weekly"),
    ...rubriques.map((x) => page(x.path, x.d, 0.9, "weekly")),
    ...sous.map((x) => page(x.path, x.d, 0.8)),
    page("/cadeaux", latest(occasions.map((x) => x.d)), 0.8, "weekly"),
    ...occasions.map((x) => page(x.path, x.d, 0.8)),
    page("/afro", changed("afro"), 0.9, "weekly"),
    // Top 10 : une adresse par onglet (/top-10 renvoie vers le premier comme adresse canonique).
    ...tops.map((x) => page(x.path, x.d, 0.8)),
    page("/psaumes", latest(psaumes.map((x) => x.d)), 0.7),
    ...psaumes.map((x) => page(x.path, x.d, 0.6)),
    page("/conseils", latest(articles.map((x) => x.d)), 0.7, "weekly"),
    ...articles.map((x) => page(x.path, x.d, 0.6)),
    // Actus : lues en direct depuis la veille (2 fois par jour), la page change tous les jours.
    { url: `${base}/actus`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.6 },
    // Articles complets des actus, construits 2 fois par jour (la page de secours /actus/article n'y est pas).
    ...getArticlesActus().map((a) => ({ url: `${base}/actus/${a.slug}`, lastModified: new Date(a.redige_le), changeFrequency: "monthly" as const, priority: 0.5 })),
    page("/notre-demarche", LANCEMENT, 0.4, "yearly"),
    ...["/conditions", "/mentions-legales", "/confidentialite"].map((path) => page(path, LANCEMENT, 0.3, "yearly")),
  ];
}
