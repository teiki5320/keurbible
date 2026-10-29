"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CartePsaume } from "./CarrouselPsaumes";

/**
 * Psaume du jour (accueil) : un Psaume à la fois, en grand, qui laisse la place au suivant toutes les 7 secondes
 * (une barre dorée montre le temps restant). Flèches pour avancer ou reculer ; le défilement s'arrête au survol
 * et quand le visiteur a demandé moins d'animations. Tous les Psaumes restent dans le HTML.
 * Texte : Louis Segond 1910 (domaine public).
 */
export function PsaumeDuJour({ psaumes }: { psaumes: CartePsaume[] }) {
  const [actif, setActif] = useState(0);
  const [pause, setPause] = useState(false);
  const n = psaumes.length;

  useEffect(() => {
    if (pause || n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActif((a) => (a + 1) % n), 7000);
    return () => window.clearTimeout(id);
  }, [actif, pause, n]);

  const aller = (sens: 1 | -1) => setActif((a) => (a + sens + n) % n);

  return (
    <div className="kb-psaume rounded-2xl border border-line bg-white px-5 py-14 text-center sm:px-10 sm:py-16" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
      <div aria-live="polite">
        {psaumes.map((p, i) => (
          <figure key={p.slug} hidden={i !== actif} className="kb-fondu mx-auto max-w-3xl">
            <p className="eyebrow">{p.pour}</p>
            <blockquote className="mt-5 font-serif text-[24px] leading-snug text-ink [text-shadow:0_0_24px_rgba(240,164,58,0.25)] sm:text-[34px]">« {p.texte} »</blockquote>
            <figcaption className="mt-5 text-[14px] text-muted">
              <span className="font-semibold text-ink">{p.reference}</span> · Traduction Louis Segond 1910
              <Link href={`/psaumes/${p.slug}`} prefetch={false} className="mt-2 block text-accent hover:text-ink">
                Lire la présentation →
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
      <div aria-hidden className="mx-auto mt-7 h-0.5 w-56 overflow-hidden rounded bg-line">
        {!pause && <div key={actif} className="kb-bar h-0.5 bg-accent shadow-[0_0_10px_#f0a43a]" />}
      </div>
      <div className="mt-7 flex items-center justify-center gap-4">
        <button type="button" onClick={() => aller(-1)} aria-label="Psaume précédent" className="btn-secondary size-12 p-0">
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div className="flex gap-2" aria-hidden>
          {psaumes.map((p, i) => (
            <span key={p.slug} className={`h-2 rounded-full transition-all duration-500 ${i === actif ? "w-7 bg-accent" : "w-2 bg-line-strong"}`} />
          ))}
        </div>
        <button type="button" onClick={() => aller(1)} aria-label="Psaume suivant" className="btn-secondary size-12 p-0">
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
