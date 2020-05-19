import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://recruitment.hal.skygate.io",
  headers: { "content-type": "application/json" },
});

export const getCompanies = () => {
  return axiosInstance.get("/companies");
};

export const getCompanyDetails = (id) => {
  return axiosInstance.get(`/incomes/${id}`);
};
