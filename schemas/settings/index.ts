import { CogIcon } from '@sanity/icons'
import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'

import OpenGraphInput from './OpenGraphInput'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheader',
      description: 'Used for the blog subheader.',
      title: 'Subheader',
      type: 'array',
      initialValue: demo.subheader,
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'metaDescription',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Meta Description',
      type: 'string',
      initialValue: demo.metaDescription,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description:
        'Used for social media previews when linking to the index page.',
      type: 'object',
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: demo.ogImageTitle,
        }),
      ],
    }),
    defineField({
      name: 'introTitle',
      description:
        'Used for the title of the website introduction on the Home screen.',
      title: 'Introduction Title',
      type: 'string',
      initialValue: demo.introTitle,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introContent',
      description:
        'Used for the content of the website introduction on the Home screen.',
      title: 'Introduction Content',
      type: 'string',
      initialValue: demo.introContent,
      validation: (rule) => rule.required(),
    }),
  ],
})
