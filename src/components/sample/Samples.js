import { addToCollection } from "../../managers/samples/Collection"
import { FaPlay, FaStop } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { useRef, useState } from "react"
export const Samples = ({
  id,
  fileUrl,
  fileName,
  producer,
  instrument,
  genre,
}) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const handleAddToCollection = () => {
    window.alert(`${fileName} has been added to your Collection!`)
    addToCollection({ sample: id })
  }

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

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1300px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px] "
    >
      <h2 className=" col-start-1 text-green flex justify-center text-[25px]">
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
      <div className="sample__url col-start-2 col-span-4">{fileName}</div>

      <div className="sample__instrument">{instrument}</div>
      <div className="sample__genre">{genre}</div>
      <button
        className="button text-slate flex justify-center font-extrabold text-[30px]"
        onClick={() => {
          handleAddToCollection()
        }}
      >
        <AiOutlinePlus />
      </button>
    </section>
  )
}
