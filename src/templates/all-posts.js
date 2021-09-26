import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Layout,
  ContentCard,
  Pagination,
} from "../components"


export const pageQuery = graphql`query AllPostsQuery($skip: Int!, $limit: Int!) {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    skip: $skip
    limit: $limit
  ) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          excerpt
          title
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`

const allPosts = ({pageContext, data}) => {
  const {currentPage, numPages} = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges


  const showPagination = () =>
    (
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
        numOfPages={numPages}
        currPageNumber={currentPage}>
      </Pagination>
    )

  return (
    <Layout>
      <GridAndPaginationWrapper>
        <CardGrid>
          {posts.map(post => (
              <ContentCard
                key={post.node.frontmatter.slug}
                date={post.node.frontmatter.date}
                title={post.node.frontmatter.title}
                excerpt={post.node.frontmatter.excerpt}
                slug={post.node.frontmatter.slug}
                featureImage={post.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              />
          ))}
        </CardGrid>
        {numPages > 1 ? showPagination() : <></>}
      </GridAndPaginationWrapper>
    </Layout>
  );
}
export default allPosts

const GridAndPaginationWrapper = styled.div`
  background-color: none;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
  margin: 0.75rem 0 1.5rem 0;

  @media ${props => props.theme.breakpoints.sitewidth} {
    grid-gap: 0.75rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0.75rem 0.75rem 1.5rem 0.75rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0.75rem 0.75rem 1.5rem 0.75rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 0.75rem;
    margin: 0.75rem;
  }
`
