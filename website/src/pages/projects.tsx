import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { AppRoutes } from '../utils/constants'

const Projects = (props: PageProps) => (
  <Layout currentPath={props.path as AppRoutes.Projects}>
    <p>List of projects will be here.</p>
  </Layout>
)

export default Projects
