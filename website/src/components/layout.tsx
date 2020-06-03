import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import Header, { IHeaderNavItem } from './header'
import { StaticQuery, graphql } from 'gatsby'

const Wrapper = styled('div')`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 800px;
`

const headerNavItems: IHeaderNavItem[] = [
  {
    content: 'Home',
    to: '/',
  },
  {
    content: 'About',
    to: '/about/',
  },
]

const Layout = ({ children }: any) => {
  return (
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
}

export default Layout
