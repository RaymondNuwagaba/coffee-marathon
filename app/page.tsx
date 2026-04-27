import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Mic2, Briefcase, Star } from 'lucide-react'
import CountdownClock from '@/components/ui/CountdownClock'
import PinnketCTA from '@/components/ui/PinnketCTA'
import RaceCard from '@/components/ui/RaceCard'
import StatBadge from '@/components/ui/StatBadge'
import TestimonialCard from '@/components/ui/TestimonialCard'
import NewsCard from '@/components/ui/NewsCard'
import AttractionCard from '@/components/ui/AttractionCard'
import { TornPaperDivider } from '@/components/ui/TornPaperDivider'
import GalleryGrid from '@/components/sections/GalleryGrid'
import MissionSection from '@/components/sections/MissionSection'
import { AmbassadorSection } from '@/components/sections/AmbassadorSection'
import { FacebookIcon, InstagramIcon, TwitterXIcon } from '@/components/ui/SocialIcons'
import {
  getRaces,
  getTestimonials,
  getLatestPosts,
  getSiteSettings,
  getGallery,
  getSponsors,
  getAttractions,
} from '@/sanity/lib/fetch'
import { races as staticRaces, stats as staticStats, testimonials as staticTestimonials, attractions as staticAttractions } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'
import type { Race, Post, Testimonial, Attraction, Sponsor, SiteSettings } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'The Coffee Marathon Uganda 2026 — Run Through Coffee Country',
}

const staticPosts = [
  { slug: 'course-announcement-2026', date: 'March 2026', title: 'Course Announcement: The 2026 Route Revealed', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'registration-open', date: 'February 2026', title: 'Registration Now Open for All Categories', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'inspire-women-conference', date: 'January 2026', title: 'Inspire Women Conference Speakers Announced', excerpt: 'Placeholder — to be replaced with actual news content.' },
]

export default async function HomePage() {
  const [sanityRaces, testimonials, posts, settings, gallery, sponsors, sanityAttractions] =
    await Promise.all([
      getRaces(),
      getTestimonials(),
      getLatestPosts(),
      getSiteSettings(),
      getGallery(),
      getSponsors(),
      getAttractions(),
    ])

  const races = sanityRaces ?? []
  const raceAttrs = sanityAttractions ?? []
  const featuredAttractions = raceAttrs.filter((a: Attraction) => a.featured).slice(0, 3)
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
    image: 'https://coffeemarathonug.com/og-image.jpg',
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

      {/* ── 1. Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-[var(--color-espresso-dark)]">

        {/* Two-column grid */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2">

          {/* Left column — content */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-24 bg-gradient-to-br from-[var(--color-espresso-dark)] via-[var(--color-espresso)] to-[var(--color-espresso-light)]">

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-latte)]" />
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-latte)]">
                Africa Coffee Park · Ntungamo, Uganda
              </span>
            </div>

            {/* H1 — flyer-style stacked */}
            <h1 className="leading-none mb-4">
              <span className="block font-display italic text-[var(--color-latte)] text-3xl">The</span>
              <span className="block font-display font-bold text-[var(--color-cream)] text-7xl md:text-8xl">Coffee</span>
              <span className="block font-display font-bold text-[var(--color-forest)] text-7xl md:text-8xl">Marathon</span>
            </h1>

            {/* Theme line */}
            <p className="font-body text-sm text-[var(--color-cream)]/60 italic border-l-2 border-[var(--color-forest)] pl-4 mb-6 max-w-sm leading-relaxed">
              &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
            </p>

            {/* Location row */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-[var(--color-latte)] shrink-0" />
              <span className="font-body text-sm text-[var(--color-cream)]/70">
                Africa Coffee Park, Uganda
              </span>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <CountdownClock targetDate="2026-10-03T06:00:00+03:00" />
            </div>

            {/* Featuring tag */}
            <p className="font-body text-[var(--color-cream)]/40 text-xs tracking-widest uppercase mb-1">
              Featuring
            </p>
            <p className="font-display italic text-[var(--color-forest)] text-3xl mb-8">Tyrese Gibson</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <PinnketCTA href={defaultPinnketUrl} label="Register Now →" variant="primary" />
              <Link
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-cream)]/40 text-[var(--color-cream)] font-body font-semibold text-sm hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 transition-all"
              >
                Get Your Kit
              </Link>
            </div>
          </div>

          {/* Right column — Tyrese Gibson photo */}
          <div className="relative hidden md:block">
            <Image
              src="/images/tyrese-gibson.jpg"
              alt="Tyrese Gibson — featured celebrity, The Coffee Marathon Uganda 2026"
              fill
              className="object-cover object-top"
              priority
              sizes="50vw"
            />
            {/* Dark overlay gradient left edge for seamless blend */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-espresso)] to-transparent" />

            {/* Date badge — top right */}
            <div className="absolute top-8 right-8 text-right leading-none">
              <p className="font-body text-[var(--color-cream)] text-sm tracking-widest uppercase">3RD</p>
              <p className="font-display font-bold text-[var(--color-latte)] text-3xl">OCT</p>
              <p className="font-display font-bold text-[var(--color-forest)] text-6xl leading-none">26</p>
            </div>
          </div>
        </div>

        {/* Mobile: date badge over hero gradient */}
        <div className="absolute top-6 right-6 text-right leading-none z-20 md:hidden">
          <p className="font-body text-[var(--color-cream)] text-xs tracking-widest uppercase">3RD</p>
          <p className="font-display font-bold text-[var(--color-latte)] text-2xl">OCT</p>
          <p className="font-display font-bold text-[var(--color-forest)] text-5xl leading-none">26</p>
        </div>
      </section>

      {/* ── 2. Race Categories ────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-espresso)]">
              Choose Your Distance
            </h2>
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
        </div>
      </section>

      {/* ── 3. Mission ────────────────────────────────────────────── */}
      <MissionSection missionText={settings?.missionText} />

      {/* ── 4. Stats ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-cream-dark)]">
            {eventStats.map((stat: { number: string; label: string }) => (
              <StatBadge key={stat.label} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* TornPaperDivider — cream → cream-light */}
      <div className="bg-[var(--color-cream)]">
        <TornPaperDivider fillColor="#FAF3E8" />
      </div>

      {/* ── 5. Gallery ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-espresso)] mb-10 text-center">
            Race Day Gallery
          </h2>
          <GalleryGrid caption="Race Day 2025" sanityImages={gallery ?? []} />
        </div>
      </section>

      {/* ── 6. Ambassador ─────────────────────────────────────────── */}
      <AmbassadorSection pinnketRegisterUrl={defaultPinnketUrl} />

      {/* ── 7. Kit Preview ────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center order-2 lg:order-1">
              <span className="font-body text-xs text-[var(--color-arabica)]/50">Kit flat-lay photography — to be added</span>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-latte)] mb-3">Official Merchandise</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mb-4">
                Official Race Kit 2026
              </h2>
              <p className="font-body text-base text-[var(--color-arabica)] mb-6 leading-relaxed">
                Rep the Coffee Marathon in style. Every kit includes a race jersey, shorts,
                cap, and race bag — designed to perform in Uganda&apos;s highland terrain.
              </p>
              {settings?.kitOrderCutoff && (
                <p className="font-body text-sm text-[var(--color-latte)] mb-6">
                  Orders close{' '}
                  {new Intl.DateTimeFormat('en-UG', { dateStyle: 'long' }).format(
                    new Date(settings.kitOrderCutoff)
                  )}
                  . Collection on race day.
                </p>
              )}
              <PinnketCTA href={shopUrl} label="Order Your Kit on Pinnket →" showNote />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Activities ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-espresso)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-cream)]">
              Beyond the Race
            </h2>
            <p className="mt-3 font-body text-base text-[var(--color-cream)]/60 max-w-xl mx-auto">
              The Coffee Marathon weekend is packed with inspiration, connection, and opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-espresso-light)] rounded-2xl p-8 border border-[var(--color-arabica)]/20 hover:border-[var(--color-forest)] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[var(--color-forest)]/20 flex items-center justify-center mb-4">
                <Mic2 size={22} className="text-[var(--color-seedling)]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-cream)] mb-2">Inspire Women Conference</h3>
              <p className="font-body text-sm text-[var(--color-cream)]/60 mb-5 leading-relaxed">
                A powerful gathering of women leaders, entrepreneurs, and changemakers — celebrating
                progress and charting the future of women in Uganda.
              </p>
              <Link href="/activities" className="font-body text-sm font-semibold text-[var(--color-seedling)] flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-[var(--color-espresso-light)] rounded-2xl p-8 border border-[var(--color-arabica)]/20 hover:border-[var(--color-forest)] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[var(--color-latte)]/20 flex items-center justify-center mb-4">
                <Briefcase size={22} className="text-[var(--color-latte)]" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-cream)] mb-2">Africa Business & Investment Forum</h3>
              <p className="font-body text-sm text-[var(--color-cream)]/60 mb-5 leading-relaxed">
                Connect with investors, business leaders, and innovators driving Africa&apos;s economic transformation.
              </p>
              <Link href="/activities" className="font-body text-sm font-semibold text-[var(--color-latte)] flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TornPaperDivider fillColor="#F5E8D0" />

      {/* ── 9. Attractions Preview ────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-espresso)]">Make a Week of It</h2>
              <p className="mt-2 font-body text-base text-[var(--color-arabica)]">Ntungamo and its surroundings have so much to offer.</p>
            </div>
            <Link href="/attractions" className="font-body text-sm font-semibold text-[var(--color-forest)] flex items-center gap-1 hover:gap-2 transition-all shrink-0">
              See all attractions <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAttractions.length > 0
              ? featuredAttractions.map((a: Attraction) => (
                  <AttractionCard key={a._id} name={a.name} description={a.description} tips={a.tips ?? ''} slug={a.slug.current} />
                ))
              : staticAttractions.slice(0, 3).map((a) => (
                  <AttractionCard key={a.slug} {...a} />
                ))}
          </div>
        </div>
      </section>

      {/* ── 10. Testimonials ──────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--color-latte)] text-[var(--color-latte)]" />
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-espresso)]">What runners say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(testimonials ?? staticTestimonials).map((t: Testimonial | typeof staticTestimonials[0], i: number) => (
              <TestimonialCard key={'_id' in t ? t._id : i} quote={t.quote} name={t.name} category={t.category} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Sponsors ──────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-8">
            Our Partners & Sponsors
          </h3>
          {/* Confirmed partners always shown first */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2 px-5 py-3 bg-[var(--color-cream-dark)] rounded-xl">
              <Image src="/images/logo.png" alt="The Coffee Marathon" width={40} height={40} className="object-contain" />
              <span className="font-body text-sm font-semibold text-[var(--color-espresso)]">The Coffee Marathon</span>
            </div>
            <div className="px-5 py-3 bg-[var(--color-cream-dark)] rounded-xl">
              <span className="font-body text-sm font-semibold text-[var(--color-espresso)]">IAG — Inspire Africa Group</span>
            </div>
            <div className="px-5 py-3 bg-[var(--color-cream-dark)] rounded-xl">
              <span className="font-body text-sm font-semibold text-[var(--color-espresso)]">ACP — Africa Coffee Park</span>
            </div>
            {(sponsors ?? []).map((s: Sponsor) => (
              <div key={s._id} className="px-5 py-3 bg-[var(--color-cream-dark)] rounded-xl">
                <span className="font-body text-sm font-semibold text-[var(--color-espresso)]">{s.name}</span>
              </div>
            ))}
          </div>
          <Link href="/sponsorships" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-forest-light)] transition-colors">
            Become a partner <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── 12. Latest News ───────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-espresso)]">Latest News</h2>
            <Link href="/news" className="font-body text-sm font-semibold text-[var(--color-forest)] flex items-center gap-1 hover:gap-2 transition-all shrink-0">
              All news <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts && posts.length > 0
              ? posts.map((p: Post) => (
                  <NewsCard
                    key={p._id}
                    slug={p.slug.current}
                    date={new Intl.DateTimeFormat('en-UG', { dateStyle: 'medium' }).format(new Date(p.publishedAt))}
                    title={p.title}
                    excerpt={p.excerpt}
                  />
                ))
              : staticPosts.map((p) => <NewsCard key={p.slug} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-forest)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-cream)] mb-4">Ready to Run?</h2>
          <p className="font-body text-lg text-[var(--color-cream)]/80 mb-8">
            Join runners from across the world at Africa Coffee Park on 3 October 2026.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PinnketCTA href={defaultPinnketUrl} label="Register Now" variant="secondary" />
            <Link
              href="/races"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-cream)]/40 text-[var(--color-cream)] font-body font-semibold text-sm hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 transition-all"
            >
              View all races
            </Link>
          </div>
          {/* Social connect strip */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[var(--color-forest-dark)] flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-espresso)] transition-colors">
                <FacebookIcon size={16} />
              </a>
            )}
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[var(--color-forest-dark)] flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-espresso)] transition-colors">
                <InstagramIcon size={16} />
              </a>
            )}
            {settings?.twitterUrl && (
              <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                className="w-10 h-10 rounded-full bg-[var(--color-forest-dark)] flex items-center justify-center text-[var(--color-cream)] hover:bg-[var(--color-espresso)] transition-colors">
                <TwitterXIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
