const apiKey = "81e7fd3223321811fffe635d0283d342";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.weather-icon');




async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

  switch(data.weather[0].main) {
    case 'Clear': icon.src = 'images/clear.png'; break;
    case 'Clouds': icon.src = 'images/clouds.png'; break;
    case 'Drizzle': icon.src = 'images/drizzle.png'; break;
    case 'Mist': icon.src = 'images/mist.png'; break;
    case 'Rain': icon.src = 'images/rain.png'; break;
    case 'Snow': icon.src = 'images/snow.png'; break;
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkWeather(searchBox.value);
  }
});
