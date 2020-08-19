import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AnimationContext } from "../context/AnimationsContextProvider"
import { ShopifyStoreContext } from "../context/ShopifyStoreContextProvider"
import reduce from "lodash/reduce"

const useQuantity = () => {
  const {
    store: { checkout },
  } = React.useContext(ShopifyStoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const SiteNavbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { navbarRef } = React.useContext(AnimationContext)
  const [hasItems, quantity] = useQuantity()

  return (
    <Navbar ref={navbarRef} sticky="top" bg="dark" expand="md" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          {data.site.siteMetadata.title}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Link className="nav-link" to="/">
            Home
          </Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Container>
      <Link to="/cart" className="nav-link text-light">
        <div className="row align-items-center">
          Cart 🛍{" "}
          {hasItems && (
            <span className="ml-2 badge badge-light">{quantity}</span>
          )}
        </div>
      </Link>
    </Navbar>
  )
}

export default SiteNavbar
