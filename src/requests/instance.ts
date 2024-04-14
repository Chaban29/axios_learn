import axios from 'axios';
import { FIRST_API_URL } from './request';

export const instance = axios.create({
  baseURL: `${FIRST_API_URL}/users`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
