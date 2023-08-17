import { ReactNode } from 'react';
/**Tailwind Styles*/
import { styles } from '@/styles';
/**TS**/
interface Props {
  children: ReactNode;
  isActive?: boolean;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}

/**--------------------------------------------------------------------------**/
const CardFrameGrid = ({ children, isActive, innerContainerStyle }: Props) => {
  /**Data Destr...**/
  const { cardFrameGridStyle } = styles;

  /**JSX**/
  return (
    /*
    ___1. should have a parent with className='... group'
    */
    <div className="relative grid w-full h-full group/frame">
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={`${cardFrameGridStyle.outerContainerStyle}`}
      />
      <div
        className={
          innerContainerStyle
            ? innerContainerStyle
            : cardFrameGridStyle.innerContainerStyle
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CardFrameGrid;
