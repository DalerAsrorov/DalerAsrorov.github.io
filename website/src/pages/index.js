import React from 'react'
import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src='https://source.unsplash.com/random/400x200' alt='' />
      </div>
    </Layout>
  )
}
