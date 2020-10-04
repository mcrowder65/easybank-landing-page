import React from "react"
import styled from "@emotion/styled"
import logo from "src/images/logo.svg"
import Button from "src/components/button"
import iconHamburger from "src/images/icon-hamburger.svg"
const Link = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.107692px;
  color: #9597a5;
  cursor: pointer;
  height: 55%;
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
    width: 240px;
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
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${IconHamburger} {
    display: none;
  }
  padding: ${(props) =>
    `0 ${props.theme.padding.right} 0 ${props.theme.padding.left}`};
  ${(props) => props.theme.breakpoints("lg")} {
    padding: 0 75px 0 75px;
  }
  ${(props) => props.theme.breakpoints("md")} {
    padding: 0 45px 0 45px;
  }
  ${(props) => props.theme.breakpoints("sm")} {
    padding: 0 24px 0 24px;
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
