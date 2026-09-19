import {defineType, defineField} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Members',
  type: 'document',

  fields: [
    // =========================
    // Basic Information
    // =========================

    defineField({
      name: 'nameKo',
      title: '이름 (국문)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'nameEn',
      title: 'Name (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'roleKo',
      title: '직위 / 과정 (국문)',
      type: 'string',
      description: '예: 석사과정, 박사과정, 연구원',
    }),

    defineField({
      name: 'roleEn',
      title: 'Position / Program (English)',
      type: 'string',
      description: 'e.g., M.S. Student, Ph.D. Student, Researcher',
    }),

    // =========================
    // Education
    // =========================

    defineField({
      name: 'education',
      title: '학력 / Education',
      type: 'array',

      of: [
        {
          type: 'object',
          name: 'educationItem',
          title: 'Education',

          fields: [
            defineField({
              name: 'degree',
              title: '학위 / Degree',
              type: 'string',

              options: {
                list: [
                  {title: '학사 / B.S.', value: 'bachelor'},
                  {title: '석사 / M.S.', value: 'master'},
                  {title: '박사 / Ph.D.', value: 'doctorate'},
                ],

                layout: 'radio',
              },

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'schoolKo',
              title: '출신학교 (국문)',
              type: 'string',
            }),

            defineField({
              name: 'schoolEn',
              title: 'Institution (English)',
              type: 'string',
            }),

            defineField({
              name: 'majorKo',
              title: '전공 (국문)',
              type: 'string',
            }),

            defineField({
              name: 'majorEn',
              title: 'Major (English)',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              degree: 'degree',
              school: 'schoolEn',
              major: 'majorEn',
            },

            prepare({degree, school, major}) {
              const degreeLabels = {
                bachelor: 'B.S.',
                master: 'M.S.',
                doctorate: 'Ph.D.',
              }

              return {
                title: `${degreeLabels[degree] || ''} ${school || ''}`,
                subtitle: major || '',
              }
            },
          },
        },
      ],
    }),

    // =========================
    // Research
    // =========================

    defineField({
      name: 'researchTopicKo',
      title: '연구주제 (국문)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'researchTopicEn',
      title: 'Research Interests (English)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'achievementsKo',
      title: '연구업적 (국문)',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'achievementsEn',
      title: 'Research Achievements (English)',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'keywordsKo',
      title: '연구 키워드 (국문)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'keywordsEn',
      title: 'Research Keywords (English)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    // =========================
    // Personal Message
    // =========================

    defineField({
      name: 'messageKo',
      title: '한마디 / 포부 (국문)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'messageEn',
      title: 'Personal Message (English)',
      type: 'text',
      rows: 3,
    }),

    // =========================
    // Contact / Display
    // =========================

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '작은 숫자부터 먼저 표시됩니다.',
    }),
  ],

  preview: {
    select: {
      title: 'nameKo',
      subtitle: 'nameEn',
      media: 'photo',
    },
  },
})