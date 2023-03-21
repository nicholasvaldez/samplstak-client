import { useNavigate } from "react-router-dom"

export const Drumkits = ({ id, image, name, genreLabel }) => {
  const img = "http://localhost:8000" + image
  const navigate = useNavigate()

  return (
    <div key={`card--${id}`} className="w-[130px] h-[173px] basis-1/6 ">
      <div
        key={`container--${id}`}
        className="w-[130px] h-[130px]  cursor-pointer "
        onClick={() => {
          navigate(`/drumkits/detail/${id}`)
        }}
      >
        <img key={`image--${id}`} src={img}></img>
      </div>
      <div
        key={`title--${id}`}
        className="h-[60px] w-[130px] bg-[#f8fafc] font-primary pl-[3px] pt-[3px] drop-shadow-2xl rounded transition duration-500 ease-in-out hover:text-darkgrey  cursor-pointer
    
        "
      >
        <div
          key={`name--${id}`}
          className="text-black text-[10px] font-extrabold h-[28px]"
        >
          {name}
        </div>
        <div
          key={`genre--${id}`}
          className="pt-[5px] text-black  text-[10px] font-thin"
        >
          {genreLabel}
        </div>
      </div>
    </div>
  )
}
