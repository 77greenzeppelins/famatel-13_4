'use client';
import { usePathname } from 'next/navigation';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const MainWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  /**JSX**/
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        key={pathname}
        data-component={`MainWrapper-${pathname}`}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        // className="flex flex-col items-center justify-center min-h-screen "
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default MainWrapper;
