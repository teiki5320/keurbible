import Link from "next/link";
import { CookieSettingsLink } from "@/components/ads/CookieSettingsLink";
import { AMAZON_DISCLOSURE } from "@/lib/amazon";
import { siteConfig } from "@/lib/config";
import { Embleme } from "./Embleme";
import { EmailLink } from "./EmailLink";
import { NAV, NAV_RUBRIQUES } from "./nav";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container-page grid gap-10 py-12 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2.5 font-serif text-[30px] leading-none">
            <Embleme className="size-10" />
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xs text-muted">{siteConfig.tagline}, pour toutes les Églises.</p>
          <Link href="/notre-demarche" className="mt-3 inline-block text-accent hover:text-ink">
            Notre démarche →
          </Link>
        </div>
        <nav aria-label="Rubriques d'objets" className="flex flex-col gap-2">
          {NAV_RUBRIQUES.map((n) => (
            <Link key={n.href} href={n.href} prefetch={false} className="hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Pages du site" className="flex flex-col gap-2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} prefetch={false} className="hover:text-accent">
              {n.label}
            </Link>
          ))}
          <Link href="/ma-liste" className="hover:text-accent">
            Ma liste d&apos;envies
          </Link>
        </nav>
        <nav aria-label="Informations légales" className="flex flex-col gap-2 text-muted">
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-ink">Confidentialité</Link>
          <Link href="/conditions" className="hover:text-ink">Conditions d&apos;utilisation</Link>
          <CookieSettingsLink className="text-left hover:text-ink" />
          <EmailLink email={siteConfig.contactEmail} className="hover:text-ink" />
        </nav>
      </div>
      <div className="container-page space-y-2 border-t border-line py-5 text-[12px] leading-relaxed text-faint">
        <p>{AMAZON_DISCLOSURE}</p>
        <p>
          Un site{" "}
          <a href="https://toakeur.com" className="font-semibold text-muted hover:text-ink">TOA KEUR</a>
        </p>
      </div>
    </footer>
  );
}
