import React from 'react';
/**Components**/
import FadingLine from './FadingLine';

/*
(!) Parent should be "relative"
*/
const frameData = {
  horizontal: [
    { c: 'w-[50%] h-[1px]', g: 'toLeft', fromColor: 'from-grey' },
    { c: 'w-[50%] h-[1px]', g: 'toRight', fromColor: 'from-grey' },
  ],
  vertical: [
    { c: 'w-[1px]] h-[50%]', g: 'toTop', fromColor: 'from-grey' },
    { c: 'w-[1px]] h-[50%]', g: 'toBottom', fromColor: 'from-grey' },
  ],
};
/**--------------------------**/
const FadingFrame = () => {
  /**JSX{*/
  return (
    <div className="absolute inset-0 w-full h-full ">
      <div className="relative w-full h-full">
        <div className="absolute flex inset-x-0 top-0 h-[1px]">
          {frameData.horizontal.map(({ c, g, fromColor }, i) => (
            <FadingLine
              key={i}
              containerStyle={c}
              gradientTo={g}
              fromColor={fromColor}
            />
          ))}
        </div>
        <div className="absolute flex inset-x-0 bottom-0 h-[1px]">
          {frameData.horizontal.map(({ c, g, fromColor }, i) => (
            <FadingLine
              key={i}
              containerStyle={c}
              gradientTo={g}
              fromColor={fromColor}
            />
          ))}
        </div>
        <div className="absolute flex flex-col inset-y-0 left-0 w-[1px]">
          {frameData.vertical.map(({ c, g, fromColor }, i) => (
            <FadingLine
              key={i}
              containerStyle={c}
              gradientTo={g}
              fromColor={fromColor}
            />
          ))}
        </div>
        <div className="absolute flex flex-col inset-y-0 right-0 w-[1px]">
          {frameData.vertical.map(({ c, g, fromColor }, i) => (
            <FadingLine
              key={i}
              containerStyle={c}
              gradientTo={g}
              fromColor={fromColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FadingFrame;
