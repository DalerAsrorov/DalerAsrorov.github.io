import React from 'react'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'
import { FaGithubAlt } from 'react-icons/fa'
import { css } from '@emotion/core'

interface IPlainListItem {
  content: any
  link: string
}

export interface IPlainListProps {
  items: IPlainListItem[]
  isHorizontal?: boolean
}

const ListContainer = styled.ul`
  text-align: center;

  li:not(:first-child) {
    margin-left: ${rhythm(1)};
  }
`
const ListItem = styled.li<IPlainListProps>`
  display: ${props => (props.isHorizontal ? 'inline-block' : 'block')};
`

export const PlainList: React.FC<IPlainListProps> = (
  props: IPlainListProps
) => {
  return (
    <ListContainer>
      {props.items.map((listItem: IPlainListItem) => (
        <ListItem {...props}>
          <a target="_blank" href={listItem.link}>
            {listItem.content}
          </a>
        </ListItem>
      ))}
    </ListContainer>
  )
}
