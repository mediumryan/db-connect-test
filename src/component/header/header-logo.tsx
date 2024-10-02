'use client';

import { useEffect, useState } from 'react';

interface HeaderLogoProps {
  userName: string | undefined;
}

export default function HeaderLogo({ userName }: HeaderLogoProps) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (userName) {
      setName(userName);
    } else {
      setName('');
    }
  }, [userName]);

  return <div className="">{name && `Hello,${name}`}</div>;
}
