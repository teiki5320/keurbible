/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import Link from "next/link";
import { ListeButton } from "@/components/liste/ListeButton";
import type { ObjetCarte } from "@/lib/catalogue";
import { withBase } from "@/lib/config";
import { AmazonButton, AmazonNote } from "./AmazonButton";

/**
 * Carte d'un objet : illustration créée par IA (si l'objet en a une, avec la mention qui le dit), nom, notre description,
 * traditions, bouton Amazon et liste d'envies.
 * `lienRubrique` : affiche la sous-rubrique de l'objet (pages qui mélangent les rubriques).
 */
export function ObjetCard({ objet, lienRubrique = false, titre: Titre = "h3" }: { objet: ObjetCarte; lienRubrique?: boolean; titre?: "h2" | "h3" }) {
  return (
    <article id={objet.slug} className={`objet ${objet.classesTradition} flex scroll-mt-32 flex-col rounded-xl border border-line bg-white p-5`}>
      {objet.image && (
        <img
          src={withBase(objet.image.src)}
          alt={objet.image.alt}
          width={480}
          height={480}
          loading="lazy"
          className="-mx-5 -mt-5 mb-5 aspect-square w-[calc(100%+2.5rem)] max-w-none rounded-t-xl object-cover"
        />
      )}
      <p className="eyebrow flex flex-wrap gap-x-2">
        <span>{objet.traditions}</span>
        {objet.afro && <span className="text-accent">· Art afro</span>}
      </p>
      <Titre className="mt-2 font-serif text-[25px] leading-[1.08] text-balance">{objet.nom}</Titre>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{objet.description}</p>
      {lienRubrique && (
        <p className="mt-2 text-[13px]">
          <Link href={objet.sousRubrique.href} prefetch={false} className="text-muted underline decoration-line-strong underline-offset-4 hover:text-accent">
            {objet.sousRubrique.nom}
          </Link>
        </p>
      )}
      <div className="mt-auto pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <AmazonButton href={objet.amazonUrl} nom={objet.nom} small />
          <ListeButton slug={objet.slug} nom={objet.nom} />
        </div>
        <AmazonNote recherche={!objet.lienDirect} illustrationIA={Boolean(objet.image)} />
      </div>
    </article>
  );
}

export function ObjetGrid({ objets, lienRubrique = false, titre }: { objets: ObjetCarte[]; lienRubrique?: boolean; titre?: "h2" | "h3" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {objets.map((o) => (
        <ObjetCard key={o.slug} objet={o} lienRubrique={lienRubrique} titre={titre} />
      ))}
    </div>
  );
}
