import {
  getWeather,
  dailyForecast,
  showWeather,
  getLocation,
} from 'react-native-weather-api';

let temp;
let wind;

getLocation().then((location) => {
  getWeather({
    key: 'your_key',
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    unit: 'metric',
  }).then(() => {
    let data = new showWeather();
    temp = data.temp;
    wind = data.wind;
  });
});
