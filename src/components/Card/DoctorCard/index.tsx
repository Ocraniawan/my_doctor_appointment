import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface ListDoctors {
  listDoctors: Array<Doctor>;
}

interface Doctor {
  id: string;
  name: string;
  description: string;
  address: {
    line_1: string;
    line_2: string;
    district: string;
  };
  opening_hours: Array<any>;
}

export default function DoctorCard(props: ListDoctors) {
  const { listDoctors } = props;
  return (
    <div>
      <div className="w-full">
        {listDoctors &&
          listDoctors.map((doctor, idx) => (
            <div className="w-1/2 md:w-1/4 inline-grid p-2">
              <div className="border rounded-2xl text-start">
                <div>
                  <img
                    src="/assets/images/doctor-profile.png"
                    alt="doctor"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-lg md:text-2xl font-bold">
                    Dr. Ocraniawan Patattan
                  </h1>
                  <span className="text-xs text-[#717579] ">
                    Sulawesi Selatan
                  </span>
                  <p className="my-3 text-sm hidden md:block">
                    Lorem Ipsum dolor sir amet, loremipsum dolor sir amet, lorem
                    ipsum dolor sir amet
                  </p>
                  <button className="bg-primary text-sm h-10 rounded-xl text-white w-fit px-4 text-center items-center flex font-semibold">
                    More Details &nbsp;
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
