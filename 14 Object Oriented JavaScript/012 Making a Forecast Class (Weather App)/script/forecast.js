const apiKey = "YcxW7qnNS58FWQVNp7uPGMhdFc3DHSYD";

class Forecast {
  constructor() {
    this.apiKey = "YcxW7qnNS58FWQVNp7uPGMhdFc3DHSYD";
    this.weatherURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
    this.cityURL =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);

    return { cityDetails, weather };
  }

  async getCity(city) {
    const query = `?q=${city}&apikey=${this.apiKey}`;
    const response = await fetch(this.cityURL + query);
    const data = await response.json();

    return data[0];
  }

  async getWeather(locationKey) {
    try {
      const query = `${locationKey}?apikey=${this.apiKey}`;
      const response = await fetch(this.weatherURL + query);
      const data = await response.json();

      return data[0];
    } catch (error) {
      console.log(error);
    }
  }
}

