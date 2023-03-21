import { useNavigate } from "react-router-dom"
import { deleteSample } from "../../managers/samples/MySounds"
import { FaPlay, FaStop } from "react-icons/fa"
import { AiOutlineEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { useRef, useState } from "react"

export const MySoundsSamples = ({
  id,
  fileUrl,
  fileName,
  producer,
  instrument,
  genre,
  image,
}) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const navigate = useNavigate()

  const handleLogoClick = () => {
    if (!isPlaying) {
      audioRef.current.currentTime = 0 // reset audio to beginning
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }
  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  const file = "http://localhost:8000" + fileUrl
  const imgFile = "http://localhost:8000" + image

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1200px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px] transition duration-500 ease-in-out hover:bg-[#252525] cursor-pointer "
    >
      <div className="col-start-1">
        <img
          src={imgFile}
          alt="Producer Image"
          className="ml-[35px] h-[50px] w-[50px] object-cover"
        ></img>
      </div>
      <h2 className=" col-start-2 text-green flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-[#65fc9a] cursor-pointer">
        <div>
          {isPlaying ? (
            <FaStop
              className="sample__stop-button"
              onClick={() => {
                audioRef.current.pause()
                setIsPlaying(false)
              }}
            />
          ) : (
            <FaPlay className="sample__play-button" onClick={handleLogoClick} />
          )}
          <audio
            ref={audioRef}
            src={file}
            onEnded={handleAudioEnded}
            onPlay={() => {
              setIsPlaying(true)
            }}
            onPause={() => {
              setIsPlaying(false)
            }}
          />
        </div>
      </h2>
      <div className="sample__url col-start-3 col-span-3">{fileName}</div>

      <div className="sample__instrument flex justify-center">{instrument}</div>
      <div className="sample__genre flex justify-center">{genre}</div>
      <button
        className="button text-white flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
        onClick={() => {
          navigate(`/mysounds/edit/${id}`)
        }}
      >
        <AiOutlineEdit />
      </button>
      <button
        className="button text-white flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
        onClick={() =>
          deleteSample(id).then(() => {
            window.location.reload()
          })
        }
      >
        <AiOutlineDelete />
      </button>
    </section>
  )
}
