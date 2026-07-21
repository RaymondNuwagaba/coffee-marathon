import { ArrowRight, CheckCircle2 } from 'lucide-react'
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

export default function RaceCard({
  distance,
  label,
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
  const displayText = desc ?? description ?? ''
  const href = pinnketUrl ?? (pinnketKey ? PINNKET[pinnketKey] : '#register')

  return (
    <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300" style={{ borderColor: 'rgba(26,107,58,0.2)' }}>
      {/* Header */}
      <div className="px-6 pt-6 pb-4" style={{ backgroundColor: 'var(--green-pale)' }}>
        <span
          className="font-label text-xs font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
        >
          {label}
        </span>
        <div
          className="font-display text-5xl font-bold mt-2 leading-none"
          style={{ color: 'var(--green-deep)' }}
        >
          {distance}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>{displayText}</p>

        {expanded && terrain && (
          <div className="space-y-3 border-t pt-4" style={{ borderColor: 'rgba(26,107,58,0.12)' }}>
            <div>
              <span className="font-body text-xs uppercase tracking-wider" style={{ color: 'var(--green-mid)' }}>Terrain</span>
              <p className="font-body text-sm mt-0.5" style={{ color: 'var(--brown-dark)' }}>{terrain}</p>
            </div>
            {startTime && (
              <div>
                <span className="font-body text-xs uppercase tracking-wider" style={{ color: 'var(--green-mid)' }}>Start Time</span>
                <p className="font-body text-sm mt-0.5" style={{ color: 'var(--brown-dark)' }}>{startTime}</p>
              </div>
            )}
            {cutOff && (
              <div>
                <span className="font-body text-xs uppercase tracking-wider" style={{ color: 'var(--green-mid)' }}>Cut-off</span>
                <p className="font-body text-sm mt-0.5" style={{ color: 'var(--brown-dark)' }}>{cutOff}</p>
              </div>
            )}
            {included && included.length > 0 && (
              <div>
                <span className="font-body text-xs uppercase tracking-wider" style={{ color: 'var(--green-mid)' }}>Included</span>
                <ul className="mt-1 space-y-1">
                  {included.map((item) => (
                    <li key={item} className="font-body text-sm flex items-center gap-2" style={{ color: 'var(--brown-dark)' }}>
                      <CheckCircle2 size={12} style={{ color: 'var(--green-light)' }} className="shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(26,107,58,0.12)' }}>
          <span className="font-heading text-lg font-semibold" style={{ color: 'var(--brown-mid)' }}>{price}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-label font-bold uppercase tracking-[0.08em] text-xs transition-colors"
            style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
          >
            Register
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}
