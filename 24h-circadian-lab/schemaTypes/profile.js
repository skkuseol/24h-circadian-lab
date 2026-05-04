import {defineType, defineField} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'PI Profile',
  type: 'document',
  fields: [
    defineField({name: 'titleEn', title: 'English Title', type: 'string'}),
    defineField({name: 'titleKo', title: 'Korean Title', type: 'string'}),
    defineField({name: 'introEn', title: 'English Intro', type: 'text'}),
    defineField({name: 'introKo', title: 'Korean Intro', type: 'text'}),
    defineField({name: 'highlightsEn', title: 'English Highlights', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'highlightsKo', title: 'Korean Highlights', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'education', title: 'Education', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]}),
    defineField({
  name: 'photo',
  title: 'PI Profile Photo',
  type: 'image',
  options: {
    hotspot: true,
  },
}),
  ],
})