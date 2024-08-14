// schemas/contactForm.js
export default {
    name: 'contactForm',
    type: 'document',
    title: 'Contact Form',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone',
      },
      {
        name: 'source',
        type: 'string',
        title: 'How did you hear about us?',
        options: {
          list: [
            { title: 'Google', value: 'Google' },
            { title: 'Linkedin', value: 'Linkedin' },
            { title: 'Facebook', value: 'Facebook' },
            { title: 'From a Friend', value: 'Friend' },
          ],
        },
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
      },
    ],
  };
  