interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    /* pt-40 = announcement bar (≈32px) + nav (80px) + extra space (48px) */
    <section
      className="relative pt-40 pb-16 overflow-hidden"
      style={{ backgroundColor: 'var(--green-primary)' }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p
            className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-4"
            style={{ color: 'var(--green-pale)' }}
          >
            {label}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 font-body text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
