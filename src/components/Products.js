import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
const Products = () => {
  const data = useStaticQuery(
    graphql`
      {
        products: allShopifyProduct(sort: { fields: createdAt, order: DESC }) {
          nodes {
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            shopifyId
            description
            handle
            title
            priceRange {
              maxVariantPrice {
                amount
              }
            }
            availableForSale
            id
          }
        }
      }
    `
  )
  return (
    <Container>
      <h2 className="text-center mb-5 display-4">Products</h2>
      <Row className="justify-content-md-between justify-content-center">
        {data.products.nodes.map(product => (
          <Col xs={10} md={6} lg={4} key={product.id} className="mb-5">
            <Link to={`/product/${product.handle}`}>
              <GatsbyImage
                fluid={product.images[0].localFile.childImageSharp.fluid}
                alt={product.name}
                className="border"
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products
