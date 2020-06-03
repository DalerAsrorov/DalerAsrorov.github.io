import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import PostsListPreview from '../components/posts-list-preview'
import { AppRoutes } from '../utils/constants'

const Home = (props: PageProps) => (
  <Layout currentPath={props.path as AppRoutes.Home}>
    <PostsListPreview />
  </Layout>
)

export default Home
