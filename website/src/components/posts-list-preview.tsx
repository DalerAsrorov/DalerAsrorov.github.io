import { css } from '@emotion/core';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils/typography';
import { BlogPostPreview } from './blog-post-preview';

const PostsListPreview = () => (
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
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const { totalCount } = data.allMarkdownRemark;
      const pageHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
      } total`;

      return (
        <>
          <h5>{pageHeader}</h5>
          {data.allMarkdownRemark.edges.map(({ node }: any) => (
            <BlogPostPreview
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
        </>
      );
    }}
  />
);

export default PostsListPreview;
