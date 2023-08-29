import React from 'react';
// import HeroSection from './heroSection/HeroSection';
import PageSections from './pageSections/PageSections';
import HeroSection from './heroSection/HeroSection';

const KontaktPageContent = () => {
  /**JSX**/
  return (
    <div
      data-component="DoPobraniaPageContent"
      className="relative w-full pt-24"
    >
      {/* <HeroSection /> */}
      <PageSections />
    </div>
  );
};

export default KontaktPageContent;
