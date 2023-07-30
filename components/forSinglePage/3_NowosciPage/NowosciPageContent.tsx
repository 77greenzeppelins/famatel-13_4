import React from 'react';
import HeroSection from './heroSection/HeroSection';
import PageSections from './pageSections/PageSections';

const NowosciPageContent = () => {
  return (
    <div data-component="HomePageContent" className="w-full">
      <HeroSection />
      <PageSections />
    </div>
  );
};

export default NowosciPageContent;
