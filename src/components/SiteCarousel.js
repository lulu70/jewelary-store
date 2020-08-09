import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const SiteCarousel = () => {
  const data = useStaticQuery(
    graphql`
      {
        images: allFile(
          filter: { sourceInstanceName: { eq: "carousel-images" } }
        ) {
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
    <Carousel
      controls={false}
      indicators={false}
      interval={5000}
      className="w-100"
    >
      {data.images.nodes.map(image => (
        <Carousel.Item className="index__carousel-item w-100" key={image.id}>
          <GatsbyImage alt={image.name} fluid={image.childImageSharp.fluid} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default SiteCarousel
