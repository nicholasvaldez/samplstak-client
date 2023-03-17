import { addToCollection } from "../../managers/samples/Collection"
import { FaPlay } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
export const Samples = ({
  id,
  fileUrl,
  fileName,
  producer,
  instrument,
  genre,
}) => {
  const handleAddToCollection = () => {
    addToCollection({ sample: id })
  }

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1300px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px]"
    >
      <h2 className=" col-start-1 text-green flex justify-center text-[25px]">
        <a href={fileUrl}>
          <FaPlay className="sample__play-button" />
        </a>
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
