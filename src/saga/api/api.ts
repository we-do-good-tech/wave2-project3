import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'X-Frame-Options': 'SAMEORIGIN',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

type ConfigProps = {
  [k: string]: string;
};

export const apiConfig = (headers: ConfigProps) => {
  for (let k in headers) {
    if (headers.hasOwnProperty(k)) {
      api.defaults.headers[k] = headers[k];
    }
  }
};
