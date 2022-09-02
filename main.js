import { API_KEY, BASE_URL, IMG_URL, LANGUAGE } from "./api.js";

var button = document.querySelector("button");

button.addEventListener("click", () => {
  let min = 555;
  let max = 70000;

  const id = Math.floor(
    max * Math.random() + min * 2 + max * Math.random() + min
  );

  axios
    .get(`${BASE_URL}${id}?api_key=${API_KEY}&${LANGUAGE}`)
    .then((response) => {
      const data = response.data;
      title.textContent = data.title;
      details.textContent = data.overview;
      poster.src = `${IMG_URL}${data.poster_path}`;
    })
    .catch(() => {
      title.textContent = "Que pena";
      details.textContent = "Não encontramos nenhum filme";
      poster.src =
        " https://w7.pngwing.com/pngs/285/84/png-transparent-computer-icons-error-super-8-film-angle-triangle-computer-icons.png";
    });
});
