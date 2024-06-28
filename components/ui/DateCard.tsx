"use client";

import { FC } from "react";
import Image from "next/image";

type TimeStatus = {
  time: string;
  descripton: string;
  temp: string;
};

type DateItem = {
  date: string;
  status: TimeStatus[];
};

type DateCardProps = {
  title: string;
  dateCollecion: DateItem[];
};

const DateCard: FC<DateCardProps> = ({
  title,
  dateCollecion,
}: DateCardProps) => {
  return (
    <section className="flex flex-col gap-y-3">
      <h4 className="font-medium">{title}</h4>
      <div className="flex flex-col gap-y-6 p-3 bg-white rounded-lg">
        {dateCollecion.map(({ date, status }) => {
          return (
            <div key={date} className="flex flex-col gap-y-3">
              <div className="text-gray-500">{date}</div>
              {status.map(({ time, descripton, temp }) => {
                return (
                  <div key={time} className="flex gap-x-3">
                    <div className="font-medium w-20 lg:w-auto">{time}</div>
                    <div className="text-gray-500 min-w-32 lg:min-w-auto">
                      {temp}
                      <sup>&#9900;</sup>C
                    </div>
                    <div className="font-medium text-right lg:text-center grow lg:grow-0">
                      {descripton}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DateCard;
