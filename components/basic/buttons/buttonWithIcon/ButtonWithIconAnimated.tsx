import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import MagGlassIcon from '@/components/SVG/icons/heroIcons/MagGlassIcon';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { headerSpecButtons } from '@/data/textData';
import { buttonsConfig } from '@/data/basicData';
/**TS**/
interface Props {
  children?: React.ReactNode;
  containerStyle?: string;
  stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}
/**---------------------------------**/
const ButtonWithIconAnimated = ({
  children,
  stateSetter,
  containerStyle,
}: Props) => {
  /**...**/
  const pathname = usePathname();
  const styleCondition = pathname.split('/').length > 2;
  /**LocalState**/
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    stateSetter(prev => !prev);
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, buttonsConfig.isDisabledDuration); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };
  /*
  ___1. 
  */

  /**JSX**/
  return (
    <div className={containerStyle ? containerStyle : `fc w-10 h-10 `}>
      <motion.button
        disabled={isDisabled}
        aria-label={'przycisk'}
        // aria-expanded={condition ? 'true' : 'false'}
        onClick={onClickHandler}
        className={`w-6 h-6 origin-center  fc focus:outline-none disable focus-visible:ring focus-visible:ring-offset-1 ring-offset-dark focus-visible:ring-corpo`}
        //___focus-visible:ring-2 focus-visible:ring-blue-500
        //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
        animate={{
          //   rotateY: condition ? 180 : 0,
          transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        }}
      >
        {children}
        {/* <MagGlassIcon
          //   pathStyle={`${
          //     condition ? 'stroke-corpo ' : 'stroke-dark'
          //   } transition-all duration-[400] delay-100 ease-in`}
          pathStyle={
            styleCondition
              ? 'stroke-grey duration-300 ease-linear'
              : 'stroke-dark duration-300 ease-linear'
          }
          strokeWidth={1.5}
        /> */}
      </motion.button>
    </div>
  );
};

export default ButtonWithIconAnimated;
