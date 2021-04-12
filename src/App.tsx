import React from "react"
import logo from "./logo.svg"
import "./App.css"
import About from "./pages/about/about"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hi, I'm Cam!</div>
        <div>
          I'm a software engineer from the UK. Welcome to my personal website.
        </div>
        <About />
      </header>
    </div>
  )
}

export default App
