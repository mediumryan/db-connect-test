'use client';

import { signUpAction } from '@/actions/signUpAction';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export default function SignUp() {
  const route = useRouter();
  const [state, formAction] = useFormState(signUpAction, { message: null });

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

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
      alert('Sign-up complete. You will be logged in automatically.');
      login(state?.data.name);
      route.push('/');
      route.refresh();
    } else if (!state?.ok && state?.message) {
      alert(state?.message);
    }
  }, [state]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-24">
      <h2 className="text-xl font-bold italic mb-8">Sign Up</h2>
      <form action={formAction} className="w-[400px] grid grid-rows-3 gap-2">
        <div className="grid grid-cols-6">
          <label className="col-span-2 text-center p-2">Name</label>
          <input
            className="col-span-4 p-2"
            type="text"
            placeholder="Please, Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
        </div>
        <div className="grid grid-cols-6">
          <label className="col-span-2 text-center p-2">ID</label>
          <input
            className="col-span-4 p-2"
            type="email"
            placeholder="Please, Enter your ID"
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
            placeholder="Please, Enter your Password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            name="pw"
          />
        </div>
        <div className="grid grid-cols-6">
          <label className="col-span-2 text-center p-2">Check PW</label>
          <input
            className="col-span-4 p-2"
            type="password"
            placeholder="Please, Enter your Password"
            value={pwCheck}
            onChange={(e) => {
              setPwCheck(e.target.value);
            }}
            name="pwCheck"
          />
          <p></p>
        </div>
        <button className="w-full bg-white text-black py-2" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
