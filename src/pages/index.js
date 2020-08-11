import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SiteCarousel from "../components/SiteCarousel"
import Products from "../components/Products"
import SEO from "../components/SEO"
import svg from "../assets/hands.svg"
export default function Home() {
  return (
    <Layout>
      <SEO title="HOME" />
      <SiteCarousel />
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={2} />
          <Jumbotron className="bg-dark text-light text-center col-md-8">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
          <Col xs={2} className="mb-4 d-none d-md-block">
            <img src={svg} alt="hands" className="w-75" />
          </Col>
        </Row>
        <Products />
      </Container>
    </Layout>
  )
}
