// Recherche de produits Amazon pour les objets sans ASIN (à lancer sur le Mac, pas sur GitHub : Amazon bloque
// souvent les serveurs). Pour chaque objet, la recherche Amazon.fr de son champ `recherche` est ouverte dans Chrome
// et les premiers résultats (hors annonces sponsorisées) sont relevés : ASIN, titre, présence d'un prix.
// Rien n'est choisi ni écrit dans le site : le choix d'un produit qui correspond vraiment à l'objet se fait en
// lisant .amazon/candidats.json, puis l'ASIN choisi est vérifié par scripts/verifier-produits.mjs.
//
// Usage : npx tsx scripts/chercher-produits.mjs                 (objets des Top 10 sans ASIN)
//         npx tsx scripts/chercher-produits.mjs --ids slug1,slug2
// Chrome : CHROMIUM_PATH=/chemin/vers/chrome (par défaut, Google Chrome sur macOS).
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { OBJETS, TOP10S } from '../src/lib/contenus/index.ts';

const RACINE = resolve(import.meta.dirname, '..');
const chrome = process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const iIds = process.argv.indexOf('--ids');
const ids = iIds > -1 ? new Set(String(process.argv[iIds + 1] || '').split(',').filter(Boolean)) : null;
const dansTops = new Set(TOP10S.flatMap((t) => t.items.map((i) => i.slug)));
const objets = OBJETS.filter((o) => (ids ? ids.has(o.slug) : dansTops.has(o.slug) && !o.amazonAsin));

const navigateur = await chromium.launch({ executablePath: chrome, headless: true });
const page = await (await navigateur.newContext({ locale: 'fr-FR' })).newPage();
await page.route('**/*', (r) => (['image', 'media', 'font', 'stylesheet'].includes(r.request().resourceType()) ? r.abort() : r.continue()));

const resultats = {};
let bloque = false;
for (const o of objets) {
  const url = `https://www.amazon.fr/s?k=${encodeURIComponent(o.recherche)}${o.livre ? '&i=stripbooks' : ''}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // La page de résultats se remplit parfois après le premier affichage (rayon Livres) : on attend les résultats.
    await page.waitForSelector('div[data-component-type="s-search-result"], form[action*="validateCaptcha"]', { timeout: 20000 }).catch(() => {});
    const lu = await page.evaluate(() => ({
      captcha: !!document.querySelector('form[action*="validateCaptcha"]'),
      items: [...document.querySelectorAll('div[data-component-type="s-search-result"][data-asin]')]
        .filter((d) => d.getAttribute('data-asin') && !d.querySelector('.puis-sponsored-label-text, .s-sponsored-label-text'))
        .slice(0, 8)
        .map((d) => ({
          asin: d.getAttribute('data-asin'),
          // Certaines cartes ont deux titres (la marque, puis le nom du produit) : on les garde tous les deux.
          titre: [...d.querySelectorAll('h2')].map((h) => h.textContent.trim().replace(/\s+/g, ' ')).join(' · ').slice(0, 200),
          prix: !!d.querySelector('.a-price'),
        })),
    }));
    if (lu.captcha) {
      bloque = true;
      console.log(`Amazon demande une vérification (captcha) : arrêt après ${Object.keys(resultats).length} objets.`);
      break;
    }
    resultats[o.slug] = { nom: o.nom, recherche: o.recherche, candidats: lu.items };
    console.log(`${o.slug} : ${lu.items.length} résultats`);
  } catch (e) {
    console.log(`? ${o.slug} : erreur de chargement (${e.message.split('\n')[0]})`);
  }
  await page.waitForTimeout(2500 + Math.random() * 2500); // rythme humain, pour ne pas surcharger Amazon
}
await navigateur.close();
mkdirSync(resolve(RACINE, '.amazon'), { recursive: true });
writeFileSync(resolve(RACINE, '.amazon/candidats.json'), JSON.stringify(resultats, null, 1) + '\n');
console.log(`\n.amazon/candidats.json : ${Object.keys(resultats).length} objets sur ${objets.length}.`);
process.exit(bloque ? 2 : 0);
