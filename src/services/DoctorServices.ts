import instance from "./AxiosGlobal";

const getlistDoctor = () => {
  return instance.get(`/doctor`);
};

const getDoctorById = (id: string) => {
  return instance.get(`/doctor/${id}`);
};

const flickrAPIs = {
  getlistDoctor,
  getDoctorById,
};

export default flickrAPIs;
