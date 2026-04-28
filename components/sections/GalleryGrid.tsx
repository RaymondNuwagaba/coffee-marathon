import Image from 'next/image'
import { SanityImage as SanityImageComponent } from '@/components/ui/SanityImage'
import type { GalleryImage } from '@/types/sanity'

interface GalleryGridProps {
  caption?: string
  sanityImages?: GalleryImage[]
}

const localImages = [
  { src: '/images/gallery-1.jpg', alt: 'Runners celebrating at the start — Coffee Marathon 2025', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery-2.jpg', alt: 'Energetic crowd at the race start', aspect: 'aspect-square' },
  { src: '/images/gallery-3.jpg', alt: 'Thousands at Africa Coffee Park venue', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery-4.jpg', alt: 'Women runners — Coffee Marathon 2025', aspect: 'aspect-[3/4]' },
  { src: '/images/gallery-5.jpg', alt: 'Prize giving ceremony', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery-6.jpg', alt: 'Concert night — Africa Coffee Park', aspect: 'aspect-square' },
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
          : localImages.map((img) => (
              <div key={img.src} className={`${img.aspect} break-inside-avoid rounded-xl overflow-hidden relative`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
      </div>
    </div>
  )
}
