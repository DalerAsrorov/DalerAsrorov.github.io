import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const Wrapper = styled('div')`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 800px;
`
const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <Wrapper>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Daler's Space</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </Wrapper>
  )
}
