import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'raceDate', type: 'datetime', title: 'Race date & start time', validation: r => r.required() }),
    defineField({ name: 'venueName', type: 'string', title: 'Venue name' }),
    defineField({ name: 'venueAddress', type: 'string', title: 'Venue address' }),
    defineField({ name: 'pinnketShopUrl', type: 'url', title: 'Pinnket — Kit shop URL' }),
    defineField({ name: 'kitOrderCutoff', type: 'datetime', title: 'Kit order cut-off date' }),
    defineField({ name: 'earlyBirdCutoff', type: 'datetime', title: 'Early-bird pricing cut-off' }),
    defineField({ name: 'facebookUrl', type: 'url', title: 'Facebook URL' }),
    defineField({ name: 'instagramUrl', type: 'url', title: 'Instagram URL' }),
    defineField({ name: 'twitterUrl', type: 'url', title: 'X / Twitter URL' }),
    defineField({ name: 'whatsappNumber', type: 'string', title: 'WhatsApp number', description: 'International format e.g. 256771234567' }),
    defineField({ name: 'contactEmail', type: 'string', title: 'Contact email' }),
    defineField({ name: 'heroTagline', type: 'string', title: 'Hero tagline (below H1)' }),
    defineField({ name: 'missionText', type: 'text', title: 'Mission section body text' }),
    defineField({
      name: 'eventStats',
      type: 'array',
      title: 'Homepage stats',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', type: 'string', title: 'Number (e.g. 2,000+)' },
          { name: 'label', type: 'string', title: 'Label (e.g. Runners)' },
        ],
      }],
    }),
  ],
})
