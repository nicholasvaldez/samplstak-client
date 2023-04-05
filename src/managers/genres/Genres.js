export const getGenres = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
