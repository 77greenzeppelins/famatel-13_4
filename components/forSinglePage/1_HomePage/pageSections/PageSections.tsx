import React from 'react';
/**BasicData**/
import { HomePageText } from '@/data/textData';

const PageSections = () => {
  return (
    <div className="flex flex-col gap-y-20 wrapper-1">
      {HomePageText.sectionsText.map((text, i) => (
        <p
          key={i}
          className="text-left text-medium text-light md:w-[70%] m-auto"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default PageSections;
