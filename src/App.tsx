import { AppBar, MenuItem, Toolbar } from "@material-ui/core"
import React from "react"
import "./App.css"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Faq from "./pages/faq/faq"

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <MenuItem>Hello World</MenuItem>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <div>Hi, I'm Cam! 👋</div>
        <div>
          I'm a software engineer from the UK. Welcome to my personal website.
        </div>
        <div>Scroll down to learn more!</div>
        <div className="tea-text">
          TLDR: I input cups of Yorkshire tea, I output Javascript.
        </div>
      </header>
      <About />
      <Faq />
      <Contact />
    </div>
  )
}

export default App
