'use client';

import { userAtom } from '@/data/user';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

export default function AddUser() {
  const setUser = useSetAtom(userAtom);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setName('');
        setAge('');
        const res = await fetch('/api/getUser');
        const userData = await res.json();
        setUser(userData.userList);
      } else {
        alert('Failed to add user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="border p-2 text-black"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter user age"
        className="border p-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Add User
      </button>
    </form>
  );
}
