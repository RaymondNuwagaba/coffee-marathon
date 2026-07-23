import { MapPin, ExternalLink } from 'lucide-react'

/**
 * Keyless Google Maps embed. The `output=embed` form of the classic maps URL
 * needs no API key and no billing account, which keeps the site deployable
 * without extra client setup. Swap `query` for a Maps Embed API URL later if
 * the client wants a styled or marker-annotated map.
 */
const VENUE_QUERY = 'Inspire Africa Coffee Park, Rwashamaire, Ntungamo, Uganda'

interface VenueMapProps {
  /** Place name or address to centre on. Defaults to the race venue. */
  query?: string
  /** Google zoom level, 1 (world) to 21 (building). */
  zoom?: number
  /** Tailwind aspect utility for the frame. */
  aspect?: string
  className?: string
  /** Accessible name for the frame, and the label on the directions link. */
  label?: string
  /** Show the "Open in Google Maps" link below the frame. */
  showLink?: boolean
}

export default function VenueMap({
  query = VENUE_QUERY,
  zoom = 13,
  aspect = 'aspect-video',
  className = '',
  label = 'Africa Coffee Park, Ntungamo, Uganda',
  showLink = true,
}: VenueMapProps) {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&hl=en&output=embed`
  const linkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

  return (
    <div className={className}>
      <div
        className={`${aspect} rounded-2xl overflow-hidden border relative`}
        style={{ backgroundColor: 'var(--green-pale)', borderColor: 'rgba(26,107,58,0.2)' }}
      >
        {/* The placeholder sits behind the frame, so a blocked or slow embed
            still shows something branded rather than a white rectangle. */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MapPin size={28} style={{ color: 'var(--green-primary)', opacity: 0.35 }} />
        </div>
        <iframe
          src={embedSrc}
          title={`Map of ${label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      {showLink && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold transition-colors"
          style={{ color: 'var(--green-primary)' }}
        >
          <MapPin size={14} />
          Get directions to {label}
          <ExternalLink size={12} />
        </a>
      )}
    </div>
  )
}
