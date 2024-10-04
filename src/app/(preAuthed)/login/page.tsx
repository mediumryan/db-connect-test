'use client';

import { loginAction } from '@/actions/loginAction';
import { userNameAtom } from '@/data/user';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export default function LoginPage() {
  const route = useRouter();
  const [state, formAction] = useFormState(loginAction, { message: null });

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [userName, setUserName] = useAtom(userNameAtom);

  useEffect(() => {
    const login = async (name: string) => {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
    };
    if (state?.ok && state?.data) {
      login(state?.data.name);
      setUserName(state?.data.name);
      alert('logged in');
      route.push('/');
      route.refresh();
    } else if (!state?.ok && state?.message) {
      alert(state?.message);
    }
  }, [state]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-24">
      <h2 className="text-xl font-bold italic mb-8">Sign In</h2>
      <form action={formAction} className="w-[320px] grid grid-rows-3 gap-2">
        <div className="grid grid-cols-6">
          <label className="col-span-2 text-center p-2">ID</label>
          <input
            className="col-span-4 p-2"
            type="email"
            placeholder="Enter your ID"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            name="id"
          />
        </div>
        <div className="grid grid-cols-6">
          <label className="col-span-2 text-center p-2">PW</label>
          <input
            className="col-span-4 p-2"
            type="password"
            placeholder="Enter your Password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            name="pw"
          />
        </div>
        <button className="w-full bg-white text-black py-2" type="submit">
          Login
        </button>
        <div className="flex justify-between items-center">
          <Link href="/signup" className="border-b py-1 px-2">
            Sign up
          </Link>
          <Link href="/pwfind" className="border-b py-1 px-2">
            Forgot your PW?
          </Link>
        </div>
      </form>
    </div>
  );
}
