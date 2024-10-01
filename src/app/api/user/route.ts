// src/app/api/users/route.ts

import { dbConnect } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const connection = await dbConnect();
  const { name, age } = await request.json();

  try {
    // 데이터 삽입
    await connection.execute('INSERT INTO user (name,age) VALUES (?,?)', [
      name,
      age,
    ]);
    connection.end();
    return NextResponse.json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    connection.end();
    return NextResponse.json(
      { message: 'Failed to add user' },
      { status: 500 }
    );
  }
}
