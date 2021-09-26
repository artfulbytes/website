import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Pagination = ({isFirst, isLast, prevPage, nextPage, currPageNumber, numOfPages}) => {
  return (
    <PaginationWrapper>
      <PaginationElement to={prevPage} firstOrLast={isFirst}>&lt;prev</PaginationElement>
        {
        [...Array(numOfPages)].map((row, index) => (
          <PageNumberElement to={`/${index + 1 === 1 ? "" : index + 1}`} pageNumber={index + 1} currPageNumber={currPageNumber}>
            {index + 1}
          </PageNumberElement>
        ))}
      <PaginationElement to={nextPage} firstOrLast={isLast}>next&gt;</PaginationElement>
    </PaginationWrapper>
  )
}


const PaginationWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageNumberElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: ${props => (props.currPageNumber === props.pageNumber) ? 900 : 400 };
  text-decoration: none;
  margin: 0 5px;
  :focus, :hover {
    text-decoration: underline;
  }
`

const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 10px;
  display: ${props => props.firstOrLast ? "none" : "block"};
  color: ${props => props.firstOrLast ? props.theme.colors.dark3: props.theme.colors.dark1};
  pointer-events: ${props => (props.firstOrLast ? "none" : "auto")};
  cursor: ${props => (props.firstOrLast ? "default" : "pointer")};

  :focus, :hover {
    text-decoration: underline;
  }
`
