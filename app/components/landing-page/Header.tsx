'use client';
import React, { useEffect, useState } from 'react';
import Dictionary from './Dictionary';
import {
  useAnimationControls,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export const Header = () => {
  const controlsHeader = useAnimationControls();
  const controlsDescription = useAnimationControls();
  const controlsDictionary = useAnimationControls();
  const { scrollY } = useScroll();
  
  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   console.log('Page scroll: ', latest);
  //   if (latest >= 927) {
  //     controlsHeader.set({
  //       opacity: 0,
  //       x: '-100vw',
  //     });
  //     controlsDescription.set({
  //       opacity: 0,
  //       x: '100vw',
  //     });
  //   } else if (latest <= 146) {
  //     controlsHeader.start({
  //       ...animateX,
  //     });
  //     controlsDescription.start({
  //       ...animateX,
  //     });
  //   }
  // });

  const animateX = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeOut' },
  };

  useEffect(() => {
    controlsHeader.start({
      ...animateX,
    });
  }, [controlsHeader]);

  useEffect(() => {
    controlsDescription.start({
      ...animateX,
    });
  }, [controlsDescription]);

  useEffect(() => {
    controlsDictionary.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
  }, [controlsDictionary]);

  return (
    <div className="h-screen w-full relative">
      <div className="absolute  rounded-sm top-0 bottom-0 right-0 left-0  filter blur-xl"></div>
      <div className="absolute  animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl left-0 bottom-0 rounded-full dark:bg-green-500 bg-green-200 opacity-20"></div>
      <div className="absolute animation-delay-2000 animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl right-0 -bottom-8 rounded-full dark:bg-pink-500 bg-pink-200 opacity-20"></div>
      <div className="absolute animation-delay-4000 animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl right-96 bottom-0 rounded-full dark:bg-sky-500 bg-sky-200 opacity-20"></div>
      <div className="w-1/2 text-center flex flex-col items-center justify-center h-full mx-auto gap-5">
        <motion.h1
          animate={controlsHeader}
          className="text-7xl font-bold"
          initial={{ opacity: 0, x: '-100vw' }}
        >
          WELCOME TO SPEAKABLE YOUTH
        </motion.h1>
        <motion.p
          className="text-lg"
          whileHover={{ scale: 1.2 }}
          animate={controlsDescription}
          initial={{ opacity: 0, x: '100vw' }}
        >
          Speakable Youth is an English community based in Indonesia.
          <br />
          This server is a place for people from all over the world to come
          together to learn, practice, and implement the English language.
        </motion.p>
        <motion.div
          className="w-full"
          animate={controlsDictionary}
          initial={{ opacity: 0, y: '100vw' }}
        >
          <Dictionary />
        </motion.div>
      </div>
    </div>
  );
};
