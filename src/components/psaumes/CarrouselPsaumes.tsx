"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export interface CartePsaume {
  slug: string;
  reference: string;
  texte: string;
  pour: string;
}

/**
 * Carrousel des Psaumes de l'accueil : une bande de cartes qui défile de côté (doigt, molette, flèches du clavier
 * ou boutons). Pas de défilement automatique ; toutes les cartes sont dans le HTML.
 * Texte : Louis Segond 1910 (domaine public).
 */
export function CarrouselPsaumes({ psaumes }: { psaumes: CartePsaume[] }) {
  const bande = useRef<HTMLUListElement>(null);
  const defiler = (sens: 1 | -1) => {
    const el = bande.current;
    if (!el) return;
    const carte = el.querySelector("li");
    const pas = carte ? carte.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: sens * pas, behavior: doux ? "smooth" : "auto" });
  };
  return (
    <div className="relative">
      <ul
        ref={bande}
        tabIndex={0}
        aria-label="Psaumes, faire défiler de côté"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [scrollbar-width:thin]"
      >
        {psaumes.map((p) => (
          <li key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
            <figure className="flex h-full flex-col rounded-2xl border border-gold/40 bg-gold-soft p-6">
              <p className="eyebrow">{p.pour}</p>
              <blockquote className="mt-4 font-serif text-[23px] leading-snug text-ink italic">« {p.texte} »</blockquote>
              <figcaption className="mt-auto pt-5 text-[14px]">
                <span className="font-semibold">{p.reference}</span>
                <span className="block text-[12px] text-faint">Traduction Louis Segond 1910</span>
                <Link href={`/psaumes/${p.slug}`} prefetch={false} className="mt-3 inline-block text-accent hover:text-ink">
                  Lire la présentation →
                </Link>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex justify-end gap-2">
        <button type="button" onClick={() => defiler(-1)} aria-label="Psaumes précédents" className="btn-secondary size-11 p-0">
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={() => defiler(1)} aria-label="Psaumes suivants" className="btn-secondary size-11 p-0">
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
