import { ArrowRight } from 'lucide-react'
import { PINNKET } from '@/lib/pinnket'

interface RaceCardProps {
  distance: string
  label: string
  color?: string
  textColor?: string
  price: string
  desc?: string
  description?: string
  pinnketKey?: keyof typeof PINNKET
  pinnketUrl?: string
  expanded?: boolean
  terrain?: string
  cutOff?: string
  included?: string[]
  startTime?: string
}

const distanceColors: Record<string, { color: string; textColor: string }> = {
  '5 KM': { color: 'bg-[var(--color-green)]', textColor: 'text-white' },
  '10 KM': { color: 'bg-[var(--color-orange)]', textColor: 'text-white' },
  '21 KM': { color: 'bg-[var(--color-primary)]', textColor: 'text-white' },
  '42 KM': { color: 'bg-[var(--color-dark)]', textColor: 'text-white' },
}

export default function RaceCard({
  distance,
  label,
  color,
  textColor,
  price,
  desc,
  description,
  pinnketKey,
  pinnketUrl,
  expanded = false,
  terrain,
  cutOff,
  included,
  startTime,
}: RaceCardProps) {
  const fallback = distanceColors[distance] ?? { color: 'bg-[var(--color-dark)]', textColor: 'text-white' }
  const cardColor = color ?? fallback.color
  const cardText = textColor ?? fallback.textColor
  const displayText = desc ?? description ?? ''
  const href = pinnketUrl ?? (pinnketKey ? PINNKET[pinnketKey] : '#register')

  return (
    <div
      className={`${cardColor} ${cardText} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] hover:shadow-xl transition-all duration-300`}
    >
      <div>
        <span className="font-label text-xs font-bold uppercase tracking-[0.1em] opacity-80">{label}</span>
        <div className="font-display text-5xl font-bold mt-1 leading-none">{distance}</div>
      </div>

      <p className="font-body text-sm opacity-80 leading-relaxed">{displayText}</p>

      {expanded && terrain && (
        <div className="space-y-3 border-t border-current/10 pt-4">
          <div>
            <span className="font-body text-xs uppercase tracking-wider opacity-60">Terrain</span>
            <p className="font-body text-sm mt-0.5">{terrain}</p>
          </div>
          {startTime && (
            <div>
              <span className="font-body text-xs uppercase tracking-wider opacity-60">Start Time</span>
              <p className="font-body text-sm mt-0.5">{startTime}</p>
            </div>
          )}
          {cutOff && (
            <div>
              <span className="font-body text-xs uppercase tracking-wider opacity-60">Cut-off</span>
              <p className="font-body text-sm mt-0.5">{cutOff}</p>
            </div>
          )}
          {included && included.length > 0 && (
            <div>
              <span className="font-body text-xs uppercase tracking-wider opacity-60">Included</span>
              <ul className="mt-1 space-y-1">
                {included.map((item) => (
                  <li key={item} className="font-body text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between">
        <span className="font-display text-lg font-semibold">{price}</span>
        {expanded ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white bg-white/15 font-label font-bold uppercase tracking-[0.08em] text-xs hover:bg-white/25 transition-colors"
          >
            Register for {distance}
            <ArrowRight size={12} />
          </a>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white bg-white/15 font-label font-bold uppercase tracking-[0.08em] text-xs hover:bg-white/25 transition-colors"
          >
            Register
            <ArrowRight size={12} />
          </a>
        )}
      </div>
    </div>
  )
}
