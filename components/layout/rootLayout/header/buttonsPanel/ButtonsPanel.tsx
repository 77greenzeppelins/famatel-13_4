import React from 'react';
/**Components**/
import NavPanel from './navPanel/NavPanel';
import SpecialButtons from './specialButtons/SpecialButtons';

const ButtonsPanel = () => {
  /**JSX**/
  return (
    <div className="flex items-center justify-between w-full h-full">
      <SpecialButtons />
      <NavPanel />
    </div>
  );
};

export default ButtonsPanel;
