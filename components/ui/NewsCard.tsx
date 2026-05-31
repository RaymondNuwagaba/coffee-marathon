import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NewsCardProps {
  slug: string
  date: string
  title: string
  excerpt: string
  featured?: boolean
  imageLabel?: string
}

export default function NewsCard({ slug, date, title, excerpt, featured, imageLabel }: NewsCardProps) {
  return (
    <article
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border"
      style={{
        borderColor: 'rgba(26,107,58,0.15)',
        borderLeftWidth: featured ? '4px' : undefined,
        borderLeftStyle: featured ? 'solid' : undefined,
        borderLeftColor: featured ? 'var(--green-primary)' : undefined,
      }}
    >
      <div className="aspect-[16/9] flex items-center justify-center" style={{ backgroundColor: 'var(--green-mist)' }}>
        <span className="font-body text-xs" style={{ color: 'var(--green-mid)', opacity: 0.6 }}>
          {imageLabel ?? 'Article image — to be added'}
        </span>
      </div>
      <div className="p-5">
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--green-mid)' }}>
          {date}
        </p>
        <h3
          className="font-display text-xl font-semibold leading-snug mb-2 transition-colors"
          style={{ color: 'var(--brown-heading)' }}
        >
          {title}
        </h3>
        <p className="font-body text-sm mb-4 line-clamp-2" style={{ color: 'var(--brown-dark)' }}>
          {excerpt}
        </p>
        <Link
          href={`/news/${slug}`}
          className="font-body text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          style={{ color: 'var(--green-mid)' }}
        >
          Read more <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
