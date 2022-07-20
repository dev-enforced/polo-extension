type WeatherDetails = {
  temperature?: number;
  weatherIcon?: string;
  place: string;
  coordinates_latitude?: number;
  coordinates_longitude?: number;
  condition: string;
  minimum_temperature?: number;
  maximum_temperature?: number;
  feelsLike?: number;
};
export type { WeatherDetails };
