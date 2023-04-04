export const addToCollection = (sample) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(sample),
    }
  )
}

export const getCollectionSamples = (id) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json(response))
}

export const getGenreCollectionSamples = (id) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer&genre=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getInstrumentCollectionSamples = (id) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer&instrument=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const removeFromCollection = (id) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  )
}
