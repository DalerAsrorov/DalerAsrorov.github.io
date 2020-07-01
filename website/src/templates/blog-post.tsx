import { css } from '@emotion/core'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

const BlogPost: React.FC<PageProps<{ markdownRemark: any }>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage?.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.tags}
        pathname={location.pathname}
      />
      <h1>{post.frontmatter.title}</h1>
      {featuredImgFluid && (
        <Img
          fluid={featuredImgFluid}
          alt={`Featured image for ${post.frontmatter.title} post.`}
          title={post.frontmatter.title}
          fadeIn
        />
      )}
      <p css={css('color: hotpink')}>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
