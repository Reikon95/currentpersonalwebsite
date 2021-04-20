import { AppBar, MenuItem, Toolbar } from "@material-ui/core"
import React from "react"
import "./App.css"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Faq from "./pages/faq/faq"
import Footer from "./pages/footer/footer"
import Portfolio from "./pages/portfolio/portfolio"
function App() {
  return (
    <div className="App">
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <MenuItem>
            <a href="#home">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="#about">About Me</a>
          </MenuItem>
          <MenuItem>
            <a href="#faq">FAQ</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact Me</a>
          </MenuItem>
        </Toolbar>
      </AppBar>
      <header className="App-header" id="home">
        <div className="lead-text">Hi, I'm Cam! 👋</div>
        <div>
          I'm a software engineer from the UK. Welcome to my personal website.
        </div>
        <div>Scroll down to learn more!</div>
      </header>
      <About />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
