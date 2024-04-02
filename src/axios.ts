import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const instance: any = axios.create({
  baseURL: "http://localhost:8000",
});

// Add a request interceptor
instance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (config: any) {
    // Do something before request is sent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let localStorageData : any = window.localStorage.getItem("persist:proHome/user");
    if (localStorageData && typeof localStorageData === "string") {
      localStorageData = JSON.parse(localStorageData);
      const access_token = JSON.parse(localStorageData?.token);
      config.headers = {
        Authorization: `Bearer ${access_token}`,
      };
    }
    return config;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.data;
  }
);

export default instance;
