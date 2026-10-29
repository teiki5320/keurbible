/**
 * Titres des pages (60 caractères au plus) et pages voisines « en boucle » (liens « À lire aussi »).
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { suivantsEnBoucle } from "../src/lib/boucle";
import { OCCASIONS, PSAUMES, RUBRIQUES, SOUS_RUBRIQUES, TOP10S } from "../src/lib/catalogue";
import { couperTexte, pageMetadata, TITRE_MAX, titrePage } from "../src/lib/metadata";

describe("Titres de page", () => {
  it("un titre trop long est coupé en fin de mot, avec « … »", () => {
    const long = "Comment choisir une Bible pour un adolescent qui n'a jamais lu la Bible de sa vie";
    const t = titrePage(long);
    assert.ok(t.length <= TITRE_MAX, t);
    assert.ok(t.endsWith("…"));
    assert.ok(long.startsWith(t.slice(0, -1)), "coupé sur un mot entier");
    assert.equal(couperTexte("Court", 60), "Court");
  });
  it("le suffixe « | Keur Bible » n'est gardé que s'il tient", () => {
    assert.equal(titrePage("Croix murales"), "Croix murales | Keur Bible");
    assert.equal(titrePage("Accueil", true), "Accueil");
  });
  it("les métadonnées d'une page ne dépassent jamais 60 caractères", () => {
    const m = pageMetadata({ title: "x".repeat(40) + " " + "y".repeat(40), description: "d", path: "/" });
    const title = m.title as { absolute: string };
    assert.ok(title.absolute.length <= TITRE_MAX, title.absolute);
  });
  it("toutes les pages de contenu ont un titre complet de 60 caractères au plus", () => {
    const titres = [...RUBRIQUES, ...SOUS_RUBRIQUES, ...OCCASIONS, ...PSAUMES].map((x) => titrePage(x.titre)).concat(TOP10S.map((t) => titrePage(t.title)));
    assert.deepEqual(titres.filter((t) => t.length > TITRE_MAX), []);
  });
});

describe("Pages voisines en boucle", () => {
  const liste = ["a", "b", "c", "d", "e"];
  it("les suivantes, en revenant au début", () => {
    assert.deepEqual(suivantsEnBoucle(liste, (x) => x === "d", 3), ["e", "a", "b"]);
    assert.deepEqual(suivantsEnBoucle(liste, (x) => x === "a", 2), ["b", "c"]);
  });
  it("jamais l'élément courant, même dans une petite liste", () => {
    assert.deepEqual(suivantsEnBoucle(["a", "b"], (x) => x === "a", 3), ["b"]);
  });
  it("chaque élément reçoit exactement n liens de ses voisins", () => {
    const recus = new Map(liste.map((x) => [x, 0]));
    for (const x of liste) for (const y of suivantsEnBoucle(liste, (z) => z === x, 3)) recus.set(y, recus.get(y)! + 1);
    assert.deepEqual([...new Set(recus.values())], [3]);
  });
});
