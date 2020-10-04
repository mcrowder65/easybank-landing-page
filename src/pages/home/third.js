import React from "react"
import styled from "@emotion/styled"
import Card from "src/components/card"
const Cards = styled.div``
function Third(props) {
  return (
    <div {...props}>
      <Cards>
        <Card
          image="currency"
          author="Claire Robinson"
          review="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        />
        <Card
          image="restaurant"
          author="Wilson Hutton"
          review="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <Card
          image="plane"
          author="Wilson Hutton"
          review="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <Card
          image="confetti"
          author="Claire Robinson"
          review="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </Cards>
    </div>
  )
}

export default styled(Third)`
  height: 627px;
  background-color: #fafafa;
  ${(props) => props.theme.breakpoints("md")} {
    height: unset;
  }
  ${(props) => props.theme.paddingBreakpoints.padding("80px", "80px")};

  ${Cards} {
    height: 499px;
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.breakpoints("xl")} {
      ${Card} {
        width: 220px;
      }
    }
    ${(props) => props.theme.breakpoints("lg")} {
      ${Card} {
        width: 200px;
      }
    }
    ${(props) => props.theme.breakpoints("md")} {
    }
    ${(props) => props.theme.breakpoints("md")} {
      flex-direction: column;
      align-items: center;
      height: unset;
      ${Card} {
        margin-top: 16px;
        width: 255px;
      }
    }
  }
`
