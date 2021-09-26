import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Layout,
  VideoMdx,
  IframeMdx,
} from "../components"


export const pageQuery = graphql`query SinglePostQuerya($id: String, $slug: String!) {
  mdx(id: {eq: $id}, frontmatter: {slug: {eq: $slug}}) {
    body
    frontmatter {
      date
      excerpt
      slug
      title
      featureImage {
        publicURL
        publicURL
        childImageSharp {
          gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED)
        }
      }
    }
  }
}
`

const shortcodes={Video: VideoMdx, Iframe: IframeMdx}

const projectAbout = ({data, location}) => {
  return (
    <Layout>
      <AboutWrapper>
          <H1>{data.mdx.frontmatter.title}</H1>
          <Excerpt>{data.mdx.frontmatter.excerpt}</Excerpt>
          <HeaderImg>
            <GatsbyImage
              image={data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData}
              alt={""}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
              }} />
          </HeaderImg>
        <AboutContent>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </AboutContent>
      </AboutWrapper>
    </Layout>
  );
}
export default projectAbout

const H1 = styled.h1`
  margin-bottom: 0.2rem;
  text-align: center;
`

const Excerpt = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
`

const AboutWrapper = styled.div`
  grid-column: 1 / span 2;

  margin-top: 1.25rem;
  @media ${props => props.theme.breakpoints.sitewidth} {
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0.75rem 0 0 0rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 0;
    padding: 0.75rem;
    grid-column: 1 / span 2;
  }

  @media (max-width: 500px) {
    padding: 0.75rem 0 0.75rem 0;
  }
`

const HeaderImg = styled.div`
  display: block;
  position: relative;
  padding-top: 60%;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 2;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding-top: 70%;
  }
`
const AboutContent = styled.div`
  background: #fff;
  max-width: 630px;
  margin: 1.5rem auto 0 auto;
  ul {
    margin-left: 0rem;
    list-style: inside;
    margin-bottom: 1.5rem;
    ul {
      margin-left: 2rem;
      list-style-position: outside;
      list-style-type: circle;
      margin-bottom: 0rem;
    }
  }
  h1 {
    margin-top: 0;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 1.5rem;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
    border-left:none;
    border-right:none;
  }
`
