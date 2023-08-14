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
  // const pathname = usePathname();
  // const condition = pathname === '/';
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
      className={`flex flex-col-reverse md:grid w-full min-h-screen h-full bg-yellow-600 ${styles.heroSectionOffset}`}
    >
      <div className="w-full pl-8 min-h-[50vh] md:col-span-full md:row-span-full md:justify-self-end md:self-end xl:self-center -z-1  md:max-w-[600px] lg:max-w-[850px] xl:max-w-[780px] xxxl:max-w-[900px] bg-black">
        <GraphicSection />
      </div>
      <div className="flex justify-end items-end min-h-[50vh] md:min-h-[50vh]  w-full md:col-span-full md:row-span-full z-1  bg-slate-700 ">
        <div className="w-full wrapper-2-l bg-slate-900">
          <TextSection />
        </div>
      </div>
      {/* <ScrollPrompt /> */}
    </div>
    // </div>
  );
};

export default HeroSection;
