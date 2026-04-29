import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
          <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
            Coffee with a Cause
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] leading-tight mb-6">
              More than a race.{' '}
              <span className="text-[var(--color-amber)]">A movement.</span>
            </h2>

            <p className="font-body text-lg text-[var(--color-text-mid)] leading-relaxed mb-6">
              The Coffee Marathon is built on the belief that coffee is more than just a crop — it is a livelihood, a culture, and a story that connects farmers, consumers, and communities. In many regions of Uganda, coffee sustains families and local economies, yet the people behind it often remain invisible.
            </p>

            <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-8">
              Athletics becomes the unifying force. Running has a unique power to mobilize people across backgrounds, ages, and professions. As runners push their limits, they contribute to a broader mission — supporting coffee-growing communities, raising awareness, and inspiring action.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  title: 'Why We Started',
                  desc: 'We saw untapped potential in coffee-growing communities — especially among women — whose labor sustains the industry but whose voices are often overlooked.',
                },
                {
                  title: 'Why We Continue',
                  desc: 'Awareness alone is no longer enough. We have evolved from a moment of recognition into a movement for action — actively changing lives.',
                },
                {
                  title: 'Why It Matters',
                  desc: 'Our long-term vision: create economic resilience through coffee farming — ensuring farmers can withstand market fluctuations, climate challenges, and generational poverty.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 min-h-full bg-[var(--color-amber)] rounded-full shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-[var(--color-text-dark)] mb-1">{title}</p>
                    <p className="font-body text-sm text-[var(--color-text-mid)] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Theme — visually prominent, not plain body text */}
            <div className="bg-[var(--color-accent-green-light)] border-l-4 border-[var(--color-accent-green)] rounded-r-xl px-5 py-4 mb-6">
              <p className="font-body text-xs font-bold text-[var(--color-accent-green)] uppercase tracking-widest mb-1">
                2026 Race Theme
              </p>
              <p className="font-display text-lg font-semibold text-[var(--color-text-dark)] leading-snug italic">
                &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-amber)] hover:text-[var(--color-amber-dark)] transition-colors group"
            >
              Read our story{' '}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="/images/about-women-runners.jpg"
                alt="Coffee women runners — Coffee Marathon Uganda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[var(--color-amber)]/10" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[var(--color-border)]">
              <p className="font-display text-3xl font-bold text-[var(--color-amber)]">2,000+</p>
              <p className="font-body text-sm text-[var(--color-text-mid)]">Runners from 10+ countries</p>
            </div>

            {/* Decorative block */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-amber-light)]/40 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
