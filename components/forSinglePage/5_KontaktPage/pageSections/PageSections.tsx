import React from 'react';
import Section1 from './kontakty/section1/Section1';
import { styles } from '@/styles';

const PageSections = () => {
  const {
    kontaktPageStyles: { label, iconTrans },
  } = styles;
  return (
    <div className="flex-col justify-between w-full">
      <Section1 labelStyle={label} iconStyle={iconTrans} />
    </div>
  );
};

export default PageSections;
