import escapeHTML from 'escape-html'
import Image from 'next/image'
// import Link from 'next/link'
import { Fragment } from 'react'
import { Text as SlateText } from 'slate'

import { Heading } from '../heading'
import { Text } from '../text'

type Node = {
  type: string
  value?: {
    url: string
    alt: string
    width: number
    height: number
  }
  children?: Node[]
  url?: string
  [key: string]: unknown
}

type SerializeFunction = React.FC<{
  content: Node[] | undefined
}>

export const Serialize: SerializeFunction = ({ content }) => {
  return (
    <>
      {content?.map((node, i) => {
        if (SlateText.isText(node)) {
          let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
          if (node.bold) text = <strong key={i}>{text}</strong>
          if (node.code) text = <code key={i}>{text}</code>
          if (node.italic) text = <em key={i}>{text}</em>
          if (node.underline) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            )
          }

          if (node.strikethrough) {
            text = (
              <span style={{ textDecoration: 'line-through' }} key={i}>
                {text}
              </span>
            )
          }

          return <Fragment key={i}>{text}</Fragment>
        }

        if (!node) {
          return null
        }

        switch (node.type) {
          case 'h1':
            return (
              <Heading key={i} style={{ marginBottom: '1rem' }}>
                <Serialize content={node.children} />
              </Heading>
            )
          case 'h2':
            return (
              <Heading as="h3" key={i} style={{ marginBottom: '1rem' }}>
                <Serialize content={node.children} />
              </Heading>
            )
          case 'ul':
            return (
              <ul key={i}>
                <Serialize content={node.children} />
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                <Serialize content={node.children} />
              </ol>
            )
          case 'li':
            return (
              <li key={i}>
                <Serialize content={node.children} />
              </li>
            )
          case 'upload':
            return node.value?.url ? (
              <Image
                key={i}
                src={node.value.url}
                alt={node.value.alt}
                width={node.value.width}
                height={node.value.height}
                style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }}
              />
            ) : null
          case 'indent':
            return (
              <div key={i} style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <Serialize content={node.children} />
              </div>
            )
          // case 'link':
          //   return (
          //     <Link key={i} href={node.url || ''}>
          //       <Serialize content={node.children} />
          //     </Link>
          //   )

          default:
            return (
              <Text as="p" key={i} style={{ marginBottom: '1rem' }}>
                <Serialize content={node.children} />
              </Text>
            )
        }
      })}
    </>
  )
}
