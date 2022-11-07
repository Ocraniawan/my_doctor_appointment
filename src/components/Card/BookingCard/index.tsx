import { capitalizeStr } from "../../../utils";

const listBooking = [
  {
    date: "2022-11-06",
    doctorId: "M2163",
    id: "43af960f-0491-4700-b6a4-af51200394f1",
    name: "Ocraniawan",
    start: 10,
    status: "confirmed",
  },
  {
    date: "2022-11-09",
    doctorId: "M2163",
    id: "806df78b-7a2b-4640-85f2-0c5fb57ffb34",
    name: "John",
    start: 10,
    status: "cancel",
  },
  {
    date: "2022-11-09",
    doctorId: "M2163",
    id: "ee5fa6ca-d2bc-41e1-a3f1-527b38fc1086",
    name: "John",
    start: 11,
    status: "confirmed",
  },
];

export default function BokingCard() {
  const todayDate = new Date().toISOString().slice(0, 10);

  const handleAppointment = (status: string) => {};
  return (
    <div className="md:px-[50px]">
      {listBooking.map((list, idx) => (
        <div className="border rounded-lg shadow-md p-2 m-2 mb-4">
          <div>
            <span className="px-4 py-2 text-lg font-bold">{list.name}</span>
          </div>
          <div className="flex">
            <img
              src="/assets/images/list-book.svg"
              alt="doctor"
              className="h-24"
            />
            <div className="flex-1 pt-4 px-2 pb-2">
              <div className="md:flex text-base font-medium justify-between text-gray-600">
                <div>
                  <span className="p-1">Date</span>
                  <span className="p-1">: {list.date}</span>
                </div>
                <div>
                  <span className="p-1">Time</span>
                  <span className="p-1">: {list.start}.00</span>
                </div>
                <div>
                  <span className="p-1">Doctor ID</span>
                  <span className="p-1">: {list.doctorId}</span>
                </div>
                <div>
                  <div
                    className={`${
                      list.date < todayDate ? "text-gray-400" : "text-primary"
                    }`}
                  >
                    <span className="p-1">Status</span>
                    <span className="p-1">: {capitalizeStr(list.status)}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => handleAppointment(list.status)}
                      disabled={list.date < todayDate}
                      className={`border border-primary w-full rounded-xl py-1 font-medium disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-400 ${
                        list.status === "cancel"
                          ? "bg-primary text-white"
                          : "bg-white text-primary "
                      }`}
                    >
                      {list.status === "confirmed" ? "Cancel" : "Confirm"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
