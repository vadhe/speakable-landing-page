import React from 'react';
interface TitleSectionPrpos {
    title: string;
    subTitle: string;
}
export const TitleSection = ({subTitle,title}:TitleSectionPrpos) => {
  return (
    <>
      <h2 className="font-semibold text-lg text-sky-500 dark:text-white">
        {title}
      </h2>
      <h3 className="font-semibold text-4xl mt-8 mb-24">
        {subTitle}
      </h3>
    </>
  );
};

export default TitleSection;
