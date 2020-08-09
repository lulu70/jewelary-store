import React from "react"
import SiteNavbar from "./SiteNavbar"
const Layout = ({ children }) => {
  return (
    <>
      <SiteNavbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
