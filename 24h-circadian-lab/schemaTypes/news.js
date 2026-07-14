import {defineType, defineField} from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'News',
  type: 'document',

  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'titleEn',
      title: 'English Title',
      type: 'string',
    }),

    defineField({
      name: 'titleKo',
      title: 'Korean Title',
      type: 'string',
    }),

    defineField({
      name: 'textEn',
      title: 'English Text',
      type: 'text',
    }),

    defineField({
      name: 'textKo',
      title: 'Korean Text',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'News Image / Infographic',
      type: 'image',
      options: {
      hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Article or DOI Link',
      type: 'url',
    }),
  ],
})