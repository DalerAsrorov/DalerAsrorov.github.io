import { Link } from 'gatsby'
import React from 'react'
import { AppRoutes } from '../utils/constants'
import { rhythm } from '../utils/typography'
import { ListLink } from './list-link'

export interface IHeaderNavItem {
  to: AppRoutes
  content: string | React.ReactNode
}

export interface IHeaderProps {
  navItems: IHeaderNavItem[]
  title: string
}
const Header: React.FC<IHeaderProps> = ({ navItems, title }) => (
  <header style={{ marginBottom: rhythm(1.5) }}>
    <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
      <h3 style={{ display: 'inline' }}>{title}</h3>
    </Link>
    <ul style={{ float: 'right' }}>
      {navItems.map((navItem: IHeaderNavItem) => (
        <ListLink key={navItem.to} to={navItem.to}>
          {navItem.content}
        </ListLink>
      ))}
    </ul>
  </header>
)

export default Header
