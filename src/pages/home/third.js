import React from "react"
import styled from "@emotion/styled"
const Cards = styled.div`
  height: 499px;
  border: 1px solid black;
`
function Third(props) {
  return (
    <div {...props}>
      <Cards />
    </div>
  )
}

export default styled(Third)`
  height: 627px;
  ${(props) => props.theme.paddingBreakpoints.padding("80px", "80px")};
`
