import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GatsbyImage from "gatsby-image"

export const query = graphql`
  query($shopifyId: String!) {
    product: shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const ProductTemplate = props => {
  const product = props.data.product
  return (
    <Layout>
      <SEO title={product.title} description={product.description} />
      <Container>
        <Row className="mt-5">
          <Col md="6" className="text-center text-md-left">
            <h1 className="display-4">{product.title}</h1>
            <p className="text-primary">
              {product.priceRange.minVariantPrice.amount}{" "}
              {product.priceRange.minVariantPrice.currencyCode}
            </p>
            <p className="lead">{product.description}</p>
          </Col>
          <Col md="3" xs="6" className="mx-auto">
            <GatsbyImage
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt={product.title}
              className="border"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductTemplate
