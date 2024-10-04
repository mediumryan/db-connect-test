'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HeaderLogo({ userName }: { userName: string }) {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return <div className="">{userName && `Hello,${userName}`}</div>;
}
