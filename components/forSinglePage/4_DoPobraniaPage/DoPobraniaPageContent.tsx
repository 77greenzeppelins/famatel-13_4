import React from 'react';
import HeroSection from './heroSection/HeroSection';
import PageSections from './pageSections/PageSections';

const NowosciPageContent = () => {
  /**JSX**/
  return (
    <div data-component="DoPobraniaPageContent" className="w-full">
      <HeroSection />
      <PageSections />
    </div>
  );
};

export default NowosciPageContent;
