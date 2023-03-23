import React, { useEffect, useState } from "react"
import { MySoundsSamples } from "./MySoundsSamples"
import {
  addNewSample,
  getMySoundsSamples,
} from "../../managers/samples/MySounds"
import { Link } from "react-router-dom"
import { NavBar } from "../nav/NavBar"
import { AiOutlinePlus } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"

export const MySoundsList = (props) => {
  const [samples, setSamples] = useState([])

  useEffect(() => {
    getMySoundsSamples().then((data) => setSamples(data))
  }, [])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="flex justify-between">
          <div>
            <Link className="flex flex-row items-center ">
              <div className="mb-[30px]  text-[50px] font-bold font-primary">
                My Sampls
              </div>
              <div className="text-[30px] pl-[20px] pb-[20px]">
                <FaAngleDown />
              </div>
            </Link>
          </div>
          <a href={"/mysounds/new"}>
            <h1 className="plus text-[50px] mt-[15px]">
              <AiOutlinePlus />
            </h1>
          </a>
        </div>
        <article className="samples max-h-[540px] rounded-xl overflow-y-auto">
          {samples.map((s) => (
            <MySoundsSamples
              id={s.id}
              fileUrl={s.file_url}
              fileName={s.file_name}
              producer={s.producer}
              instrument={s.instrument.label}
              genre={s.genre.map((g) => g.label).join(", ")}
              image={s.drumkit?.image || s.producer.image}
              drumkitId={s?.drumkit?.id}
            />
          ))}
        </article>
      </div>
    </>
  )
}
