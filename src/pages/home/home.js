import React from "react"
import Header from "src/pages/home/header"
import styled from "@emotion/styled"
import First from "src/pages/home/first"
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`
function Home() {
  return (
    <Container>
      <Header />
      <First />
    </Container>
  )
}
export default Home