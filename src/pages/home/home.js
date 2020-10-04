import React from "react"
import Header from "src/pages/home/header"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`
function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}
export default Home
