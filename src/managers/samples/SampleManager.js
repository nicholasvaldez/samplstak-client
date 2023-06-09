export const getSamples = () => {
  return fetch("http://localhost:8000/samples", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getRandomSamples = () => {
  return fetch("http://localhost:8000/samples?random", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getGenreSamples = (id) => {
  return fetch(`http://localhost:8000/samples?genre=${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getSingleSample = (id) => {
  return fetch(`http://localhost:8000/samples/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
