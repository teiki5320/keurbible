/**
 * Liens Amazon : chaque lien porte un code de suivi tiré de la table unique de src/lib/amazon.ts (AMAZON_TAGS).
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { AMAZON_TAG, AMAZON_TAGS, amazonUrl, type AmazonEmplacement } from "../src/lib/amazon";
import { OBJETS } from "../src/lib/catalogue";

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
