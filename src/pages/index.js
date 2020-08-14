import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import SiteCarousel from "../components/SiteCarousel"
import Products from "../components/Products"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import useLoadingAnimation from "../hooks/useLoadingAnimation"

export default function Home({ location }) {
  useLoadingAnimation()
  return (
    <Layout location={location}>
      <SEO title="HOME" />
      <SiteCarousel />
      <Container className="position-relative overflow-hidden">
        <Hero />
        <Products />
      </Container>
    </Layout>
  )
}
