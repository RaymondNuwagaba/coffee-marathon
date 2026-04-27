import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { SanityImage } from '@/components/ui/SanityImage'
import { getAttractions } from '@/sanity/lib/fetch'
import { attractions as staticAttractions } from '@/lib/content'
import type { Attraction } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Attractions — Explore Ntungamo',
  description: "Make a week of it. Explore Ntungamo's gorilla rafting, hot springs, waterfalls and more around the Coffee Marathon weekend.",
}

export default async function AttractionsPage() {
  const sanityAttractions = await getAttractions()

  const displayAttractions: { id: string; slug: string; name: string; description: string; tips?: string; image?: Attraction['image'] | null }[] =
    sanityAttractions && sanityAttractions.length > 0
      ? sanityAttractions.map((a: Attraction) => ({ id: a._id, slug: a.slug.current, name: a.name, description: a.description, tips: a.tips, image: a.image }))
      : staticAttractions.map((a) => ({ id: a.slug, slug: a.slug, name: a.name, description: a.description, tips: a.tips, image: null }))

  return (
    <>
      <PageHero
        title="Explore Ntungamo"
        subtitle="The Coffee Marathon takes place in one of Uganda's most spectacular regions. Here's what to see."
        label="Local Attractions"
      />

      <section className="bg-[var(--color-cream-light)] py-20">
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
                <div className="aspect-[4/3] bg-[var(--color-cream-dark)] rounded-2xl overflow-hidden relative">
                  {attraction.image ? (
                    <SanityImage image={attraction.image} alt={attraction.name} width={600} height={450} className="object-cover w-full h-full" fill />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <MapPin size={28} className="text-[var(--color-arabica)] opacity-30 mx-auto mb-2" />
                        <span className="font-body text-xs text-[var(--color-arabica)] opacity-40">
                          Photography of {attraction.name} — to be added
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-[var(--color-forest)]" />
                    <span className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">Attraction</span>
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-3">{attraction.name}</h2>
                  <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">{attraction.description}</p>
                  {attraction.tips && (
                    <div className="bg-[var(--color-seedling-light)] rounded-xl px-4 py-3">
                      <p className="font-body text-sm text-[var(--color-forest-dark)]">
                        <span className="font-semibold">Practical tips: </span>{attraction.tips}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-6">Getting Around</h2>
          <div className="aspect-video bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-[var(--color-arabica)]/30 mx-auto mb-3" />
              <p className="font-body text-sm text-[var(--color-arabica)]/50">Google Maps embed — to be added</p>
            </div>
          </div>
          <p className="mt-4 font-body text-xs text-[var(--color-arabica)]/50">
            Africa Coffee Park is located in Ntungamo, southwestern Uganda. Approx. 8 hours from Kampala by road.
          </p>
        </div>
      </section>
    </>
  )
}
