import { SanityImage as SanityImageComponent } from '@/components/ui/SanityImage'
import type { GalleryImage } from '@/types/sanity'

interface GalleryGridProps {
  caption?: string
  sanityImages?: GalleryImage[]
}

const placeholders = [
  { aspect: 'aspect-[4/3]', label: 'Race start — 2025' },
  { aspect: 'aspect-square', label: 'Coffee farm trail' },
  { aspect: 'aspect-[4/3]', label: 'Finish line celebrations' },
  { aspect: 'aspect-[3/4]', label: 'Women coffee farmers' },
  { aspect: 'aspect-[4/3]', label: 'Award ceremony' },
  { aspect: 'aspect-square', label: 'Sunrise run' },
]

export default function GalleryGrid({ caption, sanityImages = [] }: GalleryGridProps) {
  return (
    <div>
      {caption && (
        <p className="font-body text-xs uppercase tracking-widest text-[var(--color-arabica)] mb-4">{caption}</p>
      )}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {sanityImages.length > 0
          ? sanityImages.map((img) => (
              <div key={img._id} className="break-inside-avoid rounded-xl overflow-hidden">
                <SanityImageComponent
                  image={img.image}
                  alt={img.caption ?? 'Race day photo'}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))
          : placeholders.map((item, i) => (
              <div
                key={i}
                className={`${item.aspect} bg-[var(--color-espresso)]/10 rounded-xl overflow-hidden flex items-center justify-center break-inside-avoid`}
              >
                <span className="font-body text-xs text-[var(--color-arabica)] opacity-50 text-center px-3">
                  {item.label}
                </span>
              </div>
            ))}
      </div>
    </div>
  )
}
