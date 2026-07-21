import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Leaf, Users } from 'lucide-react'
import CountdownClock from '@/components/ui/CountdownClock'
import RaceCard from '@/components/ui/RaceCard'
import ColdBrewSection from '@/components/sections/ColdBrewSection'
import {
  getRaces,
  getSiteSettings,
  getSponsors,
} from '@/sanity/lib/fetch'
import { races as staticRaces } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'The Coffee Marathon Uganda 2026 — Run Through Coffee Country',
}

const homepageStats = [
  { num: '2,000+', label: 'Runners' },
  { num: '10+', label: 'Countries' },
  { num: 'UGX 10M', label: "Women's Top Prize" },
  { num: '4', label: 'Race Categories' },
  { num: '5,000+', label: 'Cups of Coffee' },
  { num: '5+', label: 'Years of Impact' },
]

const coldBrewVariants = [
  {
    icon: Leaf,
    name: 'Malt Coffee',
    desc: 'Caffeine-free, made from roasted malted barley with creamy malted milk powder.',
  },
  {
    icon: Zap,
    name: 'Energy Drink',
    desc: 'Cold brew with B-vitamins, guarana, and taurine — built for race day.',
  },
  {
    icon: Users,
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
    name: 'The Coffee Marathon Uganda 2026',
    description: 'Empowering the IK Community of Karamoja through Coffee Farming to End Poverty',
    startDate: settings?.raceDate ?? '2026-10-03T06:00:00+03:00',
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
    performer: { '@type': 'Person', name: 'Tyrese Gibson' },
    organizer: [
      { '@type': 'Organization', name: 'The Coffee Marathon Uganda', url: 'https://coffeemarathonug.com' },
      { '@type': 'Organization', name: 'IAG — Inspire Africa Group' },
      { '@type': 'Organization', name: 'Africa Coffee Park' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-crowd.jpg"
            alt="Coffee Marathon runners at Africa Coffee Park"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Green-primary overlay at 60% */}
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--green-primary)', opacity: 0.65 }} />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Eyebrow */}
          <p className="font-label text-xs font-bold uppercase tracking-[0.16em] mb-5" style={{ color: 'var(--green-pale)' }}>
            Africa Coffee Park · Ntungamo, Uganda
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-tight mb-4">
            <span className="block text-5xl md:text-7xl lg:text-8xl">Run Through</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl">Coffee Country</span>
          </h1>

          {/* Date */}
          <p className="font-body text-xl text-white/85 mb-6">
            3 October 2026 · Africa Coffee Park, Ntungamo, Uganda
          </p>

          {/* Concert callout pill */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
            <span className="text-base">🎤</span>
            <span className="font-label text-sm font-bold text-white uppercase tracking-[0.08em]">
              Tyrese Gibson Live in Concert
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <CountdownClock
              targetDate="2026-10-03T06:00:00+03:00"
              ctaHref={defaultPinnketUrl}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={defaultPinnketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full font-label font-bold uppercase tracking-[0.08em] text-base transition-colors shadow-lg"
              style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
            >
              Register Now →
            </a>
            <Link
              href="/races"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-label font-bold uppercase tracking-[0.08em] text-base hover:bg-white/10 transition-all"
            >
              View Races
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. RACE CATEGORIES ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--green-mid)' }}>
              Race Categories
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--brown-heading)' }}>
              Choose Your Distance
            </h2>
            <p className="mt-3 font-body text-base max-w-xl mx-auto" style={{ color: 'var(--brown-dark)' }}>
              Four distances across Africa Coffee Park&apos;s scenic highland terrain. Every step runs for impact.
            </p>
          </div>

          {races.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {staticRaces.map((race) => (
                <RaceCard key={race.distance} {...race} pinnketUrl={PINNKET[race.pinnketKey]} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/races"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] transition-colors group"
              style={{ color: 'var(--green-primary)' }}
            >
              Full race details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. MISSION — 3 COLUMNS ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--green-mid)' }}>
              Coffee with a Cause
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--brown-heading)' }}>
              More than a race.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Why We Started',
                body: 'We saw untapped potential in coffee-growing communities — especially among women — whose labour sustains the industry but whose voices are often overlooked. The Coffee Marathon was born to change that.',
              },
              {
                title: 'Why We Continue',
                body: 'Awareness alone is no longer enough. We have evolved from a moment of recognition into a movement for action — one that goes beyond stories to actively changing lives and livelihoods.',
              },
              {
                title: 'Why It Matters',
                body: 'Our long-term vision: create economic resilience through coffee farming — ensuring farmers can withstand market fluctuations, climate challenges, and generational poverty.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6"
                style={{
                  border: '0.5px solid rgba(26,107,58,0.2)',
                  borderLeft: '4px solid var(--green-primary)',
                }}
              >
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: 'var(--brown-heading)' }}>{title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] group transition-colors"
              style={{ color: 'var(--green-mid)' }}
            >
              Read our story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. 2025 IN NUMBERS ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--green-mid)' }}>
              2025 Edition
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: 'var(--brown-heading)' }}>
              A Year in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {homepageStats.map(({ num, label }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 text-center border"
                style={{ borderColor: 'rgba(26,107,58,0.15)' }}
              >
                <p className="font-heading text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--green-primary)' }}>
                  {num}
                </p>
                <p className="font-label text-xs uppercase tracking-[0.08em]" style={{ color: 'var(--brown-dark)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] group transition-colors"
              style={{ color: 'var(--green-mid)' }}
            >
              See highlights <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. IAC COLD BREW ────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--green-mid)' }}>
                IAC Cold Brew
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--brown-heading)' }}>
                Fuel your race day.
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--brown-dark)' }}>
                IAC Cold Brew is the official coffee drink of the Coffee Marathon — smooth, energising, and crafted from Uganda&apos;s finest beans.
              </p>
              <div className="space-y-4">
                {coldBrewVariants.map(({ icon: Icon, name, desc }) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl p-4 flex items-start gap-4 border"
                    style={{ borderColor: 'rgba(26,107,58,0.15)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--green-pale)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--green-primary)' }} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--brown-heading)' }}>{name}</p>
                      <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl">
                <Image
                  src="/images/cold-brew-product.jpg"
                  alt="IAC Cold Brew — Inspire Africa Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-4 right-4 rounded-xl shadow-lg p-3 text-center"
                style={{ backgroundColor: 'white' }}
              >
                <p className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--brown-dark)' }}>
                  Official Drink of The Coffee Marathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-24 text-center" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Run with a cause.<br />Run for impact.
          </h2>
          <p className="font-body text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Join runners from across the world at Africa Coffee Park on 3 October 2026.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={defaultPinnketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full font-label font-bold uppercase tracking-[0.08em] text-base transition-colors shadow-lg"
              style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
            >
              Register Now →
            </a>
            <Link
              href="/races"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-label font-bold uppercase tracking-[0.08em] text-base hover:bg-white/10 transition-all"
            >
              View all races
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
