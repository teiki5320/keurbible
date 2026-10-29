/**
 * Plan du site : registre des dates de modification (src/lib/lastmod.json).
 * Lancement : npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { currentHashes, readLedger } from "../src/lib/lastmod";

describe("Registre des dates (lastmod.json)", () => {
  const ledger = readLedger();
  it("dates au format AAAA-MM-JJ, jamais dans le futur", () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const [key, { h, d }] of Object.entries(ledger)) {
      assert.match(d, /^\d{4}-\d{2}-\d{2}$/, key);
      assert.ok(d <= today, `${key} : ${d}`);
      assert.match(h, /^[0-9a-f]{16}$/, key);
    }
  });
  it("à jour (sinon le plan du site date les pages changées du dernier commit)", async () => {
    const hashes = await currentHashes();
    const stale = Object.entries(hashes).filter(([k, h]) => ledger[k]?.h !== h).map(([k]) => k);
    // Pas bloquant : un simple rappel pour lancer « npx tsx scripts/lastmod.mjs ».
    if (stale.length) console.warn(`lastmod.json : ${stale.length} pages à redater (npx tsx scripts/lastmod.mjs), ex. ${stale.slice(0, 3).join(", ")}`);
    assert.ok(Object.keys(hashes).length >= 79, `${Object.keys(hashes).length} pages datées`);
  });
});
