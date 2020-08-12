import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SiteCarousel from "../components/SiteCarousel"
import Products from "../components/Products"
import SEO from "../components/SEO"
import Skull from "../components/Skull"

export default function Home() {
  return (
    <Layout>
      <SEO title="HOME" />
      <SiteCarousel />
      <Container className="position-relative">
        <Row className="align-items-center justify-content-center">
          <Skull />
          <Jumbotron className="bg-dark text-light text-center col-md-8">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
          <Skull mdOnly />
        </Row>
        <Products />
      </Container>
    </Layout>
  )
}
