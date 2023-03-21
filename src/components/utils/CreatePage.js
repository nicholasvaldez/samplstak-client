import { useNavigate } from "react-router-dom"
import { NavBar } from "../nav/NavBar"

export const CreatePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24 flex flex-col justify-center items-center">
        <div
          className=" text-[50px] font-bold font-primary mb-[100px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
          onClick={() => {
            navigate("/mysounds/drumkits/new")
          }}
        >
          Create a Drumkit.
        </div>
        <div
          className="  text-[50px] font-bold font-primary transition duration-500 ease-in-out hover:text-green cursor-pointer"
          onClick={() => {
            navigate("/mysounds/new")
          }}
        >
          Upload Samples.
        </div>
      </div>
    </>
  )
}
