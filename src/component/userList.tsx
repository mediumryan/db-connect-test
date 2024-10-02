'use client';

import { UserType } from '@/data/user';

interface UserListProps {
  user: UserType[] | null;
}

export default function UserList({ user }: UserListProps) {
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
