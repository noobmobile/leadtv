import { notification } from "antd";
import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    api_key: process.env.REACT_APP_TMDB_APIKEY,
    language: "pt",
  },
});

api.interceptors.request.use(
  (config) => config,
  (error) => handleError(error)
);

api.interceptors.response.use(
  (response) => mapResponseToUsefulData(response),
  (error) => handleError(error)
);

const httpErrorHandler = (error) => {
  const message =
    error.response.data.error || error.response.data.status_message;
  if (!message) return;
  notification.error({
    message,
  });
};
const httpSucessMessage = (message) => {
  notification.success({
    message,
  });
};

const handleError = (error) => {
  console.error(error);
  httpErrorHandler(error);
  return Promise.reject(error);
};

const mapResponseToUsefulData = (response) => {
  const data = response.data;

  if (data?.message) {
    httpSucessMessage(data.message);
  }
  return data;
};

export default api;
