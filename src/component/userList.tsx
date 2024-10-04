'use client';

import { UserType } from '@/data/user';
import { useRouter } from 'next/navigation';

export default function UserList({ user }: { user: UserType[] }) {
  const route = useRouter();

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
