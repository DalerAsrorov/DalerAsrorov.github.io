import { Link } from 'gatsby'
import React from 'react'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: rhythm(1) }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header() {
  return (
    <header style={{ marginBottom: rhythm(1.5) }}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>Daler's Space</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
  )
}
