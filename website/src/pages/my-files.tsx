import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import { AppRoutes } from '../utils/constants'

const MyFiles = ({ data, path }: PageProps<{ allFile: any }>) => (
  <Layout currentPath={path as AppRoutes.MyFiles}>
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }: any, index: number) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default MyFiles
