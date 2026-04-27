import { defineType, defineField } from 'sanity'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsors & Partners',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Organisation name', validation: r => r.required() }),
    defineField({ name: 'logo', type: 'image', title: 'Logo', validation: r => r.required() }),
    defineField({ name: 'website', type: 'url', title: 'Website URL' }),
    defineField({
      name: 'tier',
      type: 'string',
      title: 'Sponsorship tier',
      options: { list: ['Title', 'Gold', 'Silver', 'Bronze', 'Partner'] },
      validation: r => r.required(),
    }),
    defineField({ name: 'year', type: 'number', title: 'Year (e.g. 2026)' }),
    defineField({ name: 'order', type: 'number', title: 'Display order within tier' }),
  ],
})
