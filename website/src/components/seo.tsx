import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'

type MetaItem = {
  name: string
  content: string
}

export interface SEOProps {
  title?: string
  description?: string
  url?: string
  keywords?: string[]
  meta?: MetaItem[]
  image?: string
  pathname?: string
}

export const SEO: React.FC<SEOProps> = props => {
  const data = useStaticQuery(query)
  const {
    site: {
      siteMetadata: {
        title,
        description,
        url,
        keywords = [],
        meta = [],
        image,
      },
    },
  } = data
  const siteTitle = props.title || title
  const siteDescription = props.description || description
  const siteUrl = props.url || url
  const siteImage = props.image || image
  const siteKeywords = [...keywords, props.keywords].join(',')
  const canonical = props.pathname ? `${siteUrl}${props.pathname}` : siteUrl

  const metaData: MetaItem[] = [
    {
      name: 'description',
      content: siteDescription,
    },
    {
      name: 'image',
      content: siteImage,
    },
    {
      name: 'og:url',
      content: siteUrl,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: siteTitle,
    },
    {
      name: 'og:description',
      content: siteDescription,
    },
    {
      name: 'og:image',
      content: siteImage,
    },
    {
      name: 'keywords',
      content: siteKeywords,
    },
  ].concat(meta)

  const linkData = [
    {
      rel: 'canonical',
      key: canonical,
      href: canonical,
    },
    {
      rel: 'shortcut icon',
      href: 'favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-icon.png',
    },
  ]

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={siteTitle}
      titleTemplate={`%s | dalerasrorov.com`}
      meta={metaData}
      link={linkData}
    />
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        keywords
        image
      }
    }
  }
`
