import React from 'react';
/**Components**/
import ButtonsPanel from './buttonsPanel/ButtonsPanel';
/**Styles Data**/
import styles from '@/styles';

export default function Header() {
  /**JSX**/
  return (
    <header
      data-component="Header__container"
      className={`sticky w-full top-0 z-[500] bg-grey ${styles.headerHeight} `}
    >
      <div className="flex items-center justify-between w-full h-full wrapper-1">
        <div>LOGO</div>
        <div>
          <ButtonsPanel />
        </div>
      </div>
    </header>
  );
}
