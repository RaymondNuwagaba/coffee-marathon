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
    <article className="group flex h-full flex-col rounded-[22px] border border-[var(--line)] bg-white/90 p-6 shadow-[0_1px_0_rgba(26,15,8,0.03)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[rgba(13,91,71,0.18)] hover:bg-white hover:shadow-[var(--shadow-hover)]">
      <div className="mb-5">
        <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--green-mid)]">
          {label}
        </p>
        <h3 className="mt-2 font-display text-[2.75rem] leading-none tracking-tight text-[var(--ink)] sm:text-5xl">
          {distance}
        </h3>
      </div>

      <p className="font-body text-sm leading-relaxed text-[rgba(26,15,8,0.68)]">
        {displayText}
      </p>

      {expanded && terrain && (
        <div className="mt-5 space-y-3 border-t border-[var(--line)] pt-4">
          <div>
            <span className="font-label text-[11px] uppercase tracking-[0.12em] text-[var(--green-mid)]">
              Terrain
            </span>
            <p className="mt-1 font-body text-sm text-[var(--ink)]">{terrain}</p>
          </div>
          {startTime && (
            <div>
              <span className="font-label text-[11px] uppercase tracking-[0.12em] text-[var(--green-mid)]">
                Start Time
              </span>
              <p className="mt-1 font-body text-sm text-[var(--ink)]">{startTime}</p>
            </div>
          )}
          {cutOff && (
            <div>
              <span className="font-label text-[11px] uppercase tracking-[0.12em] text-[var(--green-mid)]">
                Cut-off
              </span>
              <p className="mt-1 font-body text-sm text-[var(--ink)]">{cutOff}</p>
            </div>
          )}
          {included && included.length > 0 && (
            <div>
              <span className="font-label text-[11px] uppercase tracking-[0.12em] text-[var(--green-mid)]">
                Included
              </span>
              <ul className="mt-2 space-y-1.5">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-[var(--ink)]">
                    <CheckCircle2 size={14} className="shrink-0 text-[var(--green-light)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--line)] pt-5">
        <span className="font-heading text-lg font-bold text-[var(--ink)]">{price}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-label text-xs font-bold uppercase tracking-[0.1em] text-[var(--green-primary)]"
        >
          Register
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}
