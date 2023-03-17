import React from "react"
import myImage from "../../assets/techivation-WHTq-xyU40o-unsplash.png"
import "./main.css"

export const Main = () => {
  return (
    <div>
      <main>
        <div
          className="fixed h-screen w-screen bg-center bg-cover bg-image "
          style={{ backgroundImage: `url(${myImage})` }}
        >
          <div
            className="font-main font-weight-400 text-xl text-white "
            style={{ marginTop: "180px", marginLeft: "67px" }}
          >
            STEP INTO THE <br /> DRUM ROOM
          </div>
          <div
            className="font-primary font-weight-400 text-white text-abc"
            style={{ marginLeft: "67px", marginTop: "10px" }}
          >
            explore the worlds best drumkit sample <br /> library and unmatched
            marketplace.
          </div>
          <button
            className="font-primary text-white font-bold bg-green rounded"
            style={{
              marginLeft: "67px",
              marginTop: "10px",
              height: "35px",
              width: "103px",
            }}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}
