import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

interface AttractionCardProps {
  name: string
  description: string
  tips?: string
  slug: string
  imageLabel?: string
}

export default function AttractionCard({
  name,
  description,
  tips,
  slug,
  imageLabel,
}: AttractionCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
      <div className="aspect-[4/3] bg-[var(--color-cream-dark)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest)]/10 to-[var(--color-espresso)]/10" />
        <div className="text-center z-10">
          <MapPin size={24} className="text-[var(--color-arabica)] opacity-40 mx-auto mb-1" />
          <span className="font-body text-xs text-[var(--color-arabica)] opacity-50">
            {imageLabel ?? `Photo of ${name} — to be added`}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-[var(--color-espresso)] mb-2 group-hover:text-[var(--color-forest)] transition-colors">
          {name}
        </h3>
        <p className="font-body text-sm text-[var(--color-arabica)] mb-3 leading-relaxed">
          {description}
        </p>
        {tips && (
          <p className="font-body text-xs text-[var(--color-forest-dark)] bg-[var(--color-seedling-light)] px-3 py-2 rounded-lg mb-3">
            💡 {tips}
          </p>
        )}
        <Link
          href={`/attractions#${slug}`}
          className="font-body text-sm font-semibold text-[var(--color-forest)] flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
