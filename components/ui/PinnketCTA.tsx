'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface PinnketCTAProps {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  showNote?: boolean
  className?: string
}

interface WindowWithGtag extends Window {
  gtag?: (eventName: 'event', action: string, params: Record<string, string>) => void
}

export function PinnketCTA({
  href,
  label,
  variant = 'primary',
  showNote = false,
  className = '',
}: PinnketCTAProps) {
  const isExternal = href.startsWith('http')

  const btnClass =
    variant === 'primary'
      ? 'bg-[var(--color-accent)] text-[var(--color-dark)] hover:bg-[var(--color-amber-dark)]'
      : 'bg-[var(--color-primary)] text-white hover:bg-[#B52222]'

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <Link
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm transition-all duration-200 shadow-sm ${btnClass}`}
        onClick={() => {
          const gtag = (window as WindowWithGtag).gtag
          if (typeof gtag === 'function') {
            gtag('event', 'pinnket_click', {
              label,
              page: window.location.pathname,
            })
          }
        }}
      >
        {label}
        {isExternal && <ExternalLink size={14} />}
      </Link>
      {showNote && (
        <p className="font-body text-xs text-[var(--color-text-muted)]">
          Secure registration via Pinnket, our official ticketing partner.
        </p>
      )}
    </div>
  )
}

export default PinnketCTA
