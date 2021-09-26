import React from "react"
import {
  Header,
  Footer,
  Seo
} from "../components"
import styled from "styled-components"

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Seo />
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}

const LayoutWrapper = styled.div`
  max-width: 800px;
  min-width: 325px;
  margin: 0 auto;
  min-height: 100vh;
`
