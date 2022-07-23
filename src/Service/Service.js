import axios from "axios";
import { notification } from "antd";
const { URL } = process.env;

const customAxios = axios.create({
  baseURL: `https://monkfish-app-wmwoj.ondigitalocean.app/api/`,
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
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
  if (error.response.status > 401 && error.response.status <= 499) {
    notification["error"]({
      message: "Error",
      description: "Hubo un problema en la acción realizada",
    });
  }

  if (
    error.response.status === 401 &&
    localStorage.getItem("token").length === 0
  ) {
    notification["error"]({
      message: "Error ",
      description: "Debes iniciar sesion / Usuario: admin , Clave: 12345 ",
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
