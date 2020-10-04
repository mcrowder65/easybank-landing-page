import React from "react"
import styled from "@emotion/styled"
import Button from "src/components/button"
import bgIntroDesktop from "src/images/bg-intro-desktop.svg"
import bgIntroMobile from "src/images/bg-intro-mobile.svg"
import imageMockups from "src/images/image-mockups.png"
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
  position: absolute;
  right: -300px;
  top: -175px;
  ${(props) => props.theme.breakpoints("xl")} {
    right: -525px;
  }
  ${(props) => props.theme.breakpoints("lg")} {
    right: -800px;
  }
  ${(props) => props.theme.breakpoints("md")} {
    right: -1100px;
  }
  ${(props) => props.theme.breakpoints("sm")} {
    display: none;
  }
`
const MobileImage = styled.img`
  display: none;
  ${(props) => props.theme.breakpoints("sm")} {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -240px;
    display: unset;
  }
`
const ImageMockups = styled.img`
  z-index: 1;
  right: 0;
  top: -120px;
  position: absolute;
  ${(props) => props.theme.breakpoints("xl")} {
    right: -100px;
  }
  ${(props) => props.theme.breakpoints("lg")} {
    right: -300px;
  }
  ${(props) => props.theme.breakpoints("md")} {
    right: -700px;
  }
  ${(props) => props.theme.breakpoints("sm")} {
    width: 327px;
    height: 402px;
    top: -80px;
    left: 0;
    right: 0;
    margin: auto;
  }
`
const Div = styled.div`
  position: relative;
`
function First(props) {
  return (
    <>
      <Div>
        <ImageMockups src={imageMockups} />
      </Div>
      <div {...props}>
        <DesktopImage src={bgIntroDesktop} />
        <MobileImage src={bgIntroMobile} />
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
    </>
  )
}

export default styled(First)`
  position: relative;
  overflow-y: hidden;
  height: 676px;
  background-color: #fafafa;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.theme.paddingBreakpoints.padding()};
  ${(props) => props.theme.breakpoints("sm")} {
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 88px;
    overflow-x: unset;
  }
`
