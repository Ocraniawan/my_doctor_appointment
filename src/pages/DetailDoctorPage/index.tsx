import { useState, useEffect, Key } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import FormBooking from "../../components/BookAppointment/FormBooking";
import ListDoctors from "../../components/ListDoctor";
import Modals from "../../components/Modals";
import doctorsAPIs from "../../services/DoctorServices";
import bookingAPIs from "../../services/BookingServices";
import { capitalizeStr } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

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

export default function DetailDoctor() {
  let idParams = useParams();
  let idDoctor = idParams.id;
  const [makeAppointment, setMakeAppointment] = useState(false);
  const [data, setData] = useState<Doctor>();
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  const handleSubmit = (props: any) => {
    let id = uuidv4();
    let data = {
      id: id.toString(),
      name: props.name,
      start: parseInt(props.start),
      doctorId: idDoctor,
      date: props.date,
      status: "confirmed",
    };
    bookingAPIs.addNewBooking(data).then((res) => {
      handleModals(
        "Success!",
        `Your Booking Has Been Confirmed! We'll See You Soon!`
      );
    });
  };

  const handleModals = (title: string, text: string) => {
    setModalTitle(title);
    setModalText(text);
    setOpenModal(true);
  };

  useEffect(() => {
    idDoctor && getDoctorDetails(idDoctor);
  }, [idDoctor]);

  function getDoctorDetails(id: string) {
    doctorsAPIs.getDoctorById(id).then((res) => {
      let resData = res.data;
      setData(resData);
    });
  }

  const handleModalAppointment = () => {
    setOpenModal(false);
    setMakeAppointment(false);
  };

  return (
    <div className="p-4 md:p-[50px] bg-white w-full min-h-screen">
      <Modals
        isOpen={openModal}
        title={modalTitle}
        messages={modalText}
        handleModal={handleModalAppointment}
      />
      {/* start here */}
      <div className="md:flex text-start justify-between px-2 mb-4 md:px-10 md:mb-10">
        <div className="md:flex border rounded-lg shadow-sm py-2 md:mr-2 mb-4 md:mb-auto">
          <div className="mx-2 mb-4">
            <img
              src="/assets/images/doctor-profile.png"
              alt="doctor"
              className="rounded-2xl shadow-sm h-96 w-full"
            />
          </div>
          {data && (
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
                  {data.opening_hours.map((opening: any, index: Key) => (
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
          )}
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
      <div className="pt-4 md:pt-0">
        <hr />
      </div>
      <div className=" md:pt-10 pt-20 pb-8 rounded-2xl">
        <ListDoctors />
      </div>
    </div>
  );
}
