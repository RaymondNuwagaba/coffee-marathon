interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="relative bg-[var(--color-espresso)] pt-32 pb-20 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-espresso)] via-[var(--color-espresso-light)] to-[var(--color-espresso-dark)] opacity-80" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-latte)] mb-4">
            {label}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-cream)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-lg text-[var(--color-cream)]/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
