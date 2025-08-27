const apiKey = "YcxW7qnNS58FWQVNp7uPGMhdFc3DHSYD";

const getCity = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?q=${city}&apikey=${apiKey}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json(); //it also returns promise so using await
//   console.log(data);
    return data[0];
};

getCity("gulmi")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
