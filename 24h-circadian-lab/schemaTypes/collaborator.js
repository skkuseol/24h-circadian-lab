import {defineType, defineField} from 'sanity'

export const collaboratorType = defineType({
  name: 'collaborator',
  title: 'Collaborators',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'organization', title: 'Organization', type: 'string'}),
    defineField({name: 'detailEn', title: 'English Detail', type: 'text'}),
    defineField({name: 'detailKo', title: 'Korean Detail', type: 'text'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
})