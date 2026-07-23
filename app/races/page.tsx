import type { Metadata } from 'next'
import { MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import PinnketCTA from '@/components/ui/PinnketCTA'
import VenueMap from '@/components/ui/VenueMap'
import { getRaces } from '@/sanity/lib/fetch'
import { races as staticRaces } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Race Categories',
  description: 'Full details for all four Coffee Marathon Uganda 2027 race categories: 5KM Fun Run, 10KM Community, 21KM Half Marathon, and 42KM Full Marathon.',
}

export default async function RacesPage() {
  const sanityRaces = await getRaces()
  const races = sanityRaces ?? []

  return (
    <>
      <PageHero
        title="Race Categories"
        subtitle="Four distances. One incredible route. Africa Coffee Park, Ntungamo, 13 February 2027."
        label="Race Information"
      />

      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {(races.length > 0 ? races : staticRaces.map(r => ({
              _id: r.distance,
              distance: r.distance,
              label: r.label,
              price: r.price,
              description: r.desc,
              terrain: r.terrain,
              cutoffTime: r.cutOff,
              startTime: r.startTime,
              whatsIncluded: r.included,
              pinnketUrl: PINNKET[r.pinnketKey],
              order: 0,
            }))).map((race: Race) => (
              <div
                key={race._id}
                id={race.distance.replace(' ', '').toLowerCase()}
                className="bg-white rounded-2xl overflow-hidden border shadow-sm"
                style={{ borderColor: 'rgba(26,107,58,0.2)' }}
              >
                {/* Header, distance badge in green-pale */}
                <div
                  className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{ backgroundColor: 'var(--green-primary)' }}
                >
                  <div>
                    <span
                      className="font-label text-xs uppercase tracking-[0.1em] font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--green-pale)', color: 'var(--green-deep)' }}
                    >
                      {race.label}
                    </span>
                    <div className="font-display text-5xl font-bold leading-none mt-3 text-white">
                      {race.distance}
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className="font-display text-3xl font-bold"
                      style={{ color: 'var(--brown-mid)' }}
                    >
                      {race.price}
                    </span>
                    <p className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Registration fee</p>
                  </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-1" style={{ color: 'var(--green-mid)' }}>Description</p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>{race.description}</p>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-1 flex items-center gap-1.5" style={{ color: 'var(--green-mid)' }}>
                        <MapPin size={12} /> Terrain
                      </p>
                      <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{race.terrain}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-1 flex items-center gap-1.5" style={{ color: 'var(--green-mid)' }}>
                          <Clock size={12} /> Start Time
                        </p>
                        <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{race.startTime}</p>
                      </div>
                      <div>
                        <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-1" style={{ color: 'var(--green-mid)' }}>Cut-off</p>
                        <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{race.cutoffTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-2 flex items-center gap-1.5" style={{ color: 'var(--green-mid)' }}>
                        <CheckCircle2 size={12} /> What&apos;s Included
                      </p>
                      <ul className="space-y-1.5">
                        {(race.whatsIncluded ?? []).map((item) => (
                          <li key={item} className="font-body text-sm flex items-center gap-2" style={{ color: 'var(--brown-dark)' }}>
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: 'var(--green-light)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* The detailed course is not published yet, so this shows
                        the start and finish venue rather than an empty box. */}
                    <div>
                      <VenueMap zoom={13} aspect="aspect-video" showLink={false} />
                      <p className="mt-2 font-body text-xs" style={{ color: 'var(--green-mid)' }}>
                        Start and finish at Africa Coffee Park. Detailed route map published closer to race day.
                      </p>
                    </div>
                    <PinnketCTA href={race.pinnketUrl} label={`Register for the ${race.distance}`} showNote />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Race Rules */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3 text-center" style={{ color: 'var(--green-mid)' }}>
            Race Rules
          </p>
          <h2 className="font-display text-3xl font-semibold mb-8 text-center" style={{ color: 'var(--brown-heading)' }}>
            General Race Rules
          </h2>
          <ul className="space-y-3">
            {[
              'All runners must carry their official race bib during the event.',
              'Headphones are permitted but runners use them at their own risk.',
              'Runners must follow the marked course and marshal instructions at all times.',
              'All distances are measured and verified at [certifying body - placeholder].',
              'Medical support will be stationed at regular intervals along all routes.',
              'Timing chips are included in bibs, chip timing used for all official results.',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm" style={{ color: 'var(--brown-dark)' }}>
                <span
                  className="font-label font-bold shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
                >
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
