import axios from 'axios';

export const useWeather = () => {
  const getWeather = async (city: string) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`
    );
    return response.data;
  };

  return { getWeather };
};
