import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import NewsCard from '@/components/ui/NewsCard'
import { getAllPosts } from '@/sanity/lib/fetch'
import type { Post } from '@/types/sanity'

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Latest news, race updates, and announcements from The Coffee Marathon Uganda 2026.',
}

const staticPosts = [
  { slug: 'course-announcement-2026', date: 'March 2026', title: 'Course Announcement: The 2026 Route Revealed', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'registration-open', date: 'February 2026', title: 'Registration Now Open for All Categories', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'inspire-women-conference', date: 'January 2026', title: 'Inspire Women Conference Speakers Announced', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'kit-design-2026', date: 'December 2025', title: 'Official Race Kit Design Unveiled', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: '2025-recap', date: 'October 2025', title: '2025 Race Recap: A Record Year', excerpt: 'Placeholder — to be replaced with actual news content.' },
  { slug: 'date-announced-2026', date: 'September 2025', title: 'Save the Date: 3 October 2026', excerpt: 'Placeholder — to be replaced with actual news content.' },
]

export default async function NewsPage() {
  const posts = await getAllPosts()

  return (
    <>
      <PageHero
        title="News & Announcements"
        subtitle="Stay up to date with everything happening at The Coffee Marathon Uganda 2026."
        label="Latest News"
      />

      <section className="bg-[var(--color-cream-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts && posts.length > 0
              ? posts.map((post: Post) => (
                  <NewsCard
                    key={post._id}
                    slug={post.slug.current}
                    date={new Intl.DateTimeFormat('en-UG', { dateStyle: 'medium' }).format(new Date(post.publishedAt))}
                    title={post.title}
                    excerpt={post.excerpt}
                  />
                ))
              : staticPosts.map((p) => <NewsCard key={p.slug} {...p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
