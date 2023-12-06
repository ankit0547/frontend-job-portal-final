import axios from "axios";
import { getAuthToken } from "../utils/utility";

const apiHeader = {};
apiHeader["app-name"] = "ONLINE-JOB-PORTAL";
apiHeader["Content-Type"] = "application/json";
apiHeader.responseType = "arraybuffer";

export const AXIOS = axios.create({
  // headers: apiHeader,
});

// Add a request interceptor
AXIOS.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// AXIOS.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log("##########>>", error);
//   }
// );
