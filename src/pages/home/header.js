import React from "react"
import styled from "@emotion/styled"
import logo from "src/images/logo.svg"
import Button from "src/components/button"
import iconHamburger from "src/images/icon-hamburger.svg"
import theme from "src/theme"
const Link = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.107692px;
  color: #9597a5;
  cursor: pointer;
  height: 60%;
  :hover {
    color: #2d314d;
    border-bottom: 4px solid rgb(97, 193, 160);
  }
`
const Links = styled.div`
  height: 100%;
  width: 331px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${(props) => props.theme.breakpoints("md")} {
    width: 220px;
  }
`
const IconHamburger = styled.img``
function Header(props) {
  return (
    <div {...props}>
      <img src={logo} />
      <Links>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
      </Links>
      <Button>Request Invite</Button>
      <IconHamburger src={iconHamburger} />
    </div>
  )
}

export default styled(Header)`
  height: 80px;
  z-index: 2;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  ${IconHamburger} {
    display: none;
  }
  ${theme.paddingBreakpoints.padding}

  ${(props) => props.theme.breakpoints("sm")} {
    ${Button} {
      display: none;
    }
    ${Links} {
      display: none;
    }
    ${IconHamburger} {
      display: unset;
    }
  }
`
