/**
 * Liens Amazon : chaque lien porte un code de suivi tiré de la table unique de src/lib/amazon.ts (AMAZON_TAGS).
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { AMAZON_TAG, AMAZON_TAGS, amazonUrl, type AmazonEmplacement } from "../src/lib/amazon";
import { OBJETS, TOP10S } from "../src/lib/catalogue";
import { AMAZON_ASINS } from "../src/lib/contenus";

const emplacements = Object.keys(AMAZON_TAGS) as AmazonEmplacement[];

describe("Codes de suivi Amazon", () => {
  it("le code du site est keurbible-21, et chaque emplacement a un code valide", () => {
    assert.equal(AMAZON_TAG, "keurbible-21");
    assert.deepEqual([...emplacements].sort(), ["conseil", "occasion", "rubrique", "top"]);
    for (const e of emplacements) assert.match(AMAZON_TAGS[e], /^[a-z0-9-]+-21$/, e);
  });

  it("chaque lien (fiche directe ou recherche) mène à Amazon.fr avec le code de son emplacement", () => {
    for (const objet of OBJETS)
      for (const e of emplacements) {
        const url = new URL(amazonUrl(objet, e));
        assert.equal(url.hostname, "www.amazon.fr", objet.slug);
        assert.equal(url.searchParams.get("tag"), AMAZON_TAGS[e], `${objet.slug} (${e})`);
      }
  });

  it("sans ASIN vérifié : une recherche (rayon Livres pour les livres) ; avec ASIN : la fiche", () => {
    const recherche = new URL(amazonUrl({ amazonAsin: null, recherche: "bible enfant illustrée", livre: true }, "top"));
    assert.equal(recherche.pathname, "/s");
    assert.equal(recherche.searchParams.get("k"), "bible enfant illustrée");
    assert.equal(recherche.searchParams.get("i"), "stripbooks");
    assert.equal(new URL(amazonUrl({ amazonAsin: null, recherche: "croix murale bois" }, "top")).searchParams.get("i"), null);
    assert.equal(amazonUrl({ amazonAsin: "B000000000", recherche: "x" }, "rubrique"), "https://www.amazon.fr/dp/B000000000?tag=keurbible-21");
  });
});

describe("ASIN vérifiés (src/lib/contenus/amazon-asins.json)", () => {
  const slugs = new Set(OBJETS.map((o) => o.slug));
  it("chaque ASIN vérifié appartient à un objet du site, avec le titre lu sur Amazon et sa date de vérification", () => {
    for (const [slug, v] of Object.entries(AMAZON_ASINS)) {
      assert.ok(slugs.has(slug), `objet inconnu : ${slug}`);
      assert.match(v.asin, /^[A-Z0-9]{10}$/, slug);
      assert.ok(v.titre.length > 10, `${slug} : titre Amazon absent`);
      assert.match(v.verifie_le, /^20\d\d-\d\d-\d\d$/, slug);
    }
  });
  it("un objet avec ASIN vérifié mène à sa fiche Amazon, les autres à une recherche", () => {
    for (const o of OBJETS) {
      const url = new URL(amazonUrl(o, "top"));
      assert.equal(url.pathname.startsWith("/dp/"), Boolean(AMAZON_ASINS[o.slug]), o.slug);
    }
  });
  it("au moins la moitié des objets des Top 10 ont un lien direct", () => {
    const dansTops = new Set(TOP10S.flatMap((t) => t.items.map((i) => i.slug)));
    const directs = [...dansTops].filter((s) => AMAZON_ASINS[s]).length;
    assert.ok(directs * 2 >= dansTops.size, `${directs} sur ${dansTops.size}`);
  });
});
