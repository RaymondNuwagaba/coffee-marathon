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
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
            Why Partner With Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ color: 'var(--brown-heading)' }}>
            Why Sponsor the Coffee Marathon?
          </h2>
          <p className="font-body text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'var(--brown-dark)' }}>
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
                className="bg-white rounded-xl p-6 border"
                style={{ borderColor: 'rgba(26,107,58,0.15)' }}
              >
                <div className="font-display text-4xl font-bold" style={{ color: 'var(--green-primary)' }}>
                  {stat.number}
                </div>
                <p className="font-body text-sm mt-1" style={{ color: 'var(--brown-dark)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
              Available Packages
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: 'var(--brown-heading)' }}>
              Sponsorship Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sponsorTiers.map((tier, i) => (
              <SponsorTierCard key={tier.name} {...tier} topTier={i === 0} />
            ))}
          </div>
          <p className="mt-8 text-center font-body text-xs" style={{ color: 'var(--brown-dark)', opacity: 0.5 }}>
            Custom packages available on request.
          </p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Partner?
          </h2>
          <p className="font-body text-base mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Download our full sponsorship deck or get in touch to discuss your package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/sponsorship-deck.pdf"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm transition-colors"
              style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
            >
              <Download size={16} />
              Download Sponsorship Deck
            </a>
            <a
              href="mailto:sponsor@coffeemarathonug.com"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-full font-body font-semibold text-sm hover:border-white hover:bg-white/10 transition-all"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
          <p className="mt-4 font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            For enquiries:{' '}
            <a href="mailto:sponsor@coffeemarathonug.com" className="underline hover:opacity-70">
              sponsor@coffeemarathonug.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
