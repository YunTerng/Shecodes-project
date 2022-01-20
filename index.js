function search(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let input = document.querySelector("#city-input");
  h2.innerHTML = `${input.value}`;
  let apiKey = "cc49c45c57193748afc18fd2a2394c3a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

let changeCity = document.querySelector("#searchButton");
changeCity.addEventListener("click", search);

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = ` ${temperature}°C `;
}
