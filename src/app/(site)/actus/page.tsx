import type { Metadata } from "next";
import { BlocActus } from "@/components/actus/BlocActus";
import { PageHeader } from "@/components/layout/Section";
import { getMaintenance } from "@/lib/data/settings";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Actus de la culture chrétienne en Afrique",
  description: "Fêtes et pèlerinages, gospel, art sacré, livres et films : la culture chrétienne en Afrique et dans la diaspora, résumée chaque jour avec ses sources.",
  path: "/actus",
});

/** Page « Actus » : les 20 dernières actus de la culture chrétienne en Afrique, lues en direct depuis la veille. */
export default function ActusPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <PageHeader
        title="Actus de la culture chrétienne en Afrique"
        intro="Fêtes et pèlerinages, gospel et musique chrétienne, art sacré et patrimoine, livres et films : la culture chrétienne en Afrique et dans la diaspora. Touchez une actu pour lire l'article complet, rédigé par nos soins à partir de sources citées. Mise à jour deux fois par jour."
      />
      <div className="container-page">
        <BlocActus limite={20} prioritaire avecMiseAJour siVide="Les actus arrivent bientôt : revenez dans quelques heures." />
      </div>
    </>
  );
}
