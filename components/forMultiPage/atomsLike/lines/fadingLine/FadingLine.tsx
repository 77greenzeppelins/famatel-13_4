import React from 'react';
/**TS**/
type Props = {
  containerStyle?: string;
  gradientTo?: string;
  fromColor?: string;
};
/**-------------------------**/
const FadingLine: React.FC<Props> = ({
  containerStyle,
  gradientTo,
  fromColor,
}) => {
  /**Switch statement*/
  const gradientDirection = () => {
    switch (gradientTo) {
      case 'toRight':
        return 'bg-gradient-to-r';
      case 'toLeft':
        return 'bg-gradient-to-l';
      case 'toTop':
        return 'bg-gradient-to-t';
      case 'toBottom':
        return 'bg-gradient-to-b';
      default:
        return 'bg-gradient-to-r';
    }
  };
  /**JSX*/
  return (
    <div
      className={`${
        containerStyle ? containerStyle : 'w-full h-[1px]'
      } ${gradientDirection()} ${
        fromColor ? fromColor : 'from-light'
      }  via-greyShade2 to-transparent `}
    />
  );
};

export default FadingLine;
