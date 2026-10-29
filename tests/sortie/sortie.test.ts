/**
 * Contrôle du site construit (dossier out/), juste avant chaque mise en ligne (.github/workflows/deploy.yml).
 * Lancement : npm run build, puis npm run test:sortie.
 * Modèle : Keurbook (tests/sortie/sortie.test.ts).
 */
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { AMAZON_TAGS } from "../../src/lib/amazon";

const out = join(import.meta.dirname, "..", "..", "out");

function htmlFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === "_next" ? [] : htmlFiles(p);
    return f.endsWith(".html") ? [p] : [];
  });
}

/** Texte d'une balise title, entités HTML décodées (pour compter les vrais caractères). */
function titre(html: string): string | null {
  const m = html.match(/<title>([^<]*)<\/title>/);
  if (!m) return null;
  return m[1]
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const nom = (file: string) => file.slice(out.length + 1);
const pages = htmlFiles(out).map((f) => ({ file: nom(f), html: readFileSync(f, "utf8") }));
// Page de secours des actus (non indexée) : l'article, et donc son h1, est affiché dans le navigateur.
const rempliCoteNavigateur = (file: string) => file === "actus/article.html";
// Pages d'erreur : ni canonique ni description attendues.
// Page factice des actus quand la veille n'a encore aucun article (l'export statique refuse une liste vide) : 404, non indexée.
const erreur = (file: string) => file === "404.html" || file === "_not-found.html" || file === "actus/aucun-article.html";
const indexable = (html: string) => !/<meta name="robots" content="[^"]*noindex/.test(html);

/** Relevé de toutes les pages fautives (au plus 10 citées), pour un message lisible. */
function fautives(test: (p: { file: string; html: string }) => string | null): string[] {
  return pages.flatMap((p) => {
    const r = test(p);
    return r ? [`${p.file} : ${r}`] : [];
  });
}

describe("Site construit (out/)", () => {
  it("le dossier out/ existe et contient le site", () => {
    assert.ok(existsSync(join(out, "index.html")), "lancer npm run build avant npm run test:sortie");
    assert.ok(pages.length > 90, `${pages.length} pages seulement`);
  });

  it("chaque page a un seul titre h1", () => {
    assert.deepEqual(fautives(({ file, html }) => {
      if (rempliCoteNavigateur(file) || file === "actus/aucun-article.html") return null;
      const n = (html.match(/<h1[\s>]/g) ?? []).length;
      return n === 1 ? null : `${n} h1`;
    }).slice(0, 10), []);
  });

  it("chaque page a une balise title de 60 caractères au plus", () => {
    assert.deepEqual(fautives(({ html }) => {
      const t = titre(html);
      if (!t) return "sans title";
      return t.length <= 60 ? null : `${t.length} caractères (« ${t} »)`;
    }).slice(0, 10), []);
  });

  it("chaque page indexable a une description et une adresse canonique sur keurbible.com", () => {
    assert.deepEqual(fautives(({ file, html }) => {
      if (erreur(file) || !indexable(html)) return null;
      if (!/<meta name="description" content="[^"]{50,}"/.test(html)) return "description absente ou trop courte";
      if (!/<link rel="canonical" href="https:\/\/keurbible\.com[^"]*"/.test(html)) return "canonique absente";
      return null;
    }).slice(0, 10), []);
  });

  it("toutes les données structurées (JSON-LD) se lisent", () => {
    assert.deepEqual(fautives(({ html }) => {
      for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
        try {
          JSON.parse(m[1]);
        } catch (e) {
          return `JSON-LD illisible (${(e as Error).message})`;
        }
      }
      return null;
    }).slice(0, 10), []);
  });

  it("sous-rubrique : cartes d'objets avec liens Amazon partenaires nommés et filtre de tradition", () => {
    const html = readFileSync(join(out, "creches-et-noel", "creches-africaines.html"), "utf8");
    assert.match(html, /<a href="https:\/\/www\.amazon\.fr\/[^"]*" target="_blank" rel="sponsored nofollow noopener" aria-label="Voir sur Amazon : [^"]+, lien partenaire \(nouvel onglet\)"/);
    assert.match(html, /Pour quelle tradition \?/);
    assert.match(html, /class="objet [^"]*trad-catholique/);
  });

  it("accueil : le carrousel des Psaumes est dans le HTML, avec la traduction citée", () => {
    const html = readFileSync(join(out, "index.html"), "utf8");
    assert.match(html, /L&#x27;Éternel est mon berger|L'Éternel est mon berger/);
    assert.ok((html.match(/Traduction Louis Segond 1910/g) ?? []).length >= 12, "12 cartes de Psaumes attendues");
  });

  it("l'accueil porte le code AdSense (site en examen) et, si elle existe, une balise Bing valide", () => {
    const html = readFileSync(join(out, "index.html"), "utf8");
    assert.match(html, /<meta name="google-adsense-account" content="ca-pub-\d+"/);
    assert.match(html, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-\d+/);
    const bing = html.match(/<meta name="msvalidate\.01" content="([^"]*)"/);
    if (bing) assert.match(bing[1], /^[0-9A-F]{32}$/);
  });

  it("robots.txt annonce le plan du site, qui contient les fiches avec leur date", () => {
    assert.match(readFileSync(join(out, "robots.txt"), "utf8"), /Sitemap: https:\/\/keurbible\.com\/sitemap\.xml/);
    const plan = readFileSync(join(out, "sitemap.xml"), "utf8");
    assert.match(plan, /<loc>https:\/\/keurbible\.com\/creches-et-noel\/creches-africaines<\/loc>\s*<lastmod>\d{4}-\d{2}-\d{2}/);
    assert.match(plan, /<loc>https:\/\/keurbible\.com\/psaumes\/psaume-23<\/loc>/);
    assert.doesNotMatch(plan, /ma-liste/);
  });

  it("les fichiers ads.txt et de clé IndexNow sont bien publiés", () => {
    assert.match(readFileSync(join(out, "ads.txt"), "utf8"), /google\.com, pub-\d+, DIRECT/);
    assert.ok(readdirSync(out).some((f) => /^[0-9a-f]{32}\.txt$/.test(f)), "fichier de clé IndexNow absent");
  });
});

describe("Liens Amazon des pages construites", () => {
  const codes = new Set(Object.values(AMAZON_TAGS));
  const liens = (html: string) => [...html.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/<a\b[^>]*href="(https:\/\/www\.amazon\.fr[^"]*)"[^>]*>/g)];

  it("chaque lien a un tag de la table, rel sponsored nofollow noopener et un nouvel onglet", () => {
    const erreurs = fautives(({ html }) => {
      for (const [balise, href] of liens(html)) {
        // Entités HTML décodées comme le fait le navigateur (&amp; et l'apostrophe &#x27; des titres).
        const tag = new URL(href.replace(/&#x27;/g, "'").replace(/&amp;/g, "&")).searchParams.get("tag");
        if (!tag || !codes.has(tag)) return `tag absent ou hors table (${href})`;
        if (!/rel="sponsored nofollow noopener"/.test(balise) || !/target="_blank"/.test(balise)) return `rel ou target manquant (${href})`;
      }
      return null;
    });
    assert.deepEqual(erreurs.slice(0, 10), []);
  });

  it("aucun lien Amazon sur l'accueil ni dans les actus", () => {
    const erreurs = fautives(({ file, html }) => ((file === "index.html" || file.startsWith("actus")) && liens(html).length ? "lien Amazon" : null));
    assert.deepEqual(erreurs.slice(0, 10), []);
  });
});

describe("En-têtes Cloudflare (out/_headers)", () => {
  it("les .txt internes de Next.js sont en noindex, mais pas ads.txt, robots.txt ni la clé IndexNow", () => {
    const headers = readFileSync(join(out, "_headers"), "utf8");
    assert.match(headers, /^\/\*\.txt\n {2}X-Robots-Tag: noindex$/m);
    const publics = readdirSync(out).filter((f) => f.endsWith(".txt") && !f.startsWith("__next"));
    for (const f of ["ads.txt", "robots.txt", ...publics.filter((x) => /^[0-9a-f]{32}\.txt$/.test(x))]) {
      assert.match(headers, new RegExp(`^/${f.replace(/\./g, "\\.")}\\n {2}! X-Robots-Tag$`, "m"), f);
    }
  });
});
