"use client";
import { ContextProps, ForecastResponse, WeatherResponse } from "@/models";
import { createContext, useContext, useState } from "react";

const defaultValues = {
  search: "",
  setSearch: () => {},
  weather: null,
  setWeather: () => {},
  forecast: null,
  setForecast: () => {},
  unit: "metric",
  setUnit: () => {},
  errorMsg: "",
  setErrorMsg: () => {},
  searchHistoric: [],
  setSearchHistoric: () => {},
};

const LocationContext = createContext<ContextProps>(defaultValues);

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [unit, setUnit] = useState<string>("metric");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchHistoric, setSearchHistoric] = useState<string[] | null>(null);

  return (
    <LocationContext.Provider
      value={{
        search: search,
        setSearch: setSearch,
        weather: weather,
        setWeather: setWeather,
        forecast: forecast,
        setForecast: setForecast,
        unit: unit,
        setUnit: setUnit,
        errorMsg: errorMsg,
        setErrorMsg: setErrorMsg,
        searchHistoric: searchHistoric,
        setSearchHistoric: setSearchHistoric,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
