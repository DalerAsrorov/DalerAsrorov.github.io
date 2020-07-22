import { graphql, Link, PageProps } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const TagsPage: React.FC<PageProps<{
  allMarkdownRemark: any;
  site: any;
}>> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}: any) => (
  <Layout>
    <SEO
      title={title}
      description="List of all tags in dalerasrorov.com"
      keywords={group}
      pathname={location.pathname}
    />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag: { fieldValue: string; totalCount: number }) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
