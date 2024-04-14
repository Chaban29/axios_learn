import axios from 'axios';
import { IUser } from '../App';

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios({
      url: `${FIRST_API_URL}/users`,
      method: 'GET',
      params: { offset: 0, limit: 5 },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Error:', error);
    }
    throw error;
  }
};
