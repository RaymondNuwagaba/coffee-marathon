import type { Metadata } from 'next'
import { MapPin, Tent } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { AccommodationCard } from '@/components/ui/AccommodationCard'
import { getAccommodation } from '@/sanity/lib/fetch'
import type { Accommodation } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Accommodation',
  description: 'Find places to stay near Africa Coffee Park, Ntungamo for The Coffee Marathon Uganda 2026.',
}

export default async function AccommodationPage() {
  const sanityAccommodation = await getAccommodation()
  const hasData = sanityAccommodation && sanityAccommodation.length > 0

  return (
    <>
      <PageHero
        title="Where to Stay"
        subtitle="Accommodation options near Africa Coffee Park — from lodges to on-site camping."
        label="Accommodation Guide"
      />

      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sanityAccommodation.map((acc: Accommodation) => (
                <AccommodationCard key={acc._id} accommodation={acc} />
              ))}
            </div>
          ) : (
            <>
              <p className="font-body text-sm text-[var(--color-arabica)]/70 mb-10 text-center max-w-2xl mx-auto">
                Detailed accommodation information will be published closer to race day.
                Contact us to be notified when bookings open.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {['Hotel / Lodge 1', 'Hotel / Lodge 2', 'Guesthouse 1', 'Race Village Camping'].map((name) => (
                  <div key={name} className="bg-white rounded-2xl p-6 border border-[var(--color-cream-dark)] shadow-sm">
                    <p className="font-body font-semibold text-[var(--color-espresso)]">{name}</p>
                    <p className="font-body text-xs text-[var(--color-arabica)]/50 mt-2">Details to be added by client.</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Map placeholder */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mb-6">Location Map</h2>
            <div className="aspect-video bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={28} className="text-[var(--color-arabica)]/30 mx-auto mb-2" />
                <p className="font-body text-sm text-[var(--color-arabica)]/50">Google Maps embed — to be added</p>
              </div>
            </div>
          </div>

          {/* Camping info */}
          <div className="bg-[var(--color-espresso)] rounded-2xl p-8 text-[var(--color-cream)]">
            <div className="flex items-center gap-3 mb-4">
              <Tent size={22} className="text-[var(--color-logo-forest)]" />
              <h3 className="font-display text-2xl font-semibold">Race Village Camping</h3>
            </div>
            <p className="font-body text-sm text-[var(--color-cream)]/70 leading-relaxed mb-4">
              On-site camping is available at Africa Coffee Park for runners who want to be right at the venue.
              Full details — including pricing, check-in times, and what to bring — will be published closer to the event.
            </p>
            <a
              href="mailto:info@coffeemarathonug.com"
              className="inline-flex items-center gap-2 bg-[var(--color-forest)] text-[var(--color-cream)] px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:bg-[var(--color-forest-light)] transition-colors"
            >
              Register Interest in Camping
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
