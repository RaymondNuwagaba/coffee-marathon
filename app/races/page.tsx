import type { Metadata } from 'next'
import { MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import PinnketCTA from '@/components/ui/PinnketCTA'
import { getRaces } from '@/sanity/lib/fetch'
import { races as staticRaces } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'Race Categories',
  description: 'Full details for all four Coffee Marathon Uganda 2026 race categories: 5KM Fun Run, 10KM Community, 21KM Half Marathon, and 42KM Full Marathon.',
}

export default async function RacesPage() {
  const sanityRaces = await getRaces()
  const races = sanityRaces ?? []
  const raceHeaderThemes: Record<string, string> = {
    '5 KM': 'bg-[var(--color-green)]',
    '10 KM': 'bg-[var(--color-orange)]',
    '21 KM': 'bg-[var(--color-primary)]',
    '42 KM': 'bg-[var(--color-dark)]',
  }

  return (
    <>
      <PageHero
        title="Race Categories"
        subtitle="Four distances. One incredible route. Africa Coffee Park, Ntungamo — 3 October 2026."
        label="Race Information"
      />

      <section className="bg-[var(--color-cream)] py-20">
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
                className="bg-[var(--color-warm-white)] rounded-2xl overflow-hidden border border-[var(--color-cream-dark)] shadow-sm"
              >
                <div className={`${raceHeaderThemes[race.distance] ?? 'bg-[var(--color-dark)]'} text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                  <div>
                    <span className="font-label text-xs uppercase tracking-[0.1em] opacity-75">{race.label}</span>
                    <div className="font-display text-5xl font-bold leading-none mt-1">{race.distance}</div>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-semibold">{race.price}</span>
                    <p className="font-body text-xs opacity-60 mt-1">Registration fee</p>
                  </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-warm-brown)] mb-1">Description</p>
                      <p className="font-body text-sm text-[var(--color-logo-deep-brown)] leading-relaxed">{race.description}</p>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-warm-brown)] mb-1 flex items-center gap-1.5">
                        <MapPin size={12} /> Terrain
                      </p>
                      <p className="font-body text-sm text-[var(--color-logo-deep-brown)]">{race.terrain}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-warm-brown)] mb-1 flex items-center gap-1.5">
                          <Clock size={12} /> Start Time
                        </p>
                        <p className="font-body text-sm text-[var(--color-logo-deep-brown)]">{race.startTime}</p>
                      </div>
                      <div>
                        <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-warm-brown)] mb-1">Cut-off</p>
                        <p className="font-body text-sm text-[var(--color-logo-deep-brown)]">{race.cutoffTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.1em] text-[var(--color-logo-warm-brown)] mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={12} /> What&apos;s Included
                      </p>
                      <ul className="space-y-1.5">
                        {(race.whatsIncluded ?? []).map((item) => (
                          <li key={item} className="font-body text-sm text-[var(--color-logo-deep-brown)] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-video bg-[var(--color-cream-dark)] rounded-xl flex items-center justify-center">
                      <p className="font-body text-xs text-[var(--color-logo-warm-brown)] text-center px-4">Route map coming soon</p>
                    </div>
                    <PinnketCTA href={race.pinnketUrl} label={`Register for the ${race.distance}`} showNote />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-logo-forest)] mb-6 text-center">General Race Rules</h2>
          <ul className="space-y-3">
            {[
              'All runners must carry their official race bib during the event.',
              'Headphones are permitted but runners use them at their own risk.',
              'Runners must follow the marked course and marshal instructions at all times.',
              'All distances are measured and verified at [certifying body — placeholder].',
              'Medical support will be stationed at regular intervals along all routes.',
              'Timing chips are included in bibs — chip timing used for all official results.',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm text-[var(--color-logo-deep-brown)]">
                <span className="font-label font-bold text-[var(--color-logo-warm-brown)] shrink-0 mt-0.5">{i + 1}.</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
