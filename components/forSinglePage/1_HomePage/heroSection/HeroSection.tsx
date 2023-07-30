import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';
/**Basic Data**/
import { styles } from '@/styles';

const HeroSection = () => {
  /**JSX**/
  return (
    <div
      data-component="HeroSection"
      className={`w-full h-screen md:min-h-[800px] ${styles.heroSectionOffset}  `}
    >
      <div
        data-component="Section_1__container"
        className={`relative flex flex-col-reverse items-end justify-center h-full xl:flex-row-reverse xl:items-center`}
      >
        <div
          className="absolute right-0 bottom-0 flex items-start justify-end w-[98%] sm:w-[95%] md:w-[90%] lg:w-[84%] xl:w-[55%] xxl:w-[60%] xl:h-auto"
          //___xs:-mt-20 lg:-mt-[80px] xl:mt-0
        >
          <GraphicSection />
        </div>
        <div
          className="flex w-full h-full xl:items-center pt-[10vh] xl:pt-0 wrapper-1-l "
          //___pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:flex-col xl:justify-center xl:gap-y-4 xl:pt-30 xl:w-[45%] xxl:w-[40%] h-auto
        >
          <TextSection />
        </div>
        {/* <ScrollPrompt /> */}
      </div>
    </div>
  );
  // return (
  //   <div
  //     data-component="Section_1__container"
  //     className="relative flex flex-col-reverse items-end justify-center min-h-screen xl:flex-row-reverse xl:items-center"
  //   >
  //     <div className="relative flex items-start justify-end w-[98%] sm:w-[95%] md:w-[90%] lg:w-[84%] xl:w-[55%] xxl:w-[60%] xl:h-auto xs:-mt-20 lg:-mt-[80px] xl:mt-0">
  //       <GraphicSection />
  //     </div>
  //     <div className=" flex items-center w-full wrapper-1-l pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:flex-col xl:justify-center xl:gap-y-4 xl:pt-30 xl:w-[45%] xxl:w-[40%] h-auto">
  //       <TextSection />
  //     </div>
  //     {/* <ScrollPrompt /> */}
  //   </div>
  // );
};

export default HeroSection;
