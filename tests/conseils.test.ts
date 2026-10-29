/**
 * Tests de la rubrique Conseils : en-têtes complets, objets cités et liens internes valides
 * à la date de publication de chaque article, publication programmée.
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { DESCRIPTION_MAX, DESCRIPTION_MIN, internalLinks, isPublished, parseConseil, splitAtMiddleSection, todayInParis, type Conseil } from "../src/lib/conseils/article";
import { OBJETS } from "../src/lib/catalogue";
import { PAGES } from "./pages";

const root = join(import.meta.dirname, "..");
const dir = join(root, "content", "conseils");
const conseils: Conseil[] = readdirSync(dir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => parseConseil(f.replace(/\.md$/, ""), readFileSync(join(dir, f), "utf8")));
const bySlug = new Map(conseils.map((c) => [c.slug, c]));
const objets = new Set(OBJETS.map((o) => o.slug));

/** Vrai si le lien interne mène à une page existante le jour où l'article paraît. */
function validAt(path: string, date: string): boolean {
  const conseil = path.match(/^\/conseils\/([^/]+)$/);
  if (conseil) {
    const target = bySlug.get(conseil[1]);
    return Boolean(target && target.date <= date);
  }
  return PAGES.has(path);
}

describe("Conseils : en-têtes", () => {
  it("contient au moins un article", () => assert.ok(conseils.length > 0));
  for (const c of conseils) {
    it(`« ${c.slug} » a un en-tête complet`, () => {
      assert.match(c.title, /\?$/, "le titre doit être la question (terminée par « ? »)");
      assert.ok(c.description.length >= DESCRIPTION_MIN && c.description.length <= DESCRIPTION_MAX, `description de ${c.description.length} caractères (attendu ${DESCRIPTION_MIN} à ${DESCRIPTION_MAX})`);
      assert.match(c.date, /^\d{4}-\d{2}-\d{2}$/, "date au format AAAA-MM-JJ");
      assert.ok([1, 3, 5].includes(new Date(`${c.date}T12:00:00Z`).getUTCDay()), "publication un lundi, un mercredi ou un vendredi");
      assert.ok(c.resume.length > 0, "réponse courte (resume) obligatoire");
      assert.ok(c.body.length > 0, "corps de l'article vide");
    });
  }
});

describe("Conseils : objets cités et liens internes", () => {
  for (const c of conseils) {
    it(`« ${c.slug} » ne pointe que vers des pages existantes au ${c.date}`, () => {
      for (const path of internalLinks(c.body)) assert.ok(validAt(path, c.date), `lien invalide : ${path}`);
      for (const s of c.objets) assert.ok(objets.has(s), `objet inconnu : ${s}`);
    });
  }
});

describe("Conseils : publication programmée", () => {
  const future = parseConseil("article-futur", "---\ntitle: Question future ?\ndescription: x\ndate: 2099-01-05\ntheme: choisir\nresume: x\n---\nTexte.");
  it("un article daté du futur n'est pas publié", () => assert.equal(isPublished(future, todayInParis()), false));
  it("un article est publié le jour même (heure de Paris)", () => assert.equal(isPublished(future, "2099-01-05"), true));
  it("la date du jour à Paris passe minuit à l'heure française", () => assert.equal(todayInParis(new Date("2026-01-04T23:30:00Z")), "2026-01-05"));
});

describe("Emplacement d'annonce au milieu d'un article", () => {
  it("coupe avant la partie du milieu, sans rien perdre", () => {
    const html = "<p>a</p><h2 id=\"1\">1</h2><p>b</p><h2 id=\"2\">2</h2><p>c</p><h2 id=\"3\">3</h2><p>d</p><h2 id=\"4\">4</h2>";
    const [before, after] = splitAtMiddleSection(html);
    assert.equal(before + after, html);
    assert.ok(after.startsWith('<h2 id="3">'));
  });
  it("ne coupe pas un article de moins de 3 parties", () => {
    const html = "<p>a</p><h2>1</h2><p>b</p><h2>2</h2>";
    assert.deepEqual(splitAtMiddleSection(html), [html, ""]);
  });
});
