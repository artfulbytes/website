import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

export const AboutBar = () => {
   const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "author.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 200, height: 200, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)
  return (
    <AboutBarWrapper>
      <Link to="/about">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt={""}
            style={{
             top: "0",
             left: "0",
             right: "0",
             bottom: "0",
             width: "4.0rem",
             height: "4.0rem",
           }} />
      </Link>
      <AboutText>
        <AboutAuthor><b>Niklas Nilsson</b></AboutAuthor>
        <AboutDescription>I'm an embedded systems engineer from Sweden
        currently working at <Link to="https://www.hasselblad.com/">Hasselblad</Link>. </AboutDescription>
      </AboutText>
    </AboutBarWrapper>
  );
}
// TODO: Request text from site metadata instead

const AboutText = styled.div`
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
`
const AboutAuthor = styled.p`
  margin: 0;
`

const AboutDescription = styled.p`
  line-height: 1.3rem;
  margin: 0;
  color: hsla(0,0%,0%,0.8);
  font-size: 0.9rem;
  font-style: italic;
  a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`

const AboutBarWrapper = styled.div`
  display: flex;
  grid-row: 4 / span 1;
  grid-column: 1 / span 2;
  background: #fff;
  border-radius: 0;
  max-width: 630px;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`
