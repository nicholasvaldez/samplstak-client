import { useNavigate } from "react-router-dom"
import { addToCollection } from "../../managers/samples/Collection"
import { deleteSample } from "../../managers/samples/MySounds"
import { FaPlay } from "react-icons/fa"
import { AiOutlineEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"

export const MySoundsSamples = ({
  id,
  fileUrl,
  fileName,
  producer,
  instrument,
  genre,
}) => {
  const navigate = useNavigate()

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1200px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px] "
    >
      <h2 className=" col-start-1 text-green flex justify-center text-[25px]">
        <a href={fileUrl}>
          <FaPlay />
        </a>
      </h2>
      <div className="sample__url col-start-2 col-span-3">{fileName}</div>

      <div className="sample__instrument flex justify-center">{instrument}</div>
      <div className="sample__genre flex justify-center">{genre}</div>
      <button
        className="button text-green flex justify-center text-[25px]"
        onClick={() => {
          navigate(`/mysounds/edit/${id}`)
        }}
      >
        <AiOutlineEdit />
      </button>
      <button
        className="button text-green flex justify-center text-[25px]"
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
