import axios from "axios";
import { notification } from "antd";

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
  console.log(response);
  if (
    response.status >= 200 &&
    response.status <= 299 &&
    response.config.method !== "get"
  ) {
    notification["success"]({
      message: "Success",
      description: "Tarea realizada con exito",
    });
  }
  return response;
};

const errorHandler = (error) => {
  console.log("este si", error);
  if (error.response.status >= 400 && error.response.status <= 499) {
    notification["error"]({
      message: "Error",
      description: "Hubo un problema en la acción realizada.",
    });
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
