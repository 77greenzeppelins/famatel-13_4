'use client';
import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';
/**Basic Data**/
import { styles } from '@/styles';

const HeroSection = () => {
  /**Data De...**/
  const {
    mainHeroSection: {
      containerAsFlex,
      containerAsGrid,
      graphicAsFlex,
      graphicAsGrid,
      textAsFlex,
      textAsGrid,
    },
  } = styles;
  /**JSX**/
  return (
    <div
      data-component="HeroSection"
      className={`relative w-full min-h-screen h-full ${containerAsFlex} ${containerAsGrid}  ${styles.heroSectionOffset}`}
    >
      <div className={`${graphicAsFlex} ${graphicAsGrid} -z-1 `}>
        <GraphicSection />
      </div>
      <div className={`${textAsFlex} ${textAsGrid} w-full z-1`}>
        <div className="w-full wrapper-1-l">
          <TextSection />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HeroSection;
