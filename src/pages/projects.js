import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Layout,
} from "../components"
import {Link} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export const pageQuery = graphql`{
  allMdx(
    sort: {fields: frontmatter___startDate, order: DESC}
    filter: {fileAbsolutePath: {regex: "/content/projects/.+about.mdx$/"}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          excerpt
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          ongoing
          featureImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`

const projects = ({data}) => {
  const projects = data.allMdx.edges

  return (
    <Layout>
      <ProjectsWrapper>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard to={project.node.frontmatter.slug.concat("-about")}>
            <GatsbyImage
              image={project.node.frontmatter.featureImage.childImageSharp.gatsbyImageData}
              alt={""}
              style={{
                "position":"absolute",
                "height": "100%",
                "width": "100%",
                "margin": "0",
                "padding": "0",
                "z-index": "1"
              }}
              imgStyle={{
              }} />
            <ProjectInfo>
              <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
              <ProjectExcerpt>{project.node.frontmatter.excerpt}</ProjectExcerpt>
              <ProjectDate>{project.node.frontmatter.startDate}</ProjectDate>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      </ProjectsWrapper>
    </Layout>
  );
}
export default projects

const ProjectsWrapper = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  margin: 0.75rem 0 0 0;
  @media ${props => props.theme.breakpoints.sitewidth} {
  }
  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0.75rem 0 0.75rem 0rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0.75rem 0.75rem 0.75rem 0.75rem;
    grid-column: 1 / span 2;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  grid-gap: 1.25rem;

  @media ${props => props.theme.breakpoints.sitewidth} {
    grid-gap: 0.75rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(props => <Link {...props} />)`
  position:relative;
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  margin: 0 auto 0 auto; // TODO: Do grid gap instead
  color: #fff;
  background: #000;
  h2 {
    display: none;
    text-decoration: none;
    color: #fff;
  }
  p {
    display: none;
  }
  a {
    color: #fff;
  }
  picture {
    transition: 0.2s;
  }
  :hover {
    text-decoration: none;
    h2 {
      display: block;
    }
    p {
      display: block;
    }
    picture {
      opacity: 0.50;
      filter: alpha(opacity=50); /* IE */
    }
  }
  @media ${props => props.theme.breakpoints.tablet} {
    height: 350px;
    a {
      text-decoration: underline;
    }
    div {
      display: block;
    }
    p {
      display: block;
    }
    h2 {
      display: block;
    }
    :hover {
      h2 {
        display: block;
      }
      div {
        display: block;
      }
      picture {
        opacity: 1;
        filter: alpha(opacity=100);
      }
    }
  }
`
const ProjectTitle = styled.h2`
  margin: 0;
  padding: 0;
  z-index: 2;
  text-align: center;
`
const ProjectDate = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1rem;
  z-index: 2;
`

const ProjectExcerpt = styled.p`
  text-align: center;
  font-style: italic;
  margin: 0;
  font-size: 0.9rem;
  z-index: 2;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media ${props => props.theme.breakpoints.tablet} {
    margin-top: auto;
    color: #fff;
    padding: 0.7rem 0 0.5rem 0;
    width: 100%;
    background-color:rgba(0, 0, 0, 0.5);
  }

`
