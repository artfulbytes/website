import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Logo = () => {
  return (
  <LogoAndText>
    <LogoLink to="/">
      Artful Bytes
    </LogoLink>
    <LogoDescription>
      A blog about building and programming hardware.
    </LogoDescription>
  </LogoAndText>
  )
}

const LogoAndText = styled.div`
  display: block;
  margin-bottom: 0.3rem;
  @media ${props => props.theme.breakpoints.mobile} {
    margin-bottom: 0.0rem;
  }
`
const LogoDescription = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  line-height: 0.9rem;
  @media (max-width: 500px) {
    display: none;
  }
`

const LogoLink = styled(props => <Link {...props} />)`
  display: inline-block;
  font-weight: 900;
  font-size: 1.2rem;
  margin-top: 0rem;
  padding-top: 0rem;
  font-family: 'Droid Sans', 'Helvetica', 'sans-serif';
  padding: 0;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.25rem;
    line-height: 1.3rem;
  }
  @media (max-width: 500px) {
    font-size: 1.0rem;
    line-height: 1.3rem;
  }
`
