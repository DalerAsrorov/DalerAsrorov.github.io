import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import PostsListPreview from '../components/posts-list-preview'
import { SEO } from '../components/seo'

const Home = (props: PageProps) => (
  <Layout>
    <SEO />
    <PostsListPreview />
  </Layout>
)

export default Home
