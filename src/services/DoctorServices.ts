import instance from "./AxiosGlobal";

const getlistDoctor = () => {
  return instance.get(`/doctor`);
};

const getDoctorById = (id: string) => {
  return instance.get(`/doctor/${id}`);
};

const doctorsAPIs = {
  getlistDoctor,
  getDoctorById,
};

export default doctorsAPIs;
