import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Quote, ArrowRight } from 'lucide-react'

const stats = [
  { num: '2,000+', label: 'Runners' },
  { num: '10+', label: 'Countries' },
  { num: 'UGX 10M', label: "Women's Top Prize" },
  { num: '4', label: 'Race Categories' },
  { num: '5,000+', label: 'Cups of Coffee Served' },
  { num: '42,000+', label: 'Kilometres Run' },
]

const quotes = [
  {
    quote:
      'I discovered my talent in Primary Four and won 50,000 shillings, the first money I ever earned through running. Through the Ntungamo Marathon I won 1.5 million shillings. That opportunity changed my life.',
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
      'Running became purpose-driven, each step symbolising solidarity with the communities whose stories inspired the event. We were not just competing for personal bests; we were running for livelihoods, for equity, and for impact.',
    name: 'Coffee Marathon Runner',
    role: '10 KM, 2025',
  },
]

export default function Highlights2025Section() {
  return (
    <section id="highlights-2025">

      {/* ── Header banner ──────────────────────────────────────────── */}
      <div className="py-16 md:py-20" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-pale)' }}>
                Relive the magic
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                Coffee Marathon<br />
                <span className="italic">2025 Highlights</span>
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed max-w-sm text-right hidden md:block" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Last year&apos;s Coffee Marathon brought together runners from over 10 countries, crowned champions who transformed their communities, and ended with a spectacular concert.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats bar ──────────────────────────────────────────────── */}
      <div className="py-6" style={{ backgroundColor: 'var(--green-deep)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center py-4 px-3">
                <p className="font-heading text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--green-light)' }}>
                  {num}
                </p>
                <p className="font-label text-xs uppercase tracking-[0.1em] mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Photo grid ────────────────────────────────────────────── */}
      <div className="py-16" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-2" style={{ color: 'var(--green-mid)' }}>
            Race Day Photos
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--brown-heading)' }}>
            Coffee Marathon 2025
          </h3>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <Image
                src="/images/races-runner-portrait.jpg"
                alt="Elite runner mid-race - Coffee Marathon 2025"
                fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-body text-sm font-semibold text-white">Elite field pushing the pace, 21 KM</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group">
              <Image
                src="/images/results-podium-women.jpg"
                alt="Women's podium - Coffee Marathon 2025"
                fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-body text-sm font-semibold text-white">Women&apos;s podium, 1st place UGX 10M</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { src: '/images/races-runner-nature.jpg', alt: 'Runner on highland route', caption: 'Lone runner conquering the highland route' },
              { src: '/images/gallery-1.jpg', alt: 'Community runners', caption: 'The coffee community comes alive' },
              { src: '/images/about-finish-line.jpg', alt: 'Female runner at finish', caption: 'Crossing the finish line - 21 KM women' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-body text-xs font-semibold text-white leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <Image src="/images/venue-crowd.jpg" alt="Thousands at Africa Coffee Park" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-body text-sm font-semibold text-white">Thousands join the race at Africa Coffee Park</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden group">
              <Image src="/images/hero-start.jpg" alt="Race start - Coffee Marathon 2025" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="font-body text-xs font-semibold text-white">The race begins at Africa Coffee Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results spotlight ─────────────────────────────────────── */}
      <div className="py-16" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={20} style={{ color: 'var(--green-primary)' }} />
            <div>
              <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-0.5" style={{ color: 'var(--green-mid)' }}>
                2025 Results
              </p>
              <h3 className="font-display text-3xl font-bold" style={{ color: 'var(--brown-heading)' }}>
                Champions & Prize Giving
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="/images/results-podium-full.jpg" alt="Prize-giving ceremony - Coffee Marathon 2025" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>

            <div>
              <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--brown-dark)' }}>
                Prize money at the Coffee Marathon 2025 reached life-changing levels, with winners using their earnings to build homes, fund education, and extend water infrastructure to their communities.
              </p>

              <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
                Women&apos;s Category
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { place: '1st', prize: 'UGX 10,000,000', bg: 'var(--brown-mid)', text: 'white' },
                  { place: '2nd', prize: 'UGX 7,500,000', bg: 'var(--green-pale)', text: 'var(--green-deep)' },
                  { place: '3rd', prize: 'UGX 5,000,000', bg: 'var(--green-pale)', text: 'var(--green-deep)' },
                ].map(({ place, prize, bg, text }) => (
                  <div
                    key={place}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border"
                    style={{ borderColor: 'rgba(26,107,58,0.15)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      <span className="font-heading font-bold text-sm" style={{ color: text }}>{place}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body font-semibold text-sm" style={{ color: 'var(--brown-dark)' }}>
                        Winner, <span className="font-normal" style={{ color: 'var(--brown-heading)' }}>Name to be confirmed</span>
                      </p>
                    </div>
                    <p className="font-heading font-bold text-sm shrink-0" style={{ color: 'var(--green-primary)' }}>{prize}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: 'rgba(26,107,58,0.06)', borderColor: 'rgba(26,107,58,0.2)' }}
              >
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                  <span className="font-semibold" style={{ color: 'var(--brown-heading)' }}>Chelangat Ariziki</span>
                  <span style={{ color: 'var(--brown-heading)' }}>, 21 KM runner and 2025 prize-winner, </span>
                  used her earnings to build a home for her family. Her story has become one of the Coffee Marathon&apos;s most powerful symbols of transformation.
                </p>
              </div>

              <p className="mt-4 font-body text-xs" style={{ color: 'var(--green-mid)' }}>
                Full 2025 results available on Athlinks.{' '}
                <a
                  href="https://www.athlinks.com/event/395451/results/Event/1112891/Results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                  style={{ color: 'var(--green-primary)' }}
                >
                  View official results →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonial strip ────────────────────────────────────── */}
      <div className="py-16" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-label text-xs uppercase tracking-[0.1em] font-bold mb-8 text-center" style={{ color: 'var(--green-mid)' }}>
            Voices from 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map(({ quote, name, role }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-sm border flex flex-col"
                style={{ borderColor: 'rgba(26,107,58,0.15)' }}
              >
                <Quote size={24} className="mb-4 shrink-0" style={{ color: 'var(--green-primary)' }} />
                <p className="font-body text-sm leading-relaxed flex-1 italic mb-5" style={{ color: 'var(--brown-dark)' }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-body font-semibold text-sm" style={{ color: 'var(--green-primary)' }}>{name}</p>
                  <p className="font-body text-xs" style={{ color: 'var(--brown-heading)' }}>{role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] group transition-colors"
              style={{ color: 'var(--green-mid)' }}
            >
              View all results <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
