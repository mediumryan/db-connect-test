// src/app/api/users/route.ts

import { dbConnect } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const connection = await dbConnect();
  const { name } = await request.json();

  const [userEmail] = await connection.execute(
    'SELECT email FROM user where name = ?',
    [name]
  );
  connection.end();
  return NextResponse.json({ userEmail });
}
