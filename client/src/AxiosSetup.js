import axios from "axios";

const axiosSetup = axios.create({
  baseURL: "http://bars/php/queries",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosSetup;
