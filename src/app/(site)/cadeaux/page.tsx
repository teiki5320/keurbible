import type { Metadata } from "next";
import { CarteLien, GrilleLiens } from "@/components/layout/CarteLien";
import { PageHeader } from "@/components/layout/Section";
import { OCCASIONS, objetsOfOccasion } from "@/lib/catalogue";
import { siteConfig } from "@/lib/config";
import { getMaintenance } from "@/lib/data/settings";
import { itemListLd, jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cadeaux chrétiens par occasion",
  description: "Baptême, première communion, confirmation, mariage, Noël, fête des mères : nos idées de cadeaux chrétiens selon l'occasion et selon celui qui offre.",
  path: "/cadeaux",
});

/** Page Cadeaux : une carte par occasion. */
export default function CadeauxPage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd("Cadeaux chrétiens par occasion", OCCASIONS.map((o) => ({ name: o.titre, url: `${siteConfig.url}/cadeaux/${o.slug}` })))) }}
      />
      <PageHeader
        title="Cadeaux chrétiens par occasion"
        intro="Un baptême, une première communion, un mariage, Noël ou un deuil : pour chaque moment, nos idées de cadeaux, ce qu'il faut savoir de la fête dans les différentes Églises, et des pistes selon celui qui offre."
      />
      <div className="container-page">
        <GrilleLiens>
          {OCCASIONS.map((o) => (
            <li key={o.slug}>
              <CarteLien href={`/cadeaux/${o.slug}`} surtitre={`${objetsOfOccasion(o.slug).length} idées`} titre={o.nom} texte={o.intro} action="Voir les idées" />
            </li>
          ))}
        </GrilleLiens>
      </div>
    </>
  );
}
