import React from 'react';
import NewsCard from './NewsCard';

export const Blog = () => {
  return (
    <>
      <div className="bg-[url('/images/parallax-3.jpeg')] filter  min-h-screen bg-top bg-fixed bg-cover bg-no-repeat"></div>
      <div className="px-6 pb-24 text-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-10 mt-16">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </>
  );
};
