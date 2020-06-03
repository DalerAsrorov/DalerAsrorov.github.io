import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import React from 'react'
import { FaGithubAlt, FaLinkedin, FaSoundcloud } from 'react-icons/fa'
import Layout from '../components/layout'
import { PlainList } from '../components/plain-list'
import myPicture from '../images/me.jpg'
import { AppRoutes } from '../utils/constants'
import { rhythm } from '../utils/typography'
import { IconBaseProps } from 'react-icons/lib/cjs'

const Container = styled.div`
  display: flex;
  overflow: auto;
`

const Card = styled.article`
  display: inline-block;
  align-items: center;
  margin: 0 ${rhythm(1)} ${rhythm(1)} 0;
  float: left;
`

const Image = styled.img`
  max-width: ${rhythm(8)};
  margin-bottom: ${rhythm(1 / 4)};
  border-radius: 50%;
  border: 2px solid hotpink;
`

interface IconWrapper extends IconBaseProps {
  Icon: any
}

const IconWrapper: React.FC<IconWrapper> = ({ Icon, ...restProps }) => (
  <Icon {...restProps} size={30} />
)

const About = (props: PageProps) => {
  return (
    <Layout currentPath={props.path as AppRoutes.About}>
      <Container>
        <Card>
          <Image src={myPicture} />
          <PlainList
            items={[
              {
                content: <IconWrapper color="black" Icon={FaGithubAlt} />,
                link: 'https://github.com/DalerAsrorov',
              },
              {
                content: <IconWrapper color="skyblue" Icon={FaLinkedin} />,
                link: 'https://www.linkedin.com/in/dalerasrorov/',
              },
              {
                content: <IconWrapper color="orange" Icon={FaSoundcloud} />,
                link: 'https://soundcloud.com/daler-asrorov',
              },
            ]}
            isHorizontal={true}
          />
        </Card>
        <p>
          I am a software engineer currently working at Capital One and building
          tools for commercial card platform. I have been working on side
          projects on and off as a way to learn new technologies and found it to
          be most useful way to understand complex concepts more thoroughly.
        </p>
      </Container>
    </Layout>
  )
}

export default About
