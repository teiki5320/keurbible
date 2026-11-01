/** Données structurées sérialisées pour une balise <script type="application/ld+json"> (« < » échappé). */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Fil d'Ariane pour Google (BreadcrumbList) à partir de couples nom / adresse complète. */
export function breadcrumbLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

/** Liste de pages (ItemList) pour les pages d'entrée : livres, BD, auteurs, pays, conseils. */
export function itemListLd(name: string, items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: it.url })),
  };
}

/**
 * Questions fréquentes (FAQPage), seulement pour une FAQ affichée sur la page. Les liens Markdown des réponses
 * sont réduits à leur texte. Renvoie null s'il n'y a aucune question, pour ne rien publier.
 */
export function faqLd(items: Array<{ q: string; a: string }> | undefined) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") },
    })),
  };
}
