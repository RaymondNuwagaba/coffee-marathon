import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { SanityImage } from '@/components/ui/SanityImage'
import type { SanityImage as SanityImageType } from '@/types/sanity'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageType & { alt?: string } }) => (
      <div className="my-8 rounded-2xl overflow-hidden">
        <SanityImage
          image={value}
          alt={value.alt ?? ''}
          width={800}
          height={450}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl font-bold text-[var(--color-espresso)] mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl font-semibold text-[var(--color-espresso)] mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl font-semibold text-[var(--color-espresso)] mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="font-body text-base text-[var(--color-arabica)] leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-forest)] pl-6 my-6 italic font-body text-lg text-[var(--color-arabica)]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside font-body text-base text-[var(--color-arabica)] mb-4 space-y-1 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside font-body text-base text-[var(--color-arabica)] mb-4 space-y-1 pl-4">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[var(--color-espresso)]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-forest)] underline hover:text-[var(--color-forest-light)] transition-colors"
      >
        {children}
      </a>
    ),
  },
}

interface PortableTextBodyProps {
  value: PortableTextBlock[]
}

export function PortableTextBody({ value }: PortableTextBodyProps) {
  return <PortableText value={value} components={components} />
}
