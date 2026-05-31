import Link from 'next/link'
import { ExternalLink, MapPin } from 'lucide-react'
import { SanityImage } from '@/components/ui/SanityImage'
import type { Accommodation } from '@/types/sanity'

interface AccommodationCardProps {
  accommodation: Accommodation
}

const typeColors: Record<string, { bg: string; color: string }> = {
  Hotel:      { bg: 'var(--green-primary)', color: 'white' },
  Lodge:      { bg: 'var(--green-mid)',     color: 'white' },
  Guesthouse: { bg: 'var(--green-pale)',    color: 'var(--green-deep)' },
  Camping:    { bg: 'var(--green-light)',   color: 'white' },
  Hostel:     { bg: 'var(--brown-mid)',     color: 'white' },
}

export function AccommodationCard({ accommodation: acc }: AccommodationCardProps) {
  const typeStyle = typeColors[acc.type] ?? { bg: 'var(--green-pale)', color: 'var(--green-deep)' }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
      style={{ borderColor: 'rgba(26,107,58,0.15)' }}
    >
      <div className="aspect-[16/9] relative overflow-hidden" style={{ backgroundColor: 'var(--green-mist)' }}>
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
            <span className="font-body text-xs" style={{ color: 'var(--green-mid)', opacity: 0.5 }}>Photo coming soon</span>
          </div>
        )}
        <span
          className="absolute top-3 left-3 font-body text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: typeStyle.bg, color: typeStyle.color }}
        >
          {acc.type}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--brown-heading)' }}>{acc.name}</h3>

        {acc.distanceKm !== undefined && (
          <div className="flex items-center gap-1 mb-2">
            <MapPin size={12} style={{ color: 'var(--green-mid)' }} />
            <span className="font-body text-xs" style={{ color: 'var(--brown-dark)' }}>
              {acc.distanceKm === 0 ? 'On-site' : `${acc.distanceKm} km from venue`}
            </span>
          </div>
        )}

        {acc.description && (
          <p className="font-body text-sm leading-relaxed mb-3 line-clamp-3" style={{ color: 'var(--brown-dark)' }}>
            {acc.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          {acc.priceRange && (
            <span className="font-body text-xs font-semibold" style={{ color: 'var(--brown-mid)' }}>{acc.priceRange}</span>
          )}
          {acc.website && (
            <Link
              href={acc.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-xs font-semibold transition-colors"
              style={{ color: 'var(--green-primary)' }}
            >
              Book <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
