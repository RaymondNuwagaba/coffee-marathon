import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RaceCard from '@/components/ui/RaceCard'
import Reveal from '@/components/ui/Reveal'
import AnimatedHero from '@/components/sections/AnimatedHero'
import {
  getRaces,
  getSiteSettings,
} from '@/sanity/lib/fetch'
import { races as staticRaces } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'The Coffee Marathon Uganda 2027 - Run Through Coffee Country',
}

const homepageStats = [
  { num: '2,000+', label: 'Runners' },
  { num: '10+', label: 'Countries' },
  { num: 'UGX 10M', label: "Women's Top Prize" },
  { num: '4', label: 'Race Categories' },
  { num: '5,000+', label: 'Cups of Coffee' },
  { num: '5+', label: 'Years of Impact' },
]

const missionPoints = [
  {
    num: '01',
    title: 'Why we started',
    body: 'We saw untapped potential in coffee-growing communities, especially among women, whose labour sustains the industry but whose voices are often overlooked.',
  },
  {
    num: '02',
    title: 'Why we continue',
    body: 'Awareness alone is no longer enough. We have evolved from a moment of recognition into a movement for action that changes lives and livelihoods.',
  },
  {
    num: '03',
    title: 'Why it matters',
    body: 'Our long-term vision is economic resilience through coffee farming, so farmers can withstand market shifts, climate pressure, and generational poverty.',
  },
]

const coldBrewVariants = [
  {
    name: 'Malt Coffee',
    desc: 'Caffeine-free, made from roasted malted barley with creamy malted milk powder.',
  },
  {
    name: 'Energy Drink',
    desc: 'Cold brew with B-vitamins, guarana, and taurine, built for race day.',
  },
  {
    name: 'Iced Coffee',
    desc: "Uganda's finest beans, brewed hot and immediately chilled.",
  },
]

export default async function HomePage() {
  const [sanityRaces, settings] = await Promise.all([
    getRaces(),
    getSiteSettings(),
  ])

  const races = sanityRaces ?? []
  const defaultPinnketUrl = races[0]?.pinnketUrl ?? PINNKET.register10k

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'The Coffee Marathon Uganda 2027',
    description: 'Empowering the IK Community of Karamoja through Coffee Farming to End Poverty',
    startDate: settings?.raceDate ?? '2027-02-13T06:00:00+03:00',
    location: {
      '@type': 'Place',
      name: settings?.venueName ?? 'Africa Coffee Park',
      address: {
        '@type': 'PostalAddress',
        addressLocality: settings?.venueAddress ?? 'Ntungamo',
        addressCountry: 'UG',
      },
    },
    url: 'https://coffeemarathonug.com',
    organizer: [
      { '@type': 'Organization', name: 'The Coffee Marathon Uganda', url: 'https://coffeemarathonug.com' },
      { '@type': 'Organization', name: 'IAG, Inspire Africa Group' },
      { '@type': 'Organization', name: 'Africa Coffee Park' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <div className="relative">
        <AnimatedHero registerUrl={defaultPinnketUrl} />

        <div className="relative z-20 border-t border-black/5 bg-[var(--paper)] text-[var(--ink)] shadow-[0_-12px_40px_rgba(19,10,4,0.08)]">
          <div className="site-container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
            <div className="min-w-0">
              <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--coral)] sm:text-sm">
                Registration open · 13 February 2027
              </p>
              <p className="mt-1.5 font-heading text-xl font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-2xl md:text-[1.75rem]">
                Pick your distance and secure your race place.
              </p>
              <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                {['42KM', '21KM', '10KM', '5KM'].map((distance, i) => (
                  <span key={distance} className="inline-flex items-baseline gap-x-2">
                    {i > 0 && (
                      <span className="font-display text-lg text-[var(--coral)]/50 sm:text-xl" aria-hidden>
                        ·
                      </span>
                    )}
                    <span className="font-display text-2xl leading-none tracking-tight text-[var(--ink)] sm:text-3xl md:text-[2.15rem]">
                      {distance}
                    </span>
                  </span>
                ))}
                <span className="ml-1 font-label text-xs font-bold uppercase tracking-[0.12em] text-[rgba(26,15,8,0.55)] sm:text-sm">
                  at Africa Coffee Park
                </span>
              </p>
            </div>
            <div className="grid w-full shrink-0 grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-3">
              <Link
                href="/races"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-4 py-3.5 font-label text-xs font-bold uppercase tracking-[0.08em] text-[var(--ink)] transition-colors hover:bg-black/[0.04] sm:px-5 sm:text-sm"
              >
                View Races
              </Link>
              <a
                href={defaultPinnketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-3.5 !text-xs sm:!px-7 sm:!text-sm"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section-pad bg-[var(--paper)]">
        <div className="site-container">
          <Reveal className="mb-11 max-w-2xl">
            <p className="eyebrow">Race Categories</p>
            <h2 className="section-title mt-3">Choose your distance.</h2>
            <p className="section-lede mt-4">
              Four routes across Africa Coffee Park&apos;s highland terrain. Every step runs for impact.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {races.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {races.map((race: Race) => (
                  <RaceCard
                    key={race._id}
                    distance={race.distance}
                    label={race.label}
                    price={race.price}
                    desc={race.description}
                    terrain={race.terrain}
                    cutOff={race.cutoffTime}
                    startTime={race.startTime}
                    included={race.whatsIncluded ?? []}
                    pinnketUrl={race.pinnketUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {staticRaces.map((race) => (
                  <RaceCard key={race.distance} {...race} pinnketUrl={PINNKET[race.pinnketKey]} />
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.12} className="mt-9">
            <Link href="/races" className="btn-ghost">
              Full race details <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--cream)]">
        <div className="site-container">
          <Reveal className="mb-11 max-w-2xl">
            <p className="eyebrow">Coffee with a Cause</p>
            <h2 className="section-title mt-3">More than a race.</h2>
            <p className="section-lede mt-4">
              The Coffee Marathon exists to create customers for African coffee and lasting value for the people behind every cup.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {missionPoints.map(({ num, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="border-t border-[var(--line)] pt-5">
                  <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--green-mid)]">
                    {num}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--ink)]">
                    {title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-[rgba(26,15,8,0.68)]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-9">
            <Link href="/about" className="btn-ghost">
              Read our story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--green-deep)] text-white">
        <div className="site-container">
          <Reveal className="mb-11 max-w-2xl">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
              2025 Edition
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.35rem,4.6vw,3.5rem)] leading-[0.96] tracking-tight">
              A year in numbers.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {homepageStats.map(({ num, label }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <div className="border-t border-white/12 pt-4">
                  <p className="font-display text-3xl leading-none tracking-tight text-white sm:text-[2.35rem]">
                    {num}
                  </p>
                  <p className="mt-2.5 font-label text-[11px] uppercase tracking-[0.14em] text-white/50">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-11">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] text-[var(--yellow)] hover:opacity-80"
            >
              See highlights <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--paper)]">
        <div className="site-container">
          <Reveal className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Official kit</p>
              <h2 className="section-title mt-3">The race kit.</h2>
              <p className="section-lede mt-4">
                Jersey, cap, and bib from a previous edition. The 2027 kit keeps the same mark.
              </p>
            </div>
            <Link href="/shop" className="btn-ghost shrink-0">
              Shop the kit <ArrowRight size={14} />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 md:grid-cols-5">
              <figure className="group md:col-span-2">
                <div className="media-frame relative h-72 sm:h-96 md:h-[440px]">
                  <Image
                    src="/images/races-runner-portrait.jpg"
                    alt="Coffee Marathon jersey and race bib"
                    fill
                    className="object-cover object-[center_20%] media-zoom"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <figcaption className="mt-3 font-body text-sm text-[rgba(26,15,8,0.55)]">
                  Jersey and bib
                </figcaption>
              </figure>
              <figure className="group md:col-span-3">
                <div className="media-frame relative h-72 sm:h-96 md:h-[440px]">
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="Runners in the Coffee Marathon shirt, cap, and wristband"
                    fill
                    className="object-cover media-zoom"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
                <figcaption className="mt-3 font-body text-sm text-[rgba(26,15,8,0.55)]">
                  Shirt, cap, and wristband
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--cream)]">
        <div className="site-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">IAC Cold Brew</p>
              <h2 className="section-title mt-3">Fuel your race day.</h2>
              <p className="section-lede mt-4">
                IAC Cold Brew is the official coffee drink of the Coffee Marathon — smooth, energising, and crafted from Uganda&apos;s finest beans.
              </p>

              <div className="mt-8 space-y-5">
                {coldBrewVariants.map(({ name, desc }, i) => (
                  <div key={name} className="border-t border-[var(--line)] pt-5">
                    <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--green-mid)]">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-[var(--ink)]">
                      {name}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[rgba(26,15,8,0.68)]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="media-frame relative aspect-[4/5] bg-white shadow-[var(--shadow)]">
                <Image
                  src="/images/cold-brew-cans.webp"
                  alt="Three IAC Cold Brew cans: Malt Coffee, Energy Drink and Iced Coffee."
                  fill
                  className="object-cover media-zoom"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <p className="mt-4 text-center font-label text-xs font-bold uppercase tracking-[0.14em] text-[var(--green-mid)]">
                Official drink of The Coffee Marathon
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--green-primary)] text-center text-white">
        <Reveal className="mx-auto max-w-3xl px-4">
          <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-[var(--yellow)]">
            13 February 2027 · Ntungamo
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4.1rem)] leading-[0.96] tracking-tight">
            Run with a cause.<br />Run for impact.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-white/78">
            Join runners from across the world at Africa Coffee Park.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={defaultPinnketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
            <Link href="/races" className="btn-secondary">
              View all races
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
