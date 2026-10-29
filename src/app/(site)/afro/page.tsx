import type { Metadata } from "next";
import Link from "next/link";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Breadcrumb, Section } from "@/components/layout/Section";
import { FiltreTradition } from "@/components/objet/FiltreTradition";
import { ObjetGrid } from "@/components/objet/ObjetCard";
import { RUBRIQUES, objetsAfro, sousRubriqueOf, toCartes } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getConseilsVers } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Art chrétien afro : Jésus noir, Vierge noire, crèches",
  description: "Tableaux de Jésus noir, Vierges noires, crèches africaines, croix éthiopiennes : notre sélection d'art chrétien afro pour la maison et à offrir.",
  path: "/afro",
});

/** Page phare « Art chrétien afro » : les objets afro de toutes les rubriques, rangés par rubrique. */
export default function AfroPage() {
  if (getMaintenance().enabled) return null;
  const objets = objetsAfro();
  const parRubrique = RUBRIQUES.map((r) => ({ r, objets: objets.filter((o) => sousRubriqueOf(o).rubrique === r.slug) })).filter((g) => g.objets.length > 0);
  const conseils = getConseilsVers("/afro").slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Art chrétien afro", url: `${siteConfig.url}/afro` },
            ]),
            itemListLd("Art chrétien afro", objets.map((o) => ({ name: o.nom, url: `${siteConfig.url}/afro#${o.slug}` }))),
          ]),
        }}
      />
      <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Art chrétien afro" }]} />
      <header className="container-page pt-6 pb-2">
        <p className="eyebrow">Notre rubrique phare</p>
        <h1 className="mt-2 max-w-4xl font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">L&apos;art chrétien afro</h1>
        <div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink/85">
          <p>
            Depuis toujours, chaque peuple chrétien représente le Christ, la Vierge et les saints avec ses propres traits. L&apos;Éthiopie a
            ses icônes et ses croix ouvragées depuis des siècles ; l&apos;Europe a ses Vierges noires ; les Églises d&apos;Afrique ont
            développé un art sacré à leur image.
          </p>
          <p>
            Ici, nous avons réuni {objets.length} objets : Jésus noir et Vierge noire, scènes bibliques afro, crèches africaines, croix
            éthiopiennes et coptes. Pour une maison où l&apos;on se reconnaît, et des cadeaux qui ont du sens.
          </p>
        </div>
        <nav aria-label="Rubriques de la sélection afro" className="mt-6 flex flex-wrap gap-2">
          {parRubrique.map(({ r }) => (
            <a key={r.slug} href={`#${r.slug}`} className="tag">
              {r.nom}
            </a>
          ))}
        </nav>
      </header>

      <div className="container-page mt-10">
        <FiltreTradition>
          <div className="space-y-14">
            {parRubrique.map(({ r, objets: liste }) => (
              <section key={r.slug} id={r.slug} aria-labelledby={`t-${r.slug}`} className="scroll-mt-32">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h2 id={`t-${r.slug}`} className="section-title">
                    {r.nom}
                  </h2>
                  <Link href={`/${r.slug}`} prefetch={false} className="text-[14px] whitespace-nowrap text-muted hover:text-accent">
                    Toute la rubrique →
                  </Link>
                </div>
                <ObjetGrid objets={toCartes(liste, "rubrique")} lienRubrique />
              </section>
            ))}
          </div>
        </FiltreTradition>
      </div>

      {conseils.length > 0 && (
        <Section title="Pour aller plus loin" href="/conseils" linkLabel="Tous les conseils">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}
    </>
  );
}
