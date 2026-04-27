import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'News & Announcements',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published', validation: r => r.required() }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({ name: 'coverImage', type: 'image', title: 'Cover image', options: { hotspot: true } }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'author', type: 'string', title: 'Author name' }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' } },
})
