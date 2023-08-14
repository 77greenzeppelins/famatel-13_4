'use client';
import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';
/**Basic Data**/
import { styles } from '@/styles';
/**Hooks Staff**/
// import { usePathname } from 'next/navigation';
/**...**/
// import { motion } from 'framer-motion';

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
    // <div
    //   // initial={{ opacity: 0 }}
    //   // animate={{ opacity: condition ? 1 : 0 }}
    //   // transition={{ type: 'linear', duration: 0.4, delay: 0.2 }}
    //   data-component="HeroSection"
    //   className={`w-full min-h-screen bg-slate-900`}
    //   //___${styles.heroSectionOffset}
    // >
    <div
      data-component="Section_1__container"
      // className={`relative flex flex-col-reverse items-end justify-center h-full xl:flex-row-reverse xl:items-center`}
      className={`w-full min-h-screen h-full ${containerAsFlex} ${containerAsGrid}  ${styles.heroSectionOffset}`}
    >
      <div className={`${graphicAsFlex} ${graphicAsGrid} -z-1 `}>
        <GraphicSection />
      </div>
      <div className={`${textAsFlex} ${textAsGrid} w-full z-1`}>
        <div className="w-full wrapper-1-l">
          <TextSection />
        </div>
      </div>
      {/* <ScrollPrompt /> */}
    </div>
    // </div>
  );
};

export default HeroSection;
