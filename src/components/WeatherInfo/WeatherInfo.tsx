import React, { useState, useEffect } from "react";
import { WeatherDetails } from "types";
import { weatherInfoInitialState } from "constants/weatherInfoDefault";
import axios from "axios";
import styles from "./WeatherInfo.module.css";
const WeatherInfo = () => {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>(
    weatherInfoInitialState
  );
  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const weatherApiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const weatherImageUrl = process.env.REACT_APP_WEATHER_IMAGE_URL;

  const getAndSetWeatherDetails = async (
    latitudeGiven: any,
    longitudeGiven: any
  ) => {
    let updatedApiUrl = "";
    if (latitudeGiven && longitudeGiven) {
      updatedApiUrl = `${weatherApiUrl}?lat=${latitudeGiven}&lon=${longitudeGiven}&exclude={part}&appid=${weatherApiKey}`;
    } else {
      updatedApiUrl = `${weatherApiUrl}?q=Mumbai&appid=${weatherApiKey}`;
    }
    try {
      const {
        data: {
          main: {
            temp: temperatureOfArea,
            temp_min: minimumTemperatureOfArea,
            temp_max: maximumTemperatureOfArea,
            feels_like,
          },
          weather,
          name,
          coord: { lat: latitudeFromResponse, lon: longitudeFromResponse },
        },
      } = await axios.get(updatedApiUrl);
      setWeatherDetails((prevValue) => ({
        ...prevValue,
        temperature: Math.round(temperatureOfArea - 273.15),
        minimum_temperature: Math.round(minimumTemperatureOfArea - 273.15),
        maximum_temperature: Math.round(maximumTemperatureOfArea - 273.15),
        feelsLike: Math.round(feels_like - 273.15),
        coordinates_latitude: latitudeFromResponse,
        coordinates_longitude: longitudeFromResponse,
        place: name,
        condition: weather[0].main,
        weatherIcon: weather[0].icon,
      }));
    } catch (errorReceived) {
      console.error("An error occured while receiving the weather details");
    }
  };
  const locationCallback = async (position: any) => {
    const { latitude: currentLatitude, longitude: currentLongitude } =
      position.coords;
    getAndSetWeatherDetails(currentLatitude, currentLongitude);
  };
  const receiveGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(locationCallback);
  };

  useEffect(() => {
    receiveGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.weather_info_container}>
      <div className={styles.weather_info_with_temperature_container}>
        <div className={styles.weather_temperature}>
          <img
            src={`${weatherImageUrl}/${weatherDetails.weatherIcon}@2x.png`}
            alt="weather-logo"
            className={styles.weather_icon}
          />
          <div className={styles.weather_temperature_txt}>
            <span>{weatherDetails.temperature}</span>
            <span>&#176;</span>
          </div>
        </div>
      </div>
      <span className={styles.weather_location}>{weatherDetails.place}</span>
    </div>
  );
};
export { WeatherInfo };
