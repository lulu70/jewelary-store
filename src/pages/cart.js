import React, { useContext } from "react"

import { ShopifyStoreContext } from "../context/ShopifyStoreContextProvider"

import LineItem from "../components/LineItem"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(ShopifyStoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <Layout>
      <Container>
        {lineItems}
        <h2>Subtotal</h2>
        <p>$ {checkout.subtotalPrice}</p>
        <br />
        <h2>Taxes</h2>
        <p>$ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>$ {checkout.totalPrice}</p>
        <br />
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </button>
      </Container>
    </Layout>
  )
}

export default Cart
