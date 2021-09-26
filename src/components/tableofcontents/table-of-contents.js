import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const TableOfContents = ({ page, location }) => {
  return (
    <Contents>
      <ContentsSummary>Contents</ContentsSummary>
      <ul>
      {page.tableOfContents.items && page.tableOfContents.items.map((item) => {
        return (
        <>
              {
                (<li><HeaderLink to={location.pathname + item.url} > {item.title} </HeaderLink></li>)
              }
              {item.items && (<div><ul> {
                item.items.map((subitem) => {
                  return (<li><HeaderLink to={location.pathname + subitem.url} > {subitem.title} </HeaderLink></li>)
                })} </ul></div>)
              }
              </>
        )
      })}
      </ul>
    </Contents>
  )
}

const Contents = styled.details`
  margin-bottom: 1rem;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    ul {
      margin-bottom: 0.6rem;
      margin-left: 1.0rem;
      li {
        font-size: 0.8rem;
        margin: 0 0 0.1rem 0;
        list-style-type: none;
      }
    }
  }
  li {
    margin: 0;
    padding: 0;
  }
`

const ContentsSummary = styled.summary`
  display: list-item;
  cursor: pointer;
  align-items: center;
  font-size: 1.0rem;
  font-weight: 700;
`

const HeaderLink = styled(props => <Link {...props} />)`
  padding: 0.1rem 0 0.1rem 0rem;
  margin: 0;
  display: block;
    text-decoration: underline;
  :hover {
    text-decoration: none;
  }
`
