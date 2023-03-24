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
import { getProducerDrumkits } from "../../managers/drumkits/DrumkitManager"
import { Drumkits } from "../drumkits/Drumkits"
import { MyDrumkitSamples } from "./MyDrumkitSamples"

export const MyKits = (props) => {
  const [drumkit, setDrumkit] = useState([])

  useEffect(() => {
    getProducerDrumkits().then((data) => setDrumkit(data))
  }, [])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="flex justify-between">
          <div>
            <Link to="/mysounds" className="flex flex-row items-center ">
              <div className="mb-[30px]  text-[50px] font-bold font-primary transition duration-500 ease-in-out hover:text-green  cursor-pointer ">
                My Drumkits
              </div>
              <div className="text-[30px] pl-[20px] pb-[20px]">
                <FaAngleDown />
              </div>
            </Link>
          </div>
          <a href={"drumkits/new"}>
            <h1 className="plus text-[50px] mt-[15px]">
              <AiOutlinePlus />
            </h1>
          </a>
        </div>
        <article className="max-h-[555px] max-w-[1440px] flex flex-row  ">
          {drumkit.map((d) => (
            <MyDrumkitSamples
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
