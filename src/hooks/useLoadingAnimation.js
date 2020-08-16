import React from "react"
import runLoadingAnimations from "../gsapAnimations/runLoadingAnimations"
import { AnimationContext } from "../context/AnimationsContextProvider"

const useLoadingAnimation = () => {
  const animationContext = React.useContext(AnimationContext)
  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0)
    }
    runLoadingAnimations(animationContext)
  }, [animationContext])
}
export default useLoadingAnimation
