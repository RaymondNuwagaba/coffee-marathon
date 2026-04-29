interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    /* pt-40 = announcement bar (≈32px) + nav (80px) + extra space (48px) */
    <section className="relative bg-[var(--color-bg-warm)] pt-40 pb-16 overflow-hidden">
      {/* Bright decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-amber)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent-green)]/8 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />
      {/* Amber accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-amber)] via-[var(--color-amber-light)] to-[var(--color-accent-green)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            {label}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text-dark)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-lg text-[var(--color-text-mid)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
