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
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
                <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                  Why We Run
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-5">
                Why We Started
              </h2>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                We started running because we saw untapped potential in coffee-growing communities — especially among women — whose labour sustains the industry but whose voices and opportunities are often overlooked. Coffee farming in Uganda is more than an economic activity; it is a way of life passed down through generations.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                Yet many women remain locked out of decision-making, fair markets, and financial security. The Coffee Marathon was born as a bold response to uplift these communities, using visibility and collective action to create opportunity where it is most needed.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed">
                At the same time, we wanted to spotlight Ugandan coffee on the global stage — not just as a high-quality product, but as a story of people, culture, and resilience. By linking coffee with a world-class athletic event, we created a platform that attracts global attention and repositions Uganda as a place where excellence in sport and excellence in coffee meet.
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
              <div className="absolute inset-0 bg-[var(--color-amber)]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Continue ── */}
      <section className="bg-[var(--color-bg-warm)] py-20">
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
              <div className="absolute inset-0 bg-[var(--color-amber)]/10" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
                <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                  The Movement
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-5">
                Why We Continue
              </h2>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                Today, we continue to run because awareness alone is no longer enough. While visibility opened doors, real change requires deeper, sustained engagement. The Coffee Marathon has evolved from a moment of recognition into a movement for action — one that goes beyond telling stories to actively changing lives.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                Our focus now is on moving from visibility to sustainable empowerment. This means supporting initiatives that strengthen women&apos;s participation in coffee value chains, improve livelihoods, and build local capacity.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed">
                Each race is a renewed commitment to measurable impact — connecting runners, partners, and communities in ways that create lasting economic and social value long after the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The IK Community — 2026 Focus ── */}
      <section className="bg-[var(--color-warm-white)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                2026 Theme
              </span>
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
              Empowering the IK Community of Karamoja
            </h2>
            <p className="font-body text-base text-[var(--color-text-mid)] max-w-2xl mx-auto italic">
              &ldquo;Empowering the IK Community of Karamoja through Coffee Farming to End Poverty&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-logo-deep-brown)] mb-4">
                Who Are the Ik, and Why They Matter
              </h3>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                The Ik are one of Uganda&apos;s most marginalised and least understood indigenous communities, living in the remote mountainous region of Karamoja. For generations, they have faced extreme isolation, food insecurity, and limited access to land, education, and economic opportunity. Often spoken about only in the context of poverty or aid, the Ik are rarely given the space to define their own future.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-6">
                They matter because they represent both a moral responsibility and an opportunity for transformation. Empowering the Ik is not about charity — it is about restoring dignity, agency, and inclusion. Their resilience, deep connection to land, and communal values make them strong partners in sustainable development when given the right tools and opportunities.
              </p>
              <h3 className="font-display text-2xl font-bold text-[var(--color-logo-deep-brown)] mb-4">
                Why Coffee Farming Is the Path Out of Poverty
              </h3>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                Coffee farming offers a long-term, climate-resilient livelihood that can thrive in suitable highland conditions while generating consistent income over time. Unlike short-term aid or seasonal labour, coffee is a perennial crop — once established, it provides yields year after year, creating stability and predictability for households.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed">
                For the Ik community, coffee farming represents more than income. It creates opportunities for skills development, cooperative structures, and integration into national and global value chains. When combined with training, access to markets, and fair pricing, coffee becomes a pathway to economic independence.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Introduce & Scale Sustainable Coffee Farming',
                  body: 'Identifying suitable land, promoting climate-smart practices, and building community-led systems that ensure coffee farming thrives across seasons and generations.',
                  color: 'border-l-[var(--color-amber)]',
                },
                {
                  title: 'Equip Households with Skills, Seedlings & Market Access',
                  body: 'Households receive high-quality coffee seedlings, hands-on training in sustainable farming, and links to reliable markets and cooperative structures.',
                  color: 'border-l-[var(--color-orange)]',
                },
                {
                  title: 'Create Long-Term Income and Food Security',
                  body: 'Coffee farming provides predictable income that allows households to plan — covering education, healthcare, and daily needs — while diversifying crops for food security.',
                  color: 'border-l-[var(--color-forest)]',
                },
                {
                  title: 'Reduce Dependence and End Cycles of Poverty',
                  body: 'By investing in productive assets rather than short-term aid, communities gain control over their own livelihoods. The goal is self-reliance and dignified economic participation.',
                  color: 'border-l-[var(--color-amber)]',
                },
              ].map((item) => (
                <div key={item.title} className={`bg-[var(--color-bg-warm)] rounded-xl p-5 border-l-4 ${item.color} border border-[var(--color-border)]`}>
                  <h4 className="font-body font-semibold text-sm text-[var(--color-text-dark)] mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-[var(--color-text-mid)] leading-relaxed">{item.body}</p>
                </div>
              ))}

              <div className="bg-[var(--color-amber)] rounded-xl p-5">
                <p className="font-display text-lg italic text-white mb-2">
                  &ldquo;This year, we run to plant roots — literally and symbolically.&rdquo;
                </p>
                <p className="font-body text-sm text-white/80">
                  Each step taken by runners supports the planting of coffee trees, the growth of skills, and the establishment of enduring economic systems.
                </p>
              </div>
            </div>
          </div>

          {/* Dr Tugume image + caption */}
          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/venue-group.jpg"
                alt="Inspire Africa Group — IK Community outreach"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[var(--color-text-dark)]/50" />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="font-body text-sm text-white/70 max-w-lg">
                  Dr. Nelson Tugume, CEO of Inspire Africa Group, during one of the humanitarian outreaches in the IK community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coffee with a Cause ── */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
                <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                  Coffee with a Cause
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-5">
                More than a crop. A story.
              </h2>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                The true value of coffee goes far beyond its taste or price — it lies in its story. When coffee is deeply linked to its origin, its people, and a clear purpose, it becomes more than a commodity; it becomes a product with meaning.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-4">
                Ethical sourcing and community impact are central to this transformation. When consumers and buyers understand that a cup of coffee supports women farmers, strengthens rural livelihoods, and contributes to sustainable development, their relationship with that coffee changes. Transparency, fairness, and social impact increase trust — and trust increases value.
              </p>
              <p className="font-body text-base text-[var(--color-text-mid)] leading-relaxed mb-8">
                Ultimately, when people understand the journey of coffee — from soil to cup, from farmer to consumer — they value it more. And when coffee is valued more, farmers earn more, communities grow stronger, and Uganda&apos;s coffee earns its rightful place as a premium, ethical product on the global stage.
              </p>
              <a
                href={PINNKET.register10k}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-6 py-3 rounded-full font-label font-bold uppercase tracking-[0.08em] text-sm hover:bg-[var(--color-amber-dark)] transition-colors"
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
              <div className="absolute inset-0 bg-[var(--color-amber)]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
              <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
                Our Journey
              </span>
              <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
              Five Years of Impact
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-start gap-6 relative">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                    i === timeline.length - 1
                      ? 'bg-[var(--color-primary)]'
                      : 'bg-[var(--color-text-dark)]'
                  }`}>
                    <span className={`font-display text-sm font-bold ${
                      i === timeline.length - 1 ? 'text-white' : 'text-[var(--color-accent)]'
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  <div className={`rounded-xl p-4 flex-1 border shadow-sm mt-2 ${
                    i === timeline.length - 1
                      ? 'bg-[var(--color-accent)]/20 border-[var(--color-primary)]/40'
                      : 'bg-[var(--color-warm-white)] border-[var(--color-border)]'
                  }`}>
                    <p className="font-body text-sm text-[var(--color-text-mid)]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
            <span className="font-label text-xs uppercase tracking-[0.12em] text-[var(--color-logo-warm-brown)] font-bold">
              Meet the Team
            </span>
            <span className="w-8 h-0.5 bg-[var(--color-logo-warm-brown)]" />
          </div>
          <h2 className="font-display text-3xl font-bold text-[var(--color-text-dark)] mb-10">
            The people behind the race
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-[var(--color-border)] flex items-center justify-center">
                  <Users size={28} className="text-[var(--color-text-light)]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[var(--color-logo-deep-brown)]">{member.name}</p>
                  <p className="font-body text-xs text-[var(--color-text-mid)]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-xs text-[var(--color-text-light)]">
            Additional team profiles to be added by client
            {/* TODO: Add team profiles — not found in source files */}
          </p>
        </div>
      </section>
    </>
  )
}
