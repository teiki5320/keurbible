/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import Link from "next/link";
import type { ObjetCarte } from "@/lib/catalogue";
import { withBase } from "@/lib/config";

/**
 * Cartes « Nos coups de cœur » de l'accueil : illustration, Top 10 dont l'objet est le n° 1, nom, traditions.
 * Chaque carte mène à l'objet dans sa sous-rubrique (aucun lien Amazon sur l'accueil), avec la mention des illustrations IA.
 */
export function CoupsDeCoeur({ items }: { items: Array<{ carte: ObjetCarte; sujet: string }> }) {
  return (
    <>
      <ul className="kb-stag grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 [&>li]:h-full">
        {items.map(({ carte, sujet }) => (
          <li key={carte.slug}>
            <Link href={carte.path} prefetch={false} className="group kb-card flex h-full flex-col rounded-xl border border-line bg-white">
              {carte.image && (
                <img src={withBase(carte.image.src)} alt={carte.image.alt} width={480} height={480} loading="lazy" className="aspect-square w-full rounded-t-xl object-cover" />
              )}
              <span className="flex flex-1 flex-col p-3 sm:p-5">
                <span className="eyebrow text-[10px] sm:text-[11px]">N° 1 · {sujet}</span>
                <span className="mt-1.5 font-serif text-[18px] leading-[1.08] sm:text-[24px] text-balance group-hover:text-accent">{carte.nom}</span>
                <span className="mt-1.5 text-[12px] text-muted sm:text-[13px]">{carte.traditions}</span>
                <span className="mt-auto pt-3 text-[13px] text-accent sm:text-[14px]">Voir l&apos;objet →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11.5px] leading-snug text-faint">Illustrations créées par IA : les articles vendus sur Amazon peuvent différer.</p>
    </>
  );
}
