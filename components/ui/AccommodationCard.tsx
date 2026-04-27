import Link from 'next/link'
import { ExternalLink, MapPin } from 'lucide-react'
import { SanityImage } from '@/components/ui/SanityImage'
import type { Accommodation } from '@/types/sanity'

interface AccommodationCardProps {
  accommodation: Accommodation
}

const typeColors: Record<string, string> = {
  Hotel: 'bg-[var(--color-espresso)] text-[var(--color-cream)]',
  Lodge: 'bg-[var(--color-forest)] text-[var(--color-cream)]',
  Guesthouse: 'bg-[var(--color-arabica)] text-[var(--color-cream)]',
  Camping: 'bg-[var(--color-seedling)] text-[var(--color-espresso)]',
  Hostel: 'bg-[var(--color-latte)] text-[var(--color-espresso)]',
}

export function AccommodationCard({ accommodation: acc }: AccommodationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-cream-dark)] hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] bg-[var(--color-cream-dark)] relative overflow-hidden">
        {acc.image ? (
          <SanityImage
            image={acc.image}
            alt={acc.name}
            width={600}
            height={340}
            className="object-cover w-full h-full"
            fill
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-body text-xs text-[var(--color-arabica)]/40">Photo coming soon</span>
          </div>
        )}
        <span
          className={`absolute top-3 left-3 font-body text-xs font-semibold px-2.5 py-1 rounded-full ${
            typeColors[acc.type] ?? 'bg-[var(--color-cream-dark)] text-[var(--color-espresso)]'
          }`}
        >
          {acc.type}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-[var(--color-espresso)] mb-1">{acc.name}</h3>

        {acc.distanceKm !== undefined && (
          <div className="flex items-center gap-1 mb-2">
            <MapPin size={12} className="text-[var(--color-arabica)]" />
            <span className="font-body text-xs text-[var(--color-arabica)]">
              {acc.distanceKm === 0 ? 'On-site' : `${acc.distanceKm} km from venue`}
            </span>
          </div>
        )}

        {acc.description && (
          <p className="font-body text-sm text-[var(--color-arabica)] leading-relaxed mb-3 line-clamp-3">
            {acc.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {acc.priceRange && (
            <span className="font-body text-xs font-semibold text-[var(--color-forest)]">{acc.priceRange}</span>
          )}
          {acc.website && (
            <Link
              href={acc.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-xs font-semibold text-[var(--color-forest)] hover:text-[var(--color-forest-light)] transition-colors"
            >
              Book <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
