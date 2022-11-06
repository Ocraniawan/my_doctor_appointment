import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import FormBooking from "../../components/BookAppointment/FormBooking";
import ListDoctors from "../../components/ListDoctor";
import { capitalizeStr } from "../../utils";

let dataDoctor = {
  id: "M2159",
  address: {
    district: "Kwun Tong",
    line_1: "Unit 4, Floor 5, Block F",
    line_2: "Boom Building",
  },
  description: "",
  name: "KWOK KWAN MAN",
  opening_hours: [
    {
      day: "TUE",
      end: "19.50",
      isClosed: true,
      start: "9.50",
    },
    {
      day: "FRI",
      end: "19.50",
      isClosed: false,
      start: "9.50",
    },
    {
      day: "SUN",
      end: "18.00",
      isClosed: false,
      start: "9.50",
    },
    {
      day: "MON",
      end: "19.50",
      isClosed: false,
      start: "9.50",
    },
    {
      day: "THU",
      end: "19.50",
      isClosed: false,
      start: "9.50",
    },
    {
      day: "WED",
      end: "19.50",
      isClosed: false,
      start: "9.50",
    },
    {
      day: "SAT",
      end: "19.50",
      isClosed: false,
      start: "9.50",
    },
  ],
};

export default function DetailDoctor() {
  const [makeAppointment, setMakeAppointment] = useState(false);
  const [data] = useState(dataDoctor);

  const handleSubmit = (data: any) => {
    console.log("submitted");
  };

  return (
    <div className="p-4 md:p-[50px] bg-white w-full min-h-screen">
      {/* start here */}
      <div className="md:flex text-start justify-between px-4 mb-4 md:px-10 md:mb-10">
        <div className="mx-2 mb-4">
          <img
            src="/assets/images/doctor-profile.png"
            alt="doctor"
            className="rounded-2xl shadow-sm h-96 w-full"
          />
        </div>
        <div className="px-2 md:pr-4 mb-4">
          <div className="font-bold text-2xl pb-1 text-primary">
            {capitalizeStr(data.name)}
          </div>
          <hr className="pb-4" />
          <div className="flex justify-start text-base items-center pb-2 font-medium text-gray-700">
            <SlLocationPin size={16} color={"#ff0068"} />
            <span className="pl-4">
              {data.address.line_1}
              {" - "}
              {data.address.line_2}
              {" - "}
              {data.address.district}
            </span>
          </div>
          {/* availibility */}
          <div className="text-base font-medium mb-4 text-gray-700">
            <div className="flex justify-start items-center pb-2">
              <MdOutlineWatchLater size={16} color={"#ff0068"} />
              <span className="pl-4">Opening Hours</span>
            </div>
            <div className="pl-8">
              {data.opening_hours.map((opening, index) => (
                <div key={index} className="flex w-full pb-1">
                  <span className="mr-2 w-20 font-medium">
                    {capitalizeStr(opening.day)}
                  </span>
                  {opening.isClosed ? (
                    <span className="text-primary font-medium">Closed</span>
                  ) : (
                    <span className="font-medium">
                      {opening.start} - {opening.end}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setMakeAppointment(true)}
            className="bg-white text-sm h-10 border border-primary rounded-xl text-primary w-full px-4 text-center items-center font-semibold
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            disabled={makeAppointment}
          >
            Make an Appointment
          </button>
        </div>
        {!makeAppointment ? (
          <div className="mb-4">
            <img
              src="/assets/images/medical-history.png"
              alt="doctor"
              className="w-full h-96"
            />
          </div>
        ) : (
          <FormBooking
            dataDoctor={data}
            submit={(data: any) => handleSubmit(data)}
          />
        )}
      </div>
      <div className="bg-secondary md:pt-10 pt-20 pb-8 rounded-2xl">
        <ListDoctors />
      </div>
    </div>
  );
}
