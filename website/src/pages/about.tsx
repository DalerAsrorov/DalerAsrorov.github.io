import styled from '@emotion/styled';
import { PageProps } from 'gatsby';
import React from 'react';
import { FaGithubAlt, FaLinkedin, FaSoundcloud } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib/cjs';
import Layout from '../components/layout';
import { PlainList } from '../components/plain-list';
import myPicture from '../images/me.jpg';
import { rhythm } from '../utils/typography';

const Container = styled.div`
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.article`
  display: inline-block;
  align-items: center;
  margin: 0 ${rhythm(1)} ${rhythm(1)} 0;
  float: left;
`;

const Image = styled.img`
  max-width: ${rhythm(8)};
  margin-bottom: ${rhythm(1 / 4)};
  border-radius: 50%;
  border: 2px solid hotpink;
`;

interface IconWrapper extends IconBaseProps {
  Icon: any;
}

const IconWrapper: React.FC<IconWrapper> = ({ Icon, ...restProps }) => (
  <Icon {...restProps} size={30} />
);

const About: React.FC<PageProps> = () => {
  return (
    <Layout>
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
  );
};

export default About;
