/**
 * IndexNow : signale toutes les pages du site à Bing et aux autres moteurs du protocole (Yandex, Seznam…).
 * Lit le sitemap publié en ligne, en extrait les adresses <loc> et les envoie en une seule requête.
 * Usage : node scripts/indexnow.mjs   (lancé chaque semaine et à la demande par .github/workflows/indexnow.yml)
 * La clé n'est pas un secret : elle est publiée à https://keurbible.com/<clé>.txt, comme le demande le protocole.
 */
const KEY = "f94ce4f8b7d23aad9b186bfaf84b63e3";
const HOST = "keurbible.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const sitemap = await fetch(SITEMAP);
if (!sitemap.ok) {
  console.error(`Sitemap illisible (${SITEMAP}) : réponse ${sitemap.status}.`);
  process.exit(1);
}
const urls = [...(await sitemap.text()).matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("Aucune adresse <loc> dans le sitemap.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  // Le protocole accepte jusqu'à 10 000 adresses par requête.
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10_000) }),
});
console.log(`IndexNow : ${urls.length} page(s) signalée(s), réponse ${res.status}.`);
// 200 et 202 : accepté. À partir de 400 : refus (clé non vérifiée, requête invalide…).
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
