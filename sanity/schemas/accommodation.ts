import { defineType, defineField } from 'sanity'

export const accommodation = defineType({
  name: 'accommodation',
  title: 'Accommodation',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: r => r.required() }),
    defineField({ name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: { list: ['Hotel', 'Lodge', 'Guesthouse', 'Camping', 'Hostel'] },
    }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'website', type: 'url', title: 'Booking URL' }),
    defineField({ name: 'distanceKm', type: 'number', title: 'Distance from venue (km)' }),
    defineField({ name: 'priceRange', type: 'string', title: 'Price range', description: 'e.g. UGX 80,000 – 150,000/night' }),
  ],
})
