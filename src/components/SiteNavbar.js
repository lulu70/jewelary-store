import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
const SiteNavbar = () => {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark" className="px-0">
      <Container>
        <Link to="/" className="navbar-brand">
          Aharon's Jewelry
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
    </Navbar>
  )
}

export default SiteNavbar
