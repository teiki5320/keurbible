import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { AMAZON_DISCLOSURE } from "@/lib/amazon";
import { legalConfig, siteConfig } from "@/lib/config";
import { EmailLink } from "@/components/layout/EmailLink";

export const metadata: Metadata = pageMetadata({
  title: "Conditions générales d'utilisation",
  description:
    "Conditions d'utilisation du site Keur Bible : sélections d'objets chrétiens, conseils et liens d'achat vers Amazon.",
  path: "/conditions",
});

export default function TermsPage() {
  const l = legalConfig;
  return (
    <LegalPage title="Conditions générales d'utilisation" updated="29 octobre 2026">
      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes conditions générales d&apos;utilisation (CGU) encadrent l&apos;accès au site {siteConfig.url}, édité
        par {l.companyName}, {l.legalForm}, dont le siège est situé {l.address} (ci-après « l&apos;Éditeur »). Le site
        présente une sélection d&apos;objets chrétiens pour la maison et à offrir (Bibles, croix, chapelets, art chrétien,
        crèches, livres), des conseils et des liens vers ces objets sur Amazon.fr.
        Utiliser le site vaut acceptation des présentes CGU.
      </p>

      <h2>Article 2 — Accès au site</h2>
      <p>
        Le site est accessible gratuitement, sans inscription. L&apos;Éditeur peut suspendre l&apos;accès, notamment pour
        maintenance, sans que sa responsabilité puisse être engagée.
      </p>

      <h2>Article 3 — Le site ne vend rien</h2>
      <p>
        L&apos;Éditeur ne vend, n&apos;expédie ni ne facture aucun objet. Les boutons « Voir sur Amazon » renvoient vers des fiches
        ou des recherches Amazon.fr : la vente est conclue entre l&apos;acheteur et Amazon ou le vendeur tiers indiqué sur Amazon, selon leurs
        propres conditions. La livraison, le droit de rétractation, les garanties et le service client
        relèvent de ce vendeur.
      </p>
      <p>
        Les descriptions du site présentent des types d&apos;objets et sont données à titre d&apos;information ; seule la fiche
        Amazon fait foi pour l&apos;objet vendu (matière, dimensions, vendeur). Le site n&apos;affiche aucun prix : seul le prix
        indiqué sur Amazon au moment de l&apos;achat fait foi.
      </p>
      <p>{AMAZON_DISCLOSURE}</p>

      <h2>Article 4 — Sélections, conseils et textes bibliques</h2>
      <p>
        Les sélections, Top 10 et conseils reflètent l&apos;avis de la rédaction ; ce ne sont pas des palmarès officiels. Ils
        s&apos;adressent aux chrétiens de toutes les Églises, sans prendre parti entre elles. Les versets bibliques sont cités
        dans la traduction Louis Segond 1910, qui est dans le domaine public. Les illustrations éventuelles sont créées pour
        {siteConfig.name} et ne représentent pas les objets vendus.
      </p>

      <h2>Article 5 — Propriété intellectuelle</h2>
      <p>
        Les textes (présentations, sélections, articles) et éléments graphiques du site sont protégés par le droit de la propriété
        intellectuelle. Toute reproduction sans autorisation préalable est interdite, hormis le partage d&apos;un lien vers
        une page du site.
      </p>

      <h2>Article 6 — Responsabilité</h2>
      <p>
        L&apos;Éditeur s&apos;efforce de fournir des informations exactes mais ne peut garantir l&apos;absence
        d&apos;erreur. Il n&apos;est pas responsable du contenu des sites vers lesquels renvoient les liens, notamment
        Amazon.fr.
      </p>

      <h2>Article 7 — Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. Pour toute question :{" "}
        <EmailLink email={siteConfig.contactEmail} />.
      </p>
    </LegalPage>
  );
}
