import { ReactNode } from 'react';
/**Tailwind Styles*/
import { styles } from '@/styles';
/**TS**/
interface Props {
  children: ReactNode;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}

/**--------------------------------------------------------------------------**/
const CardFrameGrid = ({
  children,
  mainContainerStyle,
  innerContainerStyle,
}: Props) => {
  /**Data Destr...**/
  const {
    cardFrameGridStyle: {
      innerContainerStyle: inner,
      outerContainerStyle: outher,
    },
  } = styles;

  /**JSX**/
  return (
    <div
      className={
        mainContainerStyle
          ? mainContainerStyle
          : 'relative grid w-full h-full group/frame'
      }
    >
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={`${outher}`}
      />
      <div className={innerContainerStyle ? innerContainerStyle : inner}>
        {children}
      </div>
    </div>
  );
};

export default CardFrameGrid;
