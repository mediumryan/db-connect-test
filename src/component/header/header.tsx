import React from 'react';
import HeaderLogo from './header-logo';
import HeaderButton from './header-button';
import { cookies } from 'next/headers';

export default function Header() {
  const cookieStore = cookies();
  const userName = cookieStore.get('name')?.value || '';
  const loginStatus = cookieStore.get('loginStatus')?.value || 'false';

  return (
    <div className="w-full flex justify-between items-center p-4">
      <HeaderLogo userName={userName} />
      <HeaderButton loginStatus={loginStatus} />
    </div>
  );
}
