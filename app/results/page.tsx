import type { Metadata } from 'next'
import Image from 'next/image'
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

      <section className="py-20" style={{ backgroundColor: 'var(--green-mist)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Trophy size={20} style={{ color: 'var(--green-primary)' }} />
            <h2 className="font-heading text-2xl font-semibold" style={{ color: 'var(--brown-heading)' }}>
              Results by Year
            </h2>
          </div>

          {/* Results table-like list */}
          <div className="space-y-4 mb-12">
            {pastResults.map((result, i) => (
              <div
                key={result.year}
                className="bg-white rounded-xl p-5 border flex items-center justify-between gap-4 shadow-sm"
                style={{
                  borderColor: 'rgba(26,107,58,0.15)',
                  backgroundColor: i === 0 ? 'var(--green-pale)' : 'white',
                }}
              >
                <div>
                  <span className="font-heading text-2xl font-bold mr-4" style={{ color: 'var(--green-primary)' }}>
                    {result.year}
                  </span>
                  <span className="font-body text-sm" style={{ color: 'var(--brown-dark)' }}>
                    {result.label}
                  </span>
                </div>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs font-semibold transition-colors shrink-0"
                  style={{ backgroundColor: 'var(--green-primary)', color: 'white' }}
                >
                  View Results <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>

          {/* Podium photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.08em] font-bold mb-2" style={{ color: 'var(--green-mid)' }}>
                Women&apos;s Podium
              </p>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(26,107,58,0.15)' }}>
                <Image
                  src="/images/results-podium-women.jpg"
                  alt="Women's prize giving — Coffee Marathon Uganda 2025"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* 1st place badge — brown-mid */}
                <div
                  className="absolute top-3 left-3 font-label text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--brown-mid)', color: 'white' }}
                >
                  1st — UGX 10,000,000
                </div>
              </div>
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-[0.08em] font-bold mb-2" style={{ color: 'var(--green-mid)' }}>
                Men&apos;s Podium
              </p>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(26,107,58,0.15)' }}>
                <Image
                  src="/images/results-podium-men.jpg"
                  alt="Men's prize giving — Coffee Marathon Uganda 2025"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* 2nd/3rd badge — green-pale */}
                <div
                  className="absolute top-3 left-3 font-label text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--green-pale)', color: 'var(--green-deep)' }}
                >
                  Men&apos;s Category 2025
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-6 text-center border"
            style={{ backgroundColor: 'var(--green-pale)', borderColor: 'rgba(26,107,58,0.2)' }}
          >
            <p className="font-body text-sm mb-3" style={{ color: 'var(--brown-dark)', opacity: 0.8 }}>
              Results are hosted on Athlinks, the official results platform for The Coffee Marathon Uganda.
            </p>
            <a
              href="https://www.athlinks.com/event/395451/results/Event/1112891/Results"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors"
              style={{ color: 'var(--green-primary)' }}
            >
              View on Athlinks <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
