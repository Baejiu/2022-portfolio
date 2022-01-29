import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import HttpClient from "./network/http";
import BlogService from "./service/blog";

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const blogService = new BlogService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App blogService={blogService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
