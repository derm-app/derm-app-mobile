import axios from 'axios';

// http://api.weatherapi.com/v1/current.json?key=89b18023d6f24214a51215152231112&q=Istanbul&aqi=no
// api key = 89b18023d6f24214a51215152231112
export const useWeather = () => {
  const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

  const getWeather = async (city: string) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    return response.data;
  };

  return { getWeather };
};
