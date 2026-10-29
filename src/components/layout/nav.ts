import { PLAN_RUBRIQUES } from "@/lib/contenus/plan";

/** Menu principal (en-tête et pied de page). */
export const NAV = [
  { href: "/cadeaux", label: "Cadeaux" },
  { href: "/afro", label: "Art afro" },
  { href: "/top-10", label: "Top 10" },
  { href: "/psaumes", label: "Psaumes" },
  { href: "/conseils", label: "Conseils" },
  { href: "/actus", label: "Actus" },
] as const;

/** Les rubriques d'objets (bande sous l'en-tête, menu mobile, pied de page). */
export const NAV_RUBRIQUES = PLAN_RUBRIQUES.map((r) => ({ href: `/${r.slug}`, label: r.nom }));
