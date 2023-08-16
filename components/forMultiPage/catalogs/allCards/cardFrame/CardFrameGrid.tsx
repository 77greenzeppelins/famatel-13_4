import React, { ReactNode } from 'react';
/**Tailwind Styles*/
import { styles } from '@/styles';

/**--------------------------------------------------------------------------**/
const CardFrameGrid: React.FunctionComponent<{
  isActive?: boolean;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}> = ({ isActive, innerContainerStyle }) => {
  /**Data Destr...**/
  const { cardFrameGridStyle } = styles;

  /**JSX**/
  return (
    /*
    ___1. should have a parent with className='... group'
    */
    <div className="relative grid w-full h-full">
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={`${cardFrameGridStyle.outerContainerStyle} ${
          isActive ? 'bg-[#000010] blur-[6px] ' : 'bg-[#010010] blur-[4px] '
        }`}
      />
      <div
        className={
          innerContainerStyle
            ? innerContainerStyle
            : cardFrameGridStyle.innerContainerStyle
        }
      />
    </div>
  );
};

export default CardFrameGrid;
