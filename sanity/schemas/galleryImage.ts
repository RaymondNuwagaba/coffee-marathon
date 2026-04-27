import { defineType, defineField } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Race Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'image', type: 'image', title: 'Photo', options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: 'caption', type: 'string', title: 'Caption' }),
    defineField({ name: 'year', type: 'number', title: 'Event year', description: 'e.g. 2025' }),
    defineField({ name: 'featured', type: 'boolean', title: 'Show on homepage gallery?', initialValue: false }),
  ],
})
