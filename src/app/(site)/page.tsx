import type { Metadata } from "next";
import Link from "next/link";
import { BlocActus } from "@/components/actus/BlocActus";
import { ConseilGrid } from "@/components/conseils/ConseilCard";
import { CarteLien, GrilleLiens } from "@/components/layout/CarteLien";
import { Section } from "@/components/layout/Section";
import { HeroLumiere } from "@/components/accueil/HeroLumiere";
import { PsaumeDuJour } from "@/components/psaumes/PsaumeDuJour";
import { OCCASIONS, PSAUMES, RUBRIQUES, TOP10S, objetsAfro, psaumeRefVersets, sousRubriqueOf } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getConseils } from "@/lib/data/conseils";
import { getMaintenance } from "@/lib/data/settings";
import { jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Keur Bible : objets chrétiens pour la maison et à offrir",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

/** Sous-titre de l'onglet d'un Top 10 sur l'accueil : « Top 10 des crèches de Noël » → « Crèches de Noël ». */
const sujet = (title: string) => {
  const s = title.replace(/^Top 10 des? /, "");
  return s[0].toUpperCase() + s.slice(1);
};

/**
 * Accueil : accroche, carrousel des Psaumes, rubriques, art chrétien afro, cadeaux par occasion, Top 10,
 * derniers conseils et actus. Aucun lien Amazon sur l'accueil (seulement des liens vers les pages du site).
 */
export default function HomePage() {
  if (getMaintenance().enabled) return null;
  const conseils = getConseils().slice(0, 3);
  const afro = objetsAfro();
  // Les 4 sous-rubriques qui comptent le plus d'objets afro (Jésus noir et Vierge noire, crèches africaines…).
  const parSous = new Map<string, { s: ReturnType<typeof sousRubriqueOf>; n: number }>();
  for (const o of afro) {
    const s = sousRubriqueOf(o);
    parSous.set(s.slug, { s, n: (parSous.get(s.slug)?.n ?? 0) + 1 });
  }
  const pagesAfro = [...parSous.values()].sort((a, b) => b.n - a.n).slice(0, 4).map((x) => x.s);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "fr" },
            { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/brand/keurbible-logo.png` },
          ]),
        }}
      />

      {/* 1. Accroche, avec l'orbe de lumière et le nuage de points */}
      <HeroLumiere>
        <p className="eyebrow kb-reveal">Pour toutes les Églises</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[40px] leading-[1.05] text-balance sm:text-[64px]">Des objets chrétiens pour la maison et à offrir</h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted">
          Bibles, croix, chapelets, art chrétien afro, crèches et cadeaux de baptême : notre sélection, expliquée simplement, pour les
          catholiques, les protestants, les évangéliques et les orthodoxes.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/cadeaux" className="btn-primary px-6 py-3.5">
            Trouver un cadeau
          </Link>
          <Link href="/afro" className="btn-secondary px-6 py-3.5">
            L&apos;art chrétien afro
          </Link>
        </div>
      </HeroLumiere>

      {/* 2. Carrousel des Psaumes */}
      <Section title="Un Psaume pour aujourd'hui" href="/psaumes" linkLabel="Tous les Psaumes" id="psaumes">
        <PsaumeDuJour psaumes={PSAUMES.map((p) => ({ slug: p.slug, reference: psaumeRefVersets(p), texte: p.texte, pour: p.pour }))} />
      </Section>

      {/* 3. Rubriques */}
      <Section title="Nos rubriques" id="rubriques">
        <GrilleLiens>
          {RUBRIQUES.map((r) => (
            <li key={r.slug}>
              <CarteLien href={`/${r.slug}`} titre={r.nom} texte={r.intro} action="Voir la rubrique" />
            </li>
          ))}
          <li>
            <CarteLien href="/cadeaux" titre="Cadeaux par occasion" texte="Baptême, première communion, mariage, Noël, fête des mères : des idées selon l'occasion et selon celui qui offre." action="Voir les idées" />
          </li>
        </GrilleLiens>
      </Section>

      {/* 4. Art chrétien afro : lueur qui se promène, braises qui montent */}
      <section aria-labelledby="afro" className="container-page mt-20 kb-reveal">
        <div className="kb-afro rounded-2xl border border-line-strong bg-white px-6 py-14 sm:px-12">
          {[8, 22, 38, 55, 71, 86].map((x, i) => (
            <span key={x} aria-hidden className="kb-ember" style={{ left: `${x}%`, animationDelay: `${(i * 1.3) % 4}s`, animationDuration: `${6 + (i % 3)}s` }} />
          ))}
          <p className="eyebrow">Notre rubrique phare</p>
          <h2 id="afro" className="kb-shine mt-3 font-serif text-[38px] leading-none sm:text-5xl">
            L&apos;art chrétien afro
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            Jésus noir, Vierge noire, scènes bibliques et crèches africaines, croix éthiopiennes : {afro.length} objets choisis pour une
            foi qui se reconnaît dans les visages et les couleurs de l&apos;Afrique.
          </p>
          <ul className="kb-stag mt-6 flex flex-wrap gap-2">
            {pagesAfro.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.rubrique}/${s.slug}`} prefetch={false} className="kb-chip inline-flex rounded-full border border-line-strong px-4 py-2 text-[14px] transition">
                  {s.nom}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/afro" className="btn-primary kb-pulse mt-7 px-6 py-3.5">
            Voir toute la sélection afro →
          </Link>
        </div>
      </section>

      {/* 5. Cadeaux par occasion */}
      <Section title="Un cadeau pour chaque occasion" href="/cadeaux" linkLabel="Toutes les occasions" id="cadeaux">
        <div className="kb-marquee" aria-hidden>
          <div className="kb-track">
            {[...OCCASIONS, ...OCCASIONS].map((o, i) => (
              <span key={i} className="kb-contour font-serif text-[40px] leading-tight whitespace-nowrap sm:text-[60px]">
                {o.nom} ·
              </span>
            ))}
          </div>
        </div>
        <ul className="kb-stag mt-6 flex flex-wrap gap-2">
          {OCCASIONS.map((o) => (
            <li key={o.slug}>
              <Link href={`/cadeaux/${o.slug}`} prefetch={false} className="tag kb-chip px-4 py-2 text-[15px] transition">
                {o.nom}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Top 10 */}
      <Section title="Nos Top 10" href="/top-10" linkLabel="Tous les Top 10" id="top-10">
        <GrilleLiens colonnes={4}>
          {TOP10S.map((t) => (
            <li key={t.slug}>
              <CarteLien href={`/top-10/${t.slug}`} surtitre="Top 10" titre={sujet(t.title)} action="Voir le top" />
            </li>
          ))}
        </GrilleLiens>
      </Section>

      {/* 7. Derniers conseils */}
      {conseils.length > 0 && (
        <Section title="Nos derniers conseils" href="/conseils" linkLabel="Tous les conseils" id="conseils">
          <ConseilGrid conseils={conseils} />
        </Section>
      )}

      {/* 8. Actus (lues en direct depuis la veille ; bloc absent s'il n'y en a pas) */}
      <BlocActus className="container-page mt-16" surtitre="En ce moment" titre="Les actus" limite={4} lien={{ href: "/actus", label: "Toutes les actus" }} />
    </>
  );
}
