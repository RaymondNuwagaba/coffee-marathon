import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import CountdownClock from '@/components/ui/CountdownClock'
import RaceCard from '@/components/ui/RaceCard'
import MissionSection from '@/components/sections/MissionSection'
import Highlights2025Section from '@/components/sections/Highlights2025Section'
import ColdBrewSection from '@/components/sections/ColdBrewSection'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import {
  getRaces,
  getSiteSettings,
  getSponsors,
} from '@/sanity/lib/fetch'
import { races as staticRaces, stats as staticStats } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race, Sponsor } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'The Coffee Marathon Uganda 2026 — Run Through Coffee Country',
}

export default async function HomePage() {
  const [sanityRaces, settings, sponsors] = await Promise.all([
    getRaces(),
    getSiteSettings(),
    getSponsors(),
  ])

  const races = sanityRaces ?? []
  const defaultPinnketUrl = races[0]?.pinnketUrl ?? PINNKET.register10k
  const shopUrl = settings?.pinnketShopUrl ?? PINNKET.shop

  const eventStats = settings?.eventStats?.length
    ? settings.eventStats
    : staticStats.map((s) => ({ number: s.number, label: s.label }))

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
      {/* pt-24/pt-28 = announcement bar (≈32px) + navbar (64px/80px) */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-gradient-to-br from-[var(--color-dark)] via-[#241911] to-[#2C1810] pt-24 lg:pt-28">
        <div className="absolute -left-20 top-28 h-20 w-[160%] -rotate-6 bg-[var(--color-primary)]/85 pointer-events-none" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2">

          {/* Left — event info */}
          <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-white/75 font-bold">
                Africa Coffee Park · Ntungamo, Uganda
              </span>
            </div>

            {/* H1 */}
            <h1 className="leading-none mb-5">
              <span className="block font-display text-white/85 text-3xl">The</span>
              <span className="block font-display font-bold text-white text-7xl md:text-8xl">Coffee</span>
              <span className="block font-display font-bold text-[var(--color-logo-forest)] text-7xl md:text-8xl">Marathon</span>
            </h1>

            {/* Theme */}
            <div className="flex flex-col gap-1 bg-black/25 border border-white/20 rounded-xl px-4 py-3 mb-5 max-w-sm">
              <span className="font-label text-xs font-bold text-[var(--color-logo-forest)] uppercase tracking-[0.12em]">Theme 2026</span>
              <p className="font-body text-sm font-semibold text-white leading-snug italic">
                &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={14} className="text-[var(--color-logo-forest)] shrink-0" />
              <span className="font-body text-sm text-white/80">
                Africa Coffee Park, Ntungamo, Uganda
              </span>
            </div>

            {/* Countdown */}
            <div className="mb-6">
              <CountdownClock
                targetDate="2026-10-03T06:00:00+03:00"
                ctaHref={defaultPinnketUrl}
              />
            </div>

            {/* Featuring — text only on desktop (image is on the right) */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-label text-white/65 text-xs tracking-[0.12em] uppercase">Featuring</span>
              <span className="w-12 h-px bg-white/35" />
            </div>
            <div className="flex items-center gap-3 mb-7">
              <div className="inline-flex items-center gap-1.5 bg-[var(--color-accent)] rounded-full px-2.5 py-0.5">
                <span className="font-label text-xs font-bold text-[var(--color-dark)] uppercase tracking-[0.08em]">Live in Concert</span>
              </div>
              <p className="font-display font-bold text-white text-3xl leading-tight">Tyrese Gibson</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={defaultPinnketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-[#B52222] transition-colors shadow-sm"
              >
                Register Now →
              </a>
              <a
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-white hover:text-[var(--color-dark)] transition-all"
              >
                Get Your Kit
              </a>
            </div>
          </div>

          {/* Right — Tyrese Gibson, full height */}
          <div className="relative hidden md:block min-h-[600px]">
            <Image
              src="/images/tyrese-portrait.jpg"
              alt="Tyrese Gibson — headline artist, Coffee Marathon Concert 2026"
              fill
              className="object-cover object-center"
              priority
              sizes="50vw"
            />
            {/* Bottom-up dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 via-[var(--color-dark)]/10 to-transparent" />
            {/* Left fade to white */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-dark)] to-transparent" />

            {/* Headline badge — top right */}
            <div className="absolute top-8 right-8">
              <div className="inline-flex items-center gap-1.5 bg-[var(--color-accent)] rounded-full px-3 py-1.5 shadow-lg">
                <span className="font-label text-xs font-bold text-[var(--color-dark)] uppercase tracking-[0.08em]">Headline Performer</span>
              </div>
            </div>

            {/* Date badge — top left (just inside the image) */}
            <div className="absolute top-8 left-24 bg-black/45 backdrop-blur-sm rounded-2xl px-5 py-3 text-right shadow-lg border border-white/20">
              <p className="font-label text-white/70 text-xs tracking-[0.1em] uppercase">Race Day</p>
              <p className="font-display font-bold text-[var(--color-logo-forest)] text-xl leading-none">3 OCT</p>
              <p className="font-display font-bold text-white text-4xl leading-none">2026</p>
            </div>

            {/* Artist name overlay — bottom */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-label text-white/60 text-xs uppercase tracking-[0.1em] mb-1">Featuring</p>
              <p className="font-display text-5xl font-bold text-white leading-tight">Tyrese Gibson</p>
              <p className="font-body text-white/60 text-sm mt-1">Live in Concert · 3 October 2026 · Africa Coffee Park</p>
            </div>
          </div>
        </div>

        {/* Mobile: show date badge */}
        <div className="absolute top-[100px] right-4 bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 text-right shadow-lg border border-white/20 md:hidden">
          <p className="font-display font-bold text-[var(--color-logo-forest)] text-lg leading-none">3 OCT</p>
          <p className="font-display font-bold text-white text-3xl leading-none">2026</p>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-primary)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {eventStats.map((stat: { number: string; label: string }) => (
              <div key={stat.label} className="text-center py-2 px-4">
                <p className="font-display text-3xl font-bold text-[var(--color-logo-forest)]">{stat.number}</p>
                <p className="font-label text-xs text-white/75 uppercase tracking-[0.12em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. RACE CATEGORIES ──────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">Race Categories</span>
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-logo-forest)]">
              Choose Your Distance
            </h2>
            <p className="mt-3 font-body text-base text-[var(--color-text-mid)] max-w-xl mx-auto">
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
            <Link href="/races" className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-logo-forest)] hover:text-[var(--color-logo-deep-brown)] transition-colors group">
              View full race details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. MISSION ──────────────────────────────────────────────── */}
      <MissionSection />

      {/* ── 5. HIGHLIGHTS 2025 ──────────────────────────────────────── */}
      <Highlights2025Section />

      {/* ── 6. COLD BREW ────────────────────────────────────────────── */}
      <ColdBrewSection />

      {/* ── 7. SPONSORS ─────────────────────────────────────────────── */}
      <section className="bg-[var(--color-warm-white)] py-14 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-3xl font-bold text-[var(--color-logo-forest)] mb-8">
            Partners &amp; Sponsors
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            {[
              { label: 'The Coffee Marathon', logo: true },
              { label: 'Inspire Africa Group' },
              { label: 'Africa Coffee Park' },
            ].map(({ label, logo }) => (
              <div key={label} className="flex items-center gap-2 px-5 py-3 bg-[var(--color-warm-white)] rounded-xl border border-[var(--color-border)] shadow-sm">
                {logo && <Image src="/images/logo.png" alt="The Coffee Marathon" width={32} height={32} className="object-contain" />}
                <span className="font-body text-sm font-semibold text-[var(--color-logo-deep-brown)]">{label}</span>
              </div>
            ))}
            {(sponsors ?? []).map((s: Sponsor) => (
              <div key={s._id} className="px-5 py-3 bg-[var(--color-warm-white)] rounded-xl border border-[var(--color-border)] shadow-sm">
                <span className="font-body text-sm font-semibold text-[var(--color-logo-deep-brown)]">{s.name}</span>
              </div>
            ))}
          </div>
          <Link href="/sponsorships" className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-logo-forest)] hover:text-[var(--color-logo-deep-brown)] transition-colors">
            Become a partner <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/races-runner-nature.jpg" alt="" fill className="object-cover" sizes="100vw" aria-hidden />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Run with a cause.<br />Run for impact.
          </h2>
          <p className="font-body text-lg text-white/90 mb-8">
            Join runners from across the world at Africa Coffee Park on 3 October 2026. Every step supports the IK Community of Karamoja.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={defaultPinnketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-4 rounded-full font-label font-bold uppercase tracking-[0.08em] text-base hover:bg-[var(--color-amber-dark)] transition-colors shadow-lg"
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
          <div className="mt-10 flex items-center justify-center gap-4">
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                <FacebookIcon size={16} />
              </a>
            )}
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                <InstagramIcon size={16} />
              </a>
            )}
            {settings?.twitterUrl && (
              <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                <TwitterXIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
