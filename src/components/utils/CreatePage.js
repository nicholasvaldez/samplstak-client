import { NavBar } from "../nav/NavBar"

export const CreatePage = () => {
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24 flex flex-col justify-center items-center">
        <div className=" text-[50px] font-bold font-primary mb-[100px]">
          Create a Drumkit.
        </div>
        <div className="  text-[50px] font-bold font-primary">
          Upload a Sample.
        </div>
      </div>
    </>
  )
}
