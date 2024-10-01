'use client';

import { useEffect } from 'react';
import AddUser from './addUser';
import { userAtom } from '@/data/user';
import { useAtom } from 'jotai';

export default function UserList() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('/api/getUser');
      const userData = await res.json();
      setUser(userData.userList);
    };
    getUser();
  }, []);

  return (
    <div>
      <AddUser />
      <ul>
        {user.map((user) => {
          return (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
