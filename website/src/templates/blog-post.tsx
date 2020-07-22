import { css } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { TagsList } from '../components/tags-list';
import { rhythm } from '../utils/typography';

export interface BlogPostDataProps {
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
}

const BlogPost: React.FC<PageProps<BlogPostDataProps>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark;
  const featuredImgFluid =
    post.frontmatter.featuredImage?.childImageSharp.fluid;
  const pathName =
    typeof window !== `undefined` ? location.pathname : undefined;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.tags}
        pathname={pathName}
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
