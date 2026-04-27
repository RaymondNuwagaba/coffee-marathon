import { defineType, defineField } from 'sanity'

export const attraction = defineType({
  name: 'attraction',
  title: 'Local Attractions',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' } }),
    defineField({ name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'tips', type: 'text', title: 'Practical tips for visitors' }),
    defineField({ name: 'featured', type: 'boolean', title: 'Show on homepage preview?', initialValue: false }),
    defineField({ name: 'order', type: 'number', title: 'Display order' }),
  ],
})
