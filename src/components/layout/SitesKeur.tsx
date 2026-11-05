"use client";

import { useEffect, useId, useRef, useState } from "react";

/** Les autres sites de la maison TOA KEUR (le site courant, Keur Bible, n'y figure pas). */
const SITES = [
  { nom: "Keurbook", texte: "les livres d'auteurs africains", href: "https://keurbook.com/" },
  { nom: "Keur Cook", texte: "la cuisine africaine", href: "https://keurcook.com/" },
  { nom: "Keur Déco", texte: "la déco africaine", href: "https://keurdeco.com/" },
  { nom: "Keurfoot", texte: "le foot africain", href: "https://keurfoot.com/" },
  { nom: "Keur Kado", texte: "les cadeaux africains", href: "https://keurkado.com/" },
] as const;

/** Menu déroulant « Les sites Keur » : bouton, liste de liens, Échap et clic à l'extérieur pour fermer. */
export function SitesKeur({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const racine = useRef<HTMLDivElement>(null);
  const bouton = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      setOpen(false);
      bouton.current?.focus();
    };
    const onClic = (e: MouseEvent) => {
      if (racine.current && !racine.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey, true);
    document.addEventListener("mousedown", onClic);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.removeEventListener("mousedown", onClic);
    };
  }, [open]);

  const lien = "block px-4 py-2.5 text-[14px] leading-snug text-ink hover:bg-paper hover:text-accent focus-visible:bg-paper focus-visible:text-accent";

  return (
    <div ref={racine} className={`relative ${className}`}>
      <button
        ref={bouton}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[14px] hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${open ? "border-accent text-accent" : "border-ink/40"}`}
      >
        Les sites Keur
        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" className={open ? "rotate-180" : ""}>
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute left-0 z-50 mt-2 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg"
      >
        <ul>
          {SITES.map((s) => (
            <li key={s.href}>
              <a href={s.href} className={lien} data-umami-event="Menu sites Keur" data-umami-event-site={s.nom}>
                <span className="font-semibold">{s.nom}</span> — {s.texte}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-1 border-t border-line pt-1">
          <a href="https://toakeur.com/" className={lien} data-umami-event="Menu sites Keur" data-umami-event-site="toakeur.com">
            Toute la maison : toakeur.com
          </a>
        </div>
      </div>
    </div>
  );
}
