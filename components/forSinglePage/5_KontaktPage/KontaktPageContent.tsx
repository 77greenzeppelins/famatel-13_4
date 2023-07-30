import React from 'react';
import HeroSection from './heroSection/HeroSection';
import PageSections from './pageSections/PageSections';

const KontaktPageContent = () => {
  /**JSX**/
  return (
    <div data-component="DoPobraniaPageContent" className="w-full">
      <HeroSection />
      <PageSections />
    </div>
  );
};

export default KontaktPageContent;
