import React from "react"
import styled from "@emotion/styled"
import confetti from "src/images/image-confetti.jpg"
import currency from "src/images/image-currency.jpg"
import plane from "src/images/image-plane.jpg"
import restaurant from "src/images/image-restaurant.jpg"
const images = {
  confetti,
  currency,
  plane,
  restaurant,
}
const Author = styled.p``
const Review = styled.p``
function Card({ image, author, review, ...props }) {
  return (
    <div {...props}>
      <img src={images[image]} />
      <Author>{author}</Author>
      <Review>{review}</Review>
    </div>
  )
}
export default styled(Card)`
  width: 255px;
  height: 395px;
  border-radius: 4px;

  img {
    width: 255px;
    height: 200px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  ${Author} {
    font-size: 10px;
    line-height: 18px;
    letter-spacing: -0.15625px;
    color: #9597a5;
  }

  ${Review} {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.203125px;
    color: #9597a5;
  }
`
