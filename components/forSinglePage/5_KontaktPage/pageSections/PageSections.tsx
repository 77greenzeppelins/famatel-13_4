import React from 'react';
/**Components**/
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
/**Basic Data**/
import { styles } from '@/styles';

const PageSections = () => {
  const {
    kontaktPageStyles: { container, label, iconTrans },
  } = styles;
  return (
    <div className="flex flex-col justify-between w-full gap-y-20">
      <Section1
        containerStyle={container}
        labelStyle={label}
        iconStyle={iconTrans}
      />
      <Section2
        containerStyle={container}
        labelStyle={label}
        iconStyle={iconTrans}
      />
    </div>
  );
};

export default PageSections;
