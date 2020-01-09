const apiKey = "jFZdmzZaJF6bFDWW7KbnLU0XAcPm4Iol";
// *** *** *** *** *** *** GET WEATHER INFORMATION *** *** *** *** *** ***
const getWeather = async key => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${key}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// *** *** *** *** *** *** GET CITY INFORMATION *** *** *** *** *** ***
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
