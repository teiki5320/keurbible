"use client";

import { HeartOff, HeartPlus } from "lucide-react";
import { useListe } from "@/lib/liste";

/** « Ajouter à ma liste » / « Dans ma liste » (liste d'envies gardée dans le navigateur). */
export function ListeButton({ slug, nom, className = "" }: { slug: string; nom: string; className?: string }) {
  const { has, toggle } = useListe();
  const dedans = has(slug);
  const Icon = dedans ? HeartOff : HeartPlus;
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={dedans}
      aria-label={dedans ? `Retirer ${nom} de ma liste d'envies` : `Ajouter ${nom} à ma liste d'envies`}
      className={`btn-secondary min-h-11 px-4 py-2 text-[13px] ${dedans ? "border-accent text-accent" : ""} ${className}`}
    >
      <Icon className="size-4" aria-hidden />
      {dedans ? "Dans ma liste" : "Ma liste"}
    </button>
  );
}
