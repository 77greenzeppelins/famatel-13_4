'use client';
import { usePathname } from 'next/navigation';
/**Components**/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';
/**Styles Data**/
import { styles } from '@/styles';

/** */
usePathname;
export default function Header() {
  /*
  ___1. condition that allows to change "corporate style" into "my style" 
  */
  const pathname = usePathname();
  const styleCondition = pathname.split('/').length > 2; //___repeat in <HeaderLink> & <DropDownMenuButton> & <SearchEngineButton> & Footer | <TopSection> & <FooterLink>
  /**JSX**/
  return (
    <header
      data-component="Header__container"
      className={`sticky w-full h-full wrapper-1 top-0 z-[500] ${
        styleCondition
          ? 'bg-dark duration-300 ease-linear'
          : 'bg-grey duration-300 ease-linear'
      } ${styles.headerHeight} `}
    >
      <div
        className={`w-full h-full flex items-center justify-between ${
          styleCondition ? 'border-b border-greyShade2' : ''
        }`}
      >
        <div>
          <HeaderLogoLink styleCondition={styleCondition} />
        </div>
        <div>
          <ButtonsPanel />
        </div>
      </div>
    </header>
  );
}
