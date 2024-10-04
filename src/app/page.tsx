// src/app/page.tsx

import Header from '@/component/header/header';
import UserList from '@/component/userList';
import { UserType } from '@/data/user';
import { dbConnect } from '@/lib/dbConnect';

async function getUser() {
  const connection = await dbConnect();
  const [rows] = await connection.execute('SELECT * FROM user');
  connection.end();
  const userList = Array.isArray(rows) ? (rows as UserType[]) : [];
  return userList;
}

export default async function Home() {
  const user = await getUser();
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-xl font-bold mb-4">User</h1>
      <UserList user={user} />
    </div>
  );
}
