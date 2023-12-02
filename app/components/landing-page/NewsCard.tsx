'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
export const NewsCard = () => {
  const route = useRouter()
  return (
    <div className="relative group lg:w-80 h-60 overflow-hidden rounded-lg">
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        className="w-full h-full group-hover:scale-[1.3] rounded-lg"
      />
      <div className="absolute top-0 group-hover w-full h-full bg-gray-900 bg-opacity-70"></div>
      <div className="absolute top-0  h-full flex flex-col pb-4 lg:pb-2 gap-5 lg:gap-2 items-start justify-end group-hover text-white p-2">
        <h2 className="truncate text-lg font-bold">Boost your conversion rate</h2>
        <p className="line-clamp-2 text-left text-sm">
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
          occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
          occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
          dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
          cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
          quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
          voluptate sunt elit mollit officia ad enim sit consectetur enim.
        </p>
        <Button onClick={()=> route.push(`/articles/${Math.random().toFixed()}`)} className='w-32 lg:w-fit'>Read</Button>
      </div>
    </div>
  );
};

export default NewsCard;
