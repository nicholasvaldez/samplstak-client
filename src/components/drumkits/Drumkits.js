export const Drumkits = ({ id, image, name, genreLabel }) => {
  const img = "http://localhost:8000" + image

  return (
    <div key={`card--${id}`} className="w-[130px] h-[173px]">
      <div key={`container--${id}`} className="w-[130px] h-[130px]">
        <img key={`image--${id}`} src={img}></img>
      </div>
      <div
        key={`title--${id}`}
        className="h-[60px] w-[130px] bg-[#f8fafc] font-primary pl-[3px] pt-[3px] drop-shadow-2xl rounded

        "
      >
        <div
          key={`name--${id}`}
          className="text-black text-[10px] font-extrabold"
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
