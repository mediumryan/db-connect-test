import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/component/header/header';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
