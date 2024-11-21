import axios from "axios";

const token = localStorage.getItem("accessToken");
const axiosCommon = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
