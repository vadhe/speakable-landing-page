import About from './components/landing-page/About';
import { Blog } from './components/landing-page/Blog';
import { Dictionary } from './components/landing-page/Dictionary';
import Features from './components/landing-page/Features';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SpeakAble Youth',
  description:
    ' Join our Community English Discord Server for language enthusiasts and learners. Practice your English, engage in discussions, and connect with like-minded individuals from around the world.',
  keywords: [
    'Community',
    'English',
    'Discord',
    ' Server',
    'Language',
    'Learning',
    'Discussion',
  ],
  category: 'Website',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [
    {
      name: 'SpeakAble Youth',
    },
  ],
};

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      {/* <Dictionary /> */}
      {/* <Features /> */}
      {/* <About /> */}
      {/* <Blog /> */}
    </div>
  );
}
