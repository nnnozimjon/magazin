import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import nookies from "nookies";

export const baseURL = "http://dev-api.dushanbemarket.com/api/v1/";
const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // const token: string = localStorage.getItem("access_token") || "";
  const cookies = parseCookies();
  const token = cookies["access_token"] || "";
  const newConfig: any = {
    ...config,
    headers: {
      ...config.headers,
      ...(!config?.headers?.Authorization && {
        Authorization: `Bearer ${token}`,
      }),
      "Access-Control-Allow-Origin": "*",
    },
  };

  return newConfig;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse): any => {
  const responseData = response.data;
  return responseData;
};

const get = (url: string, config?: AxiosRequestConfig) =>
  instance.get(url, config).then(responseBody);

const post = (url: string, body?: any, config?: AxiosRequestConfig) => {
  return instance.post(url, body, config).then(responseBody);
};
const put = (url: string, body?: any) =>
  instance.put(url, body).then(responseBody);

const del = (url: string) => instance.delete(url).then(responseBody);

export const Axios = { get, post, put, del };
