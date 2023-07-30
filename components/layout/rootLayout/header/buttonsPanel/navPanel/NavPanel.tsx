import React from 'react';
/**BasicData**/
import { mainPagesData } from '@/data/basicData';
import HeaderLink from '@/components/basic/links/headerLink/HeaderLink';

const NavPanel = () => {
  /**JSX**/
  return (
    <ul className="hidden h-full md:flex">
      {mainPagesData.map(({ arrayIndex, label, url }) => {
        return <HeaderLink key={arrayIndex} url={url} label={label} />;
      })}
    </ul>
  );
};

export default NavPanel;
