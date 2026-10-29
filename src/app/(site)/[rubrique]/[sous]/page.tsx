import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { ALireAussi } from "@/components/layout/ALireAussi";
import { CarteLien, GrilleLiens } from "@/components/layout/CarteLien";
import { Breadcrumb, Section } from "@/components/layout/Section";
import { FiltreTradition } from "@/components/objet/FiltreTradition";
import { ObjetGrid } from "@/components/objet/ObjetCard";
import { suivantsEnBoucle } from "@/lib/boucle";
import { SOUS_RUBRIQUES, TOP10S, objetsOfSousRubrique, rubriqueBySlug, sousRubriqueBySlug, toCartes } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getConseilsVers } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOUS_RUBRIQUES.map((s) => ({ rubrique: s.rubrique, sous: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[rubrique]/[sous]">): Promise<Metadata> {
  const { rubrique, sous } = await params;
  const s = sousRubriqueBySlug(rubrique, sous);
  if (!s) return {};
  return pageMetadata({ title: s.titre, description: s.description, path: `/${s.rubrique}/${s.slug}` });
}

/** Sous-rubrique : présentation, objets avec le filtre de tradition, Top 10 et conseils liés, sous-rubriques voisines. */
export default async function SousRubriquePage({ params }: PageProps<"/[rubrique]/[sous]">) {
  if (getMaintenance().enabled) return null;
  const { rubrique, sous } = await params;
  const s = sousRubriqueBySlug(rubrique, sous);
  const r = rubriqueBySlug(rubrique);
  if (!s || !r) notFound();
  const objets = objetsOfSousRubrique(s.slug);
  const slugs = new Set(objets.map((o) => o.slug));
  const tops = TOP10S.filter((t) => t.items.some((i) => slugs.has(i.slug)));
  const path = `/${r.slug}/${s.slug}`;
  const conseils = getConseilsVers(path).slice(0, 3);
  const url = `${siteConfig.url}${path}`;
  const voisines = SOUS_RUBRIQUES.filter((x) => x.rubrique === r.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbLd([
              { name: "Accueil", url: siteConfig.url },
              { name: r.nom, url: `${siteConfig.url}/${r.slug}` },
              { name: s.nom, url },
            ]),
            itemListLd(s.titre, objets.map((o) => ({ name: o.nom, url: `${url}#${o.slug}` }))),
          ]),
        }}
      />
      <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: r.nom, href: `/${r.slug}` }, { name: s.nom }]} />
      <header className="container-page pt-6 pb-2">
        <p className="eyebrow">
          <Link href={`/${r.slug}`} className="hover:text-ink">
            {r.nom}
          </Link>
        </p>
        <h1 className="mt-2 max-w-4xl font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">{s.titre}</h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-ink/85">{s.intro}</p>
      </header>

      <div className="container-page mt-10">
        <FiltreTradition>
          <ObjetGrid objets={toCartes(objets, "rubrique")} titre="h2" />
        </FiltreTradition>
      </div>

      {tops.length > 0 && (
        <Section title="Dans nos Top 10">
          <GrilleLiens>
            {tops.map((t) => (
              <li key={t.slug}>
                <CarteLien href={`/top-10/${t.slug}`} surtitre="Top 10" titre={t.title} action="Voir le top" />
              </li>
            ))}
          </GrilleLiens>
        </Section>
      )}

      {conseils.length > 0 && (
        <Section title="Nos conseils" href="/conseils" linkLabel="Tous les conseils">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}

      <div className="container-page">
        <AdSlot placement="rubrique" />
      </div>

      <ALireAussi
        titre={`Aussi dans ${r.nom}`}
        liens={suivantsEnBoucle(voisines, (x) => x.slug === s.slug, 4).map((x) => ({ href: `/${x.rubrique}/${x.slug}`, nom: x.nom }))}
      />
    </>
  );
}
