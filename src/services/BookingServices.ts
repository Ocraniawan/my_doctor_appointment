import instance from "./AxiosGlobal";

const getlistBooking = () => {
  return instance.get(`/booking`);
};

const getBookingById = (id: string) => {
  return instance.get(`/booking/${id}`);
};

const addNewBooking = (data: any) => {
  return instance.post(`/booking`, data);
};

const updateBookingStatus = (data: any, id: string) => {
  return instance.patch(`/booking/${id}`, data);
};

const bookingAPIs = {
  getlistBooking,
  getBookingById,
  addNewBooking,
  updateBookingStatus,
};

export default bookingAPIs;
