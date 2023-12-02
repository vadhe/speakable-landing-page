'use client';

import React, { useState } from 'react';
import { BackgroundBlur } from './BackgroundBlur';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateLogo } from './AnimateLogo';
import { InView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
export const About = () => {
  const [isTyping, setIsTyping] = useState(false);

  const textDesktop = `
    Speakable Youth is a safe place for speaking English with no judging
    English and increasing your skill in speaking English with Speakable
    Youth. We offer a variety of resources and activities to help you
    improve your English skills, including: Daily words, idioms of the
    week, movie nights, game nights, English classes, etc.
  `;
  const textMobile = `
    Speakable Youth is a safe place for speaking English 
    with no judging English and increasing
    your skill in speaking English with Speakable
    Youth. We offer a variety of resources and 
    activities to help you improve your English 
    skills, including: Daily words, idioms of the
    week, movie nights, game nights, English classes,
    etc.
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.04 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about">
      <div className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen border-t-4 border-t-red-600">
        <BackgroundBlur />
        <motion.h2
          initial={{ opacity: 0, x: '-70vw' }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          className="font-semibold text-lg lg:text-4xl my-12 mb-24"
        >
          ABOUT US
        </motion.h2>
        <div className="lg:grid grid-cols-2 justify-items-center items-center ">
          <div className="z-50 flex justify-center">
            <AnimateLogo />
          </div>
          <div className="flex flex-col gap-5 z-50 p-4 lg:p-0">
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView === true) {
                  setIsTyping(true);
                }
              }}
              root={null}
              rootMargin="0px"
              threshold={0.8}
              className="lg:w-3/4"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isTyping ? 'visible' : 'hidden'}
                className="lg:relative lg:text-left"
              >
                {window.innerWidth >= 1440 &&
                  textDesktop.split('').map((char, index) => (
                    <motion.span key={index} variants={charVariants}>
                      {char === ' ' && window.innerWidth >= 1440
                        ? '\u00A0'
                        : char}
                    </motion.span>
                  ))}
                {window.innerWidth < 1440 &&
                  textMobile.split('').map((char, index) => (
                    <motion.span key={index} variants={charVariants}>
                      {char === ' ' && window.innerWidth >= 1440
                        ? '\u00A0'
                        : char}
                    </motion.span>
                  ))}
              </motion.div>
            </InView>
            <a href="https://discord.gg/Yf33HQBgJz" target="_blank">
              <Button className="lg:w-1/4 lg:ml-4 w-1/2 mx-auto flex items-center gap-5 bg-blue-600 z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  className='fill-white dark:fill-black w-6 h-6'
                >
                  <path
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
                <span>Join Us</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
