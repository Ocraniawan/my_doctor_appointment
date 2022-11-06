import DoctorCard from "../Card/DoctorCard";

const listDoctors = [
  {
    id: "string",
    name: "string",
    description: "string",
    address: {
      line_1: "string",
      line_2: "string",
      district: "string",
    },
    opening_hours: [
      {
        start: "string",
        end: "string",
        isClosed: true,
        day: "MON",
      },
    ],
  },
  {
    id: "string",
    name: "string",
    description: "string",
    address: {
      line_1: "string",
      line_2: "string",
      district: "string",
    },
    opening_hours: [
      {
        start: "string",
        end: "string",
        isClosed: true,
        day: "MON",
      },
    ],
  },
  {
    id: "string",
    name: "string",
    description: "string",
    address: {
      line_1: "string",
      line_2: "string",
      district: "string",
    },
    opening_hours: [
      {
        start: "string",
        end: "string",
        isClosed: true,
        day: "MON",
      },
    ],
  },
  {
    id: "string",
    name: "string",
    description: "string",
    address: {
      line_1: "string",
      line_2: "string",
      district: "string",
    },
    opening_hours: [
      {
        start: "string",
        end: "string",
        isClosed: true,
        day: "MON",
      },
    ],
  },
];

export default function ListDoctors() {
  return (
    <div className="mb-14 text-center">
      <div className="p-4">
        <h1 className="text-4xl font-bold">Meet our Great Doctors</h1>
        <p className="capitalize text-[#717579] mt-4 my-4 w-2/3 items-center inline-flex text-lg">
          You Will be Handled By A Team Of xpert doctors who have more than 10
          years experience in their fields and will get the best solution for
          your problem
        </p>
      </div>
      <div className="md:px-12">
        <DoctorCard listDoctors={listDoctors} />
      </div>
    </div>
  );
}
