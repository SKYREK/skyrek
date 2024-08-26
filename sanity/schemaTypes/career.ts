export default {
  name: 'career',
  type: 'document',
  title: 'Career',
  fields: [
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the Career',
      options: {
        source: 'jobTitle',
      },
    },
    {
      name: 'jobCategory',
      type: 'reference',
      to: [{type: 'careerCategory'}],
      title: 'Job Category',
    },
    {
      name: 'contractType',
      type: 'string',
      title: 'Contract Type',
      options: {
        list: ['Full-Time', 'Part-Time', 'Internship'],
      },
    },
    {
      name: 'workingMode',
      type: 'string',
      title: 'Working Mode',
      options: {
        list: ['Remote', 'On-Site', 'Hybrid'],
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'salary',
      type: 'number',
      title: 'Salary',
    },
    {
      name: 'roleDescription',
      type: 'array',
      title: 'Role Description',
      of: [{type: 'block'}],
    },
    {
      name: 'responsibilities',
      type: 'array',
      title: 'Responsibilities',
      of: [{type: 'block'}],
    },
    {
      name: 'requirements',
      type: 'array',
      title: 'Requirements',
      of: [{type: 'block'}],
    },
  ],
}
