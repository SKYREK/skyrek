export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
    },
    {
      name: 'projectName',
      type: 'string',
      title: 'Title of the Project',
    },
    {
      name: 'startData',
      type: 'string',
      title: 'Project Start Date',
    },
    {
      name: 'endData',
      type: 'string',
      title: 'Project End Date',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'demoLink',
      type: 'string',
      title: 'Demo Link',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
