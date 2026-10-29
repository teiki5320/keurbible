import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALireAussi } from "@/components/layout/ALireAussi";
import { Breadcrumb, Section } from "@/components/layout/Section";
import { ObjetGrid } from "@/components/objet/ObjetCard";
import { suivantsEnBoucle } from "@/lib/boucle";
import { OBJETS, PSAUMES, psaumeBySlug, psaumeRef, psaumeRefVersets, toCartes } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return PSAUMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/psaumes/[slug]">): Promise<Metadata> {
  const p = psaumeBySlug((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.titre, description: p.description, path: `/psaumes/${p.slug}`, type: "article" });
}

/** Un Psaume : son verset (Louis Segond 1910), notre présentation, quand le lire, objets liés et autres Psaumes. */
export default async function PsaumePage({ params }: PageProps<"/psaumes/[slug]">) {
  if (getMaintenance().enabled) return null;
  const p = psaumeBySlug((await params).slug);
  if (!p) notFound();
  const objets = p.objets.flatMap((s) => OBJETS.filter((o) => o.slug === s));
  const url = `${siteConfig.url}/psaumes/${p.slug}`;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: p.titre,
              description: p.description,
              inLanguage: "fr",
              url,
              author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
              publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurbible-logo.png` },
            },
            breadcrumbLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Psaumes", url: `${siteConfig.url}/psaumes` },
              { name: psaumeRef(p), url },
            ]),
          ]),
        }}
      />
      <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Psaumes", href: "/psaumes" }, { name: psaumeRef(p) }]} />
      <article className="container-page max-w-3xl">
        <p className="eyebrow mt-8">{p.pour}</p>
        <h1 className="mt-2 font-serif text-[44px] leading-[0.98] text-balance sm:text-6xl">{p.titre}</h1>
        <figure className="mt-8 rounded-2xl border border-gold/40 bg-gold-soft p-6 sm:p-8">
          <blockquote className="font-serif text-[27px] leading-snug italic sm:text-[32px]">« {p.texte} »</blockquote>
          <figcaption className="mt-4 text-[14px] text-muted">
            <span className="font-semibold text-ink">{psaumeRefVersets(p)}</span> · traduction Louis Segond 1910 (domaine public)
          </figcaption>
        </figure>
        <p className="mt-8 text-[17px] leading-[1.7] text-ink/85">{p.presentation}</p>
        <section aria-labelledby="quand" className="mt-10">
          <h2 id="quand" className="section-title">
            Quand le lire
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.quand.map((q) => (
              <li key={q} className="rounded-full border border-line-strong bg-white px-4 py-2 text-[15px]">
                {q[0].toUpperCase() + q.slice(1)}
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-10 text-[13px] leading-relaxed text-faint">
          {psaumeRef(p)} : le premier numéro est celui des Bibles protestantes (numérotation hébraïque), celui entre parenthèses
          celui de la liturgie catholique et orthodoxe (numérotation grecque).
        </p>
      </article>

      {objets.length > 0 && (
        <Section title="Pour garder ce Psaume près de soi">
          <ObjetGrid objets={toCartes(objets, "conseil")} lienRubrique />
        </Section>
      )}

      <ALireAussi titre="D'autres Psaumes" liens={suivantsEnBoucle(PSAUMES, (x) => x.slug === p.slug, 4).map((x) => ({ href: `/psaumes/${x.slug}`, nom: psaumeRef(x), detail: x.pour }))} />
    </>
  );
}
