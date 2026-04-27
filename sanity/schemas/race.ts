import { defineType, defineField } from 'sanity'

export const race = defineType({
  name: 'race',
  title: 'Race Category',
  type: 'document',
  fields: [
    defineField({ name: 'distance', type: 'string', title: 'Distance', validation: r => r.required() }),
    defineField({ name: 'label', type: 'string', title: 'Label', description: 'e.g. Fun Run, Half Marathon' }),
    defineField({ name: 'price', type: 'string', title: 'Price', description: 'e.g. UGX 50,000' }),
    defineField({ name: 'description', type: 'text', title: 'Short description' }),
    defineField({ name: 'terrain', type: 'text', title: 'Terrain & route description' }),
    defineField({ name: 'cutoffTime', type: 'string', title: 'Cut-off time' }),
    defineField({ name: 'startTime', type: 'string', title: 'Start time' }),
    defineField({ name: 'whatsIncluded', type: 'array', title: "What's included", of: [{ type: 'string' }] }),
    defineField({ name: 'pinnketUrl', type: 'url', title: 'Pinnket registration URL', validation: r => r.required() }),
    defineField({ name: 'order', type: 'number', title: 'Display order (1=5KM, 4=42KM)' }),
  ],
  orderings: [{ title: 'Distance', name: 'distanceAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
