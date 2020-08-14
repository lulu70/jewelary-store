import { gsap } from "gsap"

const runLoadingTimeline = ({
  layoutContainerRef,
  navbarRef,
  carouselWrapperRef,
  heroRowRef,
  productsWrapperRef,
  firstSkullColRef,
  secondSkullColRef,
}) => {
  const basicAnimationVars = {
    duration: 1,
    ease: "power4.out",
  }
  const tl = gsap
    .timeline()
    .to(layoutContainerRef.current, {
      duration: 0.2,
      autoAlpha: 1,
    })
    .from(navbarRef.current, {
      ...basicAnimationVars,
      y: -200,
    })
    .from(
      carouselWrapperRef.current,
      {
        ...basicAnimationVars,
        y: -2000,
      },
      "-=.5"
    )
    .from(
      [
        heroRowRef.current,
        productsWrapperRef.current,
        firstSkullColRef.current,
        secondSkullColRef.current,
      ],
      {
        ...basicAnimationVars,
        autoAlpha: 0,
        y: -1000,
      }
    )
    .to([firstSkullColRef.current, secondSkullColRef.current], {
      ...basicAnimationVars,
      autoAlpha: 0,
      delay: 2,
    })
    .to(
      [firstSkullColRef.current, secondSkullColRef.current],
      {
        ...basicAnimationVars,
        duration: 2,
        height: 0,
        y: -500,
      },
      "-=0.8"
    )
  tl.timeScale(0.7)
}

export default runLoadingTimeline
