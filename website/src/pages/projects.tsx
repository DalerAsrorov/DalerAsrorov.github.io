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
  clear: both;
`

const Caption = styled.caption`
  display: block;
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

const ProjectCard = styled.article`
  position: relative;
  float: left;
  padding: ${rhythm(1 / 4)};
  margin: ${rhythm(1 / 4)};
  width: ${rhythm(8)};
  height: ${rhythm(15)};
`

const Description = styled.div`
  height: ${rhythm(9)};
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  margin-top: ${rhythm(1)};
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
              <FaCode />
            </a>
            <a target="__blank" href={project.demo}>
              <FaPlayCircle />
            </a>
          </Caption>
        </ProjectCard>
      ))}
    </Container>
  </Layout>
)

export default Projects
