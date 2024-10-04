// src/app/api/users/route.ts

import { UserType } from '@/data/user';
import { dbConnect } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const connection = await dbConnect();
    const [rows] = await connection.execute('SELECT * FROM user');
    connection.end();
    const userList = Array.isArray(rows) ? (rows as UserType[]) : [];

    return NextResponse.json({ userList });
  } catch {
    console.log('Fail to Connecting DB');
    return NextResponse.json({});
  }
}
