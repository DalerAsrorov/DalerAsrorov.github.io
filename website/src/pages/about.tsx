import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default function About({ data }) {
  console.log({ data })

  return (
    <Layout>
      <p>Some information about me</p>
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
