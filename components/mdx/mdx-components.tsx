import { DocData } from 'fumadocs-mdx'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import defaultComponents from 'fumadocs-ui/mdx'
import { ComponentProps } from 'react'

type MDXComponents = ComponentProps<DocData['body']>['components']
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    img: props => <ImageZoom {...props} />,
    ...components,
  }
}
