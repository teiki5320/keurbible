import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { Section } from "@/components/layout/Section";
import { conseilSections, splitAtMiddleSection } from "@/lib/conseils/article";
import { CONSEIL_CATEGORIES } from "@/lib/conseils/categories";
import { siteConfig, withBase } from "@/lib/config";
import { OBJETS, toCartes } from "@/lib/catalogue";
import { ObjetGrid } from "@/components/objet/ObjetCard";
import { getConseilBySlug, getConseils, getRelatedConseils, renderConseil } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { formatDate } from "@/lib/format";
import { breadcrumbLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getConseils().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const conseil = getConseilBySlug((await params).slug);
  if (!conseil) return {};
  return pageMetadata({
    title: conseil.title,
    description: conseil.description,
    path: `/conseils/${conseil.slug}`,
    type: "article",
    publishedTime: conseil.date,
    image: conseil.image,
    imageAlt: `Illustration : ${conseil.title}`,
  });
}

export default async function ConseilPage({ params }: PageProps<"/conseils/[slug]">) {
  if (getMaintenance().enabled) return null;
  const conseil = getConseilBySlug((await params).slug);
  if (!conseil) notFound();
  const cited = toCartes(conseil.objets.flatMap((s) => OBJETS.filter((o) => o.slug === s)), "conseil");
  const related = getRelatedConseils(conseil);
  const sections = conseilSections(conseil.body);
  const [firstHalf, secondHalf] = splitAtMiddleSection(renderConseil(conseil.body));
  const url = `${siteConfig.url}/conseils/${conseil.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: conseil.title,
      description: conseil.description,
      datePublished: conseil.date,
      dateModified: conseil.date,
      inLanguage: "fr",
      image: `${siteConfig.url}${conseil.image ?? "/brand/keurbible-partage.jpg"}`,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      url,
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurbible-logo.png` },
    },
    breadcrumbLd([
      { name: "Accueil", url: siteConfig.url },
      { name: "Conseils", url: `${siteConfig.url}/conseils` },
      { name: conseil.title, url },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <article className="container-page max-w-3xl">
        <div className="flex justify-between pt-5 text-[13px]">
          <Link href="/conseils" className="text-ink/85 hover:text-accent">
            ← Conseils
          </Link>
          {/* 5. Date */}
          <time dateTime={conseil.date} className="text-faint">
            {formatDate(conseil.date)}
          </time>
        </div>
        {/* 1. Question */}
        <p className="eyebrow mt-10">
          <Link href={`/conseils#${conseil.theme}`} className="hover:text-ink">
            {CONSEIL_CATEGORIES[conseil.theme]}
          </Link>
        </p>
        <h1 className="mt-3 font-serif text-[44px] leading-none text-balance sm:text-6xl">{conseil.title}</h1>
        {conseil.image && (
          <figure className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(conseil.image)}
              alt={`Illustration de l'article « ${conseil.title} »`}
              width={1200}
              height={800}
              fetchPriority="high"
              className="aspect-[3/2] w-full rounded-md object-cover shadow-sm"
            />
            <figcaption className="mt-2 text-[11px] text-faint">Illustration Keur Bible (créée par intelligence artificielle).</figcaption>
          </figure>
        )}
        {/* 2. Réponse courte */}
        <p className="mt-8 border-l border-accent pl-5 text-[17px] leading-relaxed">
          <span className="sr-only">En bref : </span>
          {conseil.resume}
        </p>
        {sections.length > 2 && (
          <nav aria-label="Sommaire" className="mt-8 text-sm">
            <p className="eyebrow">Sommaire</p>
            <ol className="mt-2 border-b border-line">
              {sections.map((s, i) => (
                <li key={s.id} className="border-t border-line">
                  <a href={`#${s.id}`} className="flex gap-3 py-2.5 hover:text-accent">
                    <span className="text-faint">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {/* 3. Développement */}
        <div className="prose-text mt-8" dangerouslySetInnerHTML={{ __html: firstHalf }} />
        {secondHalf && (
          <>
            {/* Publicité : au milieu du texte, entre deux parties. */}
            <AdSlot placement="article" />
            <div className="prose-text" dangerouslySetInnerHTML={{ __html: secondHalf }} />
          </>
        )}
      </article>

      {/* 4. Objets cités (cartes avec bouton Amazon), après le texte et loin des publicités. */}
      {cited.length > 0 && (
        <Section title="Les objets de cet article">
          <ObjetGrid objets={cited} lienRubrique />
        </Section>
      )}

      {/* 6. Articles liés */}
      {related.length > 0 && (
        <Section title="À lire aussi" href="/conseils" linkLabel="Tous les conseils">
          <ConseilGrid conseils={related} />
        </Section>
      )}

      {/* Publicité : en fin de page, après les articles liés (loin des boutons Amazon des objets cités). */}
      <div className="container-page">
        <AdSlot placement="article" />
      </div>
    </>
  );
}
