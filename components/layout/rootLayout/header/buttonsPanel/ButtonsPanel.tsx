import React from 'react';
/**Components**/
import NavPanel from './navPanel/NavPanel';
import DropDownModule from './dropDownModule/DropDownModule';

const ButtonsPanel = () => {
  /**JSX**/
  return (
    <div className="flex items-center justify-between w-full h-full">
      <DropDownModule />
      <NavPanel />
    </div>
  );
};

export default ButtonsPanel;
