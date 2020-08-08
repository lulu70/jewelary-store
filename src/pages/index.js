import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
export default function Home() {
  return (
    <Container className="text-primary bg-dark">
      <Row>
        <Col xs={3}>Hello world!</Col>
        <Col>Hello world!</Col>
      </Row>
    </Container>
  )
}
