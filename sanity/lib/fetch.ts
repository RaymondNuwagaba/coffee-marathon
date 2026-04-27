import { client, sanityConfigured } from './client'
import {
  racesQuery,
  featuredTestimonialsQuery,
  latestPostsQuery,
  allPostsQuery,
  postBySlugQuery,
  sponsorsQuery,
  featuredGalleryQuery,
  attractionsQuery,
  accommodationQuery,
  siteSettingsQuery,
} from './queries'
import type {
  Race,
  Post,
  Testimonial,
  Sponsor,
  GalleryImage,
  Attraction,
  Accommodation,
  SiteSettings,
} from '@/types/sanity'

async function safeFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!sanityConfigured) return null
  try {
    return await client.fetch<T>(query, params ?? {})
  } catch {
    return null
  }
}

export const getRaces = () => safeFetch<Race[]>(racesQuery)
export const getTestimonials = () => safeFetch<Testimonial[]>(featuredTestimonialsQuery)
export const getLatestPosts = () => safeFetch<Post[]>(latestPostsQuery)
export const getAllPosts = () => safeFetch<Post[]>(allPostsQuery)
export const getPostBySlug = (slug: string) => safeFetch<Post>(postBySlugQuery, { slug })
export const getSponsors = () => safeFetch<Sponsor[]>(sponsorsQuery)
export const getGallery = () => safeFetch<GalleryImage[]>(featuredGalleryQuery)
export const getAttractions = () => safeFetch<Attraction[]>(attractionsQuery)
export const getAccommodation = () => safeFetch<Accommodation[]>(accommodationQuery)
export const getSiteSettings = () => safeFetch<SiteSettings>(siteSettingsQuery)
