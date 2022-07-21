import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/store";
import { Provider } from "react-redux";
import axios from "axios";
// import customAxios from "../src/Service/Service";

// axios.interceptors.request.use((request) => {
//   console.log("request", request);
//   return request;
// });

// customAxios.interceptors.response.use((response) => {
//   console.log("response", response);
//   return response;
// });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
