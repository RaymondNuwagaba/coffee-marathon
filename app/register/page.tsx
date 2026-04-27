import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import RaceCard from '@/components/ui/RaceCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { races, faqs } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register for The Coffee Marathon Uganda 2026. Choose from 5KM, 10KM, 21KM, or 42KM. Secure registration via Pinnket.',
}

export default function RegisterPage() {
  return (
    <>
      <PageHero
        title="Register for the Race"
        subtitle="Choose your distance and secure your place at Africa Coffee Park on 3 October 2026."
        label="Registration 2026"
      />

      {/* Race Cards — expanded */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)]">
              Choose Your Distance
            </h2>
            <p className="mt-3 font-body text-base text-[var(--color-arabica)] max-w-xl mx-auto">
              All registrations are processed securely through Pinnket, our official ticketing partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {races.map((race) => (
              <RaceCard key={race.distance} {...race} expanded />
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-4">
            What to Expect on Race Day
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { time: '05:30', label: 'Athlete assembly & warm-up' },
              { time: '06:00', label: 'Race start — all categories' },
              { time: '~14:00', label: 'Prize ceremony & celebrations' },
            ].map((item) => (
              <div
                key={item.time}
                className="bg-white rounded-xl p-5 border border-[var(--color-cream-dark)] text-left"
              >
                <div className="font-display text-2xl font-bold text-[var(--color-forest)]">
                  {item.time}
                </div>
                <p className="font-body text-sm text-[var(--color-arabica)] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-xs text-[var(--color-arabica)]/60">
            Times are indicative — confirmed schedule will be communicated closer to race day.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)]">
              Registration FAQs
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
