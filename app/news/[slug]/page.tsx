import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/sanity/lib/fetch'
import { SanityImage } from '@/components/ui/SanityImage'
import { PortableTextBody } from '@/components/sections/PortableTextBody'
import type { Post } from '@/types/sanity'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  if (!posts) return []
  return posts.map((p: Post) => ({ slug: p.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Article not found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--color-cream-light)] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 font-body text-sm text-[var(--color-forest)] hover:text-[var(--color-forest-light)] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to News
        </Link>

        {post.coverImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <SanityImage
              image={post.coverImage}
              alt={post.title}
              width={800}
              height={450}
              className="object-cover w-full h-full"
              fill
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[var(--color-forest)]" />
            <span className="font-body text-xs text-[var(--color-arabica)]">
              {new Intl.DateTimeFormat('en-UG', { dateStyle: 'long' }).format(new Date(post.publishedAt))}
            </span>
          </div>
          {post.author && (
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-[var(--color-forest)]" />
              <span className="font-body text-xs text-[var(--color-arabica)]">{post.author}</span>
            </div>
          )}
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-espresso)] mb-8">
          {post.title}
        </h1>

        {post.body && <PortableTextBody value={post.body} />}
      </div>
    </div>
  )
}
