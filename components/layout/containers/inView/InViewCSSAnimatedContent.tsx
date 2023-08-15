'use client';
import React, { ReactNode } from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**TS**/
type Props = {
  children: ReactNode;
  componentIsInView?: boolean;
  inViewTrue: string;
  inViewFalse: string;
  containerStyle: string;
};

/**----------------------------------------------**/
const InViewCSSAnimatedContent: React.FC<Props> = ({
  children,
  componentIsInView,
  inViewTrue,
  inViewFalse,
  containerStyle,
}) => {
  /**JSX**/
  return (
    <div
      className={`  ${
        componentIsInView ? inViewTrue : inViewFalse
      } ${containerStyle}`}
    >
      {children}
    </div>
  );
};

export default InViewCSSAnimatedContent;
