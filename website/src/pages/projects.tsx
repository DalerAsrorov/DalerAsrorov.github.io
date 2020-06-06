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

const Caption = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: -${rhythm(1 / 4)};
  justify-content: flex-end;
  align-items: flex-end;
`

const ProjectCard = styled.section`
  flex: auto;
  position: relative;
  margin: ${rhythm(1 / 4)};
  width: ${rhythm(9)};
  height: ${rhythm(12)};

  @media (max-width: 690px) {
    flex-basis: 100%;
    flex-wrap: wrap;
    height: ${rhythm(12)};
  }
`

const Description = styled.div`
  height: ${rhythm(9)};
  margin-top: ${rhythm(1)};
  display: flex;

  @media (max-width: 690px) {
    > p {
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
          <h3 style={{ textAlign: 'center', marginTop: rhythm(1 / 2) }}>
            {project.title}
          </h3>
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
