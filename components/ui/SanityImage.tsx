import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImage as SanityImageType } from '@/types/sanity'

interface SanityImageProps {
  image: SanityImageType
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export function SanityImage({ image, alt, width, height, className, priority, fill }: SanityImageProps) {
  const src = urlFor(image).width(width * 2).height(height * 2).fit('crop').auto('format').url()

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
