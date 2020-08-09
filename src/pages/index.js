import React from "react"
import Layout from "../components/Layout"
import Row from "react-bootstrap/Row"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
import Col from "react-bootstrap/Col"

export default function Home() {
  return (
    <Layout>
      <Carousel
        controls={false}
        indicators={false}
        interval={5000}
        className="w-100"
      >
        <Carousel.Item className="index__carousel-item w-100">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="index__carousel-item w-100">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1521120098171-0400b4ec1319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Jumbotron className="bg-dark text-light text-center col-6 mx-auto">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </Layout>
  )
}
