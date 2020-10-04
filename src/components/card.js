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
const Text = styled.div``
const Author = styled.p``
const Review = styled.p``
function Card({ image, author, review, ...props }) {
  return (
    <div {...props}>
      <img src={images[image]} />
      <Text>
        <Author>By {author}</Author>
        <Review>{review}</Review>
      </Text>
    </div>
  )
}
export default styled(Card)`
  width: 255px;
  height: 395px;
  border-radius: 4px;
  background-color: white;
  p {
    margin: 0;
    padding: 0;
    line-height: 18px;
    color: #9597a5;
  }
  img {
    height: 200px;
    width: inherit;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  ${Text} {
    height: 50%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${Author} {
    font-size: 10px;
    letter-spacing: -0.15625px;
  }

  ${Review} {
    font-size: 13px;
    letter-spacing: -0.203125px;
  }
`
