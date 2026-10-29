/**
 * Visuels de marque provisoires de Keur Bible, tirés de l'emblème (porte en arche et croix, voir src/components/layout/Embleme.tsx) :
 *   src/app/icon.png (512 px), src/app/apple-icon.png (180 px), public/brand/keurbible-logo.png (512 px, données structurées),
 *   public/brand/keurbible-partage.jpg (1200 × 630, image de partage par défaut), docs/brand/keurbible-embleme.svg.
 * À relancer seulement si l'emblème change : npm run marque (les fichiers produits sont suivis par git).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const BLEU = "#1e4a7a";
const OR = "#d9b25c";
const PAPIER = "#fbf7f1";

/** Emblème seul, sur un carré de 64 unités. */
const embleme = `
  <path d="M10 60V30a22 22 0 0 1 44 0v30Z" fill="${BLEU}"/>
  <path d="M17 60V31a15 15 0 0 1 30 0v29" fill="none" stroke="${OR}" stroke-width="2.5"/>
  <path d="M32 22v30M24 31h16" stroke="${PAPIER}" stroke-width="4.5" stroke-linecap="round"/>`;

const icone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${PAPIER}"/><g transform="translate(4 2) scale(0.875)">${embleme}</g></svg>`;

const partage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPIER}"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${OR}" stroke-width="3"/>
  <g transform="translate(130 155) scale(5)">${embleme}</g>
  <text x="530" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="110" fill="#1f1a17">Keur Bible</text>
  <text x="534" y="370" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-style="italic" fill="#5e544b">Objets chrétiens pour la maison</text>
  <text x="534" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-style="italic" fill="#5e544b">et à offrir</text>
  <text x="534" y="500" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="4" fill="${BLEU}">KEURBIBLE.COM</text>
</svg>`;

const ecrire = async (chemin, tampon) => {
  mkdirSync(dirname(join(racine, chemin)), { recursive: true });
  writeFileSync(join(racine, chemin), tampon);
  console.log(chemin);
};

await ecrire("src/app/icon.png", await sharp(Buffer.from(icone)).resize(512, 512).png().toBuffer());
await ecrire("src/app/apple-icon.png", await sharp(Buffer.from(icone)).resize(180, 180).png().toBuffer());
await ecrire("public/brand/keurbible-logo.png", await sharp(Buffer.from(icone)).resize(512, 512).png().toBuffer());
await ecrire("public/brand/keurbible-partage.jpg", await sharp(Buffer.from(partage)).jpeg({ quality: 88 }).toBuffer());
await ecrire("docs/brand/keurbible-embleme.svg", Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${embleme}</svg>\n`));
