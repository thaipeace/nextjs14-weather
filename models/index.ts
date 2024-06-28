import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  weather: WeatherResponse | null;
  setWeather: Dispatch<SetStateAction<WeatherResponse | null>>;
  forecast: ForecastResponse | null;
  setForecast: Dispatch<SetStateAction<ForecastResponse | null>>;
  unit: string;
  setUnit: Dispatch<SetStateAction<string>>;
  errorMsg: string | null;
  setErrorMsg: Dispatch<SetStateAction<string | null>>;
  searchHistoric: string[] | null;
  setSearchHistoric: Dispatch<SetStateAction<string[] | null>>;
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

export type ForecastItem = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type Colection = {
  date: string,
  status: [
    {
      time: string,
      descripton: string,
      temp: string,
    }
  ]
}