import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Runner Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', title: 'Quote', validation: r => r.required() }),
    defineField({ name: 'name', type: 'string', title: 'Runner name', validation: r => r.required() }),
    defineField({ name: 'category', type: 'string', title: 'Race & year', description: 'e.g. 21 KM, 2025' }),
    defineField({ name: 'photo', type: 'image', title: 'Runner photo', options: { hotspot: true } }),
    defineField({ name: 'featured', type: 'boolean', title: 'Show on homepage?', initialValue: false }),
  ],
})
