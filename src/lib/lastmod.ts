/**
 * Dates de dernière modification du plan du site (sitemap.xml), page par page.
 * Chaque page a une empreinte de son contenu ; src/lib/lastmod.json garde, pour chaque page,
 * l'empreinte connue et le jour où elle a changé pour la dernière fois.
 * Mise à jour du registre : npx tsx scripts/lastmod.mjs (lancé tout seul avant chaque construction).
 * Page modifiée mais registre pas encore à jour : date du dernier commit (voir sitemap.ts).
 */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { OBJETS, OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "./contenus";

export type Ledger = Record<string, { h: string; d: string }>;

const hash = (value: unknown) => createHash("sha1").update(JSON.stringify(value)).digest("hex").slice(0, 16);

/**
 * Empreinte de chaque page : « <rubrique> » (rubrique et ses objets), « <rubrique>/<sous> » (sous-rubrique et ses objets),
 * « cadeaux/<occasion> », « afro », « top-10/<slug> » (sujet et ses objets), « psaumes/<slug> », « conseils/<slug> ».
 */
export function pageHashes(conseils: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  const objet = new Map(OBJETS.map((o) => [o.slug, o]));
  const rubriqueDe = new Map(SOUS_RUBRIQUES.map((s) => [s.slug, s.rubrique]));
  for (const r of RUBRIQUES) out[r.slug] = hash([r, SOUS_RUBRIQUES.filter((s) => s.rubrique === r.slug), OBJETS.filter((o) => rubriqueDe.get(o.sousRubrique) === r.slug)]);
  for (const s of SOUS_RUBRIQUES) out[`${s.rubrique}/${s.slug}`] = hash([s, OBJETS.filter((o) => o.sousRubrique === s.slug)]);
  for (const o of OCCASIONS) out[`cadeaux/${o.slug}`] = hash([o, OBJETS.filter((x) => x.occasions.includes(o.slug))]);
  out.afro = hash(OBJETS.filter((o) => o.afro));
  for (const t of TOP10S) out[`top-10/${t.slug}`] = hash([t, t.items.map((i) => objet.get(i.slug) ?? null)]);
  for (const p of PSAUMES) out[`psaumes/${p.slug}`] = hash([p, p.objets.map((s) => objet.get(s) ?? null)]);
  for (const [slug, text] of Object.entries(conseils)) out[`conseils/${slug}`] = hash(text);
  return out;
}

/** Fichiers des articles Conseils (texte brut, par adresse). */
export function readConseils(dir = join(process.cwd(), "content", "conseils")): Record<string, string> {
  return Object.fromEntries(
    readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => [f.replace(/\.md$/, ""), readFileSync(join(dir, f), "utf8")]),
  );
}

/** Empreintes du contenu actuel. */
export async function currentHashes(): Promise<Record<string, string>> {
  return pageHashes(readConseils());
}

/** Registre des dates (src/lib/lastmod.json). */
export function readLedger(file = join(process.cwd(), "src", "lib", "lastmod.json")): Ledger {
  try {
    return JSON.parse(readFileSync(file, "utf8")) as Ledger;
  } catch {
    return {};
  }
}
