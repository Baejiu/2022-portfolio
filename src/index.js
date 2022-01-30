import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import HttpClient from "./network/http";
import BlogService from "./service/blog";
import ProjectsService from "./service/projects";

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const blogService = new BlogService(httpClient);
const projectsService = new ProjectsService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App blogService={blogService} projectsService={projectsService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
