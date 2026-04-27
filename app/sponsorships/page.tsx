import type { Metadata } from 'next'
import { Download, Mail } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SponsorTierCard from '@/components/ui/SponsorTierCard'
import { sponsorTiers } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sponsorships',
  description:
    'Partner with The Coffee Marathon Uganda 2026. Sponsorship packages from Title Sponsor to Bronze. Download the sponsorship deck.',
}

export default function SponsorshipsPage() {
  return (
    <>
      <PageHero
        title="Partner With Us"
        subtitle="Align your brand with Uganda's premier running event and celebrate the women who grow the world's finest coffee."
        label="Sponsorships 2026"
      />

      {/* Why sponsor */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mb-5">
            Why Sponsor the Coffee Marathon?
          </h2>
          <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed max-w-2xl mx-auto mb-10">
            Reach 2,000+ runners and their networks across Uganda and 10+ countries. Associate
            your brand with purpose-driven sport, sustainability, and the empowerment of women
            coffee farmers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { number: '2,000+', label: 'Runners reached' },
              { number: '10+', label: 'Countries represented' },
              { number: '5+', label: 'Years of impact' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 border border-[var(--color-cream-dark)]"
              >
                <div className="font-display text-4xl font-bold text-[var(--color-forest)]">
                  {stat.number}
                </div>
                <p className="font-body text-sm text-[var(--color-arabica)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)]">
              Sponsorship Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sponsorTiers.map((tier) => (
              <SponsorTierCard key={tier.name} {...tier} />
            ))}
          </div>
          <p className="mt-8 text-center font-body text-xs text-[var(--color-arabica)]/50">
            Custom packages available on request.
          </p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-[var(--color-espresso)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--color-cream)] mb-4">
            Ready to Partner?
          </h2>
          <p className="font-body text-base text-[var(--color-cream)]/70 mb-8">
            Download our full sponsorship deck or get in touch to discuss your package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/sponsorship-deck.pdf"
              className="inline-flex items-center gap-2 bg-[var(--color-latte)] text-[var(--color-espresso)] px-6 py-3 rounded-full font-body font-semibold text-sm hover:bg-[var(--color-latte-light)] transition-colors"
            >
              <Download size={16} />
              Download Sponsorship Deck
            </a>
            <a
              href="mailto:sponsor@coffeemarathonug.com"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-cream)]/40 text-[var(--color-cream)] px-6 py-3 rounded-full font-body font-semibold text-sm hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 transition-all"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
          <p className="mt-4 font-body text-xs text-[var(--color-cream)]/30">
            Sponsorship deck link is a placeholder — to be updated with actual PDF.
          </p>
        </div>
      </section>
    </>
  )
}
