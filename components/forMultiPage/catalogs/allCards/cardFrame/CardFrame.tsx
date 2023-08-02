import React, { ReactNode } from 'react';
/**Basic Styles*/
import { styles } from '@/styles';

const defaultContainerStyle = `absolute inset-0 bg-[#111110] blur-[4px] hover:bg-black group-hover:blur-[10px] ${styles.basicAnimation}`;
const defaultInnerContainerStyle =
  'relative fc w-full h-full rounded-md pointer-events-none bg-dark';

/**--------------------------------------------------------------------------**/
const CardFrame: React.FunctionComponent<{
  children: ReactNode;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}> = ({ children, mainContainerStyle, innerContainerStyle }) => {
  /**JSX**/
  return (
    /*
    ___1. should have a parent with className='... group'
    */
    <div className="relative w-full h-full">
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={
          mainContainerStyle ? mainContainerStyle : defaultContainerStyle
        }
      />
      <div
        className={
          innerContainerStyle ? innerContainerStyle : defaultInnerContainerStyle
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CardFrame;
