'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderButtonProps {
  loginStatus: string | undefined;
}

export default function HeaderButton({ loginStatus }: HeaderButtonProps) {
  const route = useRouter();
  const logout = async () => {
    const res = await fetch('/api/logout', { method: 'POST' });
    if (res.ok) {
      alert('log out');
      route.refresh();
    }
  };

  return (
    <div>
      {loginStatus === 'true' ? (
        <Link href="/login">
          <button onClick={logout}>LogOut</button>
        </Link>
      ) : (
        <div>
          <Link href="/signup" className="mr-3">
            <button>SignUp</button>
          </Link>
          <Link href="/login">
            <button className="">SignIn</button>
          </Link>
        </div>
      )}
    </div>
  );
}
