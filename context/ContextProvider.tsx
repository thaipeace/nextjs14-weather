"use client";
import { ContextProps, WeatherResponse } from "@/models";
import { createContext, useContext, useState } from "react";

const defaultValues = {
  search: "",
  setSearch: () => {},
  weather: null,
  setWeather: () => {},
  unit: "metric",
  setUnit: () => {},
  errorMsg: "",
  setErrorMsg: () => {},
};

const LocationContext = createContext<ContextProps>(defaultValues);

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [unit, setUnit] = useState<string>("metric");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <LocationContext.Provider
      value={{
        search: search,
        setSearch: setSearch,
        weather: weather,
        setWeather: setWeather,
        unit: unit,
        setUnit: setUnit,
        errorMsg: errorMsg,
        setErrorMsg: setErrorMsg,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
