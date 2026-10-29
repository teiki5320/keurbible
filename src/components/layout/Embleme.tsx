/* eslint-disable @next/next/no-img-element -- site statique : images non optimisées par Next.js */
import { withBase } from "@/lib/config";

/** Emblème de Keur Bible (l'Afrique lumineuse et la croix, logo de Jean dans docs/logos/), sans texte. */
export function Embleme({ className = "size-9" }: { className?: string }) {
  return <img src={withBase("/brand/keurbible-embleme.webp")} alt="" width={128} height={128} className={`${className} rounded-md`} />;
}
