/** Pages fixes du site (hors conseils et actus) : liens internes autorisés dans les textes. Utilisé par les tests. */
import { OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "../src/lib/catalogue";

export const PAGES = new Set<string>([
  "/",
  "/cadeaux",
  "/afro",
  "/top-10",
  "/psaumes",
  "/conseils",
  "/actus",
  "/ma-liste",
  "/notre-demarche",
  ...RUBRIQUES.map((r) => `/${r.slug}`),
  ...SOUS_RUBRIQUES.map((s) => `/${s.rubrique}/${s.slug}`),
  ...OCCASIONS.map((o) => `/cadeaux/${o.slug}`),
  ...TOP10S.map((t) => `/top-10/${t.slug}`),
  ...PSAUMES.map((p) => `/psaumes/${p.slug}`),
]);

