import { FC, useEffect, useState } from 'react';
import { getUsers } from './requests/request';
import axios from 'axios';

export interface IUser {
  id?: number;
  title: string;
  name: string;
}

export const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      console.log(usersData);
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    axios
      .head('https://jsonplaceholder.tyxpicode.com/users')
      .then((res) => console.log(res))
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.message + ': 404');
        }
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={fetchData}>Show users</button>
    </div>
  );
};
