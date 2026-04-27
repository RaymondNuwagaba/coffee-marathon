interface TestimonialCardProps {
  quote: string
  name: string
  category: string
}

export default function TestimonialCard({ quote, name, category }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border-l-4 border-[var(--color-espresso)] shadow-sm hover:shadow-md transition-shadow">
      <blockquote className="font-display text-lg italic text-[var(--color-espresso)] leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-body font-semibold text-[var(--color-espresso)]">{name}</p>
        <p className="font-body text-sm text-[var(--color-forest)]">{category}</p>
      </div>
    </div>
  )
}
