import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react"
import {
  Layout,
  PostHeader,
  VideoMdx,
  IframeMdx,
  AboutBar,
  NewsLetterSignup,
  CodeBlock,
  TableOfContents,
} from "../components"

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    mdx(id: { eq: $id }) {
      id
      tableOfContents
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED)
          }
        }
      }
      timeToRead
    }
  }
`

const shortcodes={
  pre: CodeBlock,
  Video: VideoMdx,
  Iframe: IframeMdx
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
  const currurl = typeof window !== 'undefined' ? window.location.href : '';
  const disqusConfig = {
    shortname: 'artfulbytes',
    config: { url: currurl, identifier: post.frontmatter.slug, title: post.frontmatter.title },
  }

  return (
    <Layout>
      <SinglePostContainer>
        <HeaderWrapper>
          <HeaderText>
            <PostHeader page={post} />
          </HeaderText>
          <HeaderImg>
              <GatsbyImage
                image={featuredImage}
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
        </HeaderWrapper>
        <TableOfContentsWrapper>
        { post.tableOfContents.items ?
          <TableOfContents location={location} page={post} />
          : "" }
        </TableOfContentsWrapper>
        <PostWrapper>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          <hr></hr>
        </PostWrapper>
        <AboutBar/>
        <NewsLetterSignup/>
        <DisqusComments>
           <DisqusCommentsInner>
              <DiscussionEmbed {...disqusConfig} />
           </DisqusCommentsInner>
        </DisqusComments>
      </SinglePostContainer>
    </Layout>
  )
}

export default BlogPostTemplate

const SinglePostContainer = styled.div`
  margin: 1.5rem 0 0 0;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1.25rem;
  }
`

const TableOfContentsWrapper = styled.div`
  max-width: 630px;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  display:block;
  width: 100%;
  max-width: 700px;
`

const HeaderText = styled.div`
  display: block;
`

const HeaderImg = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: 40%;
  margin-bottom: 1.5rem;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 2;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding-top: 55%;
  }
`

const PostWrapper = styled.main`
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 860px) {
    grid-column: 1 / span 2;
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
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: span 12;
  }
`

const DisqusComments = styled.div`
`

const DisqusCommentsInner = styled.div`
  max-width: 630px;
  margin: 0 auto;
`
