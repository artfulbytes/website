import React from "react"
import styled from "styled-components"

export const PostHeader = ({page}) => {
  const { frontmatter, timeToRead } = page
  return (
    <PostHeaderWrapper>
      <PostHeaderH1>{frontmatter.title}</PostHeaderH1>
      <SubHeader>
        <SubHeaderInnerLeft>
          <AuthorText>
            <AuthorDateAndLength>{frontmatter.date} <SeparationDot></SeparationDot> {timeToRead} min read</AuthorDateAndLength>
          </AuthorText>
        </SubHeaderInnerLeft>
        <SubHeaderInnerRight>
        </SubHeaderInnerRight>
      </SubHeader>
    </PostHeaderWrapper>
  )
}

const PostHeaderH1 = styled.h1`
  padding: 0;
  margin: 0 0 0.3rem 0;
`

const PostHeaderWrapper = styled.header`
  margin: 0 0 0.5rem 0;
  width: 100%;
`

const SubHeader = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 100%;
`

const SubHeaderInnerLeft = styled.div`
  display: block;
`

const AuthorText = styled.div`
  display: block;
`

const SeparationDot = styled.i`
  ::before {
    content: "\\2022";
    margin-right: 0.125rem;
  }
`

const AuthorDateAndLength = styled.div`
  display: block;
  color: hsla(0,0%,0%,0.6);
`

const SubHeaderInnerRight = styled.div`
  height: 100%;
  display: flex;
  text-align: right;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`
