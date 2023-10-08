import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://portfolio-back.local/wp-json/wp/v2/",
});
