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
      ? 'bg-[var(--color-forest)] text-[var(--color-cream)] hover:bg-[var(--color-forest-light)]'
      : 'bg-[var(--color-latte)] text-[var(--color-espresso)] hover:bg-[var(--color-latte-light)]'

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <Link
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-200 shadow-sm ${btnClass}`}
        onClick={() => {
          if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: Function }).gtag === 'function') {
            ;(window as Window & { gtag?: Function }).gtag!('event', 'pinnket_click', {
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
        <p className="font-body text-xs text-[var(--color-arabica)]">
          Secure registration via Pinnket, our official ticketing partner.
        </p>
      )}
    </div>
  )
}

export default PinnketCTA
