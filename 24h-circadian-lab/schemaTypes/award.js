import {defineType, defineField} from 'sanity'

export const awardType = defineType({
  name: 'award',
  title: 'Awards',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Award Title', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
})