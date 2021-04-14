import React from "react"
import "./App.css"
import About from "./pages/about/about"
import Faq from "./pages/faq/faq"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hi, I'm Cam!</div>
        <div>
          I'm a software engineer from the UK. Welcome to my personal website.
        </div>
        <About />
        <Faq />
      </header>
    </div>
  )
}

export default App
