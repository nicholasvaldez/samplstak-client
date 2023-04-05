export const getInstruments = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/instruments", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
