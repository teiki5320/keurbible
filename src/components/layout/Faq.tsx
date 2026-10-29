import { RichText } from "@/components/top10/RichText";
import type { Faq as FaqItem } from "@/lib/types";

/** Questions fréquentes, repliables (liens internes possibles dans les réponses). */
export function Faq({ items, titre = "Questions fréquentes", id = "questions" }: { items: FaqItem[]; titre?: string; id?: string }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="section-title">
        {titre}
      </h2>
      <div className="mt-5 border-b border-line">
        {items.map((f) => (
          <details key={f.q} className="group border-t border-line py-4">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 text-[17px] font-semibold hover:text-accent [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden className="text-xl leading-none text-gold transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/80">
              <RichText text={f.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
