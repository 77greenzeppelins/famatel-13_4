import React from 'react';
/**Components**/
import NumberTextModule from './numberTextModule/NumberTextModule';
import ProductDescription from './productDescription/ProductDescription';
import WorldMapSection from './worldMap/WorldMapSection';
/**BasicData**/
import { HomePageText } from '@/data/textData';

const PageSections = () => {
  const {
    sectionsText: { s1, s2, s3, s4 },
  } = HomePageText;
  return (
    <div className="flex flex-col gap-y-28 ">
      <NumberTextModule
        squareNumber={s1.numb}
        squareLabel={s1.label}
        animatedText={s1.text}
      />
      <ProductDescription />
      <NumberTextModule
        squareNumber={s2.numb}
        squareLabel={s2.label}
        animatedText={s2.text}
      />
      <NumberTextModule
        squareNumber={s3.numb}
        squareLabel={s3.label}
        animatedText={s3.text}
      />
      <WorldMapSection />
      <NumberTextModule
        squareNumber={s4.numb}
        squareLabel={s4.label}
        animatedText={s4.text}
      />
    </div>
  );
};

export default PageSections;
