import React from 'react';
/**Basic Data**/
import { NowosciPageText } from '@/data/textData';

const HeroSection = () => {
  /**JSX**/
  return (
    <div className="min-h-screen fc">
      <p className="text-grey text-medium">{NowosciPageText.hero.header}</p>
    </div>
  );
};

export default HeroSection;
