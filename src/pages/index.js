import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import SiteCarousel from "../components/SiteCarousel"
import Products from "../components/Products"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="HOME" />
      <SiteCarousel />
      <Jumbotron className="bg-dark text-light text-center col-md-6 mx-auto">
        <h1 className="display-1">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
      <Products />
    </Layout>
  )
}
