import React from 'react';
import Card from './Card';
import TitleSection from './TitleSection';
const LISTCARDS = [
  {
    title: 'App Development',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market',
    img: 'https://landing.zytheme.com/ladidapp/assets/images/icons/icon-code.svg',
    bg: 'bg-orange-100',
  },
  {
    title: 'App Development',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market',
    img: 'https://landing.zytheme.com/ladidapp/assets/images/icons/icon-code.svg',
    bg: 'bg-violet-100',
  },
  {
    title: 'App Development',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market',
    img: 'https://landing.zytheme.com/ladidapp/assets/images/icons/icon-code.svg',
    bg: 'bg-purple-100',
  },
  {
    title: 'App Development',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market',
    img: 'https://landing.zytheme.com/ladidapp/assets/images/icons/icon-code.svg',
    bg: 'bg-orange-100',
  },
  {
    title: 'App Development',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market',
    img: 'https://landing.zytheme.com/ladidapp/assets/images/icons/icon-code.svg',
    bg: 'bg-violet-100',
  },
];
export const Features = () => {
  return (
    <div className="px-6 pb-12 text-center bg-gray-400 bg-opacity-20 dark:bg-gray-900 pt-6">
      <TitleSection subTitle="Our Amazing Features" title="Our Future" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-24 md:gap-x-10 md:gap-y-44 mt-16">
        {LISTCARDS.map((list) => {
          return (
            <Card
              bg={list.bg}
              description={list.description}
              img={list.img}
              title={list.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Features;
