import { Colection, ForecastItem } from "@/models";
import moment from "moment-timezone";

export const getTime = (dt: number) => {
  const localTime = new Date(dt * 1000);
  const dateTime = moment(localTime).format("DD/MM/YYYY HH:mm");
  const day = localTime.toLocaleDateString(undefined, {
    weekday: "long",
  });
  return [day, dateTime];
};

export const set5day3HoursForecast = (list: ForecastItem[], title: string) => {
  const today = moment().format('DD/MM')
  let collection: Colection[] = []

  for (let i = 0; i < list.length; i++) {
    const { dt, weather, main } = list[i]
    const date = moment(new Date(dt * 1000)).format('DD/MM')
    
    if (collection.every(item => {return today === date ? item.date !== 'Today' : item.date !== date})) {
      collection.push({
        date: today === date ? 'Today' : date,
        status: [
          {
            time: moment(new Date(dt * 1000)).format('HH:mm'),
            descripton: weather[0].description,
            temp: main.temp_min + '/' + main.temp_max,
          },
        ]
      })
    } else {
      const index = collection.findIndex(item => {return today === date ? item.date === 'Today' : item.date === date})
      collection[index].status.push({
        time: moment(new Date(dt * 1000)).format('HH:mm'),
        descripton: weather[0].description,
        temp: main.temp_min + '/' + main.temp_max,
      },)
    }
  }

  return {
    title,
    dateCollecion: collection
  }
}