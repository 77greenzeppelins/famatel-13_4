'use client';

import React, { useEffect, useState } from 'react';
import useWindowSize from '@/lib/hooks/useWindowSize';
import useDebounce from '@/lib/hooks/useDebounce';
import { usePathname } from 'next/navigation';

export default function OverlayForResizing() {
  //___
  const pathname = usePathname();
  //___
  const [makeVisible, setMakeVisible] = useState(false);
  const { width, height } = useWindowSize();
  const val = (width / height).toString();
  const altVal = `val-${pathname}`;
  const debouncedValue = useDebounce<string>(altVal, height * 1.9);
  /*
  ___1. why such condition? If starting aR is close to 1 (device has square-like shape) and "resizing" is subtle don't trigger <OverlayForResizing> 
  */
  // const aR = width / height;
  // const condition = aR < 0.8 || aR > 1.2;

  /*
  ___1. let overlay be visible!
  */
  useEffect(() => {
    setMakeVisible(true);
    window.scrollTo(0, 0);
    // if (condition) {
    //   setMakeVisible(true);
    //   window.scrollTo(0, 0);
    // }
  }, [altVal]);
  /*
  ___1. let overlay be invisible!
  */
  useEffect(() => {
    // window.scrollTo(0, 0);
    setMakeVisible(false);
    // setCounter(val => val + 1);
  }, [debouncedValue]);

  // useEffect(() => {
  //   console.log('aR:', aR);
  // }, [aR]);

  /**JSX**/
  return (
    <div
      className={`fixed fc flex-col gap-y-4 z-[600] left-0 right-0 h-screen   pointer-events-none  bg-dark
      ${makeVisible ? 'opacity-100' : 'opacity-0'}
      transition ease-in-out`}
      //___backdrop-blur-xl backdrop-grayscale backdrop-brightness-50
      //___backdrop-contrast-100
    >
      {/* <p className="p-v-large"> {isHidden ? ' invisible' : ' visible'}</p>
      <p>counter: {counter}</p>
      <p className="p-v-large">{makeVisible ? 'YES' : 'NO'}</p> */}
      {/* <p>val: {val}</p> */}
    </div>
  );
}
