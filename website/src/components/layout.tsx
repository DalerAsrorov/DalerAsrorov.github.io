import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { AppRoutes } from '../utils/constants'
import Header, { IHeaderNavItem } from './header'

deckDeckGoHighlightElement()

const Wrapper = styled.main`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 800px;
`

export interface ILayoutProps {
  children: any
}

const headerNavItems: IHeaderNavItem[] = [
  {
    content: 'Home',
    to: AppRoutes.Home,
  },
  {
    content: 'Projects',
    to: AppRoutes.Projects,
  },
  {
    content: 'About',
    to: AppRoutes.About,
  },
]

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Global
          styles={css`
            ul,
            li {
              margin: 0;
              padding: 0;
            }

            ul {
              list-style: none;
            }

            img[src~='post-image'] {
              height: 400px;
            }
          `}
        />
        <Header
          title={data.site.siteMetadata.title}
          navItems={headerNavItems}
        />
        {children}
      </Wrapper>
    )}
  />
)

export default Layout
