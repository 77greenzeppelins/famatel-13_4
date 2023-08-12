'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**FramerMotion Staff*/
import { motion, AnimatePresence } from 'framer-motion';
/**Components**/
import Footer from '@/components/layout/rootLayout/footer/Footer';

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  // exit: { opacity: 0, y: 20 },
};

// function handleExitComplete() {
//   if (typeof window !== 'undefined') {
//     window.scrollTo({ top: 0 });
//   }
// }

const MainWrapper = ({ children }: Props) => {
  const pathname = usePathname();

  /*
  ___1. 
  */
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      // console.log('timeoutRef.current should be true');
    }
    timeoutRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
      // console.log('timeoutRef.current / setTimeout()');
    }, 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        // console.log('timeoutRef.current / clearTimeout()');
      }
    };
  }, [pathname]);

  /**JSX**/
  return (
    // <AnimatePresence
    //   mode="wait"
    //   initial={false}
    //   onExitComplete={handleExitComplete}
    // >
    <motion.div
      key={pathname}
      data-component={`MainWrapper-${pathname}`}
      initial="hidden"
      animate="enter"
      // exit="exit"
      variants={variants}
      // transition={{ duration: 0, delay: 0 }}
      transition={{ type: 'linear', duration: 0.4, delay: 0.2 }}
      className="flex flex-col w-full gap-y-20"
    >
      <main>{children}</main>
      <Footer />
    </motion.div>
    // </AnimatePresence>
  );
};

export default MainWrapper;
