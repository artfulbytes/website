import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Navbar = () => {
    return (
      <>
        <NavElementList>
          <NavbarLinks/>
        </NavElementList>
      </>
    )
}

const NavbarLinks = () => {
    return (
        <>
        <NavElement to="/">Articles</NavElement>
        <NavElement to="/projects">Projects</NavElement>
        <NavElement to="/devenv">Tools</NavElement>
        <NavElement to="/about">About</NavElement>
        </>
    )
}

const NavElementList = styled.ul`
    display: flex;
    height:100%;
    align-items: center;
    margin: 0;
    padding 0;
`

const NavElement = styled(props => <Link {...props} />)`
    font-size: 0.9rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 0 0 15px;
    transition: all 200ms ease-in;
    :focus, :hover {
        text-decoration: underline;
    }
`
