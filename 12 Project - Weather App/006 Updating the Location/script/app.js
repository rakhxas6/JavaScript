const cityForm = document.querySelector("form");

const updateCity = async (city) => {
  // we are able to use the below functions directly as in the index.html file the forecast.js is defined before the app.js file
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  
  return {
    cityDetails: cityDetails,
    weather: weather,
  };

};

cityForm.addEventListener("submit", (e) => {
  // prevent default actions
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city
  updateCity(city)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
