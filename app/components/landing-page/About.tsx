import React from 'react';
import TitleSection from './TitleSection';

export const About = () => {
  return (
    <div className="lg:h-screen py-6 px-6 lg:flex items-center gap-12 bg-sky-100 bg-opacity-20 border border-sky-500 dark:border-sky-800">
      <img
        src="https://landing.zytheme.com/ladidapp/assets/images/cover/about.png"
        alt=""
      />
      <div className="">
        <TitleSection
          title="About Us"
          subTitle="Best Financing App In The World"
        />
        <p className="lg:w-10/12">
          Best financing app ever in the world. Easy to use and very user
          friendly for mobile banking. You can control your card easily and send
          money some one just one click.
        </p>
        {/* <button className="btn btn-outline  text-white hover:bg-blue-500 dark:disabled:bg-blue-200 dark:disabled:text-gray-500 dark:hover:bg-blue-900 dark:bg-blue-800 mt-6">
          Read More
        </button> */}
        <div className="w-full flex justify-center md:block">
          <button className="btn btn-outline border border-sky-500 hover:bg-transparent hover:border-sky-500 hover:text-black dark:border-sky-800 mt-6 mx-auto dark:text-white">
           Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
