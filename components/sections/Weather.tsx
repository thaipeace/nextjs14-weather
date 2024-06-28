import { ForecastResponse, WeatherResponse } from "@/models";
import { getTime, set5day3HoursForecast } from "@/utils";
import Image from "next/image";
import DateCard from "../ui/DateCard";
import CurrentCard from "../ui/CurrentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Weather = ({
  current,
  forecast,
  errorMsg,
}: {
  current: WeatherResponse | null;
  forecast: ForecastResponse | null;
  errorMsg: string | null;
}) => {
  let description = "";
  let [day, time] = getTime(0);
  if (current) {
    description = current.weather[0].main.toLowerCase();
    [day, time] = getTime(current.dt);
  }

  const currentCardData = {
    temp: current?.main.temp || 0,
    tempUnit: 'C',
    status: current?.weather[0].main || '',
    humidity: current?.main.humidity + ' %',
    winds: (
      <div className="flex gap-x-2">
        <div style={{transform: `rotate(${current?.wind.deg}deg)`}}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div> 
        <div>{current?.wind.speed} m/s</div>
      </div>
    ),
    visibility: (current?.visibility || 0)/1000 + ' km',
    imageURL: `/weather/${description}.webp`
  }

  const dateCardData = forecast && set5day3HoursForecast(forecast.list ,'5-day Forecast (3 Hours)')

  return (
    (current && (
      <section className="flex flex-col gap-y-3">
        <CurrentCard {...currentCardData} />
        {dateCardData && <DateCard {...dateCardData} />}
      </section>
    )) ||
    (errorMsg && (
      <section className="flex flex-col justify-center mt-3 mb-5 padding-x">
        <div className="relative">
          <Image
            src={`/weather/imageNotFound.webp`}
            width={1000}
            height={1000}
            alt="weather-img"
            priority={true}
            className="w-full h-[50vh] rounded-lg object-cover"
          />
        </div>
      </section>
    ))
  );
};

export default Weather;
