import Image from 'next/image'
import { Play, Trophy, Music2, Quote } from 'lucide-react'

/*
 * Sources:
 * - Stats: lib/content.ts, results-podium-women.jpg (prize money visible)
 * - Testimonials: COFFEE MARATHON 2026 BOOKLETE LIGHT.pdf
 * - Concert: PDF page 5 — "Tanzanian music star Diamond Platnumz performing at the
 *   coffee marathon concert 2025"
 * - Video: 2025 MARATHON HIGHLIGHT.mp4 exists in website content/ folder (188 MB)
 *   — TODO: compress and host, then replace placeholder below
 */

const stats = [
  { num: '2,000+', label: 'Runners', note: '' },
  { num: '10+', label: 'Countries', note: '' },
  { num: 'UGX 10M', label: "Women's Top Prize", note: '' },
  { num: '4', label: 'Race Categories', note: '' },
  // <!-- GENERATED: confirm --> Cups of coffee served — confirm exact figure with client
  { num: '5,000+', label: 'Cups of Coffee Served', note: 'confirm' },
  // <!-- GENERATED: confirm --> Total km run — confirm with race timing team
  { num: '42,000+', label: 'Kilometres Run', note: 'confirm' },
]

/*
 * Grid image plan — 60% athletic/professional, 40% community:
 * Slot 1 (2-col span, LEAD): races-runner-portrait.jpg     — ATHLETIC
 * Slot 2 (regular):          results-podium-women.jpg      — ATHLETIC/RESULTS
 * Slot 3 (regular):          races-runner-nature.jpg       — ATHLETIC
 * Slot 4 (regular):          gallery-1.jpg                 — COMMUNITY
 * Slot 5 (regular):          about-finish-line.jpg         — ATHLETIC
 * Slot 6 (regular):          gallery-2.jpg                 — COMMUNITY
 * Slot 7 (regular):          hero-start.jpg                — EVENT (mixed)
 */
const gridImages = [
  {
    src: '/images/races-runner-portrait.jpg',
    alt: 'Elite 21 KM runner mid-race — Coffee Marathon 2025',
    caption: 'Elite field pushing the pace — 21 KM',
    type: 'athletic' as const,
    // <!-- TODO: confirm athlete name and bib number with client -->
    wide: true,
  },
  {
    src: '/images/results-podium-women.jpg',
    alt: "Women's prize giving podium — Coffee Marathon 2025",
    caption: "Women's podium — 1st place UGX 10,000,000",
    type: 'athletic' as const,
    wide: false,
  },
  {
    src: '/images/races-runner-nature.jpg',
    alt: 'Elite runner on the highland route — Coffee Marathon 2025',
    caption: 'Lone runner conquering the highland route',
    type: 'athletic' as const,
    // <!-- TODO: confirm athlete name with client -->
    wide: false,
  },
  {
    src: '/images/gallery-1.jpg',
    alt: 'Community runners celebrating — Coffee Marathon 2025',
    caption: 'The coffee community comes alive',
    type: 'community' as const,
    wide: false,
  },
  {
    src: '/images/about-finish-line.jpg',
    alt: 'Female runner crossing the finish line — Coffee Marathon 2025',
    caption: 'Crossing the finish line — 21 KM women',
    type: 'athletic' as const,
    wide: false,
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Runners at the start — Coffee Marathon 2025',
    caption: 'Thousands join the run',
    type: 'community' as const,
    wide: false,
  },
  {
    src: '/images/hero-start.jpg',
    alt: 'START arch — Coffee Marathon 2025',
    caption: 'The race begins at Africa Coffee Park',
    type: 'community' as const,
    wide: false,
  },
]

/* Testimonials sourced from: COFFEE MARATHON 2026 BOOKLETE LIGHT.pdf */
const quotes = [
  {
    quote:
      'I discovered my talent in Primary Four and won 50,000 shillings — the first money I ever earned through running. Through the Ntungamo Marathon I won 1.5 million shillings. That opportunity changed my life.',
    name: 'Chelangat Ariziki',
    role: '21 KM Runner, 2025',
  },
  {
    quote:
      'We traveled with a team of 50 athletes, the majority being women, and we performed very well, winning several awards. The experience changed our mindset after seeing the level of development there.',
    name: 'Christine Muga',
    role: 'CEO, Mount Elgon Women in Specialty Coffee',
  },
  {
    quote:
      'Running became purpose-driven — each step symbolising solidarity with the communities whose stories inspired the event. We were not just competing for personal bests; we were running for livelihoods, for equity, and for impact.',
    name: 'Coffee Marathon Runner',
    role: '10 KM, 2025',
    // <!-- GENERATED: review this — name not confirmed in source files -->
  },
]

export default function Highlights2025Section() {
  return (
    <section id="highlights-2025" className="bg-white">

      {/* ── Gradient banner header ────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-orange)] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-white/70 font-semibold mb-3">
                Relive the magic
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                Coffee Marathon<br />
                <span className="italic">2025 Highlights</span>
              </h2>
            </div>
            <div className="shrink-0">
              {/* <!-- GENERATED: review this --> */}
              <p className="font-body text-white/80 text-base leading-relaxed max-w-sm text-right hidden md:block">
                Last year&apos;s Coffee Marathon brought together runners from over 10 countries,
                crowned champions who used their winnings to transform their communities,
                and ended with a spectacular concert by Tanzanian superstar Diamond Platnumz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ─────────────────────────────────────────────── */}
      <div className="bg-[var(--color-text-dark)] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px">
            {stats.map(({ num, label, note }) => (
              <div key={label} className="text-center py-4 px-3">
                <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-amber-light)] leading-tight">
                  {num}
                  {note === 'confirm' && (
                    <span className="text-white/30 text-sm font-normal align-super ml-0.5">*</span>
                  )}
                </p>
                <p className="font-body text-xs text-white/60 uppercase tracking-widest mt-1">{label}</p>
                {/* {note === 'confirm' && <!-- GENERATED: confirm --> } */}
              </div>
            ))}
          </div>
          <p className="text-center font-body text-xs text-white/30 mt-3">
            {/* TODO: confirm exact stats with race operations team */}
            * Figures marked with asterisk are estimates — please confirm with race operations team
          </p>
        </div>
      </div>

      {/* ── Photo grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
          <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
            Race Day Photos
          </span>
        </div>

        {/*
         * TODO: Client to supply professional athlete photography for highlights gallery.
         * Slots marked "athletic" below are filled with best available shots;
         * high-res sports-magazine-quality athlete images should replace gallery-1/2
         * and the hero-start placeholder when available.
         */}

        {/* Row 1 — lead with wide athletic shot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Slot 1 — ATHLETIC — 2-col wide */}
          <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden group">
            <Image
              src={gridImages[0].src}
              alt={gridImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <p className="font-body text-sm font-semibold text-white">{gridImages[0].caption}</p>
              <span className="shrink-0 font-body text-xs uppercase tracking-widest text-[var(--color-amber-light)] bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm ml-2">
                Athletic
              </span>
            </div>
          </div>

          {/* Slot 2 — ATHLETIC — regular */}
          <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group">
            <Image
              src={gridImages[1].src}
              alt={gridImages[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-body text-sm font-semibold text-white">{gridImages[1].caption}</p>
            </div>
          </div>
        </div>

        {/* Row 2 — 3 equal columns: athletic / community / athletic */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {gridImages.slice(2, 5).map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <p className="font-body text-xs font-semibold text-white leading-snug">{img.caption}</p>
                {img.type === 'athletic' && (
                  <span className="shrink-0 font-body text-xs uppercase tracking-widest text-[var(--color-amber-light)] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm ml-1">
                    Athletic
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 — community wide + 1 regular */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden group">
            <Image
              src="/images/venue-crowd.jpg"
              alt="Thousands gather at Africa Coffee Park for the Coffee Marathon 2025"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-sm font-semibold text-white">Thousands join the race at Africa Coffee Park</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group">
            <Image
              src={gridImages[6].src}
              alt={gridImages[6].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-body text-xs font-semibold text-white">{gridImages[6].caption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Diamond Platinum concert highlight — DARK CARD ────────── */}
      <div className="bg-[var(--color-text-dark)] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/concert-crowd-night.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[var(--color-text-dark)]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[var(--color-amber)]" />
                <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
                  2025 Concert Highlight
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-amber)]/20 border border-[var(--color-amber)]/40 rounded-full px-4 py-1.5 mb-5">
                <Music2 size={12} className="text-[var(--color-amber)]" />
                <span className="font-body text-xs font-semibold text-[var(--color-amber)] uppercase tracking-widest">
                  Headline Artist · 2025
                </span>
              </div>
              <h3 className="font-display font-bold text-white leading-none mb-4">
                <span className="block text-4xl md:text-5xl text-[var(--color-amber)]">Diamond</span>
                <span className="block text-4xl md:text-5xl text-white">Platnumz</span>
              </h3>
              <p className="font-body text-white/70 text-base leading-relaxed mb-6 max-w-md">
                Tanzanian superstar Diamond Platnumz headlined the Coffee Marathon Concert 2025 — bringing the crowd to its feet at Africa Coffee Park in an electrifying night that proved the event attracts world-class entertainment.
              </p>
              {/* <!-- GENERATED: review this — general atmosphere description, confirm specifics with client --> */}
              <p className="font-body text-white/50 text-sm italic">
                &ldquo;Athletics, coffee, and culture — all in one night.&rdquo;
              </p>
              {/* <!-- TODO: Add Diamond Platnumz setlist or quote if available from client --> */}
            </div>

            {/* Concert image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative col-span-2">
                <Image
                  src="/images/diamond-1.jpg"
                  alt="Diamond Platnumz performing — Coffee Marathon Concert 2025"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-body text-xs text-white/60 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    Live at Africa Coffee Park · 2025
                  </span>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/diamond-2.jpg"
                  alt="Diamond Platnumz on stage — Coffee Marathon 2025"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/diamond-3.jpg"
                  alt="Diamond Platnumz crowd — Coffee Marathon 2025"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results spotlight ─────────────────────────────────────── */}
      <div className="bg-[var(--color-bg-warm)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Trophy size={20} className="text-[var(--color-amber)]" />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-6 h-0.5 bg-[var(--color-amber)]" />
                <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
                  2025 Results
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-[var(--color-text-dark)]">
                Champions & Prize Giving
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Podium image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/results-podium-full.jpg"
                alt="Full prize-giving ceremony — Coffee Marathon 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[var(--color-amber)]/10" />
            </div>

            {/* Prize breakdown */}
            <div>
              <p className="font-body text-[var(--color-text-mid)] leading-relaxed mb-6">
                Prize money at the Coffee Marathon 2025 reached life-changing levels — with winners using their earnings to build homes, fund education, and extend water infrastructure to their communities.
              </p>

              {/* Women's podium — from results-podium-women.jpg */}
              <div className="mb-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold mb-3">
                  Women&apos;s Category
                </p>
                <div className="space-y-3">
                  {[
                    { place: '1st', prize: 'UGX 10,000,000', medal: 'bg-[var(--color-amber-light)]' },
                    { place: '2nd', prize: 'UGX 7,500,000', medal: 'bg-[var(--color-border)]' },
                    { place: '3rd', prize: 'UGX 5,000,000', medal: 'bg-[var(--color-orange)]/30' },
                  ].map(({ place, prize, medal }) => (
                    <div key={place} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[var(--color-border)] shadow-sm">
                      <div className={`w-10 h-10 rounded-full ${medal} flex items-center justify-center shrink-0`}>
                        <span className="font-display font-bold text-sm text-[var(--color-text-dark)]">{place}</span>
                      </div>
                      <div className="flex-1">
                        {/* <!-- TODO: confirm winner names with client — not found in source files --> */}
                        <p className="font-body font-semibold text-sm text-[var(--color-text-dark)]">
                          Winner — {/* TODO: Add name */}
                          <span className="font-normal text-[var(--color-text-light)]">Name to be confirmed</span>
                        </p>
                      </div>
                      <p className="font-display font-bold text-[var(--color-amber)] text-sm shrink-0">{prize}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30 rounded-xl p-5">
                <p className="font-body text-sm text-[var(--color-text-mid)] leading-relaxed">
                  <span className="font-semibold text-[var(--color-text-dark)]">Chelangat Ariziki</span> — 21 KM runner and 2025 prize-winner — used her earnings to build a home for her family. Her story, running to escape poverty and FGM, has become one of the Coffee Marathon&apos;s most powerful symbols of transformation.
                </p>
              </div>

              {/* <!-- TODO: Add men's category winners — not found in source files --> */}
              <p className="mt-4 font-body text-xs text-[var(--color-text-light)]">
                Full 2025 results available on Athlinks.{' '}
                <a
                  href="https://www.athlinks.com/event/395451/results/Event/1112891/Results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-amber)] hover:underline"
                >
                  View official results →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Video recap teaser ───────────────────────────────────── */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
                Highlight Reel
              </span>
              <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
            </div>
            <h3 className="font-display text-3xl font-bold text-[var(--color-text-dark)]">
              Watch the 2025 Highlights
            </h3>
          </div>

          {/*
           * TODO: Add 2025 highlight reel video URL here.
           * The source file "2025 MARATHON HIGHLIGHT.mp4" (188 MB) is in
           * website content/ — compress and upload to YouTube/Vimeo,
           * then replace this placeholder with an embed or hosted URL.
           */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-[var(--color-text-dark)] group cursor-pointer">
            <Image
              src="/images/hero-crowd.jpg"
              alt="Coffee Marathon 2025 — Watch the highlights"
              fill
              className="object-cover opacity-60 group-hover:opacity-50 transition-opacity"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[var(--color-amber)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="font-display text-xl font-bold text-white">Coffee Marathon 2025 — Official Highlights</p>
              <p className="font-body text-sm text-white/60 mt-2">
                {/* TODO: Add 2025 highlight reel video URL here */}
                Video coming soon — contact the team to request the link
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonial strip ────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[var(--color-amber)]/10 to-[var(--color-orange)]/10 border-t border-b border-[var(--color-amber)]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
                Voices from 2025
              </span>
              <span className="w-8 h-0.5 bg-[var(--color-amber)]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map(({ quote, name, role }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-amber)]/20 flex flex-col"
              >
                <Quote size={24} className="text-[var(--color-amber)] mb-4 shrink-0" />
                <p className="font-body text-sm text-[var(--color-text-mid)] leading-relaxed flex-1 italic mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-body font-semibold text-sm text-[var(--color-text-dark)]">{name}</p>
                  <p className="font-body text-xs text-[var(--color-text-light)]">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
