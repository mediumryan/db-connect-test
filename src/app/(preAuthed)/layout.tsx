import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <div className="relative flex flex-col p-4">
        <main className="flex h-full w-full ">{children}</main>
      </div>
    </div>
  );
}
