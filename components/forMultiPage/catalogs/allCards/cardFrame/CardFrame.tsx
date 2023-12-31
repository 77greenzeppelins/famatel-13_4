import React, { ReactNode } from 'react';
/**Tailwind Styles*/
import { styles } from '@/styles';

/**--------------------------------------------------------------------------**/
const CardFrame: React.FunctionComponent<{
  children: ReactNode;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}> = ({ children, mainContainerStyle, innerContainerStyle }) => {
  /**Data Destr...**/
  const { cardFrameStyle } = styles;

  /**JSX**/
  return (
    /*
    ___1. should have a parent with className='... group'
    */
    <div className="relative w-full h-full">
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={
          mainContainerStyle
            ? mainContainerStyle
            : cardFrameStyle.outerContainerStyle
        }
      />
      <div
        className={
          innerContainerStyle
            ? innerContainerStyle
            : cardFrameStyle.innerContainerStyle
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CardFrame;
