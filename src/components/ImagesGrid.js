import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
const ImagesGrid = () => {
  const data = useStaticQuery(
    graphql`
      {
        images: allFile(filter: { sourceInstanceName: { eq: "grid-images" } }) {
          nodes {
            id
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    `
  )
  return (
    <Container>
      <Row className="justify-content-between">
        {data.images.nodes.map(image => (
          <Col md={6} lg={4} key={image.id} className="mb-5">
            <GatsbyImage fluid={image.childImageSharp.fluid} alt={image.name} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ImagesGrid
