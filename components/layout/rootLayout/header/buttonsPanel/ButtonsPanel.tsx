import React, { useEffect, useState } from 'react';
/**Components**/
import NavPanel from './navPanel/NavPanel';
import DropDownModule from './dropDownModule/DropDownModule';
import useWindowSize from '@/lib/hooks/useWindowSize';

const ButtonsPanel = () => {
  /**State for Mobile Menu*/
  const [mobileMenuState, setMobileMenuState] = useState(false);
  /*
  ___1. we have to change state to false whenever screen width change over 1023 ==> it switch off opened MobileMenu;
  ___2. without this protection ==> case: mobile menu is open as state if true ==> uses changes screen width over 1023 and after a while returns to small screen ==> after returning MobileMenu is still open as state remines true
  */
  const { width } = useWindowSize();
  const condition = width >= 1024;
  useEffect(() => {
    setMobileMenuState(false);
  }, [condition]);

  /**JSX**/
  return (
    <div className="flex items-center justify-between w-full h-full">
      <DropDownModule mobileMenuState={mobileMenuState} />
      <NavPanel
        mobileMenuState={mobileMenuState}
        mobileMenuSetter={setMobileMenuState}
      />
    </div>
  );
};

export default ButtonsPanel;
