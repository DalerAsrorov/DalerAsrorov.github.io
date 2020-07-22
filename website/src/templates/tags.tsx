import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { BlogPostPreview } from '../components/blog-post-preview';

export interface TagsPageDataProps {
  allMarkdownRemark: {
    edges: any;
    totalCount: number;
  };
}

export interface TagsPageContextProps {
  tag: string[];
}

const Tags: React.FC<PageProps<TagsPageDataProps, TagsPageContextProps>> = ({
  pageContext,
  data,
  location,
}) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  const pathName =
    typeof window !== `undefined` ? location.pathname : undefined;

  return (
    <Layout>
      <SEO
        title={`Posts with a tag ${tag}`}
        description={`Posts with a tag ${tag}`}
        keywords={tag}
        pathname={pathName}
      />
      <h3>{tagHeader}</h3>
      <Link to="/tags">All tags</Link>
      <ul>
        {edges.map(({ node }: any) => {
          return (
            <BlogPostPreview
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              excerpt={node.excerpt}
            />
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`;

export default Tags;
