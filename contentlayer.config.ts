import { ComputedFields, FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files'

const postFields: FieldDefs = {
  title: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
  },
  image: {
    type: 'string',
  },
}

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').pop(),
  },
  url: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath,
  },
}

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: postFields,
  computedFields,
}))

const Weekly = defineDocumentType(() => ({
  name: 'Weekly',
  filePathPattern: 'weekly/*.mdx',
  contentType: 'mdx',
  fields: postFields,
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Weekly],
})
