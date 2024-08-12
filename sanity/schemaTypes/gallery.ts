export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'ImageTitle',
      type: 'string',
      title: 'Title of the Image',
    },
    {
      name: 'galleryImage',
      type: 'image',
      title: 'Add Gallery Image',
    },
  ],
}
