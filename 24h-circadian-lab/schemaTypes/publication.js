import {defineType, defineField} from 'sanity'

export const publicationType = defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'authors', title: 'Authors', type: 'text'}),
    defineField({name: 'title', title: 'Title', type: 'text'}),
    defineField({name: 'journal', title: 'Journal', type: 'string'}),
    defineField({name: 'volumePages', title: 'Volume / Pages', type: 'string'}),
    defineField({name: 'doi', title: 'DOI', type: 'string'}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean'}),
  ],
})