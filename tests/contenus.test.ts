/**
 * Cohérence des contenus : le plan (src/lib/contenus/plan.ts) est suivi, chaque objet a une sous-rubrique,
 * les Top 10 ont 10 objets existants, les longueurs respectent docs/REDACTION.md, les liens internes mènent à des pages.
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { OBJETS, OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "../src/lib/catalogue";
import { IMAGES_OBJETS } from "../src/lib/contenus";
import { PLAN_OCCASIONS, PLAN_PSAUMES, PLAN_RUBRIQUES, PLAN_TOP10 } from "../src/lib/contenus/plan";
import { TITRE_MAX } from "../src/lib/metadata";
import { PAGES } from "./pages";

const slugsObjets = new Set(OBJETS.map((o) => o.slug));
const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const desc = (d: string) => d.length >= 70 && d.length <= 160;

/** Liens internes « [texte](/chemin) » d'un texte, sans l'ancre. */
const liens = (t: string) => [...t.matchAll(/\]\((\/[^)\s#]*)[^)]*\)/g)].map((m) => m[1]);

describe("Plan du site", () => {
  it("rubriques et sous-rubriques dans l'ordre du plan, avec les mêmes noms", () => {
    assert.deepEqual(RUBRIQUES.map((r) => r.slug), PLAN_RUBRIQUES.map((r) => r.slug));
    for (const p of PLAN_RUBRIQUES) {
      const sous = SOUS_RUBRIQUES.filter((s) => s.rubrique === p.slug);
      assert.deepEqual(sous.map((s) => [s.slug, s.nom]), Object.entries(p.sous), p.slug);
    }
  });
  it("occasions, Top 10 et Psaumes dans l'ordre du plan", () => {
    assert.deepEqual(OCCASIONS.map((o) => [o.slug, o.nom]), Object.entries(PLAN_OCCASIONS));
    assert.deepEqual(TOP10S.map((t) => t.slug), [...PLAN_TOP10]);
    assert.deepEqual(PSAUMES.map((p) => p.slug), [...PLAN_PSAUMES]);
  });
});

describe("Rubriques, sous-rubriques et occasions", () => {
  for (const r of RUBRIQUES)
    it(`rubrique « ${r.slug} » complète`, () => {
      assert.ok(r.titre.length <= TITRE_MAX, `titre de ${r.titre.length} caractères`);
      assert.ok(desc(r.description), `description de ${r.description.length} caractères`);
      assert.ok(r.choisir.length >= 3 && r.choisir.length <= 5, "3 à 5 conseils « Comment choisir »");
      assert.equal(r.faq.length, 3, "3 questions fréquentes");
    });
  it("chaque sous-rubrique a un titre, une description et au moins 4 objets", () => {
    for (const s of SOUS_RUBRIQUES) {
      assert.ok(s.titre.length <= TITRE_MAX, `${s.slug} : titre de ${s.titre.length} caractères`);
      assert.ok(desc(s.description), `${s.slug} : description de ${s.description.length} caractères`);
      assert.ok(OBJETS.filter((o) => o.sousRubrique === s.slug).length >= 4, `${s.slug} : moins de 4 objets`);
    }
  });
  it("chaque occasion a ses idées selon celui qui offre et au moins 6 objets", () => {
    for (const o of OCCASIONS) {
      assert.ok(o.titre.length <= TITRE_MAX, `${o.slug} : titre de ${o.titre.length} caractères`);
      assert.ok(desc(o.description), `${o.slug} : description`);
      assert.ok(o.deQui.length >= 3, `${o.slug} : « De la part de qui »`);
      assert.equal(o.faq.length, 3, `${o.slug} : 3 questions`);
      assert.ok(OBJETS.filter((x) => x.occasions.includes(o.slug)).length >= 6, `${o.slug} : moins de 6 objets`);
    }
  });
  it("les liens internes des textes mènent à des pages existantes", () => {
    const textes = [
      ...RUBRIQUES.flatMap((r) => r.faq.map((f) => f.a)),
      ...OCCASIONS.flatMap((o) => o.faq.map((f) => f.a)),
      ...TOP10S.flatMap((t) => [t.start, ...t.faq.map((f) => f.a)]),
    ];
    const morts = textes.flatMap(liens).filter((l) => !PAGES.has(l));
    assert.deepEqual([...new Set(morts)], []);
  });
});

describe("Objets", () => {
  it("slugs uniques, en minuscules avec tirets", () => {
    assert.equal(slugsObjets.size, OBJETS.length, "slug en double");
    for (const o of OBJETS) assert.match(o.slug, kebab, o.slug);
  });
  it("chaque objet a une sous-rubrique du plan, des occasions du plan et une recherche Amazon", () => {
    const sous = new Set(SOUS_RUBRIQUES.map((s) => s.slug));
    for (const o of OBJETS) {
      assert.ok(sous.has(o.sousRubrique), `${o.slug} : sous-rubrique inconnue`);
      for (const oc of o.occasions) assert.ok(oc in PLAN_OCCASIONS, `${o.slug} : occasion inconnue ${oc}`);
      assert.ok(o.recherche.trim().split(/\s+/).length >= 2, `${o.slug} : recherche trop courte`);
      assert.ok(o.description.length >= 120 && o.description.length <= 420, `${o.slug} : description de ${o.description.length} caractères`);
      assert.ok(o.traditions === "toutes" || o.traditions.length > 0, `${o.slug} : traditions`);
    }
  });
  it("un ASIN n'est rempli que s'il a la forme d'un ASIN (10 caractères)", () => {
    for (const o of OBJETS) if (o.amazonAsin !== null) assert.match(o.amazonAsin, /^[A-Z0-9]{10}$/, o.slug);
  });
  it("jamais de prix ni de note dans les textes", () => {
    const fautifs = OBJETS.filter((o) => /\d\s?€|\beuros?\b|\d\s?\/\s?5\b|\d\s?étoiles?\b/i.test(`${o.nom} ${o.description}`)).map((o) => o.slug);
    assert.deepEqual(fautifs, []);
  });
  it("la sélection afro compte au moins 20 objets", () => assert.ok(OBJETS.filter((o) => o.afro).length >= 20));
});

describe("Top 10", () => {
  for (const t of TOP10S)
    it(`« ${t.slug} » : 10 objets existants, sans doublon, textes complets`, () => {
      assert.equal(t.items.length, 10);
      assert.equal(new Set(t.items.map((i) => i.slug)).size, 10, "objet en double");
      for (const i of t.items) {
        assert.ok(slugsObjets.has(i.slug), `objet inconnu : ${i.slug}`);
        assert.ok(i.why.length >= 80, `${i.slug} : « why » trop court`);
      }
      assert.match(t.title, /^Top 10 des? /);
      assert.ok(t.title.length <= TITRE_MAX, `titre de ${t.title.length} caractères`);
      assert.ok(desc(t.description), `description de ${t.description.length} caractères`);
      assert.match(t.intro, /pas un palmarès officiel/);
      assert.equal(t.faq.length, 3);
    });
  it("un objet figure dans 2 Top 10 au plus, et deux Top 10 ont 3 objets en commun au plus", () => {
    const compte = new Map<string, number>();
    for (const t of TOP10S) for (const i of t.items) compte.set(i.slug, (compte.get(i.slug) ?? 0) + 1);
    assert.deepEqual([...compte].filter(([, n]) => n > 2).map(([s]) => s), []);
    for (const a of TOP10S)
      for (const b of TOP10S) {
        if (a.slug >= b.slug) continue;
        const communs = a.items.filter((i) => b.items.some((j) => j.slug === i.slug)).length;
        assert.ok(communs <= 3, `${a.slug} et ${b.slug} : ${communs} objets en commun`);
      }
  });
});

describe("Psaumes", () => {
  it("double numérotation juste (hébraïque, puis grecque)", () => {
    for (const p of PSAUMES) {
      assert.equal(p.slug, `psaume-${p.numero}`);
      // Entre le Psaume 10 et le Psaume 147, la numérotation grecque a un de moins (sauf 114 à 116, absents ici).
      if (p.numero >= 10 && p.numero <= 146) assert.equal(p.numeroGrec, p.numero - 1, p.slug);
    }
  });
  it("texte, carte et page complets ; objets liés existants", () => {
    for (const p of PSAUMES) {
      assert.ok(p.texte.length >= 40 && !/\d/.test(p.texte), `${p.slug} : texte (sans numéro de verset)`);
      assert.match(p.versets, /^\d+(-\d+)?$/, p.slug);
      assert.ok(p.titre.length <= TITRE_MAX, `${p.slug} : titre de ${p.titre.length} caractères`);
      assert.ok(desc(p.description), `${p.slug} : description`);
      assert.ok(p.quand.length >= 2, `${p.slug} : « Quand le lire »`);
      for (const s of p.objets) assert.ok(slugsObjets.has(s), `${p.slug} : objet inconnu ${s}`);
    }
    assert.equal(new Set(PSAUMES.map((p) => p.pour)).size, PSAUMES.length, "lignes « pour » en double");
  });
});

describe("Images des objets (src/lib/contenus/images-objets.json)", () => {
  it("chaque image appartient à un objet du site, son fichier existe et elle a un texte alternatif", () => {
    for (const [slug, { image, alt }] of Object.entries(IMAGES_OBJETS)) {
      assert.ok(slugsObjets.has(slug), `objet inconnu : ${slug}`);
      assert.equal(image, `/objets/${slug}.webp`, slug);
      assert.ok(existsSync(join(import.meta.dirname, "..", "public", image)), `fichier absent : ${image}`);
      assert.ok(alt.length >= 20 && alt.length <= 140, `${slug} : texte alternatif de ${alt.length} caractères`);
    }
  });
});
