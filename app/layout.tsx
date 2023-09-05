'use client';

import { I18nextProvider } from 'react-i18next';
import Footer from './components/landing-page/Footer';
// import { Navbar } from './components/landing-page/Navbar';
import './global.css';
import useDarModeStore from './store/useDarkModeStore';
import i18n from './locales/i18n';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head'
import { Poppins } from '@next/font/google';

const Navbar = dynamic(() => import('./components/landing-page/Navbar') as Promise<any>, {
  ssr: false,
}) 

const poppins = Poppins({
  subsets: ['latin'] ,
  weight: ['400', '600'],
  variable: '--font-poppins'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarModeStore();
  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className={`${poppins.variable} font-poppins bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          {children}
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}
