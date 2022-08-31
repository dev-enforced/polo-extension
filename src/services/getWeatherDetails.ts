import axios from "axios";
const getWeatherDetails = async (weatherApiLink: string) => {
  try {
    const response = await axios.get(weatherApiLink);
    return response;
  } catch (getWeatherDetailsError) {
    return getWeatherDetailsError;
  }
};
export { getWeatherDetails };
