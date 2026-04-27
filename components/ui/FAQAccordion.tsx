'use client'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group border border-[var(--color-cream-dark)] rounded-xl overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-body font-semibold text-[var(--color-espresso)] bg-[var(--color-cream-light)] hover:bg-[var(--color-cream-dark)] transition-colors select-none">
            <span>{faq.q}</span>
            <span className="text-[var(--color-forest)] text-xl font-light shrink-0 transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-6 py-4 font-body text-sm text-[var(--color-arabica)] leading-relaxed bg-white border-t border-[var(--color-cream-dark)]">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  )
}
