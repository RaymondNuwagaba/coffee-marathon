import type { Metadata } from 'next'
import { CheckCircle2, Package, MapPin, Backpack } from 'lucide-react'
import Link from 'next/link'
import SocialShare from '@/components/sections/SocialShare'

export const metadata: Metadata = {
  title: "You're In! — What's Next",
  description:
    "You've registered for The Coffee Marathon Uganda 2026. Here's everything you need to know for race day.",
}

const infoCards = [
  {
    icon: CheckCircle2,
    title: 'Race Day Timeline',
    color: 'bg-[var(--color-seedling-light)]',
    iconColor: 'text-[var(--color-forest)]',
    items: [
      '05:30 — Athlete assembly & warm-up',
      '06:00 — Race start (all categories)',
      '~14:00 — Prize ceremony & celebrations',
    ],
    note: 'Times are indicative — confirmed schedule to be communicated.',
  },
  {
    icon: Package,
    title: 'Kit Collection',
    color: 'bg-[var(--color-cream-dark)]',
    iconColor: 'text-[var(--color-arabica)]',
    items: [
      'Collect your race bib at the expo — date TBC',
      'Bring your registration confirmation email',
      'ID required for collection',
    ],
    note: 'Expo location and hours to be confirmed closer to race day.',
  },
  {
    icon: MapPin,
    title: 'Getting There',
    color: 'bg-[var(--color-espresso)]/10',
    iconColor: 'text-[var(--color-espresso)]',
    items: [
      'Africa Coffee Park, Ntungamo, Uganda',
      'Approx. 8 hours from Kampala by road',
      'Shuttle service from Ntungamo town — TBC',
    ],
    note: 'Detailed travel guide to be added.',
  },
  {
    icon: Backpack,
    title: 'What to Pack',
    color: 'bg-[var(--color-forest)]/10',
    iconColor: 'text-[var(--color-forest)]',
    items: [
      'Layers for highland temperature swings',
      'Sun protection (altitude UV)',
      'Hydration pack recommended for 21K/42K',
    ],
    note: 'Full packing guide to be added.',
  },
]

export default function WhatsNextPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-forest)] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-cream)] mb-4">
            You&apos;re in! 🎉
          </h1>
          <p className="font-body text-xl text-[var(--color-cream)]/80">
            Here&apos;s everything you need for race day at Africa Coffee Park, 3 October 2026.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map(({ icon: Icon, title, color, iconColor, items, note }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[var(--color-cream-dark)] shadow-sm"
              >
                <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-espresso)] mb-3">
                  {title}
                </h3>
                <ul className="space-y-2 mb-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-[var(--color-arabica)] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-forest)] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-[var(--color-arabica)]/50 italic">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social share */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-2">
            Tell your friends you&apos;re running!
          </h2>
          <p className="font-body text-sm text-[var(--color-arabica)]/70 mb-6">
            Share the news and inspire others to join you.
          </p>
          <div className="flex justify-center">
            <SocialShare />
          </div>

          {/* Social card download placeholder */}
          <div className="mt-8 bg-[var(--color-cream-dark)] rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="font-body text-sm text-[var(--color-arabica)]/60 mb-3">
                Download your &ldquo;I&apos;m Running&rdquo; social card
              </p>
              <button
                disabled
                className="inline-flex items-center gap-2 bg-[var(--color-espresso)] text-[var(--color-cream)] px-5 py-2.5 rounded-full font-body text-sm font-semibold opacity-50 cursor-not-allowed"
              >
                Download Card (coming soon)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="bg-[var(--color-espresso)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-cream)] mb-8">
            Make the most of your trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/attractions"
              className="bg-[var(--color-espresso-light)] rounded-xl p-5 text-left hover:bg-[var(--color-arabica)]/30 transition-colors"
            >
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-logo-forest)] mb-1">
                Explore
              </p>
              <p className="font-display text-xl font-semibold text-[var(--color-cream)]">
                Local Attractions →
              </p>
            </Link>
            <Link
              href="/accommodation"
              className="bg-[var(--color-espresso-light)] rounded-xl p-5 text-left hover:bg-[var(--color-arabica)]/30 transition-colors"
            >
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-logo-forest)] mb-1">
                Stay
              </p>
              <p className="font-display text-xl font-semibold text-[var(--color-cream)]">
                Accommodation →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
