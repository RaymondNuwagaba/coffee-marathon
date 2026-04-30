import Image from 'next/image'
import { Trophy, Building2, Star } from 'lucide-react'

export default function BeyondTheRaceSection() {
  return (
    <section className="bg-[var(--color-bg-warm)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
            <span className="font-body text-xs uppercase tracking-widest text-[var(--color-logo-forest)] font-semibold">
              Beyond the Race
            </span>
            <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
            More than a marathon
          </h2>
          <p className="font-body text-lg text-[var(--color-text-mid)]">
            The Coffee Marathon weekend is a celebration of Uganda&apos;s coffee culture — featuring industry events, awards, and experiences that go far beyond the finish line.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Coffee Excellence Award */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-amber-light)]/30 flex items-center justify-center mb-6">
              <Trophy size={28} className="text-[var(--color-logo-forest)]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[var(--color-text-dark)] mb-3">
              Africa Coffee Awards
            </h3>
            <p className="font-body text-[var(--color-text-mid)] leading-relaxed text-sm mb-4">
              A prestigious platform that recognises and celebrates excellence, innovation, and leadership across Africa&apos;s coffee value chain. It honours outstanding farmers, brands, and industry players driving quality, sustainability, and growth in the coffee sector.
            </p>
            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className="font-body text-xs text-[var(--color-text-light)] uppercase tracking-widest font-semibold">Recognises</p>
              <ul className="mt-2 space-y-1">
                {['Outstanding farmers', 'Innovation in coffee', 'Sustainability leaders', 'Community champions'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-[var(--color-text-mid)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coffee Convention & Expo */}
          <div className="bg-[var(--color-amber)] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/convention-expo.jpg"
                alt="Coffee Convention & Expo"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Building2 size={28} className="text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
                <span className="font-body text-xs font-semibold text-white">1–2 Oct 2026 · Kampala</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                The Coffee Convention & Expo
              </h3>
              <p className="font-body text-white/90 leading-relaxed text-sm mb-4">
                The Convention convenes key players across the coffee value chain to explore innovation, policy, and investment opportunities. Projected growth to a $5 billion coffee revenue target by 2030.
              </p>
              <div className="bg-white/20 rounded-xl px-4 py-3">
                <p className="font-body text-xs text-white/80 uppercase tracking-widest font-semibold mb-1">Theme</p>
                <p className="font-body text-sm text-white font-medium italic">
                  &ldquo;Accelerating Coffee Value Addition & Coffee Tourism for Job Creation and Export Growth&rdquo;
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-display text-3xl font-bold text-white">$5B</span>
                <span className="font-body text-sm text-white/80">revenue target by 2030</span>
              </div>
            </div>
          </div>

          {/* Barista Championships + more */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-orange)]/10 flex items-center justify-center mb-6">
              <Star size={28} className="text-[var(--color-orange)]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[var(--color-text-dark)] mb-3">
              Inspire Africa Barista Championships
            </h3>
            <p className="font-body text-[var(--color-text-mid)] leading-relaxed text-sm mb-4">
              A competitive platform showcasing the skills and creativity of baristas from across the region. It promotes excellence, innovation, and professionalism in coffee preparation.
            </p>
            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className="font-body text-xs text-[var(--color-text-light)] uppercase tracking-widest font-semibold mb-2">Also includes</p>
              <ul className="space-y-1">
                {['Coffee Cupping', 'Coffee Workshops', 'Farm Expeditions', 'Coffee Artistry', 'The Roasters Parade'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-[var(--color-text-mid)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Africa Coffee Festival teaser */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/africa-coffee-fest.jpg"
              alt="Africa Coffee Festival"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[var(--color-text-dark)]/75" />
          </div>
          <div className="relative z-10 py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-logo-forest)] font-semibold mb-2">High-Level Coffee Summit</p>
              <h3 className="font-display text-3xl font-bold text-white mb-2">
                Shaping the future of Africa&apos;s coffee sector
              </h3>
              <p className="font-body text-white/70 text-sm max-w-lg">
                A strategic forum convening policymakers, industry leaders, and investors. Focused on policy dialogue, investment opportunities, and collaborative solutions to drive value addition and global competitiveness.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <p className="font-display text-5xl font-bold text-[var(--color-logo-forest)]">12</p>
              <p className="font-body text-sm text-white/70">festival<br />experiences</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
