"use client";

import { useState } from "react";
import { TRADITIONS } from "@/lib/catalogue";
import type { Tradition } from "@/lib/types";

/**
 * « Pour quelle tradition ? » : masque les objets qui ne conviennent pas à la tradition choisie
 * (les objets qui conviennent à toutes les Églises restent affichés). Toutes les cartes sont dans le HTML :
 * le filtre ne fait que poser data-filtre sur le bloc (règles CSS dans globals.css).
 */
export function FiltreTradition({ children }: { children: React.ReactNode }) {
  const [filtre, setFiltre] = useState<Tradition | "">("");
  const choix: Array<[Tradition | "", string]> = [["", "Toutes"], ...(Object.entries(TRADITIONS) as Array<[Tradition, string]>)];
  return (
    <div data-filtre={filtre || undefined}>
      <fieldset className="mb-6">
        <legend className="eyebrow mb-2">Pour quelle tradition ?</legend>
        <div className="flex flex-wrap gap-2">
          {choix.map(([valeur, nom]) => (
            <button
              key={nom}
              type="button"
              onClick={() => setFiltre(valeur)}
              aria-pressed={filtre === valeur}
              className={`rounded-full border px-4 py-2 text-[13px] transition ${filtre === valeur ? "border-accent bg-accent font-semibold text-white" : "border-line-strong bg-white text-ink/85 hover:border-ink"}`}
            >
              {nom}
            </button>
          ))}
        </div>
        {filtre && <p className="mt-2 text-[13px] text-muted">Les objets qui conviennent à toutes les Églises restent affichés.</p>}
      </fieldset>
      {children}
    </div>
  );
}
