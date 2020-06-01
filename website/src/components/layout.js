import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  margin: 0;
  padding: 0;
`

export default function Layout ({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          div {
            box-sizing: border-box;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}
