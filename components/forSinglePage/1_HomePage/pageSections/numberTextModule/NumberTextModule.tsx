import React from 'react';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import SquareWithNumber from './content/SquareWithNumber';
import AnimatedText from './content/AnimatedText';

/**---------------------------------**/
const NumberTextModule: React.FC<{
  squareNumber: string;
  squareLabel: string;
  animatedText: string;
  textStyle?: string;
}> = ({ squareNumber, squareLabel, animatedText, textStyle }) => {
  /**JSX**/
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="relative flex flex-col px-[2%] xxs:px-[6%] md:px-[60px] lg:px-[15%]"
      measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full "
      topFactor={0.5}
      bottomFactor={0.5}
    >
      <SquareWithNumber pseudoNumber={squareNumber} label={squareLabel} />
      <AnimatedText text={animatedText} />
    </InViewContainer>
  );
};

export default NumberTextModule;
