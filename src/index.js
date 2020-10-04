import React from "react"
import ReactDOM from "react-dom"
import Providers from "./providers"
import Home from "src/pages/home/home"

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Home />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root"),
)
