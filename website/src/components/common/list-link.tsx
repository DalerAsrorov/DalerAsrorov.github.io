import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'
import { AppRoutes } from '../../utils/constants'
import { rhythm } from '../../utils/typography'
import styled from '@emotion/styled'

interface IListLinkProps extends GatsbyLinkProps<any> {
  currentPath: AppRoutes
}

const LinkContainer = styled.li`
  display: inline-block;
  margin-right: ${rhythm(1 / 2)};
`

const toggleBackgroundColor = (currentPath: AppRoutes, to: string) =>
  currentPath === to
    ? {
        backgroundColor: 'lightcyan',
      }
    : {}

export const ListLink: React.FC<IListLinkProps> = ({
  children,
  currentPath,
  to,
}) => (
  <LinkContainer>
    <Link
      style={{
        padding: rhythm(1 / 4),
        ...toggleBackgroundColor(currentPath, to),
      }}
      to={to}
    >
      {children}
    </Link>
  </LinkContainer>
)
