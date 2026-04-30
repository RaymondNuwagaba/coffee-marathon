import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Coffee, Award, Music, BookOpen, Droplets, Flame, TreePine,
  Trophy, Palette, Mic, Globe2, TrendingUp, Calendar, MapPin,
  Star, ExternalLink, ArrowUpRight,
} from 'lucide-react'
import { PINNKET } from '@/lib/pinnket'

export const metadata: Metadata = {
  title: 'Beyond the Marathon — Coffee Festival Activities 2026',
  description:
    'The Coffee Marathon is more than a race. Explore 11 festival experiences: Barista Championships, Coffee Exhibitions, Convention & Expo, Tyrese Gibson Concert, and more.',
}

/* 11 activities — The Coffee Marathon is the event, not listed here */
const activities = [
  {
    number: '01',
    icon: Coffee,
    name: 'The Inspire Africa Barista Championships',
    description:
      'A competitive platform showcasing the skills and creativity of baristas from across the region. It promotes excellence, innovation, and professionalism in coffee preparation.',
    accent: 'amber',
  },
  {
    number: '02',
    icon: Award,
    name: 'Coffee Exhibitions',
    description:
      'A dynamic showcase of coffee products, technologies, and innovations from across the value chain. It provides a platform for businesses to market, connect, and explore new opportunities.',
    accent: 'green',
  },
  {
    number: '03',
    icon: Music,
    name: 'The Coffee Concert',
    description:
      'A vibrant entertainment event blending music, culture, and coffee experiences. It attracts diverse audiences while celebrating African creativity and lifestyle.',
    accent: 'amber',
  },
  {
    number: '04',
    icon: BookOpen,
    name: 'Coffee Workshops',
    description:
      'Interactive learning sessions focused on coffee production, processing, and business development. They equip participants with practical skills and industry knowledge.',
    accent: 'green',
  },
  {
    number: '05',
    icon: Droplets,
    name: 'Coffee Cupping',
    description:
      'A guided tasting experience used to evaluate coffee quality, flavor, and aroma profiles. It helps participants appreciate the diversity and standards of specialty coffee.',
    accent: 'amber',
  },
  {
    number: '06',
    icon: Flame,
    name: 'The Roasters Parade',
    description:
      'A showcase of coffee roasters demonstrating techniques, equipment, and roasting styles. It highlights craftsmanship and innovation in transforming beans into premium products.',
    accent: 'green',
  },
  {
    number: '07',
    icon: TreePine,
    name: 'Farm Expeditions — Adopt a Tree',
    description:
      'Immersive visits to coffee farms where participants engage with farmers and adopt coffee trees. This fosters direct connection, sustainability, and long-term support for growers.',
    accent: 'green',
    mutumo: true,
  },
  {
    number: '08',
    icon: Trophy,
    name: 'Africa Coffee Awards',
    description:
      'A prestigious platform that recognizes and celebrates excellence, innovation, and leadership across Africa\'s coffee value chain. It honors outstanding farmers, brands, and industry players driving quality, sustainability, and growth in the coffee sector.',
    accent: 'amber',
  },
  {
    number: '09',
    icon: Palette,
    name: 'Coffee Artistry',
    description:
      'A creative expression of coffee through latte art, design, and visual storytelling. It celebrates talent while enhancing the aesthetic and experiential value of coffee.',
    accent: 'green',
  },
  {
    number: '10',
    icon: Mic,
    name: 'Festival Podcast',
    description:
      'A media platform capturing conversations, insights, and stories from industry leaders and participants. It extends the festival\'s reach and shares knowledge with a wider audience.',
    accent: 'amber',
  },
  {
    number: '11',
    icon: Globe2,
    name: 'High-Level Coffee Summit',
    description:
      'A strategic forum that convenes policymakers, industry leaders, and investors to shape the future of Africa\'s coffee sector. It focuses on policy dialogue, investment opportunities, and collaborative solutions to drive value addition and global competitiveness.',
    accent: 'green',
  },
] as const

export default function BeyondTheMarathonPage() {
  return (
    <>

      {/* ── HERO BANNER ─────────────────────────────────────────────── */}
      {/* pt-32 accounts for announcement bar (≈32px) + navbar (80px) + 48px breathing room */}
      <section className="relative bg-[var(--color-cream)] pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-amber)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-green)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        {/* Amber + green top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-green)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                Coffee Festival 2026
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-text-dark)] leading-tight mb-6">
              Beyond<br />
              <span className="text-[var(--color-logo-forest)]">the Marathon</span>
            </h1>
            <p className="font-body text-xl text-[var(--color-text-mid)] leading-relaxed mb-8 max-w-2xl">
              The Coffee Marathon is not just a race — it is a full festival experience spanning two days of coffee, culture, commerce, and community at Africa Coffee Park, Ntungamo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PINNKET.register10k}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-[#B52222] transition-colors shadow-sm"
              >
                Register to Run →
              </a>
              <a
                href="mailto:info@inspireafricagroup.co.ug"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-logo-forest)] text-[var(--color-logo-forest)] font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-[var(--color-logo-forest)] hover:text-white transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11 FESTIVAL ACTIVITIES ───────────────────────────────────── */}
      <section className="bg-[var(--color-warm-white)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                Festival Programme
              </span>
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-4">
              11 Experiences.<br />One Epic Weekend.
            </h2>
            <p className="font-body text-lg text-[var(--color-text-mid)]">
              From barista battles to farm expeditions, every activity deepens your connection to Uganda&apos;s coffee story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon
              const isGreen = activity.accent === 'green'
              const accentColor = isGreen ? 'var(--color-green)' : 'var(--color-logo-deep-brown)'
              const accentBg = isGreen ? 'var(--color-accent-green-light)' : 'var(--color-bg-warm)'
              return (
                <div
                  key={activity.number}
                  className="bg-[var(--color-warm-white)] rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-[var(--color-border)]"
                  style={{ borderLeft: `4px solid ${accentColor}` }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: accentBg }}
                      >
                        <Icon size={20} style={{ color: accentColor }} />
                      </div>
                      <span
                        className="font-display text-3xl font-bold"
                        style={{ color: accentColor, opacity: 0.35 }}
                      >
                        {activity.number}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-text-dark)] mb-2 leading-snug">
                      {activity.name}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-text-mid)] leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Mutumo Island callout — green accent */}
                    {'mutumo' in activity && activity.mutumo && (
                        <div className="mt-4 rounded-xl p-4 border" style={{ backgroundColor: 'var(--color-accent-green-light)', borderColor: 'rgba(46,125,50,0.3)' }}>
                          <div className="flex items-center gap-2 mb-1">
                          <MapPin size={12} style={{ color: 'var(--color-green)' }} className="shrink-0" />
                          <span className="font-label text-xs font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--color-green)' }}>
                            Featured Destination
                          </span>
                        </div>
                        <p className="font-body font-semibold text-sm text-[var(--color-text-dark)] mb-0.5">
                          Mutumo Island Resort on Lake Nyabihoko
                        </p>
                        <p className="font-body text-xs text-[var(--color-text-mid)] leading-relaxed">
                          A stunning island escape on the shores of Lake Nyabihoko — set in Uganda&apos;s southwestern highlands, the perfect way to extend your Coffee Marathon weekend.
                          {/* <!-- GENERATED: review this --> */}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CONVENTION & EXPO FEATURE ────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-green)]/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-green)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
                <span className="font-label text-xs uppercase tracking-[0.12em] font-bold text-[var(--color-logo-warm-brown)]">
                  The Coffee Convention &amp; Expo
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] leading-tight mb-4">
                Where Coffee<br />
                <span className="text-[var(--color-logo-forest)]">Meets Commerce</span>
              </h2>
              <p className="font-body text-sm italic border-l-2 pl-4 mb-6 leading-relaxed text-[var(--color-text-mid)] border-[var(--color-green)]">
                &ldquo;Accelerating Coffee Value Addition &amp; Coffee Tourism for Job Creation and Export Growth&rdquo;
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--color-green)] text-[var(--color-green)] font-label text-sm font-bold uppercase tracking-[0.08em]">
                  <Calendar size={14} />
                  1st–2nd October 2026
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--color-green)] text-[var(--color-green)] font-label text-sm font-bold uppercase tracking-[0.08em]">
                  <MapPin size={14} />
                  Kampala, Uganda
                </div>
              </div>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-6">
                The Convention convenes key players across the coffee value chain to explore innovation, policy, and investment opportunities. The projected growth to a $5 billion coffee revenue target by 2030 is driven by a clear strategy: promoting value addition through local processing instead of exporting raw beans, leveraging the Africa Coffee Park for large-scale industrialization, increasing production and farmer productivity, expanding into global markets with strong &ldquo;Made in Uganda&rdquo; branding, and building a complete coffee ecosystem that creates jobs and attracts investment.
              </p>
              <a
                href="mailto:info@inspireafricagroup.co.ug"
                className="inline-flex items-center gap-2 font-label font-bold uppercase tracking-[0.08em] text-sm px-6 py-3 rounded-full text-white transition-colors bg-[var(--color-green)] hover:bg-[var(--color-forest-dark)]"
              >
                Register Interest
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl p-8 text-white relative overflow-hidden bg-[var(--color-green)]">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20 bg-[var(--color-forest-dark)]" />
                <div className="relative z-10">
                  <TrendingUp size={32} className="mb-4 text-white/70" />
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-display text-6xl font-bold text-white leading-none">$5B</span>
                    <span className="font-body text-xl text-white/70 mb-1">by 2030</span>
                  </div>
                  <p className="font-body text-base text-white/80">
                    Uganda&apos;s coffee revenue target — driven by value addition, the Africa Coffee Park, and a &ldquo;Made in Uganda&rdquo; global brand strategy.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                    {[
                      { num: '$900M', label: '2023' },
                      { num: '$2.5B', label: '2026 target' },
                      { num: '$5B', label: '2030 target' },
                    ].map(({ num, label }) => (
                      <div key={label}>
                        <p className="font-display text-xl font-bold text-white">{num}</p>
                        <p className="font-body text-xs text-white/60 uppercase tracking-wide mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src="/images/convention-expo.jpg"
                  alt="The Coffee Convention & Expo — Kampala, Uganda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-body text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    1st–2nd Oct 2026 · Kampala
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCERT — TYRESE GIBSON ──────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/concert-crowd-night.jpg" alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden />
          <div className="absolute inset-0 bg-[var(--color-dark)]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-0.5 bg-[var(--color-amber)]" />
            <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
              The Coffee Concert 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-amber)]/20 border border-[var(--color-amber)]/40 rounded-full px-4 py-1.5 mb-6">
                <Star size={12} className="text-[var(--color-amber)]" fill="currentColor" />
                <span className="font-body text-xs font-semibold text-[var(--color-amber)] uppercase tracking-widest">
                  Headline Artist · 2026
                </span>
              </div>
              <h2 className="font-display font-bold text-white leading-none mb-2">
                <span className="block text-base text-white/50 font-normal tracking-widest uppercase mb-2">Featuring</span>
                <span className="block text-7xl md:text-8xl text-[var(--color-amber)]">Tyrese</span>
                <span className="block text-7xl md:text-8xl text-white">Gibson</span>
              </h2>
              <p className="font-display text-lg font-semibold text-[var(--color-amber-light)] italic mb-4">
                The Most Anticipated Night of the Year
              </p>
              <p className="font-body text-white/70 text-base leading-relaxed max-w-md mb-8">
                Hollywood actor, recording artist, and global advocate — joining us live at Africa Coffee Park on 3 October 2026 to champion the IK Community of Karamoja.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={PINNKET.register10k}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-6 py-3 rounded-full font-body font-semibold text-sm hover:bg-[var(--color-amber-dark)] transition-colors"
                >
                  Get Your Ticket
                </a>
                <a
                  href={PINNKET.shop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-body font-semibold text-sm hover:border-white/60 transition-colors"
                >
                  <ExternalLink size={14} />
                  Event Info
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold mb-1">2025 Headline Artist</p>
                <p className="font-display text-xl font-semibold text-white mb-1">Diamond Platnumz</p>
                <p className="font-body text-sm text-white/60">
                  Tanzanian superstar Diamond Platnumz headlined the Coffee Marathon Concert 2025 — proof that this event attracts world-class talent.
                </p>
              </div>
            </div>

            {/* Right — all 3 Tyrese images */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/images/tyrese-hero.jpg" alt="Tyrese Gibson — headline artist" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-body text-xs uppercase tracking-widest text-white/60 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Live · 3 October 2026</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image src="/images/tyrese-portrait.jpg" alt="Tyrese Gibson" fill className="object-cover object-top" sizes="25vw" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image src="/images/tyrese-seated.jpg" alt="Tyrese Gibson" fill className="object-cover object-top" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[{ num: '3 Oct', label: 'Concert Night' }, { num: 'Live', label: 'Performance' }, { num: '2026', label: 'Africa Coffee Park' }, { num: 'World-class', label: 'Entertainment' }].map(({ num, label }) => (
              <div key={label} className="bg-white/5 py-6 px-6 text-center hover:bg-white/10 transition-colors">
                <p className="font-display text-2xl font-bold text-[var(--color-amber)]">{num}</p>
                <p className="font-body text-xs text-white/50 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFRICA COFFEE FESTIVAL 2027 TEASER ──────────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)] via-[var(--color-orange)] to-[var(--color-orange-dark)]" />
        {/* Official festival poster as subtle decorative layer */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/africa-coffee-fest.jpg" alt="" fill className="object-cover" sizes="100vw" aria-hidden />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
            <span className="font-body text-xs uppercase tracking-widest text-white font-semibold">Save the Date</span>
          </div>
          <div className="mb-2">
            <span className="font-body text-white/80 text-lg uppercase tracking-widest">Coming Next</span>
          </div>
          <h2 className="font-display font-bold text-white leading-tight mb-3">
            <span className="block text-4xl md:text-5xl">Africa Coffee Festival</span>
            <span className="block text-7xl md:text-9xl leading-none">2027</span>
          </h2>
          <p className="font-body text-white text-2xl font-semibold mb-3">
            22<sup>nd</sup>–26<sup>th</sup> June 2027
          </p>
          <p className="font-body text-white/80 text-lg mb-4 italic">&ldquo;Five Days Packed with Flavour &amp; Creativity&rdquo;</p>
          <p className="font-body text-white/70 text-base mb-8">At the Africa Coffee Park · Ntungamo, Uganda</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
            {['Marathon', 'Exhibitions', 'Concert Artistry', 'Workshops', 'Cupping', 'High-Level Summit', 'Podcast', 'Farm Expeditions', 'Africa Coffee Awards', "The Roasters' Parade", 'Pairings & Tasting', 'Barista Contests'].map((tag) => (
              <span key={tag} className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30">{tag}</span>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-4 rounded-full font-label font-bold uppercase tracking-[0.08em] text-base hover:bg-[var(--color-amber-dark)] transition-colors shadow-xl">
            Save the Date
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </>
  )
}
