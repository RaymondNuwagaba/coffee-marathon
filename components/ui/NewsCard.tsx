import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SanityImage } from '@/components/ui/SanityImage'
import type { SanityImage as SanityImageType } from '@/types/sanity'

interface NewsCardProps {
  slug: string
  date: string
  title: string
  excerpt: string
  featured?: boolean
  /** Cover image from Sanity, when the post has one. */
  coverImage?: SanityImageType | null
  /** Local image, used when there is no Sanity cover. */
  image?: string
}

export default function NewsCard({
  slug,
  date,
  title,
  excerpt,
  featured,
  coverImage,
  image,
}: NewsCardProps) {
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
      <Link
        href={`/news/${slug}`}
        className="block aspect-[16/9] relative overflow-hidden"
        style={{ backgroundColor: 'var(--green-mist)' }}
      >
        {coverImage ? (
          <SanityImage image={coverImage} alt={title} width={600} height={340} className="object-cover w-full h-full" fill />
        ) : (
          <Image
            src={image ?? '/images/venue-crowd.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </Link>
      <div className="p-5">
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--green-mid)' }}>
          {date}
        </p>
        <h3
          className="font-heading text-xl font-semibold leading-snug mb-2 transition-colors"
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
