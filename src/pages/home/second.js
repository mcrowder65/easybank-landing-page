import React from "react"
import Item from "src/components/item"
import styled from "@emotion/styled"
const Title = styled.div`
  width: 635px;
  ${(props) => props.theme.breakpoints("sm")} {
    width: 327px;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.28125px;
    margin: 0;
    padding: 0;
    color: #9597a5;
  }
`
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.breakpoints("sm")} {
    flex-direction: column;
    align-items: center;
    ${Item} {
      margin-top: 8px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
function Second(props) {
  return (
    <div {...props}>
      <Title>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </Title>
      <Items>
        <Item icon="online">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </Item>
        <Item icon="phone">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </Item>
        <Item icon="group">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </Item>
        <Item icon="chip">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </Item>
      </Items>
    </div>
  )
}

export default styled(Second)`
  position: sticky;
  height: 676px;
  background-color: #f4f5f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 0;
  ${(props) => props.theme.paddingBreakpoints.padding("176px", "94px")};
  ${(props) => props.theme.breakpoints("sm")} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: unset;
    padding-top: 44px;
  }
`
