import React from 'react';
/**Components**/
import FadingFrame from '@/components/forMultiPage/lines/fadingLine/FadingFrame';
/**Basic Data*/
import styles from '@/styles';

const HeroSection = () => {
  /**JSX**/
  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${styles.heroSectionOffset}`}
    >
      <div className="relative fc flex-col w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark ">
        <FadingFrame />
      </div>
    </div>
  );
};

export default HeroSection;
