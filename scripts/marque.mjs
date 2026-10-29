/**
 * Visuels du site tirés des logos de Jean (docs/logos/, faits à part) :
 *   public/brand/keurbible-embleme.webp (icône seule, en-tête), public/brand/keurbible-logo.webp (logo complet, pied de page),
 *   public/brand/keurbible-logo.png (512 px, données structurées), public/brand/keurbible-partage.jpg (1200 × 630, partage),
 *   src/app/icon.png (512 px) et src/app/apple-icon.png (180 px).
 * À relancer seulement si un logo change : npm run marque (les fichiers produits sont suivis par git).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOGO = join(racine, "docs/logos/keurbible-logo-fond-blanc.png");
const ICONE = join(racine, "docs/logos/keurbible-icone-sans-texte.png");

const ecrire = async (chemin, tampon) => {
  mkdirSync(dirname(join(racine, chemin)), { recursive: true });
  writeFileSync(join(racine, chemin), tampon);
  console.log(chemin);
};

// Icône recadrée au plus près (fond blanc retiré sur les bords), puis remise au carré.
const iconeSerree = await sharp(ICONE).trim({ background: "#ffffff", threshold: 20 }).toBuffer();
const carre = (taille, marge) =>
  sharp(iconeSerree)
    .resize(taille - 2 * marge, taille - 2 * marge, { fit: "contain", background: "#ffffff" })
    .extend({ top: marge, bottom: marge, left: marge, right: marge, background: "#ffffff" })
    .flatten({ background: "#ffffff" });

await ecrire("public/brand/keurbible-embleme.webp", await carre(128, 4).webp({ quality: 90 }).toBuffer());
await ecrire("src/app/icon.png", await carre(512, 40).png().toBuffer());
await ecrire("src/app/apple-icon.png", await carre(180, 14).png().toBuffer());
await ecrire("public/brand/keurbible-logo.webp", await sharp(LOGO).resize(480, 480).webp({ quality: 88 }).toBuffer());
await ecrire("public/brand/keurbible-logo.png", await sharp(LOGO).resize(512, 512).png().toBuffer());

const texte = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="620" height="630">
  <text x="0" y="285" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-style="italic" fill="#3b2416">Objets chrétiens</text>
  <text x="0" y="345" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-style="italic" fill="#3b2416">pour la maison et à offrir</text>
  <text x="2" y="420" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="4" fill="#7a3510">KEURBIBLE.COM</text>
</svg>`);
await ecrire(
  "public/brand/keurbible-partage.jpg",
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#ffffff" } })
    .composite([
      { input: await sharp(LOGO).resize(560, 560).toBuffer(), left: 40, top: 35 },
      { input: texte, left: 610, top: 0 },
    ])
    .jpeg({ quality: 88 })
    .toBuffer(),
);
