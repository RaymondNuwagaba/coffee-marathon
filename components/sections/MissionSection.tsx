import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--green-mist)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p
            className="font-label text-xs font-bold uppercase tracking-[0.12em] mb-3"
            style={{ color: 'var(--green-mid)' }}
          >
            Coffee with a Cause
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--brown-heading)' }}
          >
            More than a race. A movement.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: 'Why We Started',
              body: 'We saw untapped potential in coffee-growing communities, especially among women, whose labour sustains the industry but whose voices are often overlooked. The Coffee Marathon was born to change that.',
            },
            {
              title: 'Why We Continue',
              body: 'Awareness alone is no longer enough. We have evolved from a moment of recognition into a movement for action, one that goes beyond stories to actively changing lives and livelihoods.',
            },
            {
              title: 'Why It Matters',
              body: 'Our long-term vision: create economic resilience through coffee farming, ensuring farmers can withstand market fluctuations, climate challenges, and generational poverty.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6"
              style={{
                border: '0.5px solid rgba(26,107,58,0.2)',
                borderLeft: '4px solid var(--green-primary)',
              }}
            >
              <h3
                className="font-heading text-lg font-bold mb-3"
                style={{ color: 'var(--brown-heading)' }}
              >
                {title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'var(--brown-dark)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.08em] group transition-colors"
            style={{ color: 'var(--green-mid)' }}
          >
            Read our story{' '}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
