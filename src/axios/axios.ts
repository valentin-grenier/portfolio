import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const axiosInstanceContact = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CONTACT_URL,
});
