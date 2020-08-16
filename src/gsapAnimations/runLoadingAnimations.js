import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const runLoadingAnimations = ({
  layoutContainerRef,
  navbarRef,
  carouselWrapperRef,
  heroRowRef,
  productsWrapperRef,
  firstSkullColRef,
  secondSkullColRef,
}) => {
  const tl = gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: "power4.out",
      },
    })
    .add("start")
    .to(layoutContainerRef.current, {
      duration: 0.2,
      autoAlpha: 1,
    })
    .from(navbarRef.current, {
      y: -200,
    })
    .from(
      carouselWrapperRef.current,
      {
        y: -2000,
      },
      "-=.5"
    )
    .from([heroRowRef.current, productsWrapperRef.current], {
      autoAlpha: 0,
      y: -1000,
    })
  tl.timeScale(2)
  gsap
    .timeline({
      scrollTrigger: {
        trigger: productsWrapperRef.current,
        scrub: 3,
        start: "+=600 100",
        end: "+=200",
        once: true,
      },
      defaults: {
        duration: 1,
        ease: "power4.out",
      },
    })
    .to([firstSkullColRef.current, secondSkullColRef.current], {
      height: "auto",
      scale: 0,
    })
    .to(
      [firstSkullColRef.current, secondSkullColRef.current],
      {
        scale: 1,
        autoAlpha: 1,
      },
      ""
    )
    .to([firstSkullColRef.current, secondSkullColRef.current], {
      scale: 5,
      autoAlpha: 0,
    })
    .to(
      [firstSkullColRef.current, secondSkullColRef.current],
      {
        height: 0,
      },
      "-=0.5"
    )
}

export default runLoadingAnimations
