import styled from '@emotion/styled'
import React from 'react'
import Header from './header'
import { Global, css } from '@emotion/core'

const Wrapper = styled('div')`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 800px;
`

export default function Layout({ children }) {
  return (
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
      <Header />
      {children}
    </Wrapper>
  )
}
