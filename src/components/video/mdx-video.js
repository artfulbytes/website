import React from "react"
import styled from 'styled-components'
import { useEffect } from "react"

export const VideoMdx = props => {
  const {mp4, webm} = props
  const ref = React.createRef()
  useEffect(() => {
    // This runs at mount (when the component is rendered in the DOM for the first time)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Sometimes ref.current is null for some reason
          if (ref.current != null) {
            if (entry.isIntersecting) {
              ref.current.play()
            } else {
              ref.current.pause()
            }
          }
        })
      },
      { rootMargin: `50px 0px 200px 0px` }
    )

    if (ref.current != null) {
      observer.observe(ref.current)
    }

    return () => {
      // This is called at unmount (when component is removed from DOM)
      if (ref.current != null) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  return (
    <VideoDiv>
      <VideoWrapper ref={ref} playsInline muted loop>
        <source type="video/mp4" src={mp4}></source>
        <source type="video/webm" src={webm}></source>
        Your browser does not support loading mp4 or webm.
      </VideoWrapper>
    </VideoDiv>
  )
}

const VideoDiv = styled.p`
`

const VideoWrapper = styled.video`
  display: block;
  width: 100%;
  height: auto;
  max-height: 600px;
`
