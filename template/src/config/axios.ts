import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BACKEND_URL, NETWORK_TIMEOUT } from "./constants";

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: NETWORK_TIMEOUT,
});

export function initAxiosInterceptors() {
  function onRequestSuccess(config: AxiosRequestConfig) {
    return config;
  }

  function onResponseSuccess(response: AxiosResponse) {
    return response;
  }

  function onResponseError(error: any) {
    return Promise.reject(error.response);
  }

  instance.interceptors.request.use(onRequestSuccess);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);
}

export default instance;
