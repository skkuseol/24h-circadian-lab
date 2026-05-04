import {defineType, defineField} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Members',
  type: 'document',
  fields: [
    defineField({name: 'nameKo', title: 'Korean Name', type: 'string'}),
    defineField({name: 'nameEn', title: 'English Name', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'degree', title: 'Degree / Position', type: 'string'}),
    defineField({name: 'bioEn', title: 'English Bio', type: 'text'}),
    defineField({name: 'bioKo', title: 'Korean Bio', type: 'text'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
    defineField({name: 'photo', title: 'Profile Photo', type: 'image', options: {hotspot: true,},}),
  ],
})