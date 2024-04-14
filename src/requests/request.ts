import axios from 'axios';
import { IUser } from '../App';

export const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios({
      url: `${FIRST_API_URL}/users`,
      method: 'GET',
      timeout: 2000,
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

let userId = 10;

export const createUser = () => {
  const response = axios
    .post(`${FIRST_API_URL}/users`, {
      id: userId++,
      firstName: 'Roman',
      lastName: 'Chaban',
    })
    .then((res) => console.log(res));
  return response;
};
