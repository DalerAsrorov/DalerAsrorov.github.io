import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { AppRoutes } from '../utils/constants'
import projects from '../json/projects.json'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { FaCode, FaPlayCircle } from 'react-icons/fa'

export interface IProject {
  title: string
  description: string
  code: string
  demo: string
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: flex-end;
  align-items: flex-end;
`

const Caption = styled.section`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${rhythm(1 / 2)};
  margin: ${rhythm(1 / 2)} auto;
  border-top: 1px dotted hotpink;

  > a:not(:first-of-type) {
    margin-left: ${rhythm(1 / 2)};
  }
`

const ProjectCard = styled.section`
  position: relative;
  float: left;
  padding: ${rhythm(1 / 4)};
  margin: ${rhythm(1 / 4)};
  width: ${rhythm(9)};
  height: ${rhythm(15)};
  flex: 1;

  @media (max-width: 600px) {
    text-align: center;
  }
`

const Description = styled.div`
  height: ${rhythm(9)};
  margin-top: ${rhythm(1)};
  display: flex;

  > p {
    @media (max-width: 600px) {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const Projects = (props: PageProps) => (
  <Layout currentPath={props.path as AppRoutes.Projects}>
    <Container>
      {projects.map((project: IProject) => (
        <ProjectCard key={project.title}>
          <h3>{project.title}</h3>
          <Description>
            <p>{project.description}</p>
          </Description>
          <Caption>
            <a target="__blank" href={project.code}>
              <FaCode size={rhythm(1.2)} />
            </a>
            <a target="__blank" href={project.demo}>
              <FaPlayCircle size={rhythm(1.2)} />
            </a>
          </Caption>
        </ProjectCard>
      ))}
    </Container>
  </Layout>
)

export default Projects
