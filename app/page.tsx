import About from './components/landing-page/About';
import { Blog } from './components/landing-page/Blog';
import { Dictionary } from './components/landing-page/Dictionary';
import Features from './components/landing-page/Features';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <Dictionary />
      <Features />
      <About/>
      <Blog/>
    </>
  );
}
