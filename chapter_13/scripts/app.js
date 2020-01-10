// *** *** *** *** *** *** GET HANDLE ON INPUT FIELD *** *** *** *** *** ***
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const weather = new Weather();

const updateUI = data => {
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

  let timeSource = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSource);
  // remove the 'd-none' class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", event => {
  // prevent default action
  event.preventDefault();
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();
  // update the UI with the new city
  weather
    .updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

  //Set Local Storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  weather
    .updateCity(localStorage.getItem("city"))
    .then(data => updateUI(data))
    .catch(error => console.log(error));
}
