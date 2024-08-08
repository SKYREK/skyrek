export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the Blog Article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the Blog Article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
