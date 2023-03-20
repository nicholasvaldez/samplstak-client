import { useState, useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getGenres } from "../../managers/genres/Genres"
import { getInstruments } from "../../managers/instruments/Instruments"
import { addNewSample, updateSample } from "../../managers/samples/MySounds"
import { getSingleSample } from "../../managers/samples/SampleManager"
import { NavBar } from "../nav/NavBar"

export const SampleForm = ({ token }) => {
  const [sample, setSample] = useState({})
  const [instrument, setInstruments] = useState([])
  const [genres, setGenres] = useState([])
  const [sampGenres, setSampGenres] = useState(new Set())
  const [file, setFile] = useState()

  const { sampleId } = useParams()
  const navigate = useNavigate()

  const genArr = (genId) => {
    let copy = new Set(sampGenres)
    copy.has(genId) ? copy.delete(genId) : copy.add(genId)
    setSampGenres(copy)
  }

  const [currentSample, setCurrentSample] = useState({
    producer: parseInt(token),
    file_url: "",
    file_name: "",
    instrument: 0,
    genre: [],
  })

  useEffect(() => {
    if (sampleId) {
      getSingleSample(`${sampleId}`).then((data) => {
        setCurrentSample(data)

        const genreSet = new Set()
        for (const genre of data.genre) {
          genreSet.add(genre.id)
        }
        setSampGenres(genreSet)
      })
    }
  }, [sampleId])

  useEffect(() => {
    getInstruments().then((data) => {
      setInstruments(data)
    })
  }, [])

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data)
    })
  }, [])

  const handleNewPostInfo = (domEvent) => {
    const copy = { ...currentSample }
    copy[domEvent.target.name] = domEvent.target.value
    setCurrentSample(copy)
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
      const copy = { ...currentSample }
      copy.file_url = base64AudioString
      setCurrentSample(copy)
    })
  }

  const wrapperFunc = (e) => {
    createAudioString(e)
    setFile(e.target.files[0])
  }

  return (
    <>
      <NavBar />
      <main className=" fixed container--login bg-[#191414] h-screen w-screen text-white p-24">
        {sampleId ? (
          <div className="mb-[50px]  text-[50px] font-primary font-bold font-primary">
            Edit.
          </div>
        ) : (
          <div className="mb-[50px]  text-[50px] font-primary font-bold font-primary">
            Add.
          </div>
        )}
        <section className="flex justify-center flex-col items-center">
          <form className="addNewPostForm ">
            <fieldset>
              <div className="form-group font-primary ">
                <input type="file" id="sample_audio" onChange={wrapperFunc} />
                <input
                  type="hidden"
                  name="sample_id"
                  value={currentSample.id}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <select
                  name="instrument"
                  className="form-control text-black w-[190px] h-[43px] my-[15px] font-primary"
                  value={currentSample.instrument.id}
                  onChange={handleNewPostInfo}
                >
                  <option value={0}>Instrument</option>
                  {instrument.map((i) => (
                    <option key={`instrument--${i.id}`} value={i.id}>
                      {i.label}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            <div className="field">
              {genres.map((g) => {
                // Compare current `id` and see if on object exists with that id in currentGame.categories
                const foundGenre = currentSample.genre.find(
                  (sampleGenre) => g.id === sampleGenre.id
                )

                return (
                  <div key={`genre--${g.id}`} className="flex flex-wrap">
                    <input
                      className="font-primary font mr-[10px] "
                      type="checkbox"
                      name={g.label}
                      defaultChecked={foundGenre}
                      onClick={() => genArr(g.id)}
                    />
                    <label htmlFor={g.label}>{g?.label}</label>
                    <br />
                  </div>
                )
              })}
            </div>
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

                if (sampleId) {
                  const sample = {
                    file_url: currentSample.file_url,
                    file_name: currentSample.file_name,
                    instrument: parseInt(currentSample.instrument),
                    genre: Array.from(sampGenres),
                    producer: currentSample.producer,
                  }
                  updateSample(sampleId, sample).then(() =>
                    navigate("/mysounds")
                  )
                } else {
                  const sample = {
                    file_url: currentSample.file_url,
                    file_name: file.name,
                    instrument: parseInt(currentSample.instrument),
                    genre: Array.from(sampGenres),
                    producer: currentSample.producer,
                  }

                  addNewSample(sample).then(() => navigate("/mysounds"))
                }

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
