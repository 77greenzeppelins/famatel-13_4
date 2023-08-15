'use client';
import React, { ReactElement, useRef } from 'react';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { useInView } from 'framer-motion';

/**TS**/
interface Props {
  //   children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  children: ReactElement | ReactElement[];
  outherContainerStyle?: string;
  innerContainerStyle?: string;
  measuredElementStyle?: string;
  topFactor?: number;
  bottomFactor?: number;
  //__irrelevant if InViewCSSAnimatedContent is used...
  animationDelay?: number;
  animationDuration?: number;
}

/**-------------------------------------------------**/
const InViewContainer: React.FC<Props> = ({
  children,
  outherContainerStyle,
  innerContainerStyle,
  measuredElementStyle,
  topFactor = 0.9,
  bottomFactor = 0.9,
  animationDelay = 0,
  animationDuration = 0.4,
}) => {
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  const isInView = useInView(elementInView, {
    margin: `-${bounds.height * topFactor}px 0px -${
      bounds.height * bottomFactor
    }px 0px`,
  });

  /**JSX**/
  return (
    <div
      data-layout="InViewContainer_OutherWrapper"
      ref={elementInView}
      className={outherContainerStyle ? outherContainerStyle : 'w-full h-full'}
    >
      <div
        data-layout="InViewContainer_InnerWrapper"
        className={innerContainerStyle ? innerContainerStyle : 'w-full h-full'}
      >
        <div
          ref={ref}
          data-layout="InViewContainer_MeasuredDiv"
          className={
            measuredElementStyle ? measuredElementStyle : 'w-full h-full'
          }
        >
          {Array.isArray(children)
            ? children.map((child, i) =>
                React.cloneElement(child, {
                  key: i,
                  componentIsInView: isInView,
                  animationDelay: animationDelay,
                  animationDuration: animationDuration,
                })
              )
            : React.cloneElement(children, {
                componentIsInView: isInView,
                animationDelay: animationDelay,
                animationDuration: animationDuration,
              })}
        </div>
      </div>
    </div>
  );
};

export default InViewContainer;

/*
<InViewContainer
      animationDelay={2}
      outherContainerStyle="w-full"
      measuredElementStyle="relative "
      // topFactor={0.6}
      topFactor={0.3}
      bottomFactor={0.3}
    >
      <InViewAnimatedContent yFactor="" xFactor="" scaleFactor={0.95}>

      </InViewAnimatedContent>
</InViewContainer>
*/
