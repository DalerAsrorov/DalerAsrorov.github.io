import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { rhythm } from '../utils/typography'

export default function PostsListPreview() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{' '}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </>
      )}
    />
  )
}
