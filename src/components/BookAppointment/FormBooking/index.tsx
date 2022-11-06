import React, { useState, Key } from "react";
import { disablePastDate, weekdayString } from "../../../utils";

interface BookingProps {
  submit: any;
  dataDoctor: any;
}

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

export default function FormBooking(props: BookingProps) {
  const [data] = useState(props.dataDoctor);
  const [name, setName] = useState("");
  const [dateBooking, setDateBooking] = useState("");
  const [timeBooking, setTimeBooking] = useState(0);
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidTime, setInvalidTime] = useState(false);
  const [selectedDay, setSelectedDay] = useState({
    day: "MON",
    end: "0.00",
    isClosed: false,
    start: "0.00",
  });

  const handleChangeDate = (e: any) => {
    const today = new Date(e.target.value);
    let day = weekdayString(today.getDay());
    validateOpeningDay(day, e.target.value);
    setInvalidDate(false);
  };

  const validateOpeningDay = (daySelected: string, date: string) => {
    setDateBooking(date);
    data.opening_hours.map((day: any) => {
      if (day.day === daySelected) {
        if (day.isClosed) {
          setDateBooking("");
          setTimeBooking(0);
          setInvalidDate(true);
          return day;
        }
        setSelectedDay(day);
      }
      return day;
    });
  };

  const handleTimeChange = (e: any) => {
    setInvalidTime(false);
    let timeSelected = e.target.value;
    if (
      timeSelected >= parseFloat(selectedDay.start) &&
      timeSelected <= parseFloat(selectedDay.end) - 1
    ) {
      setTimeBooking(timeSelected);
    } else {
      setInvalidTime(true);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.submit("data");
    console.log("submitted");
  };

  return (
    <div>
      <div className="text-start md:pl-4 mb-4">
        <div className="font-bold text-xl pb-1 text-gray-700">
          Booking Appointment
        </div>
        <hr className="pb-4" />
        <form onSubmit={handleSubmit}>
          <div className="block my-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 px-3 py-2 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
                  focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <text className="text-pink-600 text-xs mb-2 invisible">
              username is required
            </text>
          </div>

          <div className="block my-2">
            <label
              htmlFor="date-book"
              className="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Date Booking
            </label>
            <input
              className="mt-1 px-3 py-2 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
                  focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              name="date-book"
              type="date"
              required
              min={disablePastDate()}
              onChange={handleChangeDate}
              value={dateBooking}
            />
            <text
              className={`text-pink-600 text-xs mb-2 ${
                invalidDate ? "visible" : "invisible"
              }`}
            >
              Doctor isn't opening on that date, place choose another date!
            </text>
          </div>
          <div className="block mt-2">
            <label
              htmlFor="time-book"
              className="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Time Booking
            </label>
            <select
              name="time-book"
              id="time"
              required
              disabled={!dateBooking || invalidDate}
              value={timeBooking}
              onChange={handleTimeChange}
              className="mt-1 px-3 py-2 w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500
                                focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
              <option value={0}>Select</option>
              {hours &&
                hours.map((hour: number, index: Key) => (
                  <option key={index} value={hour}>
                    {hour}:00
                  </option>
                ))}
            </select>
            <text
              className={`text-pink-600 text-xs mb-2 ${
                invalidTime ? "visible" : "invisible"
              }`}
            >
              Doctor isn't opening on that time, place choose another time!
            </text>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="float-right bg-primary text-sm h-10 rounded-xl text-white w-fit px-10 text-center items-center flex font-semibold"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
