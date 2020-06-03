import styled from '@emotion/styled'
import React from 'react'
import { rhythm } from '../utils/typography'

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

  li:not(:first-of-type) {
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
      {props.items.map(({ link, content }: IPlainListItem) => (
        <ListItem key={link} {...props}>
          <a target="_blank" href={link}>
            {content}
          </a>
        </ListItem>
      ))}
    </ListContainer>
  )
}
