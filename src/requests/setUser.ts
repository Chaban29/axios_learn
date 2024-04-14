import axios from 'axios';
import { FIRST_API_URL } from './request';

export const setUser = async () => {
  try {
    const response = await axios.post(`${FIRST_API_URL}/users`, {
      maxContentLength: 100,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  } finally {
    console.log('Success');
  }
};
