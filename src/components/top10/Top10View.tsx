/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import Link from "next/link";
import { Faq } from "@/components/layout/Faq";
import { ListeButton } from "@/components/liste/ListeButton";
import { AmazonButton, AmazonNote } from "@/components/objet/AmazonButton";
import { withBase } from "@/lib/config";
import { TOP10_UPDATED } from "@/lib/contenus";
import type { Top10Objet } from "@/lib/data/top10";
import type { Top10 } from "@/lib/top10/types";
import { RichText } from "./RichText";
import { Top10Tabs } from "./Top10Tabs";

const monthYear = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });

/** Les 3 sujets qui suivent dans l'ordre des onglets (on repart du début après le dernier). */
function seeAlso(tops: Top10[], top: Top10): Top10[] {
  const i = tops.findIndex((t) => t.slug === top.slug);
  return [1, 2, 3].map((k) => tops[(i + k) % tops.length]);
}

/** Sujet du top avec une majuscule : « Top 10 des crèches de Noël » → « Crèches de Noël ». */
function subjectOf(top: Top10): string {
  const s = top.title.replace(/^Top 10 des? /, "");
  return s[0].toUpperCase() + s.slice(1);
}

/** Page « Top 10 » : onglets des sujets, puis le top du sujet actif (même gabarit pour tous les sujets). */
export function Top10View({ tops, top, objets }: { tops: Top10[]; top: Top10; objets: Top10Objet[] }) {
  return (
    <>
      <div className="mt-4">
        <Top10Tabs tabs={tops.map((t) => ({ slug: t.slug, tab: t.tab }))} active={top.slug} />
      </div>

      <article className="container-page max-w-4xl">
        <header className="pt-10">
          <p className="eyebrow flex flex-wrap gap-x-3 gap-y-1">
            <span>Notre sélection</span>
            <span className="text-muted">10 objets · {monthYear.format(new Date(`${TOP10_UPDATED}T12:00:00Z`))}</span>
          </p>
          <h1 className="mt-3 font-serif text-[42px] leading-[0.98] text-balance sm:text-6xl">{top.title}</h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">{top.intro}</p>
        </header>

        <ol className="mt-10 space-y-5">
          {objets.map((o) => (
            <li key={o.slug}>
              <section id={o.slug} aria-labelledby={`objet-${o.rank}`} className={`objet ${o.classesTradition} scroll-mt-36 rounded-xl border border-line bg-white p-5 sm:p-7`}>
                <div className="flex items-start gap-5">
                  <span
                    aria-label={`Numéro ${o.rank}`}
                    className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-gold/50 bg-gold-soft font-serif text-[34px] leading-none text-accent sm:size-16 sm:text-[40px]"
                  >
                    {o.rank}
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow">{[o.rubrique, o.traditions, o.afro && "Art afro"].filter(Boolean).join(" · ")}</p>
                    <h2 id={`objet-${o.rank}`} className="mt-2 font-serif text-[30px] leading-[1.04] text-balance sm:text-4xl">
                      {o.nom}
                    </h2>
                  </div>
                </div>
                <div className={o.image ? "mt-5 sm:grid sm:grid-cols-[14rem_1fr] sm:gap-6" : ""}>
                  {o.image && (
                    <img
                      src={withBase(o.image.src)}
                      alt={o.image.alt}
                      width={480}
                      height={480}
                      loading="lazy"
                      className="mb-4 aspect-square w-full rounded-lg object-cover sm:mb-0"
                    />
                  )}
                  <div>
                    <p className={`${o.image ? "" : "mt-4 "}text-[16px] leading-relaxed text-ink/85`}>{o.description}</p>
                    <h3 className="eyebrow mt-5">Pourquoi on l&apos;a choisi</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-ink/85">{o.why}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
                  <AmazonButton href={o.amazonUrl} nom={o.nom} className="py-3" />
                  <ListeButton slug={o.slug} nom={o.nom} />
                  <Link href={o.sousRubrique.href} prefetch={false} className="text-sm text-accent hover:text-ink">
                    {o.sousRubrique.nom} →
                  </Link>
                </div>
                <AmazonNote recherche={!o.lienDirect} illustrationIA={Boolean(o.image)} />
              </section>
            </li>
          ))}
        </ol>

        <section aria-labelledby="commencer" className="mt-14">
          <h2 id="commencer" className="section-title">
            Par où commencer
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/85">
            <RichText text={top.start} />
          </p>
        </section>

        <Faq items={top.faq} />

        <section aria-labelledby="voir-aussi" className="mt-14">
          <h2 id="voir-aussi" className="section-title">
            Voir aussi
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {seeAlso(tops, top).map((t) => (
              <li key={t.slug}>
                <Link href={`/top-10/${t.slug}`} className="flex h-full flex-col rounded-xl border border-line bg-white p-4 transition hover:border-line-strong">
                  <span className="eyebrow">Top 10</span>
                  <span className="mt-1.5 font-serif text-2xl leading-[1.05] text-balance">{subjectOf(t)}</span>
                  <span className="mt-auto pt-3 text-sm text-accent">Voir le top →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
