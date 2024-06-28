"use client";

import Weather from "@/components/sections/Weather";
import WeatherSkeleton from "@/components/ui/skeleton";
import { useLocationContext } from "@/context/ContextProvider";
import {
  getWeatherByLocationService,
  getWeatherForecastByLocationService,
} from "@/services";
import { useEffect, Suspense } from "react";

export default function Home() {
  const { forecast, setForecast, weather, setWeather, errorMsg, search } = useLocationContext();

  const getWeatherData = async () => {
    const weather = await getWeatherByLocationService(search || "saigon");
    setWeather(weather);

    const forecast = await getWeatherForecastByLocationService(search || "saigon");
    setForecast(forecast)
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Suspense fallback={<WeatherSkeleton />}>
      <Weather current={weather} forecast={forecast} errorMsg={errorMsg} />
    </Suspense>
  );
}