import axios from "axios";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5";
const GEOCODE_URL = "https://geocode.xyz";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
let temperatureUnit = "";

export const getWeatherByLocationService = async (location: string) => {
  try {
    const units = await getUnitByLocationService();
    const params = {
      q: location,
      appid: API_KEY,
      units: units,
    };
    const response = await axios.get(WEATHER_URL + "/weather?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWeatherForecastByLocationService = async (location: string) => {
  try {
    const units = await getUnitByLocationService();
    const params = {
      q: location,
      appid: API_KEY,
      units: units,
    };
    const response = await axios.get(WEATHER_URL + "/forecast?", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUnitByLocationService = async () => {
  return new Promise((resolve, _reject) => {
    // Check cache data
    if (temperatureUnit) {
      resolve(temperatureUnit);
    } else {
      // Set default unit
      const defaultUnit = "metric";
      const imperialCountries: string[] = [
        "US",
        "BS",
        "KY",
        "BZ",
        "PW",
        "MH",
        "FM",
        "LR",
      ];
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await axios.get(
              `${GEOCODE_URL}/${latitude},${longitude}?json=1`
            );
            const { prov } = data.data;
            const unit = imperialCountries.includes(prov)
              ? "imperial"
              : "metric";
            // Store unit value
            temperatureUnit = unit;
            resolve(unit);
          } catch (error) {
            // Return default value when can't fetching geolocation
            console.error("Error fetching geolocation:", error);
            resolve(defaultUnit);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          resolve(defaultUnit);
        }
      );
    }
  });
};
