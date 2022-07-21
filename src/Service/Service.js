import axios from "axios";

const customAxios = axios.create({
  baseURL: `http://localhost:8000/api`,
  timeout: 10000,
  //   headers: { "api-key": "eyJz-CI6Ikp-4pWY-lhdCI6" },
});

const requestHandler = (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  console.log("request", request);
  return request;
};

const responseHandler = (response) => {
  console.log("response", response);
  return response;
};

const errorHandler = (error) => {
  console.log("este si", error);

  if (error.response.status === 400) {
    console.log("si entra");
    let msg = "";
    for (const [key, value] of Object.entries(error.response.data)) {
      msg += `${value} \n`;
    }
    alert(msg);
  }

  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
