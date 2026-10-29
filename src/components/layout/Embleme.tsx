/**
 * Emblème provisoire de Keur Bible : une porte en arche (« keur » veut dire « maison » en wolof) qui abrite une croix.
 * Même dessin que les icônes et l'image de partage (scripts/marque.mjs).
 */
export function Embleme({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <path d="M10 60V30a22 22 0 0 1 44 0v30Z" fill="#1e4a7a" />
      <path d="M17 60V31a15 15 0 0 1 30 0v29" fill="none" stroke="#d9b25c" strokeWidth="2.5" />
      <path d="M32 22v30M24 31h16" stroke="#fbf7f1" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}
