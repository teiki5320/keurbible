import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { ALireAussi } from "@/components/layout/ALireAussi";
import { CarteLien, GrilleLiens } from "@/components/layout/CarteLien";
import { Faq } from "@/components/layout/Faq";
import { Breadcrumb, Section } from "@/components/layout/Section";
import { FiltreTradition } from "@/components/objet/FiltreTradition";
import { ObjetGrid } from "@/components/objet/ObjetCard";
import { suivantsEnBoucle } from "@/lib/boucle";
import { RUBRIQUES, TOP10S, objetsOfRubrique, objetsOfSousRubrique, rubriqueBySlug, sousRubriquesOf, toCartes } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getConseilsVers } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return RUBRIQUES.map((r) => ({ rubrique: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[rubrique]">): Promise<Metadata> {
  const r = rubriqueBySlug((await params).rubrique);
  if (!r) return {};
  return pageMetadata({ title: r.titre, description: r.description, path: `/${r.slug}` });
}

/**
 * Rubrique (guide d'achat) : présentation, « Comment choisir », objets rangés par sous-rubrique avec le filtre
 * de tradition, Top 10 et conseils liés, questions fréquentes, autres rubriques.
 */
export default async function RubriquePage({ params }: PageProps<"/[rubrique]">) {
  if (getMaintenance().enabled) return null;
  const r = rubriqueBySlug((await params).rubrique);
  if (!r) notFound();
  const sous = sousRubriquesOf(r.slug);
  const slugsObjets = new Set(objetsOfRubrique(r.slug).map((o) => o.slug));
  const tops = TOP10S.filter((t) => t.items.some((i) => slugsObjets.has(i.slug)));
  const conseils = getConseilsVers(`/${r.slug}`).slice(0, 3);
  const url = `${siteConfig.url}/${r.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbLd([
              { name: "Accueil", url: siteConfig.url },
              { name: r.nom, url },
            ]),
            itemListLd(r.titre, sous.map((s) => ({ name: s.nom, url: `${url}/${s.slug}` }))),
          ]),
        }}
      />
      <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: r.nom }]} />
      <header className="container-page pt-6 pb-2">
        <p className="eyebrow">Rubrique</p>
        <h1 className="mt-2 max-w-4xl font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">{r.titre}</h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-ink/85">{r.intro}</p>
        <nav aria-label={`Sous-rubriques : ${r.nom}`} className="mt-6 flex flex-wrap gap-2">
          {sous.map((s) => (
            <Link key={s.slug} href={`/${r.slug}/${s.slug}`} prefetch={false} className="tag">
              {s.nom}
            </Link>
          ))}
        </nav>
      </header>

      <section aria-labelledby="choisir" className="container-page mt-10">
        <div className="max-w-3xl rounded-xl border border-gold/40 bg-gold-soft p-6">
          <h2 id="choisir" className="font-serif text-[28px] leading-none">
            Comment choisir
          </h2>
          <ul className="mt-4 space-y-2.5 text-[16px] leading-relaxed text-ink/85">
            {r.choisir.map((c) => (
              <li key={c} className="flex gap-3">
                <span aria-hidden className="text-gold">
                  ✦
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-page mt-12">
        <FiltreTradition>
          <div className="space-y-14">
            {sous.map((s) => (
              <section key={s.slug} aria-labelledby={`s-${s.slug}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h2 id={`s-${s.slug}`} className="section-title">
                    {s.nom}
                  </h2>
                  <Link href={`/${r.slug}/${s.slug}`} prefetch={false} className="text-[14px] whitespace-nowrap text-muted hover:text-accent">
                    Voir la page →
                  </Link>
                </div>
                <ObjetGrid objets={toCartes(objetsOfSousRubrique(s.slug), "rubrique")} />
              </section>
            ))}
          </div>
        </FiltreTradition>
      </div>

      {tops.length > 0 && (
        <Section title="Nos Top 10 liés">
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

      <div className="container-page max-w-3xl">
        <Faq items={r.faq} />
      </div>

      <div className="container-page">
        <AdSlot placement="rubrique" />
      </div>

      <ALireAussi titre="Autres rubriques" liens={suivantsEnBoucle(RUBRIQUES, (x) => x.slug === r.slug, 3).map((x) => ({ href: `/${x.slug}`, nom: x.nom }))} />
    </>
  );
}
