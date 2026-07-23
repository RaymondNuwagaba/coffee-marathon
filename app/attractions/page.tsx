import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { SanityImage } from '@/components/ui/SanityImage'
import VenueMap from '@/components/ui/VenueMap'
import { getAttractions } from '@/sanity/lib/fetch'
import { attractions as staticAttractions } from '@/lib/content'
import type { Attraction } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Attractions - Explore Ntungamo',
  description: "Make a week of it. Explore Ntungamo's gorilla rafting, hot springs, waterfalls and more around the Coffee Marathon weekend.",
}

export default async function AttractionsPage() {
  const sanityAttractions = await getAttractions()

  const displayAttractions: { id: string; slug: string; name: string; description: string; tips?: string; image?: Attraction['image'] | null; localImage?: string }[] =
    sanityAttractions && sanityAttractions.length > 0
      ? sanityAttractions.map((a: Attraction) => ({ id: a._id, slug: a.slug.current, name: a.name, description: a.description, tips: a.tips, image: a.image }))
      : staticAttractions.map((a) => ({ id: a.slug, slug: a.slug, name: a.name, description: a.description, tips: a.tips, image: null, localImage: a.localImage }))

  return (
    <>
      <PageHero
        title="Explore Ntungamo"
        subtitle="The Coffee Marathon takes place in one of Uganda's most spectacular regions. Here's what to see."
        label="Local Attractions"
      />

      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {displayAttractions.map((attraction, i) => (
              <div
                key={attraction.id}
                id={attraction.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}
              >
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden relative"
                  style={{ backgroundColor: 'var(--green-pale)' }}
                >
                  {attraction.image ? (
                    <SanityImage image={attraction.image} alt={attraction.name} width={600} height={450} className="object-cover w-full h-full" fill />
                  ) : attraction.localImage ? (
                    <Image
                      src={attraction.localImage}
                      alt={attraction.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <MapPin size={28} className="mx-auto" style={{ color: 'var(--green-mid)', opacity: 0.4 }} />
                    </div>
                  )}
                </div>

                <div>
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-label text-xs font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--green-pale)', color: 'var(--green-deep)' }}
                    >
                      Attraction
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-semibold mb-3" style={{ color: 'var(--brown-heading)' }}>
                    {attraction.name}
                  </h2>
                  <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                    {attraction.description}
                  </p>
                  {attraction.tips && (
                    <div
                      className="rounded-xl px-4 py-3 border"
                      style={{ backgroundColor: 'var(--green-pale)', borderColor: 'rgba(26,107,58,0.2)' }}
                    >
                      <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>
                        <span className="font-semibold" style={{ color: 'var(--green-deep)' }}>Practical tips: </span>
                        {attraction.tips}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold mb-6" style={{ color: 'var(--brown-heading)' }}>Getting Around</h2>
          <VenueMap zoom={11} className="text-left" />
          <p className="mt-4 font-body text-xs" style={{ color: 'var(--brown-dark)', opacity: 0.6 }}>
            Africa Coffee Park is located in Ntungamo, southwestern Uganda. Approx. 8 hours from Kampala by road.
          </p>
        </div>
      </section>
    </>
  )
}
