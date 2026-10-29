/**
 * Fichier public des pages pour la veille actus : public/veille/entites.json.
 * Lancé avant `next build` (voir package.json, avec tsx pour lire les données écrites en TypeScript).
 * La tâche de veille le lit sur https://keurbible.com/veille/entites.json pour relier une actu à une page du site :
 * une rubrique (« rubrique:creches-et-noel ») ou une occasion (« occasion:noel »).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { OCCASIONS, RUBRIQUES } from "../src/lib/contenus/index.ts";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");

const entites = [
  ...RUBRIQUES.map((r) => ({ tag: `rubrique:${r.slug}`, nom: r.nom, adresse: `/${r.slug}` })),
  ...OCCASIONS.map((o) => ({ tag: `occasion:${o.slug}`, nom: o.nom, adresse: `/cadeaux/${o.slug}` })),
].sort((x, y) => x.tag.localeCompare(y.tag));

const fichier = join(racine, "public", "veille", "entites.json");
mkdirSync(dirname(fichier), { recursive: true });
writeFileSync(fichier, `${JSON.stringify(entites, null, 2)}\n`);
console.log(`veille/entites.json : ${entites.length} pages`);
