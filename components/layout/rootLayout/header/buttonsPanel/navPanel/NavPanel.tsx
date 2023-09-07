/**Components**/
import HeaderLink from '@/components/basic/links/headerLink/HeaderLink';
/**BasicData**/
import { mainPagesData } from '@/data/basicData';
import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';

/**TS**/
interface Props {
  mobileMenuState: boolean;
  mobileMenuSetter: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavPanel = ({ mobileMenuState, mobileMenuSetter }: Props) => {
  /**JSX**/
  return (
    <nav className="relative">
      <MobileMenu
        mobileMenuState={mobileMenuState}
        mobileMenuSetter={mobileMenuSetter}
      />

      <ul className="hidden h-full lg:flex">
        {mainPagesData.map(({ arrayIndex, label, url }) => {
          return <HeaderLink key={arrayIndex} url={url} label={label} />;
        })}
      </ul>
    </nav>
  );
};

export default NavPanel;
