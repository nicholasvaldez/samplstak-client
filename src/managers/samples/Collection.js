export const addToCollection = (sample) => {
  return fetch(`http://localhost:8000/collections?producer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
    body: JSON.stringify(sample),
  })
}

export const getCollectionSamples = (id) => {
  return fetch(`http://localhost:8000/collections?producer`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json(response))
}

export const getGenreCollectionSamples = (id) => {
  return fetch(`http://localhost:8000/collections?producer&genre=${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getInstrumentCollectionSamples = (id) => {
  return fetch(`http://localhost:8000/collections?producer&instrument=${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const removeFromCollection = (id) => {
  return fetch(`http://localhost:8000/collections/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  })
}
