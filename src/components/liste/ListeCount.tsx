"use client";

import { useListe } from "@/lib/liste";

/** Nombre d'objets dans la liste d'envies (en-tête). */
export function ListeCount() {
  const { slugs } = useListe();
  if (slugs.length === 0) return null;
  return <span className="ml-2 rounded-full bg-accent px-2.5 py-0.5 font-sans text-xs font-semibold text-white">{slugs.length}</span>;
}
