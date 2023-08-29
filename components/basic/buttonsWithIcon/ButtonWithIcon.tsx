import { buttonsConfig } from '@/data/basicData';
import React, { useState } from 'react';

const ButtonWithIcon = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    //   setIsOverlay(prev => !prev);
    //   setContentType(headerSpecButtons.searchEngine);
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, buttonsConfig.isDisabledDuration); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };
  return (
    <button
      disabled={isDisabled}
      aria-label={'przycisk'}
      //   aria-expanded={condition ? 'true' : 'false'}
      className={`w-6 h-6 origin-center  fc focus:outline-none disable focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo`}
      //___${ conditionDisable ? 'pointer-events-none ' : 'pointer-events-auto'}
      //___focus-visible:ring-2 focus-visible:ring-blue-500
      //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
    >
      ButtonWithIcon
    </button>
  );
};

export default ButtonWithIcon;
