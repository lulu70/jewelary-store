import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import SiteCarousel from "../components/SiteCarousel"
import ImagesGrid from "../components/ImagesGrid"

export default function Home() {
  return (
    <Layout>
      <SiteCarousel />
      <Jumbotron className="bg-dark text-light text-center col-md-6 mx-auto">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
      <ImagesGrid />
    </Layout>
  )
}
