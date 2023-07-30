'use client';
import React, { ReactElement, useRef, cloneElement } from 'react';
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
          data-layout="MeasuredElementContainer"
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
