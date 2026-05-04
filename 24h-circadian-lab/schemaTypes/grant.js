import {defineType, defineField} from 'sanity'

export const grantType = defineType({
  name: 'grant',
  title: 'Grants',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Grant Title', type: 'string'}),
    defineField({name: 'agency', title: 'Agency', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
})