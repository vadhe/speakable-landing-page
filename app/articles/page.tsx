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
    <>
    <p className='h-screen text-center'>I'm sorry this is still under develompment</p>
    </>
  );
}
