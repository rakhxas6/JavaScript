const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

// destructuring data

const updateUI = (data) => {
  // console.log(data)
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  // destructure properties
  const { cityDetails, weather } = data;

  // for debugging
  // console.log(cityDetails,weather)

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>                
    </div>
    `;
  // remove the css class d-none if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  // we are able to use the below functions directly as in the index.html file the forecast.js is defined before the app.js file
  const cityDetails = await getCity(city);
  // console.log(cityDetails)
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener("submit", (e) => {
  // prevent default actions
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  // cityForm.reset();

  //update the ui with new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
