import React from "react"
import ReactPlayer from "react-player"
import "./portfolio.scss"
import passcode from "./PASSCODE-VIDEO.gif"
export default function Portfolio() {
  return (
    <>
      <h3>My Projects</h3>
      <div className="projects-grid">
        <div>
          <a
            href="https://give-me-a-random-passcode.vercel.app/"
            target="_blank"
          >
            <img src={passcode} className="project-gif" />
          </a>
          Passcode Generator
        </div>
        <div>Discoverr</div>
        <div>Weather Checker</div>
        <div>Project Euler</div>
      </div>
    </>
  )
}
