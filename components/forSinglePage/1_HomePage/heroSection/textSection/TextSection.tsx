import React from 'react';
import HeroText from './content/HeroText';
import BasicHeader from '@/components/forMultiPage/headers/basicHeader.tsx/BasicHeader';
import { styles } from '@/styles';
import BasicLink from '@/components/basic/links/linksWithIcon/basicLink/BasicLink';

function TextSection() {
  /**JSX**/
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full xs:w-[70%] xl:w-full "
    >
      <div className="flex flex-col gap-y-6">
        <BasicHeader
          text="Bezpieczne rozwiązania"
          textStyle={`${styles.basicHeaderText} `}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <HeroText />
        <BasicLink />
      </div>
    </div>
  );
}

export default TextSection;
