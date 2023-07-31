'use client';
// import { useEffect } from 'react';
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
  exit: { opacity: 0, y: 20 },
};

const MainWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  /*
  ___1. chould scrollBar position to [0,0] but doesn't...
  */
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, [pathname]);

  /**JSX**/
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname}
        data-component={`MainWrapper-${pathname}`}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', duration: 0, delay: 0 }}
        // transition={{ type: 'linear', duration: 0.4, delay: 0.2 }}

        // className="flex flex-col items-center justify-center min-h-screen "
      >
        <main>{children}</main>
        {/* <Footer /> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainWrapper;
