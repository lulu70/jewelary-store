import React from "react"
import "./src/styles/custom-styles.css"

import AnimationsContextProvider from "./src/context/AnimationsContextProvider"

export const wrapRootElement = ({ element }) => (
  <AnimationsContextProvider>{element}</AnimationsContextProvider>
)
