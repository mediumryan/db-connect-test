'use client';

import { useEffect } from 'react';
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
      <ul>
        {user &&
          user.map((user) => {
            return (
              <li key={user.id} className="grid grid-cols-6">
                <p className="col-span-1">{user.name}</p>
                <p className="col-span-5">{user.email}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
