export const getDrumkits = () => {
  return fetch("http://localhost:8000/drumkits", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const addNewDrumkit = (Drumkit) => {
  return fetch("http://localhost:8000/drumkits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
    body: JSON.stringify(Drumkit),
  })
}
export const getDrumkitSamples = (id) => {
  return fetch(`http://localhost:8000/samples?drumkit=${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getRandomDrumkits = () => {
  return fetch("http://localhost:8000/drumkits?random", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
