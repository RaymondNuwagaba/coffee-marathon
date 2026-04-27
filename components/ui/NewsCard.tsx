import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NewsCardProps {
  slug: string
  date: string
  title: string
  excerpt: string
  imageLabel?: string
}

export default function NewsCard({ slug, date, title, excerpt, imageLabel }: NewsCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="aspect-[16/9] bg-[var(--color-cream-dark)] flex items-center justify-center">
        <span className="font-body text-xs text-[var(--color-arabica)] opacity-50">
          {imageLabel ?? 'Article image — to be added'}
        </span>
      </div>
      <div className="p-5">
        <p className="font-body text-xs uppercase tracking-widest text-[var(--color-forest)] mb-2">
          {date}
        </p>
        <h3 className="font-display text-xl font-semibold text-[var(--color-espresso)] leading-snug mb-2 group-hover:text-[var(--color-forest)] transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-[var(--color-arabica)] mb-4 line-clamp-2">
          {excerpt}
        </p>
        <Link
          href={`/news/${slug}`}
          className="font-body text-sm font-semibold text-[var(--color-forest)] flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read more <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
