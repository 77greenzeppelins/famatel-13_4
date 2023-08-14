import React from 'react';
/**BasicData**/
import { HomePageText } from '@/data/textData';

const HeroHeader = () => {
  /**JSX**/
  return (
    <h1 className="flex flex-col">
      {HomePageText.hero.header.split(' ').map(word => (
        <span key={word} className="text-hero-h1 text-light">
          {word}
        </span>
      ))}
    </h1>
  );
};

export default HeroHeader;
