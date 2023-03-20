import { useState, useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getGenres } from "../../managers/genres/Genres"
import { getInstruments } from "../../managers/instruments/Instruments"
import { addNewSample, updateSample } from "../../managers/samples/MySounds"
import { getSingleSample } from "../../managers/samples/SampleManager"

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
    <form className="addNewPostForm">
      <fieldset>
        <div className="form-group">
          <input type="file" id="sample_audio" onChange={wrapperFunc} />
          <input type="hidden" name="sample_id" value={currentSample.id} />

          {/* <input
            type="text"
            name="file_name"
            required
            autoFocus
            className="title-form-control"
            defaultValue={file.name}
            onChange={handleNewPostInfo}
          /> */}
        </div>
      </fieldset>
      {/*  <fieldset>
        <div className="form-group">
          <input
            type="text"
            name="file_url"
            required
            autoFocus
            className=""
            placeholder="Soundcloud url"
            defaultValue={currentSample.file_url}
            onChange={handleNewPostInfo}
          />
        </div>
      </fieldset> */}
      <fieldset>
        <div className="form-group">
          <select
            name="instrument"
            className="form-control"
            defaultValue={currentSample.instrument.id}
            onChange={handleNewPostInfo}
          >
            {instrument.map((i) => (
              <option key={`instrument--${i.id}`} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="content" className="label">
          Genres:{" "}
        </label>
        {genres.map((g) => {
          // Compare current `id` and see if on object exists with that id in currentGame.categories
          const foundGenre = currentSample.genre.find(
            (sampleGenre) => g.id === sampleGenre.id
          )

          return (
            <div key={`genre--${g.id}`}>
              <input
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
        className="btn btn-primary"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault()

          const sample = {
            file_url: currentSample.file_url,
            file_name: file.name,
            instrument: parseInt(currentSample.instrument),
            genre: Array.from(sampGenres),
            producer: currentSample.producer,
          }

          // Send POST request to your API

          if (sampleId) {
            updateSample(sampleId, sample).then(() => navigate("/mysounds"))
          } else {
            addNewSample(sample).then(() => navigate("/mysounds"))
          }

          /* updateSample(sampleId, sample).then(() => navigate("/mysounds")) */
        }}
      >
        Submit
      </button>
    </form>
  )
}
