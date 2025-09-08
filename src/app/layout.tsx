import localFont from 'next/font/local';

import type { Metadata } from 'next';

import './globals.css';

import { AppProvider } from '@/app/_providers/app-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const jetBrainsMono = localFont({
  src: './fonts/JetBrainsMono-Regular.woff2',
  variable: '--font-jetbrains-mono',
  weight: '100 900',
});
const SanFrancisco = localFont({
  src: './fonts/SanFrancisco/SFUIText-Regular.woff',
  variable: '--font-sanfrancisco',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'CV Кучеренко Алексей',
  description: 'Резюме FrontEnd разработчика',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SanFrancisco.variable} ${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
