// *** *** *** *** *** *** GET HANDLE ON INPUT FIELD *** *** *** *** *** ***
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = data => {
  // BEFORE WE DESTRUCTURED PROPERTIES
  //   const cityDetails = data.cityDetails;
  //   const weather = data.weather;
  // DESTRUCTURE PROPERTIES
  const { cityDetails, weather } = data;

  // update details template
  details.innerHTML = `
              <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
          </div>
    `;
  // update the night/day & icon images
  const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSource);

  // *** *** *** UPDATED if/else TO TERNARY OPERATOR *** *** ***
  let timeSource = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  //   if (weather.IsDayTime) {
  //     timeSource = "img/day.svg";
  //   } else {
  //     timeSource = "img/night.svg";
  //   }
  time.setAttribute("src", timeSource);

  // remove the 'd-none' class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener("submit", event => {
  // prevent default action
  event.preventDefault();
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();
  // update the UI with the new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));
});
