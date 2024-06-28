import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  weather: WeatherResponse | null;
  setWeather: Dispatch<SetStateAction<WeatherResponse | null>>;
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
  errorMsg: string | null;
  setErrorMsg: Dispatch<SetStateAction<string | null>>;
};

export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
