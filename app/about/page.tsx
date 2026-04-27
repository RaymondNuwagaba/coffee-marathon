import type { Metadata } from 'next'
import { Leaf, Users } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { timeline } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story of The Coffee Marathon Uganda — celebrating the women who grow Uganda's finest coffee.",
}

const team = [
  { name: 'Team Member Name', role: 'Race Director' },
  { name: 'Team Member Name', role: 'Event Coordinator' },
  { name: 'Team Member Name', role: 'Community Partnerships' },
  { name: 'Team Member Name', role: 'Marketing & Comms' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Born from Uganda's coffee fields. Built to celebrate the women who make it possible."
        label="About the Event"
      />

      {/* Mission */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={16} className="text-[var(--color-forest)]" />
                <span className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">
                  Our Mission
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mb-5">
                Running for recognition
              </h2>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                The Coffee Marathon brings attention to the invisible backbone of Uganda&apos;s
                coffee industry — the brave women who toil in the fields to produce some of
                the world&apos;s finest coffee, yet often go unrecognised.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                Uganda is one of Africa&apos;s leading coffee producers, with Arabica and Robusta
                varieties grown across diverse highland regions. Behind every cup is a network
                of smallholder farmers — the majority of whom are women — who plant, tend, harvest,
                and process coffee beans by hand.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed">
                The Coffee Marathon was founded to change that narrative — and to use sport as
                a vehicle for lasting social and economic change.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center">
              <span className="font-body text-xs text-[var(--color-arabica)]/40 text-center px-8">
                Photography — women coffee farmers, Uganda highlands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Women farmers section */}
      <section className="bg-[var(--color-espresso)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-[var(--color-espresso-light)] rounded-2xl flex items-center justify-center order-2 lg:order-1">
              <span className="font-body text-xs text-[var(--color-cream)]/30 text-center px-8">
                Documentary photography — coffee harvest
              </span>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-cream)] mb-5">
                The women who grow your coffee
              </h2>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-4">
                Across Uganda&apos;s southwestern highlands — the slopes of Mount Elgon, the
                Rwenzori foothills, and the hills surrounding Ntungamo — women make up over 70%
                of the agricultural workforce. In coffee farming communities, they are the
                backbone of every stage of production.
              </p>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-4">
                Yet historically, land ownership, income distribution, and recognition have
                disproportionately bypassed them. The Coffee Marathon exists to spotlight these
                women, amplify their stories, and direct tangible support to their communities.
              </p>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed">
                Every registration, every kit purchase, and every sponsorship contributes to
                programmes that support women coffee farmers across Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)]">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-cream-dark)]" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-6 relative">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-espresso)] flex items-center justify-center shrink-0 relative z-10">
                    <span className="font-display text-sm font-bold text-[var(--color-latte)]">
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-4 flex-1 border border-[var(--color-cream-dark)] shadow-sm mt-2">
                    <p className="font-body text-sm text-[var(--color-arabica)]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users size={18} className="text-[var(--color-forest)]" />
            <span className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)]">
              Meet the Team
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mb-10">
            The people behind the race
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center">
                  <Users size={28} className="text-[var(--color-arabica)]/40" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[var(--color-espresso)]">
                    {member.name}
                  </p>
                  <p className="font-body text-xs text-[var(--color-arabica)]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-xs text-[var(--color-arabica)]/50">
            Team profiles to be added by client
          </p>
        </div>
      </section>
    </>
  )
}
