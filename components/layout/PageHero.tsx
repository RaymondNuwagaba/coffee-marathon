interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--green-deep)] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(244,196,58,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(30,112,91,0.45), transparent 40%)',
        }}
      />
      <div className="site-container relative max-w-4xl text-center">
        {label && (
          <p className="mb-4 font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
            {label}
          </p>
        )}
        <h1 className="font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95] tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/75 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
