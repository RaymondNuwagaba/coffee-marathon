import type { Metadata } from 'next'
import { ExternalLink, Trophy } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Race Results',
  description:
    'Official race results for The Coffee Marathon Uganda. View archived results via Athlinks.',
}

const pastResults = [
  { year: '2025', label: 'Coffee Marathon Uganda 2025', url: 'https://www.athlinks.com/event/395451/results/Event/1112891/Results' },
  { year: '2024', label: 'Coffee Marathon Uganda 2024', url: 'https://www.athlinks.com/event/395451/results/Event/1112891/Results' },
  { year: '2023', label: 'Coffee Marathon Uganda 2023', url: 'https://www.athlinks.com/event/395451/results/Event/1112891/Results' },
]

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Race Results"
        subtitle="Official results for all Coffee Marathon Uganda editions, archived on Athlinks."
        label="Results Archive"
      />

      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Trophy size={20} className="text-[var(--color-forest)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--color-espresso)]">
              Results by Year
            </h2>
          </div>

          <div className="space-y-4">
            {pastResults.map((result) => (
              <div
                key={result.year}
                className="bg-white rounded-xl p-5 border border-[var(--color-cream-dark)] flex items-center justify-between gap-4 shadow-sm"
              >
                <div>
                  <span className="font-display text-2xl font-bold text-[var(--color-espresso)] mr-4">
                    {result.year}
                  </span>
                  <span className="font-body text-sm text-[var(--color-arabica)]">
                    {result.label}
                  </span>
                </div>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[var(--color-forest)] text-[var(--color-cream)] px-4 py-2 rounded-full font-body text-xs font-semibold hover:bg-[var(--color-forest-light)] transition-colors shrink-0"
                >
                  View Results <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--color-cream-dark)] rounded-xl p-6 text-center">
            <p className="font-body text-sm text-[var(--color-arabica)]/70 mb-3">
              Results are hosted on Athlinks, the official results platform for The Coffee Marathon Uganda.
            </p>
            <a
              href="https://www.athlinks.com/event/395451/results/Event/1112891/Results"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-forest-light)] transition-colors"
            >
              View on Athlinks <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
