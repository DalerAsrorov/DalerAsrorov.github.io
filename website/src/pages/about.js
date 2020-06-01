import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default function About({ data }) {
  console.log({ data })

  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <h4>{data.site.siteMetadata.title}</h4>
        <Header headerText="Hello Gatsby" />
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
