import React from "react"
import "./App.css"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Faq from "./pages/faq/faq"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hi, I'm Cam!</div>
        <div>
          I'm a software engineer from the UK. Welcome to my personal website.
        </div>
        <div>Scroll down to learn more!</div>
        <div className="tea-text">
          TLDR: I input cups of tea, output Javascript.
        </div>
      </header>
      <About />
      <Faq />
      <Contact />
    </div>
  )
}

export default App
