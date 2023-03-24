import { useState, useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addNewDrumkit } from "../../managers/drumkits/DrumkitManager"
import { getGenres } from "../../managers/genres/Genres"
import { getInstruments } from "../../managers/instruments/Instruments"
import { addNewSample, updateSample } from "../../managers/samples/MySounds"
import { getSingleSample } from "../../managers/samples/SampleManager"
import { NavBar } from "../nav/NavBar"

export const DrumkitForm = ({ token }) => {
  const [genres, setGenres] = useState([])
  const [files, setFile] = useState([])
  const navigate = useNavigate()

  const [currentDrumkit, setCurrentDrumkit] = useState({
    producer: parseInt(token),
    name: "",
    genre: 0,
    image: "",
  })

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data)
    })
  }, [])

  /*  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files
    setFile([...files, ...uploadedFiles])
  } */

  const handleNewPostInfo = (domEvent) => {
    const copy = { ...currentDrumkit }
    copy[domEvent.target.name] = domEvent.target.value
    setCurrentDrumkit(copy)
  }

  const getBase64 = (file, callback) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(file)
  }

  const createAudioString = (event) => {
    getBase64(event.target.files[0], (base64AudioString) => {
      console.log("Base64 of file is", base64AudioString)

      // Update a component state variable to the value of base64AudioString
      const copy = { ...currentDrumkit }
      copy.sample = base64AudioString
      setCurrentDrumkit(copy)
    })
  }
  /* 
  const wrapperFunc = (e) => {
    createAudioString(e)
    handleFileUpload(e)
  }
 */
  const createImgString = (event) => {
    getBase64(event.target.files[0], (base64imagestring) => {
      console.log("Base64 of file is", base64imagestring)

      setCurrentDrumkit((drumkitObj) => ({
        ...drumkitObj,
        image: base64imagestring,
      }))
    })
  }

  return (
    <>
      <NavBar />
      <main className=" fixed container--login bg-[#191414] h-screen w-screen text-white p-24">
        <div className="mb-[50px]  text-[50px] font-primary font-bold font-primary">
          Add a Drumkit.
        </div>
        <section className="flex justify-center flex-col items-center">
          <form className="addNewPostForm ">
            <fieldset>
              <input
                type="text"
                name="name"
                className="pl-[10px]  w-[405px] h-[43px] mb-[15px] rounded text-black"
                placeholder="Title"
                required
                onChange={handleNewPostInfo}
              />
            </fieldset>
            {/* <fieldset>
              <div className="form-group font-primary ">
                <input type="file" multiple onChange={wrapperFunc} />
                <input
                  type="hidden"
                  name="drumkit_id"
                  value={currentDrumkit.id}
                />
              </div>
            </fieldset> */}
            <fieldset>
              <div className="form-group">
                <select
                  name="genre"
                  className="form-control text-black w-[190px] h-[43px] my-[15px] font-primary rounded"
                  value={currentDrumkit.genre.id}
                  onChange={handleNewPostInfo}
                >
                  <option value={0}>Genre</option>
                  {genres.map((g) => (
                    <option key={`genre--${g.id}`} value={g.id}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <fieldset>
              <div className=" font-primary ">
                <input
                  name="image"
                  type="file"
                  id="producer_image"
                  onChange={createImgString}
                />
                <input type="hidden" />
              </div>
            </fieldset>

            <button
              type="publish"
              className="font-primary text-white font-bold bg-green rounded"
              style={{
                marginLeft: "40px",
                marginTop: "40px",
                height: "35px",
                width: "103px",
              }}
              onClick={(evt) => {
                // Prevent form from being submitted
                evt.preventDefault()

                // Send POST request to your API
                const drumkit = {
                  producer: currentDrumkit.producer,
                  name: currentDrumkit.name,
                  genre: parseInt(currentDrumkit.genre),
                  image: currentDrumkit.image,
                }

                addNewDrumkit(drumkit).then(() => navigate("/mysounds/mykits"))

                /* updateSample(sampleId, sample).then(() => navigate("/mysounds")) */
              }}
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
