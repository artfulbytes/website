import React from "react"
import styled from "styled-components"
import { Logo } from "./logo"
import { Navbar } from "./navbar"

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Navbar/>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0.75rem 0rem 0.5rem 0rem;

  z-index: 10;

  @media ${props => props.theme.breakpoints.sitewidth} {
    padding: 0.75rem 1.25rem 0.5rem 1.25rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    background-color: #fff;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    grid-gap: 0;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0.75rem 0.75rem 0.5rem 0.75rem;
    position: sticky;
    padding-bottom: 0.5rem;
    min-width: 325px;
    grid-gap: 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`

