import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/Section";
import { AMAZON_DISCLOSURE } from "@/lib/amazon";
import { getMaintenance } from "@/lib/data/settings";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Notre démarche",
  description: "Qui fait Keur Bible, comment nous choisissons les objets, notre respect de toutes les Églises chrétiennes et notre façon de gagner notre vie.",
  path: "/notre-demarche",
});

/** Notre démarche : qui nous sommes, respect de toutes les confessions, choix des objets, liens Amazon. */
export default function DemarchePage() {
  if (getMaintenance().enabled) return null;
  return (
    <>
      <PageHeader
        title="Notre démarche"
        intro="« Keur » veut dire « maison » en wolof. Keur Bible est un guide d'objets chrétiens pour la maison et à offrir, pensé pour les chrétiens francophones, et d'abord pour la diaspora africaine en France."
      />
      <div className="container-page prose-text">
        <h2>Pour toutes les Églises</h2>
        <p>
          Catholiques, protestants, évangéliques, orthodoxes : nous nous adressons à tous, sans prendre parti. Quand les usages
          diffèrent, nous le disons simplement. Un crucifix ou un chapelet appartient plutôt à la tradition catholique, une
          icône à la tradition orthodoxe, une croix sans corps convient à tous : chaque objet porte l&apos;étiquette des
          traditions auxquelles il convient, et le filtre « Pour quelle tradition ? » vous aide à choisir.
        </p>
        <p>Nous ne faisons pas de prosélytisme et nous n&apos;entrons dans aucune polémique.</p>

        <h2>Comment nous choisissons</h2>
        <p>
          Nous présentons des types d&apos;objets précis, choisis pour leur sens, leur usage et leur beauté, et nous écrivons
          nous-mêmes chaque texte. Nous n&apos;inventons ni prix, ni avis, ni note. Nos Top 10 sont nos classements, pas des
          palmarès officiels, et chacun dit son critère.
        </p>
        <p>
          Nous faisons une place particulière à l&apos;<Link href="/afro">art chrétien afro</Link> : Jésus noir, Vierge noire,
          crèches africaines, croix éthiopiennes, pour une foi qui se reconnaît dans les visages et les couleurs de
          l&apos;Afrique.
        </p>

        <h2>Les versets bibliques</h2>
        <p>
          Les versets cités sur le site, dont ceux des <Link href="/psaumes">Psaumes</Link>, sont tirés de la traduction Louis
          Segond 1910, qui est dans le domaine public. Les traductions récentes de la Bible sont présentées dans nos conseils,
          sans être citées.
        </p>

        <h2>Comment le site vit</h2>
        <p>
          Le site ne vend rien. Les boutons « Voir sur Amazon » sont des liens partenaires : {AMAZON_DISCLOSURE} Le prix payé
          reste le même pour vous. Quand nous n&apos;avons pas encore vérifié une référence précise, le bouton ouvre une
          recherche Amazon et vous choisissez vous-même le modèle. Certaines pages affichent aussi de la publicité, toujours
          signalée.
        </p>
        <p>
          Une erreur, une suggestion ? Écrivez-nous à l&apos;adresse indiquée dans les <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </div>
    </>
  );
}
