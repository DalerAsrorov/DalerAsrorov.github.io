import { css } from '@emotion/core';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { rhythm } from '../utils/typography';

const TagsList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <ul css={css('list-style: none;')}>
      {tags.map(tag => (
        <li
          css={css`
            float: left;
            margin: 0 0 0 ${rhythm(1 / 4)};
          `}
          key={tag}
        >
          <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
        </li>
      ))}
    </ul>
  );
};

const BlogPost: React.FC<PageProps<{
  markdownRemark: {
    html: string;
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      tags: string[];
      featuredImage?: any;
    };
  };
}>> = ({ data, location }) => {
  const post = data.markdownRemark;
  const featuredImgFluid =
    post.frontmatter.featuredImage?.childImageSharp.fluid;

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
          style={{ marginBottom: '1rem ' }}
          fadeIn
        />
      )}
      <p
        css={css`
          color: hotpink;
          margin-bottom: ${rhythm(1 / 2)};
        `}
      >
        {post.frontmatter.date}
      </p>
      <div
        css={css`
          display: flex;
          margin-bottom: ${rhythm(1 / 2)};
        `}
      >
        <TagsList tags={post.frontmatter.tags} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
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
`;

export default BlogPost;
