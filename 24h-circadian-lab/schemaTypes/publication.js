import {defineType, defineField} from 'sanity'

export const publicationType = defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',

  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),

    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'text',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
    }),

    defineField({
      name: 'journal',
      title: 'Journal',
      type: 'string',
    }),

    defineField({
      name: 'volumePages',
      title: 'Volume / Pages',
      type: 'string',
    }),

    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),

    defineField({
      name: 'authorRole',
      title: 'Author Role',
      type: 'string',
      options: {
        list: [
          {title: 'First Author', value: 'first'},
          {title: 'Co-first Author', value: 'cofirst'},
          {title: 'Corresponding Author', value: 'corresponding'},
          {title: 'Co-corresponding Author', value: 'cocorresponding'},
          {title: 'Senior Author', value: 'senior'},
          {title: 'Co-author', value: 'coauthor'},
        ],
        layout: 'radio',
      },
    }),
  ],
})