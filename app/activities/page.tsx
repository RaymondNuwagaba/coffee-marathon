import type { Metadata } from 'next'
import Image from 'next/image'
import { Mic2, Briefcase, Calendar, Users, Globe } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Activities — Conference & Business Forum',
  description:
    'The Coffee Marathon weekend features two major events: the Inspire Women Conference and the Africa Business & Investment Forum.',
}

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Beyond the Race"
        subtitle="The Coffee Marathon weekend brings together runners, thinkers, leaders, and changemakers."
        label="Weekend Activities"
      />

      {/* Inspire Women Conference */}
      <section id="inspire-women" className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-[var(--color-seedling-light)] flex items-center justify-center mb-5">
                <Mic2 size={26} className="text-[var(--color-forest)]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mb-4">
                Inspire Women Conference
              </h2>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                A powerful gathering of women leaders, entrepreneurs, farmers, and changemakers
                — celebrating the progress of women in Uganda and charting a bold future
                together.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-6">
                The conference features keynote speakers, panel discussions, workshops, and
                networking sessions designed to inspire, connect, and equip women across all
                sectors.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Calendar, label: 'Date', value: 'Placeholder — to be confirmed' },
                  { icon: Users, label: 'Format', value: 'In-person & virtual' },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-4 border border-[var(--color-cream-dark)]"
                  >
                    <Icon size={16} className="text-[var(--color-forest)] mb-2" />
                    <p className="font-body text-xs uppercase tracking-wider text-[var(--color-arabica)]/60">
                      {label}
                    </p>
                    <p className="font-body text-sm font-semibold text-[var(--color-espresso)] mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="mailto:info@coffeemarathonug.com"
                  className="inline-flex items-center gap-2 bg-[var(--color-forest)] text-[var(--color-cream)] px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:bg-[var(--color-forest-light)] transition-colors"
                >
                  Register Interest
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/concert-crowd-day.jpg"
                alt="Inspire Women Conference — large crowd at Africa Coffee Park"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Africa Business Forum */}
      <section id="business-forum" className="bg-[var(--color-espresso)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/concert-crowd-night.jpg"
                alt="Africa Business Forum — night concert at Africa Coffee Park"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-14 h-14 rounded-full bg-[var(--color-arabica)]/20 flex items-center justify-center mb-5">
                <Briefcase size={26} className="text-[var(--color-latte)]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-cream)] mb-4">
                Africa Business & Investment Forum
              </h2>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-4">
                Connect with investors, business leaders, policymakers, and innovators who are
                driving Africa&apos;s economic transformation — with a special focus on
                agribusiness, coffee, and sustainable development.
              </p>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-6">
                Sessions include investment panels, B2B matchmaking, pitch competitions,
                and guided farm tours at Africa Coffee Park.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Calendar, label: 'Date', value: 'Placeholder — to be confirmed' },
                  { icon: Globe, label: 'Focus', value: 'Agribusiness & coffee' },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-[var(--color-espresso-light)] rounded-xl p-4"
                  >
                    <Icon size={16} className="text-[var(--color-latte)] mb-2" />
                    <p className="font-body text-xs uppercase tracking-wider text-[var(--color-cream)]/40">
                      {label}
                    </p>
                    <p className="font-body text-sm font-semibold text-[var(--color-cream)] mt-0.5">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="mailto:info@coffeemarathonug.com"
                className="inline-flex items-center gap-2 bg-[var(--color-latte)] text-[var(--color-espresso)] px-5 py-2.5 rounded-full font-body text-sm font-semibold hover:bg-[var(--color-latte-light)] transition-colors"
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full weekend schedule placeholder */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-4">
            Full Weekend Schedule
          </h2>
          <p className="font-body text-sm text-[var(--color-arabica)]/70 mb-8">
            Detailed schedule to be published closer to race day.
          </p>
          <div className="bg-[var(--color-cream-dark)] rounded-2xl p-10 flex items-center justify-center">
            <p className="font-body text-sm text-[var(--color-arabica)]/50">
              Schedule — to be confirmed by client
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
