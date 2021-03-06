import React from "react"
import "./src/styles/custom-styles.css"

import AnimationsContextProvider from "./src/context/AnimationsContextProvider"
import ShopifyStoreContextProvider from "./src/context/ShopifyStoreContextProvider"

export const wrapRootElement = ({ element }) => (
  <AnimationsContextProvider>
    <ShopifyStoreContextProvider>{element}</ShopifyStoreContextProvider>
  </AnimationsContextProvider>
)
