import React from "react"
import styled from 'styled-components'

export const IframeMdx = props => {
  const {src} = props
  return (
    <VideoDiv>
      <Iframe width="560" height="349" src={src} frameborder="0" allowfullscreen></Iframe>
    </VideoDiv>
  )
}

const VideoDiv = styled.p`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
