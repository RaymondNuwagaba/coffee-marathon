import { groq } from 'next-sanity'

export const racesQuery = groq`
  *[_type == "race"] | order(order asc) {
    _id, distance, label, price, description,
    terrain, cutoffTime, startTime, whatsIncluded, pinnketUrl
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true][0...3] {
    _id, quote, name, category, photo
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id, title, slug, publishedAt, excerpt, coverImage, author
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt, coverImage, author
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, body, coverImage, author
  }
`

export const sponsorsQuery = groq`
  *[_type == "sponsor" && year == 2026] | order(order asc) {
    _id, name, logo, website, tier
  }
`

export const featuredGalleryQuery = groq`
  *[_type == "galleryImage" && featured == true][0...6] {
    _id, image, caption, year
  }
`

export const attractionsQuery = groq`
  *[_type == "attraction"] | order(order asc) {
    _id, name, slug, image, description, tips, featured
  }
`

export const accommodationQuery = groq`
  *[_type == "accommodation"] | order(distanceKm asc) {
    _id, name, image, type, description, website, distanceKm, priceRange
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    raceDate, venueName, venueAddress,
    pinnketShopUrl, kitOrderCutoff, earlyBirdCutoff,
    facebookUrl, instagramUrl, twitterUrl,
    whatsappNumber, contactEmail,
    heroTagline, missionText, eventStats
  }
`
