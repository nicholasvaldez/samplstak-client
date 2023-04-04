export const getGenres = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/genres", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
    },
  }).then((response) => response.json())
}
