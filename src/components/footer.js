import React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (<FooterWrapper></FooterWrapper>)
}

const FooterWrapper = styled.footer`
  display: none;
  grid-column-end: span 2;
  margin-top: 4rem;
  grid-row: 4 / span 1;
`
