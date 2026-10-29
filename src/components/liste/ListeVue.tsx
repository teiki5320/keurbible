"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AmazonButton, AmazonNote } from "@/components/objet/AmazonButton";
import type { ObjetCarte } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { useListe } from "@/lib/liste";

/**
 * Ma liste d'envies. Une liste partagée arrive par l'adresse (?l=slug1,slug2) :
 * on l'affiche (avec ses boutons Amazon, pour la famille qui veut offrir) et on propose de l'ajouter à sa propre liste.
 */
export function ListeVue({ objets }: { objets: ObjetCarte[] }) {
  const { slugs, toggle, addAll } = useListe();
  const params = useSearchParams();
  const [copie, setCopie] = useState(false);
  const parSlug = new Map(objets.map((o) => [o.slug, o]));
  const partagee = (params.get("l") ?? "").split(",").filter((s) => parSlug.has(s));
  const mienne = slugs.flatMap((s) => parSlug.get(s) ?? []);

  const lien = `${siteConfig.url}/ma-liste?l=${mienne.map((o) => o.slug).join(",")}`;
  const message = `Ma liste d'envies sur ${siteConfig.name} : ${lien}`;

  async function copier() {
    try {
      await navigator.clipboard.writeText(lien);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <div className="container-page max-w-3xl">
      {partagee.length > 0 && (
        <section className="mb-10 rounded-xl border border-accent bg-white p-5">
          <h2 className="eyebrow">Une liste d&apos;envies vous a été partagée</h2>
          <ul className="mt-2">
            {partagee.map((s) => {
              const o = parSlug.get(s)!;
              return (
                <li key={s} className="border-b border-line py-3">
                  <Link href={o.path} className="font-serif text-[22px] leading-tight hover:text-accent">
                    {o.nom}
                  </Link>
                  <div className="mt-2">
                    <AmazonButton href={o.amazonUrl} nom={o.nom} small />
                    <AmazonNote recherche={!o.lienDirect} />
                  </div>
                </li>
              );
            })}
          </ul>
          <button type="button" className="btn-secondary mt-4 w-full py-3.5 sm:w-auto" onClick={() => addAll(partagee)}>
            Ajouter à ma propre liste
          </button>
        </section>
      )}

      {mienne.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <p className="font-serif text-[30px] italic">Votre liste d&apos;envies est vide.</p>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">
            Ajoutez des objets avec le bouton « Ma liste » des rubriques et des Top 10, puis partagez la liste avec vos proches.
          </p>
          <Link href="/cadeaux" className="mt-5 text-[15px] text-accent hover:text-ink">
            Voir les idées de cadeaux →
          </Link>
        </div>
      ) : (
        <>
          <p className="text-[13px] text-faint">
            {mienne.length} {mienne.length > 1 ? "objets" : "objet"}, gardés dans ce navigateur. Pas de compte.
          </p>
          <ul className="mt-6 border-b border-line">
            {mienne.map((o) => (
              <li key={o.slug} className="flex items-start justify-between gap-3 border-t border-line py-4">
                <div className="min-w-0">
                  <Link href={o.path} className="font-serif text-[22px] leading-tight hover:text-accent">
                    {o.nom}
                  </Link>
                  <p className="mt-0.5 text-xs text-muted">
                    {o.sousRubrique.nom} · {o.traditions}
                  </p>
                  <div className="mt-2">
                    <AmazonButton href={o.amazonUrl} nom={o.nom} small />
                    <AmazonNote recherche={!o.lienDirect} />
                  </div>
                </div>
                <button type="button" onClick={() => toggle(o.slug)} className="rounded-full p-2 text-faint hover:text-ink" aria-label={`Retirer ${o.nom} de ma liste d'envies`}>
                  <X className="size-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2">
            <a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-3.5">
              Partager sur WhatsApp
            </a>
            <button type="button" className="btn-secondary py-3.5" onClick={copier}>
              {copie ? "Lien copié" : "Copier le lien"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
