import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    Authorization:
      "Bearer ea29ffe8f9cffd645a8d3ec13f2984654e330e5076a44f575e04194bc90b39283eb55f509068c80139602d14d142fe1f471cbfbd716a4d94b7b831949d7742e18aab6697149135a1042fc80c5f7b0548facea06ef9158f4a8717b614bb2cfa3775bb80380e716826584ae2d4e1562e70b2c6d04bdb00807c6a1598a9f3deaf40",
  },
});
