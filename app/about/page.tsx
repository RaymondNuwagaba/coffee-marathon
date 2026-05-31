import type { Metadata } from 'next'
import Image from 'next/image'
import { Users, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { timeline } from '@/lib/content'
import { PINNKET } from '@/lib/pinnket'

export const metadata: Metadata = {
  title: 'About — The Coffee Marathon Uganda',
  description:
    "The story of The Coffee Marathon Uganda — celebrating the women who grow Uganda's finest coffee and empowering the IK Community of Karamoja.",
}

const team = [
  { name: 'Dr. Nelson Tugume', role: 'CEO, Inspire Africa Group' },
  { name: 'Team Member Name', role: 'Race Director' },
  { name: 'Team Member Name', role: 'Event Coordinator' },
  { name: 'Team Member Name', role: 'Community Partnerships' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Born from Uganda's coffee fields. Built to celebrate the women who make it possible — and to plant roots that last."
        label="About the Event"
      />

      {/* ── Why We Started ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
                Why We Run
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--brown-heading)' }}>
                Why We Started
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                We started running because we saw untapped potential in coffee-growing communities — especially among women — whose labour sustains the industry but whose voices and opportunities are often overlooked. Coffee farming in Uganda is more than an economic activity; it is a way of life passed down through generations.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                Yet many women remain locked out of decision-making, fair markets, and financial security. The Coffee Marathon was born as a bold response to uplift these communities, using visibility and collective action to create opportunity where it is most needed.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                At the same time, we wanted to spotlight Ugandan coffee on the global stage — not just as a high-quality product, but as a story of people, culture, and resilience.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/races-start-line.jpg"
                alt="Athletes lined up at the start of The Coffee Marathon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Continue ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about-finish-line.jpg"
                alt="Female runner finishing — Coffee Marathon 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
                The Movement
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--brown-heading)' }}>
                Why We Continue
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                Today, we continue to run because awareness alone is no longer enough. While visibility opened doors, real change requires deeper, sustained engagement. The Coffee Marathon has evolved from a moment of recognition into a movement for action — one that goes beyond telling stories to actively changing lives.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                Our focus now is on moving from visibility to sustainable empowerment. This means supporting initiatives that strengthen women&apos;s participation in coffee value chains, improve livelihoods, and build local capacity.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                Each race is a renewed commitment to measurable impact — connecting runners, partners, and communities in ways that create lasting economic and social value long after the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 Theme — IK Community ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
              2026 Theme
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brown-heading)' }}>
              Empowering the IK Community of Karamoja
            </h2>
            {/* White card with green-primary left-border */}
            <div
              className="max-w-2xl mx-auto bg-white rounded-xl p-6 text-left border"
              style={{
                borderLeftWidth: '4px',
                borderLeftStyle: 'solid',
                borderLeftColor: 'var(--green-primary)',
                borderColor: 'rgba(26,107,58,0.2)',
              }}
            >
              <p className="font-display text-lg font-semibold italic" style={{ color: 'var(--brown-heading)' }}>
                &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--brown-heading)' }}>
                Who Are the Ik, and Why They Matter
              </h3>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--brown-dark)' }}>
                The Ik are one of Uganda&apos;s most marginalised and least understood indigenous communities, living in the remote mountainous region of Karamoja. For generations, they have faced extreme isolation, food insecurity, and limited access to land, education, and economic opportunity.
              </p>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--brown-dark)' }}>
                They matter because they represent both a moral responsibility and an opportunity for transformation. Empowering the Ik is not about charity — it is about restoring dignity, agency, and inclusion.
              </p>
              <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--brown-heading)' }}>
                Why Coffee Farming Is the Path Out of Poverty
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--brown-dark)' }}>
                Coffee farming offers a long-term, climate-resilient livelihood that can thrive in suitable highland conditions while generating consistent income over time. For the Ik community, coffee farming represents more than income — it creates opportunities for skills development, cooperative structures, and integration into national and global value chains.
              </p>
            </div>

            {/* IK Community 4-point plan */}
            <div className="space-y-4">
              {[
                {
                  title: 'Introduce & Scale Sustainable Coffee Farming',
                  body: 'Identifying suitable land, promoting climate-smart practices, and building community-led systems that ensure coffee farming thrives across seasons and generations.',
                },
                {
                  title: 'Equip Households with Skills, Seedlings & Market Access',
                  body: 'Households receive high-quality coffee seedlings, hands-on training in sustainable farming, and links to reliable markets and cooperative structures.',
                },
                {
                  title: 'Create Long-Term Income and Food Security',
                  body: 'Coffee farming provides predictable income that allows households to plan — covering education, healthcare, and daily needs — while diversifying crops for food security.',
                },
                {
                  title: 'Reduce Dependence and End Cycles of Poverty',
                  body: 'By investing in productive assets rather than short-term aid, communities gain control over their own livelihoods. The goal is self-reliance and dignified economic participation.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-5 border"
                  style={{
                    backgroundColor: 'var(--green-pale)',
                    borderColor: 'rgba(13,61,34,0.15)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: 'var(--green-primary)' }}
                    />
                    <div>
                      <h4 className="font-body font-semibold text-sm mb-1" style={{ color: 'var(--green-deep)' }}>{item.title}</h4>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brown-dark)' }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wide image */}
          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/venue-group.jpg"
                alt="Inspire Africa Group — IK Community outreach"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="font-body text-sm text-white/80 max-w-lg">
                  Dr. Nelson Tugume, CEO of Inspire Africa Group, during one of the humanitarian outreaches in the IK community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More than a crop — full-width breakout ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-pale)' }}>
                Coffee with a Cause
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                More than a crop. A story.
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The true value of coffee goes far beyond its taste or price — it lies in its story. When coffee is deeply linked to its origin, its people, and a clear purpose, it becomes more than a commodity; it becomes a product with meaning.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Ultimately, when people understand the journey of coffee — from soil to cup, from farmer to consumer — they value it more. And when coffee is valued more, farmers earn more, communities grow stronger, and Uganda&apos;s coffee earns its rightful place as a premium, ethical product on the global stage.
              </p>
              <a
                href={PINNKET.register10k}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-label font-bold uppercase tracking-[0.08em] text-sm transition-colors"
                style={{ backgroundColor: 'white', color: 'var(--green-primary)' }}
              >
                Run with a cause <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/venue-crowd.jpg"
                alt="Thousands of runners and supporters at Africa Coffee Park"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
              Our Journey
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--brown-heading)' }}>
              Five Years of Impact
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: 'var(--green-mid)' }}
            />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-start gap-6 relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{ backgroundColor: i === timeline.length - 1 ? 'var(--green-primary)' : 'var(--green-deep)' }}
                  >
                    <span className="font-display text-sm font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-4 flex-1 border shadow-sm mt-2"
                    style={{
                      backgroundColor: 'white',
                      borderColor: i === timeline.length - 1 ? 'rgba(26,107,58,0.35)' : 'rgba(26,107,58,0.15)',
                    }}
                  >
                    <p className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-label text-xs uppercase tracking-[0.12em] font-bold mb-3" style={{ color: 'var(--green-mid)' }}>
            Meet the Team
          </p>
          <h2 className="font-display text-3xl font-bold mb-10" style={{ color: 'var(--brown-heading)' }}>
            The people behind the race
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--green-pale)' }}
                >
                  <Users size={28} style={{ color: 'var(--green-primary)' }} />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm" style={{ color: 'var(--brown-heading)' }}>{member.name}</p>
                  <p className="font-body text-xs" style={{ color: 'var(--green-mid)' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-xs" style={{ color: 'var(--green-mid)' }}>
            Additional team profiles to be added by client
          </p>
        </div>
      </section>
    </>
  )
}
