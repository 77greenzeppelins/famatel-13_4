import React from 'react';
/**Components**/
import Section1 from './section1/Section1';
import SectionDojazd from './section3/SectionDojazd';
/**Basic Data**/
import { styles } from '@/styles';
import SectionAdres from './section2/SectionAdres';

const PageSections = () => {
  const {
    kontaktPageStyles: { container, label, iconTrans },
  } = styles;
  return (
    <div className="flex flex-col justify-between w-full gap-y-20">
      <SectionAdres
        containerStyle={container}
        labelStyle={label}
        iconStyle={iconTrans}
      />
      <SectionDojazd
        containerStyle={container}
        labelStyle={label}
        iconStyle={iconTrans}
      />
    </div>
  );
};

export default PageSections;
