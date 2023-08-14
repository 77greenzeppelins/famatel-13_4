import React from 'react';
import HeroText from './content/HeroText';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { styles } from '@/styles';
import BasicLink from '@/components/basic/links/basicLink/BasicLink';

function TextSection() {
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full xs:w-[70%] xl:w-full "
      //___inner-px-md-lg pt-[62px]
    >
      <div
        // key={router.asPath}
        className="flex flex-col gap-y-6"
        //___remember(!) to orchestrate parent-ancestor animations manes  "from / to / exit" should be in  parent-ancestor variants; ancestor doesn't need to be a child...
        // variants={textSectionContainerVariants}
        // initial="from"
        // animate="to"
        // exit="exit"
      >
        <BasicHeader
          text="Bezpieczne rozwiązania"
          textStyle={`${styles.basicHeaderText} pl-2`}
        />
        <HeroText />

        <BasicLink />
      </div>
    </div>
  );
}

export default TextSection;
