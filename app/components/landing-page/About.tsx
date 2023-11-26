'use client';

import React from 'react';
import { BackgroundBlur } from './BackgroundBlur';
import Image from 'next/image';
import AboutUs from '../../../public/images/about-us.png';
import { motion } from 'framer-motion';
import { AnimateLogo } from './AnimateLogo';
export const About = () => {
  return (
    <div>
      <div className="bg-[url('/images/parallax-2.jpeg')] filter  min-h-screen bg-center bg-fixed bg-cover bg-no-repeat"></div>
      <div className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen">
        <BackgroundBlur />
        <h2 className="font-semibold text-4xl">ABOUT US</h2>
        <div className='flex justify-center my-4 mx-auto'>
        <AnimateLogo />
        </div>
        <div className="w-1/2 mx-auto">
          <p>
            Speakable Youth is a safe place for speaking English with no judging
            English and increasing your skill in speaking English with Speakable
            Youth. We offer a variety of resources and activities to help you
            improve your English skills, including: Daily words, idioms of the
            week, movie nights, game nights, English classes, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
