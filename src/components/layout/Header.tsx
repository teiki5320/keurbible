"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { ListeCount } from "../liste/ListeCount";
import { Embleme } from "./Embleme";
import { EmailLink } from "./EmailLink";
import { NAV, NAV_RUBRIQUES } from "./nav";

/** En-tête : liens en ligne et bande des rubriques sur grand écran, bouton « Menu » plein écran sur mobile. */
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  // Menu mobile ouvert : la page derrière ne défile plus, Échap le ferme, le focus va au premier lien.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.querySelector<HTMLElement>("#menu-mobile a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="container-page flex h-16 items-center gap-8">
          <Link href="/" onClick={close} className="flex items-center gap-2.5 font-serif text-[28px] leading-none">
            <Embleme />
            {siteConfig.name}
          </Link>
          <nav aria-label="Menu principal" className="hidden gap-6 text-[15px] text-ink/80 lg:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} prefetch={false} className="hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link href="/ma-liste" className="ml-auto hidden items-center text-[15px] font-semibold hover:text-accent lg:inline-flex">
            Ma liste d&apos;envies
            <ListeCount />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={`ml-auto rounded-full border px-4 py-1.5 text-[14px] lg:hidden ${open ? "border-accent text-accent" : "border-ink/40"}`}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
        <nav aria-label="Rubriques" className="hidden border-t border-line lg:block">
          <ul className="container-page flex gap-6 py-2.5 text-[14px] text-muted">
            {NAV_RUBRIQUES.map((n) => (
              <li key={n.href}>
                <Link href={n.href} prefetch={false} aria-current={pathname.startsWith(n.href) ? "page" : undefined} className="hover:text-accent aria-[current=page]:font-semibold aria-[current=page]:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {open && (
        <div id="menu-mobile" className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-5 pt-20 pb-6 lg:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} prefetch={false} onClick={close} className="border-b border-line py-3 font-serif text-[36px] leading-none hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link href="/ma-liste" onClick={close} className="mt-6 flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4 font-serif text-2xl">
            <span>Ma liste d&apos;envies</span>
            <ListeCount />
          </Link>
          <nav aria-label="Rubriques" className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-[15px]">
            {NAV_RUBRIQUES.map((n) => (
              <Link key={n.href} href={n.href} prefetch={false} onClick={close} className="hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-10 text-xs text-muted">
            <Link href="/notre-demarche" onClick={close}>Notre démarche</Link>
            <Link href="/mentions-legales" onClick={close}>Mentions légales</Link>
            <Link href="/confidentialite" onClick={close}>Confidentialité</Link>
            <Link href="/conditions" onClick={close}>Conditions</Link>
            <EmailLink email={siteConfig.contactEmail} />
          </div>
        </div>
      )}
    </>
  );
}
