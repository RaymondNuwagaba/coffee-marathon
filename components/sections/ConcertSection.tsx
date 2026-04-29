import Image from 'next/image'
import { Music2, Star, ExternalLink } from 'lucide-react'
import { PINNKET } from '@/lib/pinnket'

export default function ConcertSection() {
  return (
    <section className="bg-[var(--color-text-dark)] py-20 md:py-28 overflow-hidden relative">

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/concert-crowd-night.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-text-dark)]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-0.5 bg-[var(--color-amber)]" />
          <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
            Coffee Marathon Concert 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — headline artist */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--color-amber)]/20 border border-[var(--color-amber)]/40 rounded-full px-4 py-1.5 mb-6">
              <Star size={12} className="text-[var(--color-amber)]" fill="currentColor" />
              <span className="font-body text-xs font-semibold text-[var(--color-amber)] uppercase tracking-widest">
                Headline Artist · 2026
              </span>
            </div>

            <h2 className="font-display font-bold text-white leading-none mb-2">
              <span className="block text-lg text-white/50 font-normal tracking-widest uppercase mb-2">Featuring</span>
              <span className="block text-7xl md:text-8xl lg:text-9xl text-[var(--color-amber)]">Tyrese</span>
              <span className="block text-7xl md:text-8xl lg:text-9xl text-white">Gibson</span>
            </h2>

            <p className="font-display text-xl font-semibold text-[var(--color-amber-light)] italic mb-4">
              The Most Anticipated Night of the Year
            </p>

            <p className="font-body text-white/70 text-base leading-relaxed max-w-md mb-4">
              Hollywood actor, recording artist, and global advocate — joining us live at Africa Coffee Park on 3 October 2026 to champion the IK Community of Karamoja.
            </p>

            <p className="font-body text-sm text-white/50 italic mb-8">
              Theme:{' '}
              <span className="text-[var(--color-amber-light)]">
                &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
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

            {/* Diamond Platnumz 2025 callout */}
            <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Music2 size={16} className="text-[var(--color-amber)]" />
                <span className="font-body text-xs uppercase tracking-widest text-[var(--color-amber)] font-semibold">
                  2025 Headline Artist
                </span>
              </div>
              <p className="font-display text-xl font-semibold text-white mb-1">Diamond Platnumz</p>
              <p className="font-body text-sm text-white/60 mb-4">
                Tanzanian superstar Diamond Platnumz performed at the Coffee Marathon Concert 2025 — a testament to the world-class calibre of artists this event attracts.
              </p>
              {/* 3 photos */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/images/diamond-1.jpg"
                    alt="Diamond Platnumz live at Coffee Marathon Concert 2025"
                    fill
                    className="object-cover object-top"
                    sizes="15vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/images/diamond-2.jpg"
                    alt="Diamond Platnumz performing at Coffee Marathon 2025"
                    fill
                    className="object-cover object-top"
                    sizes="15vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/images/diamond-3.jpg"
                    alt="Diamond Platnumz on stage at Coffee Marathon 2025"
                    fill
                    className="object-cover object-top"
                    sizes="15vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right — all 3 Tyrese photos */}
          <div className="flex flex-col gap-4">

            {/* Main large photo — tuxedo standing */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/tyrese-hero.jpg"
                alt="Tyrese Gibson — headline artist, Coffee Marathon Concert 2026"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-dark)]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body text-xs uppercase tracking-widest text-white/60 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Live · 3 October 2026
                </span>
              </div>
            </div>

            {/* Two smaller photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              {/* Beige trench coat — dramatic */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/tyrese-portrait.jpg"
                  alt="Tyrese Gibson"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
              {/* Seated, relaxed */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/tyrese-seated.jpg"
                  alt="Tyrese Gibson"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            { num: '3 Oct', label: 'Concert Night' },
            { num: 'Live', label: 'Performance' },
            { num: '2026', label: 'Africa Coffee Park' },
            { num: 'World-class', label: 'Entertainment' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-white/5 py-6 px-6 text-center hover:bg-white/10 transition-colors">
              <p className="font-display text-2xl font-bold text-[var(--color-amber)]">{num}</p>
              <p className="font-body text-xs text-white/50 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
