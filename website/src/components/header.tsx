import { Link, GatsbyLinkProps } from 'gatsby'
import React from 'react'
import { rhythm } from '../utils/typography'
import { AppRoutes } from '../utils/constants'

export interface IHeaderNavItem {
  to: AppRoutes
  content: string | number | React.ReactNode
}

interface IListLinkProps extends GatsbyLinkProps<any> {
  currentPath: AppRoutes
}

export interface IHeaderProps {
  navItems: IHeaderNavItem[]
  title: string
  path: AppRoutes
}

const ListLink = (props: IListLinkProps) => (
  <li
    style={{
      display: 'inline-block',
      marginRight: rhythm(1),
    }}
  >
    <Link
      style={{
        padding: rhythm(1 / 4),
        backgroundColor: props.currentPath === props.to ? 'lightcyan' : '',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const Header: React.FC<IHeaderProps> = ({ navItems, title, path }) => (
  <header style={{ marginBottom: rhythm(1.5) }}>
    <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
      <h3 style={{ display: 'inline' }}>{title}</h3>
    </Link>
    <ul style={{ float: 'right' }}>
      {navItems.map((navItem: IHeaderNavItem) => (
        <ListLink currentPath={path} key={navItem.to} to={navItem.to}>
          {navItem.content}
        </ListLink>
      ))}
    </ul>
  </header>
)

export default Header
