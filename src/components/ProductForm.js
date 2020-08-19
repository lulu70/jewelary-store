import React, { useState, useContext, useEffect, useCallback } from "react"
import find from "lodash/find"
import isEqual from "lodash/isEqual"

import { ShopifyStoreContext } from "../context/ShopifyStoreContextProvider"

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(ShopifyStoreContext)
  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product
        .fetch(productId)
        .then(fetchedProduct => {
          // this checks the currently selected variant for availability
          const result = fetchedProduct.variants.filter(
            variant => variant.id === productVariant.shopifyId
          )
          if (result.length > 0) {
            setAvailable(result[0].available)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price)
  console.log(options)
  return (
    <>
      <h3>{price}</h3>
      <form>
        {options.length > 1 &&
          options.map(({ id, name, values }, index) => (
            <div className="form-group" key={id}>
              <label htmlFor={name}>{name} </label>
              <select
                className="custom-select"
                name={name}
                key={id}
                onChange={event => handleOptionChange(index, event)}
              >
                {values.map(value => (
                  <option value={value} key={`${name}-${value}`}>
                    {value}
                  </option>
                ))}
              </select>
              <br />
            </div>
          ))}
        <div className="form-group">
          <label htmlFor="quantity">Quantity </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            className="form-control"
            onChange={handleQuantityChange}
            value={quantity}
          />
          <br />
          <button
            className={`btn btn-${
              available ? "primary" : "secondary"
            } btn-block`}
            type="submit"
            disabled={!available || adding}
            onClick={handleAddToCart}
          >
            {available ? "Add to cart" : "Sold out"}
          </button>
        </div>
      </form>
    </>
  )
}

export default ProductForm
