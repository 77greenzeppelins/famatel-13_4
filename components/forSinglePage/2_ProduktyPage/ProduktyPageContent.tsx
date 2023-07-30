import React from 'react';
import HeroSection from './heroSection/HeroSection';
import PageSections from './pageSections/PageSections';

const ProduktyPageContent = () => {
  return (
    <div data-component="HomePageContent" className="w-full">
      <HeroSection />
      <PageSections />
    </div>
  );
};

export default ProduktyPageContent;
