import moment from "moment-timezone";

export const getTime = (dt: number) => {
  const localTime = new Date(dt * 1000);
  const dateTime = moment(localTime).format("DD/MM/YYYY HH:mm");
  const day = localTime.toLocaleDateString(undefined, {
    weekday: "long",
  });
  return [day, dateTime];
};
