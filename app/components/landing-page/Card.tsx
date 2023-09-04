import React from 'react';
interface CardProps{
  description: string;
  title: string;
  img: string;
  bg: string;
}
export const Card = ({description,img,title, bg}:CardProps) => {
  return (
    <div className="relative max-w-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div
        style={{
          top: '-48px',
          left: '37%',
        }}
        className="w-24 h-24 shadow-xl flex justify-center items-center bg-white absolute border-white rounded-xl"
      >
        <img className='w-10 h-10' src={img} />
      </div>
      <div className={`max-w-sm ${bg} dark:bg-gray-400 text-center p-12 border  rounded-xl`}>
        <h2 className="text-xl font-semibold mb-2.5 mt-6">{title}</h2>
        <p className="text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
