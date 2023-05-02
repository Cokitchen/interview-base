import axios from 'axios';
import { STORAGE_KEYS } from '../utils/constants';

const BASE_API_URL = process.env.REACT_APP_API_URL;

interface RequestOption {
  method?: string;
  data?: any;
  params?: any;
  headers?: any;
}

const getToken = () => {
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  return token;
};

const makeRequest = (urlPath: string, options: RequestOption, useToken: boolean) => {
  const headers = options.headers || {};
  if (useToken) headers['Authorization'] = 'Bearer ' + getToken();
  const fullUrl = BASE_API_URL + urlPath;
  return axios({ ...options, url: fullUrl, headers: headers });
};

export const apiService = {
  makeRequest: makeRequest,
  get: (urlPath: string, params: any, useToken = true) =>
    makeRequest(urlPath, { method: 'get', params }, useToken),
  patch: (urlPath: string, data: any, useToken = true) =>
    makeRequest(urlPath, { method: 'patch', data }, useToken),
  post: (urlPath: string, data: any, useToken = true) =>
    makeRequest(urlPath, { method: 'post', data }, useToken),
  put: (urlPath: string, data: any, useToken = true) =>
    makeRequest(urlPath, { method: 'put', data }, useToken),
  delete: (urlPath: string, useToken = true) => makeRequest(urlPath, { method: 'delete' }, useToken)
};
