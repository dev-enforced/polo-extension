import { WeatherDetails } from "types";
const weatherInfoInitialState: WeatherDetails = {
  temperature: undefined,
  minimum_temperature: undefined,
  maximum_temperature: undefined,
  weatherIcon: "",
  place: "",
  condition: "",
  feelsLike: undefined,
  coordinates_latitude: undefined,
  coordinates_longitude: undefined,
};
export { weatherInfoInitialState };
