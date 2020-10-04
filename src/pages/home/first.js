import React from "react"
import styled from "@emotion/styled"
import Button from "src/components/button"
import bgIntroDesktop from "src/images/bg-intro-desktop.svg"
import bgIntroMobile from "src/images/bg-intro-mobile.svg"
const Message = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 56px;
    line-height: 64px;
    letter-spacing: -1px;
    color: #2d314d;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.28125px;
    color: #9597a5;
  }
  ${(props) => props.theme.breakpoints("sm")} {
    align-items: center;
    text-align: center;
    width: 327px;
    height: 261px;
    h3 {
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      letter-spacing: -0.714286px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      letter-spacing: -0.234375px;
    }
  }
  width: 447px;
  height: 316px;
`
const DesktopImage = styled.img`
  z-index: 10;
  position: absolute;
  right: -500px;
  top: -10px;
  overflow: hidden;
  ${(props) => props.theme.breakpoints("lg")} {
    right: -800px;
  }
  ${(props) => props.theme.breakpoints("md")} {
    right: -1000px;
  }
  ${(props) => props.theme.breakpoints("sm")} {
    display: none;
  }
`
function First(props) {
  return (
    <div {...props}>
      <DesktopImage src={bgIntroDesktop} />
      <Message>
        <h3>Next generation digital banking</h3>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </Message>
    </div>
  )
}

export default styled(First)`
  z-index: 1;
  height: 676px;
  background-color: #fafafa;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.theme.paddingBreakpoints.padding};
  ${(props) => props.theme.breakpoints("sm")} {
    align-items: center;
  }
`
