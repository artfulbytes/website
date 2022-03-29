import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import {
  Layout,
  VideoMdx,
} from "../components"

export const pageQuery = graphql`
  query DevPageQuery
  {
    mdx(fileAbsolutePath: {regex: "/content/pages/devenv/"}) {
      id
      body
    }
  }
`

const shortcodes={
  Video: VideoMdx,
}

const Devenv = ({data}) => {
  const pageId = data.mdx.id
  return (
    <Layout>
      <DevenvWrapper>
        <DevenvContent>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </DevenvContent>
      </DevenvWrapper>
    </Layout>
  )
}
export default Devenv

const DevenvWrapper = styled.div`
  grid-column: 1 / span 2;
  margin: 0 0 12.5rem 0;
  @media ${props => props.theme.breakpoints.tablet} {
    height: 100%;
    margin: 0.75rem 0.75rem 12.5rem 0.75rem;
  }
  @media (max-width: 750px) {
    padding: 0;
  }
  ul {
    margin-left: 0rem;
    list-style: inside;
    margin-bottom: 1.5rem;
  }
  ol {
    margin-left: auto;
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 1.5rem;
    ul {
      margin-left: 2rem;
      list-style-position: outside;
      margin-bottom: 0rem;
    }
  }
  table {
    margin-bottom: 1.5rem;
  }
`

const DevenvContent = styled.div`
  max-width: 750px;
  padding: 3rem 3rem 1rem 3rem;
  margin: 0 auto 0 auto;
  @media ${props => props.theme.breakpoints.sitewidth} {
    margin: 0 auto 0.75rem auto;
  }

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`
