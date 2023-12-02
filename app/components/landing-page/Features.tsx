'use client';
import React from 'react';
import Card from './Card';
import BasicClass from '../../../public/images/basic-class.png';
import SpeakingClass from '../../../public/images/speaking-class.png';
import WritingClass from '../../../public/images/writing-class.png';
import ReadingClass from '../../../public/images/reading-class.png';
import EnglishCompetition from '../../../public/images/english-competition.png';
import GameNight from '../../../public/images/game-night.png';
import { BackgroundBlur } from './BackgroundBlur';
import { motion } from 'framer-motion';
const LISTCARDS = [
  {
    title: 'Basic Class',
    description:
      'A class for students who are new to English or who have a very low level of proficiency in English. ',
    img: BasicClass,
    bg: 'bg-pink-100',
  },
  {
    title: 'Speaking Class     ',
    description:
      'A class that focuses on helping students build their fluency, accuracy, and confidence in English.',
    img: SpeakingClass,
    bg: 'bg-green-100',
  },
  {
    title: 'Writing Class    ',
    description:
      'A class that focuses on encouraging you to increase your creativity and gain new vocabulary in English.',
    img: WritingClass,
    bg: 'bg-sky-100',
  },
  {
    title: 'Reading Class',
    description:
      'A class that focuses on teaching students how to read English texts effectively.',
    img: ReadingClass,
    bg: 'bg-pink-100',
  },
  {
    title: 'English Competition    ',
    description:
      'An event in which participants compete in various English such as open mic night and art showcase.',
    img: EnglishCompetition,
    bg: 'bg-green-100',
  },
  {
    title: 'Game Night    ',
    description: 'An activity to gather people to play games together.',
    img: GameNight,
    bg: 'bg-sky-100',
  },
];
export const Features = () => {
  return (
    <div className='border-t-4 border-t-red-600'>
      <div
        className="px-6 pb-12 text-center relative dark:bg-gray-900 pt-6"
        id="features"
      >
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
          OUR BEST PROGRAM
        </motion.h2>
        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-24 md:gap-x-10 md:gap-y-44 mt-16">
          {LISTCARDS.slice(0,4).map((list, index) => {
            return (
              <motion.div
              key={`${list.title}-${index}`}
                initial={{ opacity: 0, x: `${index === 0 ? -20 : index === 1 ? -40: index === 2 ? -70 : -80}vw` }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: index === 0 ? 1.5 : index === 1 ? 2: index === 2 ? 2 : 2.5, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
              >
                <Card
                
                  bg={list.bg}
                  description={list.description}
                  img={list.img}
                  title={list.title}
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="lg:grid flex flex-col relative grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-24 md:gap-x-10 md:gap-y-44 mt-16">
          {LISTCARDS.slice(4,7).map((list, index) => {
            return (
              <motion.div
              key={`${list.title}-${index}`}
                initial={{ opacity: 0, x: `${index === 0 ? -40 :  40}vw` }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 3.5, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
                className={`col-start-${index+2} col-end-${index+3}`}
              >
                <Card
                 
                  bg={list.bg}
                  description={list.description}
                  img={list.img}
                  title={list.title}
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Features;
