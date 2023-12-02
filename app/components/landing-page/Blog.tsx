'use client';
import React from 'react';
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const Blog = () => {
  const route = useRouter()
  return (
    <div
      id="articles"
      className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen border-t-4 border-t-red-600"
    >
      <motion.h2
        initial={{ opacity: 0, x: '70vw' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: 'easeOut' },
        }}
        viewport={{ once: true }}
        className="font-semibold text-lg lg:text-4xl my-12 mb-24"
      >
        ARTICLES
      </motion.h2>
      <div className="px-6 pb-24 text-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-10 mt-16">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <Button onClick={()=> route.push('/articles')}> SHOW ALL ARTICLES</Button>
    </div>
  );
};
