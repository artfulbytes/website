import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export const ContentCard = ({date, title, excerpt, slug, featureImage}) => {
  return (
    <CardWrapper to={slug}>
        <CardTitle>
          {date} | {title}
        </CardTitle>
    </CardWrapper>
  );
}

const CardWrapper = styled(props => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.1s;
  :hover {
    opacity: 0.7;
    filter: alpha(opacity=70); /* IE */
  }
`

const CardImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50%; /* 2:1 aspect ratio */
  img {
    "width": "100%";
    "height": "100%";
  }
`

const CardImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 0.75rem 0.5rem 0.75rem;
`

const CardTitle = styled.h5`
  font-weight: 400;
  display: block;
  margin: 0 0 1rem 0;
  padding: 0;
`

const CardDescription = styled.p`
  display: block;
  font-size: 0.65rem;
  margin: 0;
  padding: 0;
  color: hsla(0,0%,0%,0.7);
`
