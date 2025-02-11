import './globals.css';
import type { Metadata } from 'next';
import { verlagBold, verlagBook } from './fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${verlagBold.variable} ${verlagBook.variable}`}>{children}</body>
    </html>
  );
}