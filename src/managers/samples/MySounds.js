export const getMySoundsSamples = () => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/samples?producer`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const addNewSample = (Sample) => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/samples", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
    body: JSON.stringify(Sample),
  })
}

export const deleteSample = (id) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  })
}

export const updateSample = (id, sample) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(sample),
  })
}
