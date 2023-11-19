import React from 'react';
import Card from './Card';
import TitleSection from './TitleSection';
import BasicClass  from "../../../public/images/basic-class.png"
import SpeakingClass  from "../../../public/images/speaking-class.png"
import WritingClass  from "../../../public/images/writing-class.png"
import ReadingClass  from "../../../public/images/reading-class.png"
import EnglishCompetition  from "../../../public/images/english-competition.png"
import GameNight  from "../../../public/images/game-night.png"
const LISTCARDS = [
  {
    title: 'Basic Class',
    description:
      'A class for students who are new to English or who have a very low level of proficiency in English. ',
    img: BasicClass,
    bg: 'bg-orange-100',
  },
  {
    title: 'Speaking Class     ',
    description:
      'A class that focuses on helping students build their fluency, accuracy, and confidence in English.',
    img: SpeakingClass,
    bg: 'bg-violet-100',
  },
  {
    title: 'Writing Class    ',
    description:
      'A class that focuses on encouraging you to increase your creativity and gain new vocabulary in English.',
    img: WritingClass,
    bg: 'bg-purple-100',
  },
  {
    title: 'Reading Class',
    description:
      'A class that focuses on teaching students how to read English texts effectively.',
    img: ReadingClass,
    bg: 'bg-orange-100',
  },
  {
    title: 'English Competition    ',
    description:
      'An event in which participants compete in various English such as open mic night and art showcase.',
    img: EnglishCompetition,
    bg: 'bg-violet-100',
  },
  {
    title: 'Game Night    ',
    description: 'An activity to gather people to play games together.',
    img: GameNight,
    bg: 'bg-violet-100',
  },
];
export const Features = () => {
  return (
    <div>
      <div className="bg-[url('/images/parallax-transformed.webp')] filter  min-h-screen bg-center bg-fixed bg-cover top-0 left-0 bg-no-repeat"></div>
      <div
        className="px-6 pb-12 text-center relative dark:bg-gray-900 pt-6"
        id="features"
      >
        <div className="bg-gradient-to-r filter blur-sm opacity-20 from-green-500 via-pink-500 to-sky-500 absolute bottom-0 left-0 top-0 right-0"></div>
        <TitleSection title="OUR BEST PROGRAM" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-24 md:gap-x-10 md:gap-y-44 mt-16">
          {LISTCARDS.map((list, index) => {
            return (
              <Card
                key={`${list.title}-${index}`}
                bg={list.bg}
                description={list.description}
                img={list.img}
                title={list.title}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Features;
