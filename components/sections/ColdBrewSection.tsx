import Image from 'next/image'
import { Zap } from 'lucide-react'

export default function ColdBrewSection() {
  const variants = [
    {
      name: 'Malt Coffee',
      desc: 'A caffeine-free substitute made from roasted malted barley with creamy malted milk powder. Rich, smooth, and satisfying.',
      badge: 'Caffeine-Free',
      badgeColor: 'bg-[var(--color-forest)] text-white',
    },
    {
      name: 'Energy Drink',
      desc: 'Combine the smooth, low-acid taste of cold coffee with high-caffeine energy boosters — B-vitamins, guarana, and taurine.',
      badge: 'High Energy',
      badgeColor: 'bg-[var(--color-orange)] text-white',
    },
    {
      name: 'Iced Coffee',
      desc: "Brewed hot at higher strength and immediately chilled. The coffee's traditional brightness and acidity preserved in a refreshing cold beverage.",
      badge: 'Classic',
      badgeColor: 'bg-[var(--color-amber)] text-white',
    },
  ]

  return (
    <section className="bg-[var(--color-amber)] py-20 md:py-24 overflow-hidden relative">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-amber-light)]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-orange)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
              <Zap size={14} className="text-[var(--color-logo-deep-brown)]" fill="currentColor" />
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-logo-deep-brown)] font-semibold">
                IAC Cold Brew
              </span>
            </div>

            {/* <!-- GENERATED: review this --> */}
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-logo-forest)] leading-tight mb-4">
              Come<br />
              <span className="italic">Sip</span> &amp;<br />
              Run
            </h2>

            <p className="font-body text-[var(--color-logo-deep-brown)] text-lg leading-relaxed mb-6 max-w-md">
              Fuel your race day with IAC Cold Brew — the official coffee drink of the Coffee Marathon. Smooth, energising, and crafted from Uganda&apos;s finest beans.
            </p>

            <p className="font-body text-[var(--color-logo-warm-brown)] text-base leading-relaxed mb-8 max-w-md">
              The target market is a young, urban, and highly expressive audience — socially active, digitally connected, and constantly on the move. It&apos;s a statement of energy, independence, and elevated taste.
            </p>

            {/* Variants */}
            <div className="space-y-3">
              {variants.map(({ name, desc, badge, badgeColor }) => (
                <div key={name} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-body font-semibold text-[var(--color-logo-deep-brown)]">{name}</p>
                    <span className={`font-body text-xs px-2 py-0.5 rounded-full font-semibold ${badgeColor}`}>{badge}</span>
                  </div>
                  <p className="font-body text-sm text-[var(--color-logo-warm-brown)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/images/cold-brew-product.jpg"
                  alt="IAC Cold Brew — Inspire Africa Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-orange-dark)]/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="font-display text-xs font-bold text-[var(--color-text-dark)] leading-tight">Sip &</p>
                  <p className="font-display text-xs font-bold text-[var(--color-amber)] leading-tight">Run</p>
                </div>
              </div>

              {/* Bottom tagline */}
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-3 text-center">
                <p className="font-body text-xs font-semibold text-[var(--color-text-dark)] uppercase tracking-widest">
                  Official Drink of The Coffee Marathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
