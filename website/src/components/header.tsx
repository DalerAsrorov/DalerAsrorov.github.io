import { Link } from 'gatsby'
import React from 'react'
import { rhythm } from '../utils/typography'

export interface IHeaderNavItem {
  to: string
  content: string | number | React.ReactNode
}

export interface IHeaderProps {
  navItems: IHeaderNavItem[]
  title: string
}

const ListLink = (props: any) => (
  <li style={{ display: 'inline-block', marginRight: rhythm(1) }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header: React.FC = ({ navItems, title }) => (
  <header style={{ marginBottom: rhythm(1.5) }}>
    <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
      <h3 style={{ display: 'inline' }}>{title}</h3>
    </Link>
    <ul style={{ float: 'right' }}>
      {navItems.map((navItem: IHeaderNavItem) => (
        <ListLink to={navItem.to}>{navItem.content}</ListLink>
      ))}
    </ul>
  </header>
)

export default Header
