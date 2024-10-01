'use client';

import React, { useState } from 'react';

export default function SearchForm() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/searchUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    setResult(data.userEmail[0].email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Get User Email
      </button>
      <p>{result}</p>
    </form>
  );
}
