import styled from '@emotion/styled'
import React from 'react'
import Header from './header'

const Wrapper = styled('div')`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 800px;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}
