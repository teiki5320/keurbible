import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/Section";
import { PSAUMES, psaumeRef, psaumeRefVersets } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Psaumes connus et inspirants",
  description: "Psaume 23, 27, 91, 121 : douze Psaumes connus et inspirants, leur texte en Louis Segond 1910 et quand les lire (baptême, deuil, nuit d'inquiétude).",
  path: "/psaumes",
});

/** Page Psaumes : les 12 Psaumes du carrousel de l'accueil, chacun avec son verset et un lien vers sa présentation. */
export default function PsaumesPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd("Psaumes connus et inspirants", PSAUMES.map((p) => ({ name: p.titre, url: `${siteConfig.url}/psaumes/${p.slug}` })))) }}
      />
      <PageHeader
        title="Psaumes connus et inspirants"
        intro="Les Psaumes sont les prières de la Bible que toutes les Églises partagent. Voici douze Psaumes parmi les plus aimés, avec leur texte et les moments où on les lit. Les versets sont cités dans la traduction Louis Segond 1910 (domaine public)."
      >
        <p className="mt-4 max-w-2xl text-[14px] text-muted">
          Deux numéros pour chaque Psaume : le premier est celui des Bibles protestantes (numérotation hébraïque), celui entre parenthèses
          celui de la liturgie catholique et orthodoxe (numérotation grecque).
        </p>
      </PageHeader>
      <ul className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PSAUMES.map((p) => (
          <li key={p.slug}>
            <Link href={`/psaumes/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-gold/40 bg-gold-soft p-6 transition hover:border-gold">
              <span className="eyebrow">{p.pour}</span>
              <span className="mt-2 font-serif text-[28px] leading-none group-hover:text-accent">{psaumeRef(p)}</span>
              <span className="mt-3 font-serif text-[20px] leading-snug text-ink/85 italic">« {p.texte} »</span>
              <span className="mt-auto pt-4 text-[13px] text-faint">{psaumeRefVersets(p)} · Louis Segond 1910</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
