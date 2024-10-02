import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { name } = await req.json();

  console.log(name);
  const cookieStore = cookies();
  cookieStore.set('name', name);
  cookieStore.set('loginStatus', 'true');

  const userName = cookieStore.get('name');
  const loginStatus = cookieStore.get('loginStatus');

  if (userName && loginStatus) {
    return new Response('Cookie Setting', {
      status: 200,
      headers: {
        'Set-Cookie': [
          `name=${userName.value}; Path=/; HttpOnly`,
          `loginStatus=${loginStatus.value}; Path=/; HttpOnly`,
        ].join(', '),
      },
    });
  } else {
    return new Response('Failed to set cookie', { status: 500 });
  }
}
