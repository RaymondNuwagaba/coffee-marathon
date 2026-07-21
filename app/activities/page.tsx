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

const activities = [
  { number: '01', icon: Coffee, name: 'The Inspire Africa Barista Championships', description: 'A competitive platform showcasing the skills and creativity of baristas from across the region. It promotes excellence, innovation, and professionalism in coffee preparation.' },
  { number: '02', icon: Award, name: 'Coffee Exhibitions', description: 'A dynamic showcase of coffee products, technologies, and innovations from across the value chain. It provides a platform for businesses to market, connect, and explore new opportunities.' },
  { number: '03', icon: Music, name: 'The Coffee Concert', description: 'A vibrant entertainment event blending music, culture, and coffee experiences. It attracts diverse audiences while celebrating African creativity and lifestyle.' },
  { number: '04', icon: BookOpen, name: 'Coffee Workshops', description: 'Interactive learning sessions focused on coffee production, processing, and business development. They equip participants with practical skills and industry knowledge.' },
  { number: '05', icon: Droplets, name: 'Coffee Cupping', description: 'A guided tasting experience used to evaluate coffee quality, flavor, and aroma profiles. It helps participants appreciate the diversity and standards of specialty coffee.' },
  { number: '06', icon: Flame, name: 'The Roasters Parade', description: 'A showcase of coffee roasters demonstrating techniques, equipment, and roasting styles. It highlights craftsmanship and innovation in transforming beans into premium products.' },
  { number: '07', icon: TreePine, name: 'Farm Expeditions — Adopt a Tree', description: 'Immersive visits to coffee farms where participants engage with farmers and adopt coffee trees. This fosters direct connection, sustainability, and long-term support for growers.', mutumo: true },
  { number: '08', icon: Trophy, name: 'Africa Coffee Awards', description: "A prestigious platform that recognizes and celebrates excellence, innovation, and leadership across Africa's coffee value chain." },
  { number: '09', icon: Palette, name: 'Coffee Artistry', description: 'A creative expression of coffee through latte art, design, and visual storytelling. It celebrates talent while enhancing the aesthetic and experiential value of coffee.' },
  { number: '10', icon: Mic, name: 'Festival Podcast', description: "A media platform capturing conversations, insights, and stories from industry leaders and participants. It extends the festival's reach and shares knowledge with a wider audience." },
  { number: '11', icon: Globe2, name: 'High-Level Coffee Summit', description: "A strategic forum that convenes policymakers, industry leaders, and investors to shape the future of Africa's coffee sector." },
] as const

export default function BeyondTheMarathonPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-5" style={{ color: 'var(--green-pale)' }}>
              Coffee Festival 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Beyond<br />
              the Marathon
            </h1>
            <p className="font-body text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              The Coffee Marathon is not just a race — it is a full festival experience spanning two days of coffee, culture, commerce, and community at Africa Coffee Park, Ntungamo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PINNKET.register10k}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-label font-bold uppercase tracking-[0.08em] text-sm transition-colors"
                style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
              >
                Register to Run →
              </a>
              <a
                href="mailto:info@inspireafricagroup.co.ug"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/50 text-white font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-white/10 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11 FESTIVAL ACTIVITIES ───────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-4" style={{ color: 'var(--green-mid)' }}>
              Festival Programme
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--brown-heading)' }}>
              11 Experiences.<br />One Epic Weekend.
            </h2>
            <p className="font-body text-lg" style={{ color: 'var(--brown-dark)' }}>
              From barista battles to farm expeditions, every activity deepens your connection to Uganda&apos;s coffee story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <div
                  key={activity.number}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border"
                  style={{
                    borderColor: 'rgba(26,107,58,0.15)',
                    borderLeftWidth: '4px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: 'var(--green-primary)',
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--green-pale)' }}
                      >
                        <Icon size={20} style={{ color: 'var(--green-primary)' }} />
                      </div>
                      <span
                        className="font-display text-3xl font-bold"
                        style={{ color: 'var(--green-pale)' }}
                      >
                        {activity.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2 leading-snug" style={{ color: 'var(--brown-heading)' }}>
                      {activity.name}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                      {activity.description}
                    </p>

                    {'mutumo' in activity && activity.mutumo && (
                      <div
                        className="mt-4 rounded-xl p-4 border"
                        style={{ backgroundColor: 'var(--green-pale)', borderColor: 'rgba(26,107,58,0.2)' }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin size={12} style={{ color: 'var(--green-primary)' }} className="shrink-0" />
                          <span className="font-label text-xs font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--green-primary)' }}>
                            Featured Destination
                          </span>
                        </div>
                        <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--brown-heading)' }}>
                          Mutumo Island Resort on Lake Nyabihoko
                        </p>
                        <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                          A stunning island escape on the shores of Lake Nyabihoko — the perfect way to extend your Coffee Marathon weekend.
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

      {/* ── CONVENTION & EXPO ────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-4" style={{ color: 'var(--green-mid)' }}>
                The Coffee Convention &amp; Expo
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: 'var(--brown-heading)' }}>
                Where Coffee<br />
                Meets Commerce
              </h2>
              <p className="font-body text-sm italic border-l-2 pl-4 mb-6 leading-relaxed" style={{ color: 'var(--brown-dark)', borderColor: 'var(--green-primary)' }}>
                &ldquo;Accelerating Coffee Value Addition &amp; Coffee Tourism for Job Creation and Export Growth&rdquo;
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] border-2"
                  style={{ borderColor: 'var(--green-primary)', color: 'var(--green-primary)' }}
                >
                  <Calendar size={14} />
                  1st–2nd October 2026
                </div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-label text-sm font-bold uppercase tracking-[0.08em] border-2"
                  style={{ borderColor: 'var(--green-primary)', color: 'var(--green-primary)' }}
                >
                  <MapPin size={14} />
                  Kampala, Uganda
                </div>
              </div>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--brown-dark)' }}>
                The Convention convenes key players across the coffee value chain to explore innovation, policy, and investment opportunities. The projected growth to a $5 billion coffee revenue target by 2030 is driven by value addition, leveraging the Africa Coffee Park, and a strong &ldquo;Made in Uganda&rdquo; global brand strategy.
              </p>
              <a
                href="mailto:info@inspireafricagroup.co.ug"
                className="inline-flex items-center gap-2 font-label font-bold uppercase tracking-[0.08em] text-sm px-6 py-3 rounded-full text-white transition-colors"
                style={{ backgroundColor: 'var(--green-primary)' }}
              >
                Register Interest
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden"
                style={{ backgroundColor: 'var(--green-primary)' }}
              >
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: 'var(--green-deep)' }} />
                <div className="relative z-10">
                  <TrendingUp size={32} className="mb-4 opacity-70" />
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-display text-6xl font-bold text-white leading-none">$5B</span>
                    <span className="font-body text-xl mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>by 2030</span>
                  </div>
                  <p className="font-body text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Uganda&apos;s coffee revenue target — driven by value addition, the Africa Coffee Park, and a &ldquo;Made in Uganda&rdquo; global brand strategy.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                    {[
                      { num: '$900M', label: '2023' },
                      { num: '$2.5B', label: '2026 target' },
                      { num: '$5B', label: '2030 target' },
                    ].map(({ num, label }) => (
                      <div key={label}>
                        <p className="font-heading text-xl font-bold text-white">{num}</p>
                        <p className="font-body text-xs uppercase tracking-wide mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
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
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--green-deep)', opacity: 0.88 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-8" style={{ color: 'var(--green-pale)' }}>
            The Coffee Concert 2026
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
                style={{ backgroundColor: 'rgba(194,237,210,0.12)', borderColor: 'rgba(194,237,210,0.3)' }}
              >
                <Star size={12} style={{ color: 'var(--green-pale)' }} fill="currentColor" />
                <span className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--green-pale)' }}>
                  Headline Artist · 2026
                </span>
              </div>
              <h2 className="font-display font-bold text-white leading-none mb-2">
                <span className="block text-base text-white/50 font-normal tracking-widest uppercase mb-2">Featuring</span>
                <span className="block text-7xl md:text-8xl" style={{ color: 'var(--green-light)' }}>Tyrese</span>
                <span className="block text-7xl md:text-8xl text-white">Gibson</span>
              </h2>
              <p className="font-heading text-lg font-semibold italic mb-4" style={{ color: 'var(--green-pale)' }}>
                The Most Anticipated Night of the Year
              </p>
              <p className="font-body text-base leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Hollywood actor, recording artist, and global advocate — joining us live at Africa Coffee Park on 3 October 2026 to champion the IK Community of Karamoja.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={PINNKET.register10k}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm transition-colors"
                  style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
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
              <div className="p-5 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="font-body text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--green-pale)' }}>2025 Headline Artist</p>
                <p className="font-heading text-xl font-semibold text-white mb-1">Diamond Platnumz</p>
                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Tanzanian superstar Diamond Platnumz headlined the Coffee Marathon Concert 2025 — proof that this event attracts world-class talent.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/images/tyrese-hero.jpg" alt="Tyrese Gibson — headline artist" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
        </div>
      </section>

      {/* ── AFRICA COFFEE FESTIVAL 2027 TEASER ──────────────────────── */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--green-primary), var(--green-deep))` }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
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
            {['Marathon', 'Exhibitions', 'Concert', 'Workshops', 'Cupping', 'High-Level Summit', 'Podcast', 'Farm Expeditions', 'Africa Coffee Awards', "The Roasters' Parade", 'Pairings & Tasting', 'Barista Contests'].map((tag) => (
              <span
                key={tag}
                className="font-body text-xs font-medium px-3 py-1.5 rounded-full border"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-label font-bold uppercase tracking-[0.08em] text-base shadow-xl transition-colors"
            style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
          >
            Save the Date
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
