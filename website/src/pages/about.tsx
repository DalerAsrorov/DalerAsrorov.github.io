import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React from 'react'
import { FaGithubAlt, FaLinkedin, FaSoundcloud } from 'react-icons/fa'
import Layout from '../components/layout'
import { PlainList } from '../components/plain-list'
import myPicture from '../images/me.jpg'
import { rhythm } from '../utils/typography'

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
  border-radius: 50%;
  margin: 0;
`

interface IconWrapper {
  Icon: any
}

const IconWrapper: React.FC<IconWrapper> = (props: IconWrapper) => (
  <props.Icon color="grey" size={30} />
)

const About = ({ data }: any) => {
  return (
    <Layout>
      <Container>
        <Card>
          <Image src={myPicture} />
          <PlainList
            items={[
              {
                content: <IconWrapper Icon={FaGithubAlt} />,
                link: 'https://github.com/DalerAsrorov',
              },
              {
                content: <IconWrapper Icon={FaLinkedin} />,
                link: 'https://www.linkedin.com/in/dalerasrorov/',
              },
              {
                content: <IconWrapper Icon={FaSoundcloud} />,
                link: 'https://soundcloud.com/daler-asrorov',
              },
            ]}
            isHorizontal={true}
          />
        </Card>
        <p>
          I am a software engineer currently working at Capital One building
          tools for commercial card platform. I have been working on side
          projects on and off as a way to learn new technologies and found it to
          be most useful way to understand complex concepts more thoroughly.
        </p>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
