import { capitalizeStr } from "../../../utils";
import { useState, useEffect } from "react";
import Modals from "../../Modals";
import bookingAPIs from "../../../services/BookingServices";

interface Booking {
  date: string;
  doctorId: string;
  id: string;
  name: string;
  start: number;
  status: string;
}

export default function BokingCard() {
  const todayDate = new Date().toISOString().slice(0, 10);
  const [listBooking, setListBooking] = useState(Array<Booking>);
  const [idBook, setIdBook] = useState("");
  const [statusBook, setStatusBook] = useState("");

  // modals
  const [openModal, setOpenModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [modalTitle, setModalTitle] = useState("Are You Sure?");
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    getListBooking();
  }, []);

  const getListBooking = () => {
    bookingAPIs.getlistBooking().then((res) => {
      let resData = res.data;
      setListBooking(resData);
    });
  };

  const handleBooking = (id: string, status: string, option: string) => {
    setIdBook(id);
    setStatusBook(status);
    setIsConfirm(true);
    handleModals(
      "Are You Sure?",
      `Do you really want to ${option} this booking?`
    );
  };

  const handleModals = (title: string, text: string) => {
    setModalTitle(title);
    setModalText(text);
    setOpenModal(true);
  };

  const handleConfirm = () => {
    bookingAPIs
      .updateBookingStatus({ status: statusBook }, idBook)
      .then((res) => {
        let resData = res.data;
        getListBooking();
        setIsConfirm(false);
        handleModals("Success", `Your Booking has been ${resData.status}`);
      });
  };

  return (
    <div className="md:px-[50px]">
      <Modals
        isOpen={openModal}
        title={modalTitle}
        messages={modalText}
        isConfirm={isConfirm}
        handleConfirm={() => handleConfirm()}
        handleModal={() => setOpenModal(false)}
      />
      {listBooking &&
        listBooking.map((list, idx) => (
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
                      <span className="p-1">
                        : {capitalizeStr(list.status)}
                      </span>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() =>
                          handleBooking(
                            list.id,
                            list.status === "confirmed"
                              ? "cancelled"
                              : "confirmed",
                            list.status === "confirmed" ? "Cancel" : "Rebook"
                          )
                        }
                        disabled={list.date < todayDate}
                        className={`border border-primary w-full rounded-xl py-1 font-medium disabled:text-gray-400 disabled:bg-gray-100 disabled:border-gray-400 ${
                          list.status === "cancelled"
                            ? "bg-primary text-white"
                            : "bg-white text-primary "
                        }`}
                      >
                        {list.status === "confirmed" ? "Cancel" : "Rebook"}
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
