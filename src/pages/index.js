import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SiteCarousel from "../components/SiteCarousel"
import Products from "../components/Products"
import SEO from "../components/SEO"
import Skull from "../components/Skull"
import { useSpring, animated } from "react-spring"
export default function Home() {
  const spring = useSpring({
    config: {
      duration: 5000,
    },
    from: {
      maxHeight: 0,
    },
    maxHeight: 400,
  })
  const AnimatedCol = animated(Col)
  return (
    <Layout>
      <SEO title="HOME" />
      <SiteCarousel />
      <Container className="position-relative">
        <Row className="align-items-center justify-content-center">
          <AnimatedCol md={2} xs={8} className="mt-5 mt-md-0" style={spring}>
            <Skull />
          </AnimatedCol>
          <Jumbotron className="bg-dark text-light text-center col-md-8">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
          <AnimatedCol md={2} className="d-none d-md-block" style={spring}>
            <Skull />
          </AnimatedCol>
        </Row>
        <Products />
      </Container>
    </Layout>
  )
}
