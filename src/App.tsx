import { FC, useState } from 'react';
import { getUsers } from './requests/request';

export interface IUser {
  id: number;
  title: string;
  name: string;
}

export const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
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
