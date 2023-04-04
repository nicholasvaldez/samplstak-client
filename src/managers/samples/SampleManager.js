export const getSamples = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/samples", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}

export const getRandomSamples = () => {
  return fetch(
    "https://jellyfish-app-fo654.ondigitalocean.app/samples?random",
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getGenreSamples = (id) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/samples?genre=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getSingleSample = (id) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
