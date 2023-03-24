import { useNavigate } from "react-router-dom"
import { AiOutlineDelete } from "react-icons/ai"
import { deleteDrumkit } from "../../managers/drumkits/DrumkitManager"

export const MyDrumkitSamples = ({ id, image, name, genreLabel }) => {
  const img = "http://localhost:8000" + image
  const navigate = useNavigate()

  return (
    <div
      key={`card--${id}`}
      className="w-[130px] h-[173px] basis-1/6 transition duration-200 ease-in-out  hover:pb-[10px]"
    >
      <div
        key={`container--${id}`}
        className="w-[130px] h-[130px]  cursor-pointer  "
        onClick={() => {
          navigate(`/drumkits/detail/${id}`)
        }}
      >
        <img key={`image--${id}`} src={img}></img>
      </div>
      <div
        key={`title--${id}`}
        className="h-[60px] w-[130px] bg-[#f8fafc] font-primary pl-[3px] pt-[3px] drop-shadow-2xl  transition duration-500 ease-in-out hover:text-darkgrey  cursor-pointer
    
        "
      >
        <div
          key={`name--${id}`}
          className="text-black text-[10px] font-extrabold h-[28px]"
        >
          {name}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div
            key={`genre--${id}`}
            className="pt-[5px] text-black  text-[10px] font-thin"
          >
            {genreLabel}
          </div>
          <div>
            <button
              className="button text-black flex justify-center text-[15px] hover:transition duration-500 hover:ease-in-out  hover:text-lg cursor-pointer mr-[13px]"
              onClick={() =>
                deleteDrumkit(id).then(() => {
                  window.location.reload()
                })
              }
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
