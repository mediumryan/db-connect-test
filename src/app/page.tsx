// src/app/page.tsx

import Header from '@/component/header/header';
import UserList from '@/component/userList';

export default async function Home() {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-xl font-bold mb-4">User</h1>
      <UserList />
    </div>
  );
}
