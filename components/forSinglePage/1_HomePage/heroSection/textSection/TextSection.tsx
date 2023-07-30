import React from 'react';
import HeroText from './content/HeroText';

function TextSection() {
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full xs:w-[70%] xl:w-full "
      //___inner-px-md-lg pt-[62px]
    >
      <div
        // key={router.asPath}
        className="overflow-hidden "
        //___remember(!) to orchestrate parent-ancestor animations manes  "from / to / exit" should be in  parent-ancestor variants; ancestor doesn't need to be a child...
        // variants={textSectionContainerVariants}
        // initial="from"
        // animate="to"
        // exit="exit"
      >
        <HeroText />
      </div>
    </div>
  );
}

export default TextSection;
