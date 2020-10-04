import React from "react"
import styled from "@emotion/styled"
import online from "src/images/icon-online.svg"
import phone from "src/images/icon-budgeting.svg"
import group from "src/images/icon-onboarding.svg"
import chip from "src/images/icon-api.svg"
const Img = styled.img``
const Circle = styled.div`
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  height: 72px;
  width: 72px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const icons = {
  online,
  phone,
  group,
  chip,
}
function Item({ children, icon, ...props }) {
  return (
    <div {...props}>
      <Circle>
        <Img src={icons[icon]} />
      </Circle>
      <p>{children}</p>
    </div>
  )
}

export default styled(Item)`
  width: 255px;
  height: 278px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  p {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #9597a5;
  }
`
