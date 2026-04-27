import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface Race {
  _id: string
  distance: string
  label: string
  price: string
  description: string
  terrain: string
  cutoffTime: string
  startTime: string
  whatsIncluded: string[]
  pinnketUrl: string
  order: number
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  coverImage: SanityImage
  body: PortableTextBlock[]
  author: string
}

export interface Testimonial {
  _id: string
  quote: string
  name: string
  category: string
  photo?: SanityImage
}

export interface Sponsor {
  _id: string
  name: string
  logo: SanityImage
  website?: string
  tier: 'Title' | 'Gold' | 'Silver' | 'Bronze' | 'Partner'
}

export interface GalleryImage {
  _id: string
  image: SanityImage
  caption?: string
  year: number
}

export interface Attraction {
  _id: string
  name: string
  slug: { current: string }
  image: SanityImage
  description: string
  tips?: string
  featured: boolean
}

export interface Accommodation {
  _id: string
  name: string
  image: SanityImage
  type: string
  description: string
  website?: string
  distanceKm: number
  priceRange?: string
}

export interface SiteSettings {
  raceDate: string
  venueName: string
  venueAddress: string
  pinnketShopUrl: string
  kitOrderCutoff: string
  earlyBirdCutoff: string
  facebookUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  whatsappNumber: string
  contactEmail: string
  heroTagline: string
  missionText: string
  eventStats: { number: string; label: string }[]
}
