import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getDrumkitSamples } from "../../managers/drumkits/DrumkitManager"
import { NavBar } from "../nav/NavBar"
import { DrumkitSamples } from "./DrumkitSamples"

export const DrumkitDetails = (props) => {
  const [drumkitSamples, setDrumkitSamples] = useState([])
  const { drumkitId } = useParams()

  useEffect(() => {
    getDrumkitSamples(drumkitId).then((data) => setDrumkitSamples(data))
  }, [drumkitId])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          {drumkitSamples[0]?.drumkit.name}.
        </div>

        <article className="samples max-h-[440px] rounded-xl overflow-y-auto">
          {drumkitSamples.map((dk) => (
            <DrumkitSamples
              id={dk.id}
              fileUrl={dk.file_url}
              fileName={dk.file_name}
              producerId={dk.drumkit.producer.id}
              instrument={dk.instrument.label}
              genre={dk.genre.map((g) => g.label).join(", ")}
              image={dk.drumkit.image}
              drumkitId={dk.drumkit.id}
            />
          ))}
        </article>
      </div>
    </>
  )
}
