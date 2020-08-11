import React from "react"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
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
                currencyCode
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
    <>
      <h2 className="text-center mb-5 display-4">Products</h2>
      <Row className="justify-content-md-between justify-content-center">
        {data.products.nodes.map(product => (
          <Card
            key={product.id}
            bg="secondary"
            className="mb-5 p-0"
            as={Col}
            xs={8}
            md={5}
            lg={3}
          >
            <Card.Img
              as={GatsbyImage}
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt={product.name}
              variant="top"
            />
            <Card.Body className="p-1">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.priceRange.maxVariantPrice.amount}{" "}
                {product.priceRange.maxVariantPrice.currencyCode}
              </Card.Text>
              <Button
                as={Link}
                variant="dark"
                block
                to={`/product/${product.handle}`}
              >
                View Product
              </Button>
            </Card.Body>
          </Card>
          // <Col xs={10} md={6} lg={4} key={product.id} className="mb-5">
          //   <GatsbyImage
          //     fluid={product.images[0].localFile.childImageSharp.fluid}
          //     alt={product.name}
          //   />
          //   <Button
          //     as={Link}
          //     variant="outline-light"
          //     block
          //     to={`/product/${product.handle}`}
          //     className="rounded-0"
          //   >
          //     View
          //   </Button>
          // </Col>
        ))}
      </Row>
    </>
  )
}

export default Products
