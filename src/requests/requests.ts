import axios from 'axios';
import { FIRST_API_URL } from './request';

const getUserAccount = () => {
  return axios.get(`${FIRST_API_URL}/users`);
};
const getUserPermission = () => {
  return axios.get(`${FIRST_API_URL}/users`);
};

export const result = Promise.all([getUserAccount(), getUserPermission()]).then(
  (results) => {
    const acct = results[0];
    const perm = results[1];
    console.log(acct, perm);
  }
);
