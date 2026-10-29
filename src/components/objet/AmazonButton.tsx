/**
 * Bouton « Voir sur Amazon » (lien partenaire, nouvel onglet). Aucun prix affiché : seul celui d'Amazon fait foi
 * (même libellé que les autres sites Keur). Toujours au moins 44 px de haut (min-h-11), pour le doigt.
 */
export function AmazonButton({ href, nom, small = false, className = "" }: { href: string; nom: string; small?: boolean; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label={`Voir sur Amazon : ${nom}, lien partenaire (nouvel onglet)`}
      className={`${small ? "btn-primary min-h-11 px-4 py-2 text-[13px]" : "btn-primary min-h-11"} ${className}`}
    >
      Voir sur Amazon
    </a>
  );
}

/**
 * Petites lignes sous les boutons Amazon : lien partenaire, puis (sans ASIN vérifié) rappel que le bouton
 * ouvre une recherche, où l'on choisit soi-même le modèle.
 */
export function AmazonNote({ recherche = false, className = "" }: { recherche?: boolean; className?: string }) {
  return (
    <div className={`mt-2 space-y-1 text-[11.5px] leading-snug text-faint ${className}`}>
      <p>Lien partenaire Amazon. Prix, disponibilité et vendeur sont indiqués sur Amazon.</p>
      {recherche && <p>Le lien ouvre une recherche Amazon : comparez les modèles avant de choisir.</p>}
    </div>
  );
}
