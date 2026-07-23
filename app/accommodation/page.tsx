import type { Metadata } from 'next'
import { Tent } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { AccommodationCard } from '@/components/ui/AccommodationCard'
import VenueMap from '@/components/ui/VenueMap'
import { getAccommodation } from '@/sanity/lib/fetch'
import type { Accommodation } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Accommodation',
  description: 'Find places to stay near Africa Coffee Park, Ntungamo for The Coffee Marathon Uganda 2027.',
}

export default async function AccommodationPage() {
  const sanityAccommodation = await getAccommodation()
  const hasData = sanityAccommodation && sanityAccommodation.length > 0

  return (
    <>
      <PageHero
        title="Where to Stay"
        subtitle="Accommodation options near Africa Coffee Park, from lodges to on-site camping."
        label="Accommodation Guide"
      />

      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sanityAccommodation.map((acc: Accommodation) => (
                <AccommodationCard key={acc._id} accommodation={acc} />
              ))}
            </div>
          ) : (
            <>
              <p className="font-body text-sm mb-10 text-center max-w-2xl mx-auto" style={{ color: 'var(--brown-dark)', opacity: 0.7 }}>
                Detailed accommodation information will be published closer to race day.
                Contact us to be notified when bookings open.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {['Hotel / Lodge 1', 'Hotel / Lodge 2', 'Guesthouse 1', 'Race Village Camping'].map((name) => (
                  <div
                    key={name}
                    className="bg-white rounded-2xl p-6 border shadow-sm"
                    style={{ borderColor: 'rgba(26,107,58,0.15)' }}
                  >
                    <p className="font-body font-semibold" style={{ color: 'var(--brown-heading)' }}>{name}</p>
                    <p className="font-body text-xs mt-2" style={{ color: 'var(--brown-dark)', opacity: 0.5 }}>Details to be added by client.</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Venue location */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-semibold mb-6" style={{ color: 'var(--brown-heading)' }}>Location Map</h2>
            <VenueMap zoom={12} />
          </div>

          {/* Camping info */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--green-deep)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Tent size={22} style={{ color: 'var(--green-light)' }} />
              <h3 className="font-heading text-2xl font-semibold text-white">Race Village Camping</h3>
            </div>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
              On-site camping is available at Africa Coffee Park for runners who want to be right at the venue.
              Full details, including pricing, check-in times, and what to bring, will be published closer to the event.
            </p>
            <a
              href="mailto:info@coffeemarathonug.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-colors"
              style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
            >
              Register Interest in Camping
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
