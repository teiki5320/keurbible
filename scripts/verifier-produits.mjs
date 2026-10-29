// Vérification des liens directs Amazon (à lancer sur le Mac, pas sur GitHub : Amazon bloque souvent les serveurs).
// Modèle : Keurbook (scripts/verifier-produits.mjs).
//
// 1. Ajout d'ASIN choisis : --ajouter .amazon/choix.json (objet slug → ASIN, choisi en lisant .amazon/candidats.json,
//    voir scripts/chercher-produits.mjs). Chaque fiche amazon.fr/dp/<ASIN> est ouverte : si le bouton d'achat est présent,
//    l'ASIN entre dans src/lib/contenus/amazon-asins.json (« actifs ») avec le titre lu sur Amazon et la date du jour.
// 2. Contrôle des ASIN actifs (sans --ajouter) : bouton d'achat présent → verifie_le passe à la date du jour ;
//    sinon l'objet passe dans « indisponibles » et son bouton revient à une recherche Amazon.
// Rien n'est inventé : seul l'état lu sur la page est enregistré.
//
// Usage : npx tsx scripts/verifier-produits.mjs                          (rapport seul)
//         npx tsx scripts/verifier-produits.mjs --ecrire                 (met à jour le fichier)
//         npx tsx scripts/verifier-produits.mjs --ecrire --lot 30        (les 30 vérifiés il y a le plus longtemps)
//         npx tsx scripts/verifier-produits.mjs --ecrire --ajouter .amazon/choix.json
// Après --ecrire : npm test, puis commit du fichier JSON.
// Chrome : CHROMIUM_PATH=/chemin/vers/chrome (par défaut, Google Chrome sur macOS).
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const RACINE = resolve(import.meta.dirname, '..');
const FICHIER = resolve(RACINE, 'src/lib/contenus/amazon-asins.json');
const ecrire = process.argv.includes('--ecrire');
const aujourdhui = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());
const chrome = process.env.CHROMIUM_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const arg = (nom) => {
  const i = process.argv.indexOf(nom);
  return i > -1 ? process.argv[i + 1] : null;
};

const donnees = JSON.parse(readFileSync(FICHIER, 'utf8'));
const ajout = arg('--ajouter');
const lot = Number(arg('--lot')) || 0;
const aVerifier = ajout
  ? Object.entries(JSON.parse(readFileSync(resolve(RACINE, ajout), 'utf8'))).map(([slug, asin]) => ({ slug, asin, nouveau: true }))
  : (() => {
      const tous = Object.entries(donnees.actifs).map(([slug, v]) => ({ slug, ...v }));
      return lot ? [...tous].sort((a, b) => String(a.verifie_le).localeCompare(String(b.verifie_le))).slice(0, lot) : tous;
    })();

const navigateur = await chromium.launch({ executablePath: chrome, headless: true });
const page = await (await navigateur.newContext({ locale: 'fr-FR' })).newPage();
// Pages plus légères : ni images, ni polices, ni styles (seul le contenu est lu).
await page.route('**/*', (r) => (['image', 'media', 'font', 'stylesheet'].includes(r.request().resourceType()) ? r.abort() : r.continue()));
const disponibles = [];
const indisponibles = [];
let bloque = false;

for (const p of aVerifier) {
  let etat;
  try {
    const reponse = await page.goto(`https://www.amazon.fr/dp/${p.asin}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('#productTitle, form[action*="validateCaptcha"]', { timeout: 20000 }).catch(() => {});
    etat = await page.evaluate(() => ({
      captcha: !!document.querySelector('form[action*="validateCaptcha"]'),
      achat: !!document.querySelector('#add-to-cart-button, #buy-now-button'),
      titre: (document.querySelector('#productTitle')?.textContent || '').trim().replace(/\s+/g, ' '),
    }));
    etat.statut = reponse?.status() ?? 0;
  } catch (e) {
    console.log(`? ${p.slug} (${p.asin}) : erreur de chargement, non modifié (${e.message.split('\n')[0]})`);
    continue;
  }
  if (etat.captcha) {
    bloque = true;
    console.log(`Amazon demande une vérification (captcha) : arrêt, rien de modifié après ${p.slug}.`);
    break;
  }
  if (etat.achat) {
    disponibles.push({ ...p, titre: etat.titre.slice(0, 200) });
    console.log(`✓ ${p.slug} (${p.asin}) · ${etat.titre.slice(0, 90)}`);
  } else {
    indisponibles.push(p);
    console.log(`✗ ${p.slug} (${p.asin}) : pas de bouton d'achat (HTTP ${etat.statut})${etat.titre ? ` · ${etat.titre.slice(0, 60)}` : ''}`);
  }
  await page.waitForTimeout(lot ? 4000 + Math.random() * 4000 : 1500 + Math.random() * 1500); // rythme humain
}
await navigateur.close();

console.log(`\n${disponibles.length} disponible(s), ${indisponibles.length} indisponible(s), ${aVerifier.length - disponibles.length - indisponibles.length} non vérifié(s).`);
if (ecrire) {
  for (const p of disponibles) donnees.actifs[p.slug] = { asin: p.asin, titre: p.titre || donnees.actifs[p.slug]?.titre || '', verifie_le: aujourdhui };
  for (const p of indisponibles) {
    if (p.nouveau) continue; // ASIN choisi mais pas achetable : simplement pas ajouté
    delete donnees.actifs[p.slug];
    donnees.indisponibles[p.slug] = { asin: p.asin, constate_le: aujourdhui, note: "Plus de bouton d'achat sur Amazon.fr : retour à la recherche Amazon." };
  }
  donnees.actifs = Object.fromEntries(Object.entries(donnees.actifs).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(FICHIER, JSON.stringify(donnees, null, 2) + '\n');
  console.log(`src/lib/contenus/amazon-asins.json mis à jour (${aujourdhui}).`);
}
process.exit(bloque ? 2 : 0);
