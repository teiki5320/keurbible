// Images des objets, créées par IA (OpenArt, Kling 3 Omni ou GPT Image 2) : voir docs/IMAGES.md.
// Convertit les images brutes .images/brut/<slug>.png (1024 px, non suivies par git) en public/objets/<slug>.webp
// (480 × 480, qualité 80), puis écrit la liste des images du site : src/lib/contenus/images-objets.json
// ({ slug: { image, alt } }), avec les textes alternatifs de docs/images/consignes.json.
// Usage : npm run images-objets   (seulement les images brutes nouvelles ou plus récentes que leur WebP)
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const RACINE = resolve(import.meta.dirname, "..");
const BRUT = join(RACINE, ".images", "brut");
const SORTIE = join(RACINE, "public", "objets");
const CONSIGNES = JSON.parse(readFileSync(join(RACINE, "docs", "images", "consignes.json"), "utf8"));
mkdirSync(SORTIE, { recursive: true });

let converties = 0;
if (existsSync(BRUT))
  for (const f of readdirSync(BRUT).filter((x) => x.endsWith(".png"))) {
    const slug = f.replace(/\.png$/, "");
    const cible = join(SORTIE, `${slug}.webp`);
    if (existsSync(cible) && statSync(cible).mtimeMs >= statSync(join(BRUT, f)).mtimeMs) continue;
    await sharp(join(BRUT, f)).resize(480, 480, { fit: "cover" }).webp({ quality: 80 }).toFile(cible);
    converties++;
  }

const liste = {};
for (const f of readdirSync(SORTIE).filter((x) => x.endsWith(".webp")).sort()) {
  const slug = f.replace(/\.webp$/, "");
  const alt = CONSIGNES[slug]?.alt;
  if (!alt) throw new Error(`Image ${f} sans texte alternatif dans docs/images/consignes.json`);
  liste[slug] = { image: `/objets/${f}`, alt };
}
writeFileSync(join(RACINE, "src", "lib", "contenus", "images-objets.json"), `${JSON.stringify(liste, null, 2)}\n`);
console.log(`${converties} image(s) convertie(s) ; ${Object.keys(liste).length} image(s) dans src/lib/contenus/images-objets.json`);
