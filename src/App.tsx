import { FC, useEffect, useState } from 'react';
import { createUser, getUsers } from './requests/request';
import { getComments } from './requests/getComments';
import { result } from './requests/requests';

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
    getComments();
    createUser();
    getUsers();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    result;
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
