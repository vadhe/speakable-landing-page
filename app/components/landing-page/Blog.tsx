import React from 'react';
import TitleSection from './TitleSection';
import NewsCard from './NewsCard';

export const Blog = () => {
  return (
    <div className="px-6 pb-24 text-center mt-6">
      <TitleSection subTitle="Our Latest News" title="Our News" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-10 mt-16">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
