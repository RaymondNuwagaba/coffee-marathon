import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
// Sanity project IDs must be lowercase a-z, 0-9, and dashes only.
const isValidId = /^[a-z0-9-]+$/.test(projectId)

export const client = createClient({
  projectId: isValidId ? projectId : 'aaaa0000',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

export const sanityConfigured = isValidId
