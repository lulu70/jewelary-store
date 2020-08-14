import React from "react"
import runLoadingTimeline from "../gsapAnimations/runLoadingTimeline"
import { AnimationContext } from "../context/AnimationsContextProvider"

const useLoadingAnimation = () => {
  const animationContext = React.useContext(AnimationContext)
  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0)
    }
    runLoadingTimeline(animationContext)
  }, [animationContext])
}
export default useLoadingAnimation
