import axios from 'axios';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';

const ajax = axios.create({
  baseURL: `${window.location.protocol}//alterainvest.ru${apiUrl}`,
  timeout: 15000,
});

ajax.interceptors.request.use((config) => {
  const { headers } = config;
  headers.login = localStorage.getItem('login');
  headers.token = localStorage.getItem('token');
  return config;
});

ajax.interceptors.response.use(response => response.data, (error) => {
  handleError(error);
  return Promise.reject(error);
});

ajax.all = axios.all;
ajax.spread = axios.spread;

export default ajax;
