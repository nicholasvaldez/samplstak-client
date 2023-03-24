import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getDrumkits } from "../../managers/drumkits/DrumkitManager"
import { getGenres } from "../../managers/genres/Genres"
import { getInstruments } from "../../managers/instruments/Instruments"
import {
  getGenreSamples,
  getRandomSamples,
  getSamples,
} from "../../managers/samples/SampleManager"
import { NavBar } from "../nav/NavBar"
import { Drumkits } from "./Drumkits"
// import "./samplelist.css"

export const DrumkitsList = (props) => {
  const [drumkits, setDrumkits] = useState([])
  const [filteredSamples, setFilteredSamples] = useState([])

  useEffect(() => {
    getDrumkits().then((data) => setDrumkits(data))
  }, [])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          Drumkits.
        </div>
        <article className="max-h-[555px] max-w-[1440px] flex flex-wrap gap-10 ">
          {drumkits.map((d) => (
            <Drumkits
              id={d.id}
              name={d.name}
              producer={d.producer}
              genreId={d.genre.id}
              genreLabel={d.genre.label}
              image={d.image}
            />
          ))}
        </article>
      </div>
    </>
  )
}
