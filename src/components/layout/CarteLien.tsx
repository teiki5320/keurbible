import Link from "next/link";

/** Carte de lien vers une page du site (rubrique, occasion, Top 10, Psaume) : surtitre, titre, texte court. */
export function CarteLien({ href, surtitre, titre, texte, action = "Découvrir" }: { href: string; surtitre?: string; titre: string; texte?: string; action?: string }) {
  return (
    <Link href={href} prefetch={false} className="group kb-card flex h-full flex-col rounded-xl border border-line bg-white p-5">
      {surtitre && <span className="eyebrow">{surtitre}</span>}
      <span className="mt-1.5 font-serif text-[26px] leading-[1.05] text-balance group-hover:text-accent">{titre}</span>
      {texte && <span className="mt-2 line-clamp-3 text-[14.5px] leading-relaxed text-muted">{texte}</span>}
      <span className="mt-auto pt-3 text-[14px] text-accent">{action} →</span>
    </Link>
  );
}

export function GrilleLiens({ children, colonnes = 3 }: { children: React.ReactNode; colonnes?: 2 | 3 | 4 }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[colonnes];
  return <ul className={`kb-stag grid gap-4 ${cols} [&>li]:h-full`}>{children}</ul>;
}
