import type { Metadata } from "next";
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
import { OCCASIONS, TOP10S, objetsOfOccasion, occasionBySlug, toCartes } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getConseilsVers } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return OCCASIONS.map((o) => ({ occasion: o.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cadeaux/[occasion]">): Promise<Metadata> {
  const o = occasionBySlug((await params).occasion);
  if (!o) return {};
  return pageMetadata({ title: o.titre, description: o.description, path: `/cadeaux/${o.slug}` });
}

/** Occasion : ce qu'est la fête, idées selon celui qui offre, sélection d'objets, Top 10 et conseils, questions fréquentes. */
export default async function OccasionPage({ params }: PageProps<"/cadeaux/[occasion]">) {
  if (getMaintenance().enabled) return null;
  const o = occasionBySlug((await params).occasion);
  if (!o) notFound();
  const objets = objetsOfOccasion(o.slug);
  const slugs = new Set(objets.map((x) => x.slug));
  const tops = TOP10S.filter((t) => t.items.filter((i) => slugs.has(i.slug)).length >= 3);
  const conseils = getConseilsVers(`/cadeaux/${o.slug}`).slice(0, 3);
  const url = `${siteConfig.url}/cadeaux/${o.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Cadeaux", url: `${siteConfig.url}/cadeaux` },
              { name: o.nom, url },
            ]),
            itemListLd(o.titre, objets.map((x) => ({ name: x.nom, url: `${siteConfig.url}/cadeaux/${o.slug}#${x.slug}` }))),
          ]),
        }}
      />
      <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Cadeaux", href: "/cadeaux" }, { name: o.nom }]} />
      <header className="container-page pt-6 pb-2">
        <p className="eyebrow">Cadeaux par occasion</p>
        <h1 className="mt-2 max-w-4xl font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">{o.titre}</h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-ink/85">{o.intro}</p>
      </header>

      <section aria-labelledby="de-qui" className="container-page mt-10">
        <h2 id="de-qui" className="section-title">
          Selon celui qui offre
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {o.deQui.map((d) => (
            <li key={d.qui} className="rounded-xl border border-gold/40 bg-gold-soft p-5">
              <p className="font-serif text-[24px] leading-none">{d.qui}</p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink/85">{d.idee}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="idees" className="container-page mt-14">
        <h2 id="idees" className="section-title mb-5">
          Nos idées de cadeaux
        </h2>
        <FiltreTradition>
          <ObjetGrid objets={toCartes(objets, "occasion")} lienRubrique />
        </FiltreTradition>
      </section>

      {tops.length > 0 && (
        <Section title="Nos Top 10 pour cette occasion">
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
        <Faq items={o.faq} />
      </div>

      <div className="container-page">
        <AdSlot placement="rubrique" />
      </div>

      <ALireAussi titre="Autres occasions" liens={suivantsEnBoucle(OCCASIONS, (x) => x.slug === o.slug, 4).map((x) => ({ href: `/cadeaux/${x.slug}`, nom: x.nom }))} />
    </>
  );
}
