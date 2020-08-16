import React from "react"
import SiteNavbar from "./SiteNavbar"
import Container from "react-bootstrap/Container"
import { AnimationContext } from "../context/AnimationsContextProvider"
const Layout = ({ children, location }) => {
  const { layoutContainerRef } = React.useContext(AnimationContext)
  return (
    <Container
      ref={layoutContainerRef}
      fluid
      className="bg-dark p-0"
      style={{
        opacity: location && location.pathname === "/" ? 0 : 1,
        visibility: location && location.pathname === "/" ? false : true,
      }}
    >
      <SiteNavbar />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
