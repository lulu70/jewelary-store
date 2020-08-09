import React from "react"
import SiteNavbar from "./SiteNavbar"
import Container from "react-bootstrap/Container"
const Layout = ({ children }) => {
  return (
    <Container fluid className="bg-dark p-0">
      <SiteNavbar />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
