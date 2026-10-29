import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/Section";
import { ListeVue } from "@/components/liste/ListeVue";
import { OBJETS, toCartes } from "@/lib/catalogue";
import { getMaintenance } from "@/lib/data/settings";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Ma liste d'envies",
  description: "Votre liste d'envies d'objets chrétiens, gardée dans votre navigateur sans compte, à partager avec vos proches par WhatsApp ou par lien.",
  path: "/ma-liste",
  noindex: true,
});

/** Ma liste d'envies : gardée dans le navigateur, partageable (liste de baptême, de mariage, de Noël…). */
export default function MaListePage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <PageHeader title="Ma liste d'envies" intro="Les objets que vous avez mis de côté. Partagez la liste avec la famille pour un baptême, un mariage ou Noël : chacun pourra choisir son cadeau." />
      <Suspense>
        <ListeVue objets={toCartes(OBJETS, "rubrique")} />
      </Suspense>
    </>
  );
}
