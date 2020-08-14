import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Skull from "./Skull"
import { AnimationContext } from "../context/AnimationsContextProvider"
const Hero = () => {
  const { heroRowRef, firstSkullColRef, secondSkullColRef } = React.useContext(
    AnimationContext
  )
  return (
    <Row
      className="align-items-center justify-content-center overflow-hidden"
      ref={heroRowRef}
    >
      <Skull colRef={firstSkullColRef} />
      <Jumbotron className="bg-transparent text-light text-center col-md-8">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
      <Skull mdOnly colRef={secondSkullColRef} />
    </Row>
  )
}

export default Hero
