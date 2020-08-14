import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { AnimationContext } from "../context/AnimationsContextProvider"

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
  const { carouselWrapperRef } = React.useContext(AnimationContext)
  return (
    <div ref={carouselWrapperRef}>
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
    </div>
  )
}

export default SiteCarousel
