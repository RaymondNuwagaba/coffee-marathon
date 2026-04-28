import type { Metadata } from 'next'
import Image from 'next/image'
import { Leaf, Users, ArrowRight } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import { timeline } from '@/lib/content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
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

      {/* Why We Run — Why We Started */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={16} className="text-[var(--color-forest)]" />
                <span className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">
                  Why We Run
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mb-5">
                Why We Started
              </h2>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                We started running because we saw untapped potential in coffee-growing
                communities — especially among women — whose labour sustains the industry
                but whose voices and opportunities are often overlooked. Coffee farming in
                Uganda is more than an economic activity; it is a way of life passed down
                through generations.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                Yet many women remain locked out of decision-making, fair markets, and
                financial security. The Coffee Marathon was born as a bold response to uplift
                these communities, using visibility and collective action to create
                opportunity where it is most needed.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed">
                Sport became our chosen tool because of its universal language and
                transformative power. Running brings people together across social and
                economic divides — we believed it could be harnessed as a force for
                socio-economic transformation, turning physical endurance into advocacy,
                solidarity, and impact.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/races-start-line.jpg"
                alt="Athletes lined up at the start of The Coffee Marathon"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Continue */}
      <section className="bg-[var(--color-espresso)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about-finish-line.jpg"
                alt="Female runner finishing with medal — Coffee Marathon 2025"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-cream)] mb-5">
                Why We Continue
              </h2>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-4">
                Today, we continue to run because awareness alone is no longer enough. While
                visibility opened doors, real change requires deeper, sustained engagement.
                The Coffee Marathon has evolved from a moment of recognition into a movement
                for action — one that goes beyond telling stories to actively changing lives.
              </p>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed mb-4">
                Our focus now is on moving from visibility to sustainable empowerment. This
                means supporting initiatives that strengthen women&apos;s participation in
                coffee value chains, improve livelihoods, and build local capacity.
              </p>
              <p className="font-body text-base text-[var(--color-cream)]/70 leading-relaxed">
                Each race is a renewed commitment to measurable impact — connecting runners,
                partners, and communities in ways that create lasting economic and social
                value long after the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The IK Community — 2026 Focus */}
      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)] font-semibold">
              2026 Theme
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mt-2 mb-4">
              Empowering the IK Community of Karamoja
            </h2>
            <p className="font-body text-base text-[var(--color-arabica)] max-w-2xl mx-auto italic">
              &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mb-4">
                Who Are the Ik, and Why They Matter
              </h3>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                The Ik are one of Uganda&apos;s most marginalised and least understood indigenous
                communities, living in the remote mountainous region of Karamoja. For
                generations, they have faced extreme isolation, food insecurity, and limited
                access to land, education, and economic opportunity.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-6">
                They matter because they represent both a moral responsibility and an
                opportunity for transformation. Empowering the Ik is not about charity — it
                is about restoring dignity, agency, and inclusion. Their resilience, deep
                connection to land, and communal values make them strong partners in
                sustainable development when given the right tools and opportunities.
              </p>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mb-4">
                Why Coffee Farming Is the Path Out of Poverty
              </h3>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                Coffee farming offers a long-term, climate-resilient livelihood that can
                thrive in suitable highland conditions while generating consistent income
                over time. Unlike short-term aid or seasonal labour, coffee is a perennial
                crop — once established, it provides yields year after year.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed">
                For the Ik community, coffee farming represents more than income. It creates
                opportunities for skills development, cooperative structures, and integration
                into national and global value chains. When combined with training, access
                to markets, and fair pricing, coffee becomes a pathway to economic
                independence.
              </p>
            </div>
            <div className="space-y-5">
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
                <div key={item.title} className="bg-white rounded-xl p-5 border border-[var(--color-cream-dark)]">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-forest)] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-sm text-[var(--color-espresso)] mb-1">{item.title}</h4>
                      <p className="font-body text-sm text-[var(--color-arabica)] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-[var(--color-forest)] rounded-xl p-5 text-[var(--color-cream)]">
                <p className="font-display text-lg italic mb-2">
                  &ldquo;This year, we run to plant roots — literally and symbolically.&rdquo;
                </p>
                <p className="font-body text-sm text-[var(--color-cream)]/70">
                  Each step taken by runners supports the planting of coffee trees, the
                  growth of skills, and the establishment of enduring economic systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee with a Cause */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-xs uppercase tracking-widest text-[var(--color-latte)] font-semibold">
                Coffee with a Cause
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-espresso)] mt-2 mb-5">
                More than a crop. A story.
              </h2>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                The Coffee Marathon is built on the belief that coffee is more than just a
                crop — it is a livelihood, a culture, and a story that connects farmers,
                consumers, and communities. By placing coffee at the heart of the marathon,
                the initiative reframes it from a simple agricultural product into a symbol
                of resilience, hard work, and shared value.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">
                Ethical sourcing and community impact are central to this transformation.
                When consumers and buyers understand that a cup of coffee supports women
                farmers, strengthens rural livelihoods, and contributes to sustainable
                development, their relationship with that coffee changes.
              </p>
              <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-8">
                When people understand the journey of coffee — from soil to cup, from
                farmer to consumer — they value it more. And when coffee is valued more,
                farmers earn more, communities grow stronger, and Uganda&apos;s coffee earns
                its rightful place as a premium, ethical product on the global stage.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-[var(--color-forest)] text-[var(--color-cream)] px-6 py-3 rounded-full font-body font-semibold text-sm hover:bg-[var(--color-forest-light)] transition-colors"
              >
                Run with a cause <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/venue-crowd.jpg"
                alt="Thousands of runners and supporters at Africa Coffee Park"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)]/30 to-transparent" />
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
            Additional team profiles to be added by client
          </p>
        </div>
      </section>
    </>
  )
}
