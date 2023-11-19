import React from 'react';
interface TitleSectionPrpos {
    title: string;
}
export const TitleSection = ({title}:TitleSectionPrpos) => {
  return (
    <>
      <h2 className="font-semibold text-4xl mt-8 mb-24">
        {title}
      </h2>
    </>
  );
};

export default TitleSection;
