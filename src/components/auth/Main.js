import React from "react"
import myImage from "../../assets/techivation-WHTq-xyU40o-unsplash.png"

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
        </div>
      </main>
    </div>
  )
}
