import React from "react"

import AnimationsContextProvider from "./src/context/AnimationsContextProvider"

export const wrapRootElement = ({ element }) => (
  <AnimationsContextProvider>{element}</AnimationsContextProvider>
)
