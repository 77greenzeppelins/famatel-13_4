'use client';
import React from 'react';
/**FramerMotion Staff*/
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const PageTransitionWrapper = ({ children }: Props) => {
  /**JSX**/
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      {children}
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
