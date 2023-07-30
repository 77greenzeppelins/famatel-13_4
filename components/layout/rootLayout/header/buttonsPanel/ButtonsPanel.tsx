import React from 'react';
/**Components**/
import NavPanel from './navPanel/NavPanel';

const ButtonsPanel = () => {
  /**JSX**/
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div>BUTTONS</div>
      <NavPanel />
    </div>
  );
};

export default ButtonsPanel;
