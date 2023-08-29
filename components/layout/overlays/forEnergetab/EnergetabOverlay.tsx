'use client';
import ArrowForLinkIcon from '@/components/SVG/icons/heroIcons/ArrowForLinkIcon';
/**Components*/
import EnergatabLogo from '@/components/SVG/other/energetab/EnergetabLogo';
import LinkAsContainer from '@/components/basic/links/linksWithIcon/basicLink/linkAsContainer/LinkAsContainer';
import { styles } from '@/styles';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const EnergetabOverlay = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [state, setState] = useState(false);
  const pathname = usePathname();
  /** */
  useEffect(() => {
    /*
    ___1.here we're setting the current property of the ref to the timer ID; this ID is returned value of setTimeout() method;
    ___2. why "window.scrollTo(0, 0)" ? seems to solve a problem that occures when page is refreshing ==> [1] in one scenario, if there are no 3D elements or fakeScrollableContainer all seems to work correctly; [2] on pages where 2D & 3D coexist and fakeScrollableContainer come into a scene we have sytuaction that page refresh changes position of 3D components but 2D staff sticks to scrollBar position ==> lack of coordination and bad UX;
    */
    timerRef.current = setTimeout(() => {
      setState(true);
      window.scrollTo(0, 0); //________________________?
    }, 4000);
    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    return () => setState(false);
  }, [pathname]);
  /**JSX* */
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div
        key={state.toString()}
        className="fixed top-[80px] right-0 left-0 wrapper-1 z-[501]  flex items-center justify-end pointer-events-none pt-4"
        // className="fixed  w-full p-4 overflow-x-hidden overflow-y-auto inset-0  max-h-full z-[501] bg-dark flex items-center wrapper-1"
        //___h-[calc(100%-10rem)] top-0 left-0 right-0
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: state ? 1 : 0,
          scale: state ? 1 : 0,
          transition: { delay: 0.1, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center justify-center w-[80%] max-w-[400px] h-full border border-corpo bg-dark pointer-events-auto p-4">
          <p> Spootkajmy się na </p>
          <p>ENERGETAB 2023</p>
          <div className="flex w-[120px] justify-between pt-6">
            <Link
              href={'/aktualnosci'}
              className={`flex items-center py-1 group w-fit overflow-hidden   ${styles.lazyAnimation}`}
            >
              <span className="w-4 h-full shrink-0 fc">
                <ArrowForLinkIcon
                  //   strokeWidth={1.5}
                  containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
                />
              </span>
            </Link>
            <button>{state}</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnergetabOverlay;
/*
<AnimatePresence initial={true} mode="wait">
      <motion.div
        key={categoryIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
        className="relative w-full h-full p-5 overflow-hidden rounded-md pointer-events-none fc bg-light"
      >

*/
