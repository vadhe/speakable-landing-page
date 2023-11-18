import React from 'react';
import Dictionary from './Dictionary';

export const Header = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute  rounded-sm top-0 bottom-0 right-0 left-0  filter blur-xl"></div>
      <div className="absolute  animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl left-0 bottom-0 rounded-full dark:bg-green-500 bg-green-200 opacity-20"></div>
      <div className="absolute animation-delay-2000 animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl right-0 -bottom-8 rounded-full dark:bg-pink-500 bg-pink-200 opacity-20"></div>
      <div className="absolute animation-delay-4000 animate-blob h-[45rem] w-[45rem] top-0 mix-blend-multiply filter blur-xl right-96 bottom-0 rounded-full dark:bg-sky-500 bg-sky-200 opacity-20"></div>
      <div className="w-1/2 text-center flex flex-col items-center justify-center h-full mx-auto gap-5">
        <h1 className='text-7xl font-bold'>WELCOME TO SPEAKABLE YOUTH</h1>
        <p className='text-lg'>
          Speakable Youth is an English community based in Indonesia.
          <br/>
           This
          server is a place for people from all over the world to come together
          to learn, practice, and implement the English language.
        </p>
        <Dictionary/>
      </div>
    </div>
  );
};
