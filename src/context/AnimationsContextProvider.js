import React from "react"

export const AnimationContext = React.createContext()

const AnimationsContextProvider = ({ children }) => {
  const layoutContainerRef = React.useRef()
  const navbarRef = React.useRef()
  const carouselWrapperRef = React.useRef()
  const heroRowRef = React.useRef()
  const firstSkullColRef = React.useRef()
  const secondSkullColRef = React.useRef()
  const productsWrapperRef = React.useRef()

  return (
    <AnimationContext.Provider
      value={{
        layoutContainerRef,
        navbarRef,
        carouselWrapperRef,
        heroRowRef,
        firstSkullColRef,
        secondSkullColRef,
        productsWrapperRef,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export default AnimationsContextProvider
