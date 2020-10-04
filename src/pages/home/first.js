import React from "react"
import styled from "@emotion/styled"
import Button from "src/components/button"
const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) => props.theme.breakpoints("md")} {
    align-items: center;
    text-align: center;
  }
  width: 447px;
  height: 316px;
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
`
function First(props) {
  return (
    <div {...props}>
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
  height: 676px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.theme.paddingBreakpoints.padding};
`
