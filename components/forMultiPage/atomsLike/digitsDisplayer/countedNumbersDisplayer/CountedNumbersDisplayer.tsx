import React from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { simpleOpacityVariants } from '@/lib/fmConfigs/framerMotionConfigs';
/**HardCoded Data*/
const digitContainerDefaultStyle = `w-2/5 fc`;
const separatorContainerDefaultStyle = `fc w-1/5`;
const digitDefaultStyle = 'text-[1.5rem] text-grey text-cente';

/**-------------------------------------------------**/
const CountedNumbersDisplayer: React.FunctionComponent<{
  currentCategoryIndex: number;
  countedStaff: number;
  mainContainerStyle?: string;
  digitStyle?: string;
  digitContainerStyle?: string;
}> = ({
  currentCategoryIndex,
  countedStaff,
  mainContainerStyle,
  digitStyle,
  digitContainerStyle,
}) => {
  /**...*/
  const conditionForAdditionalZero =
    countedStaff > 9 && currentCategoryIndex + 1 < 10;

  /**JSX**/
  return (
    <div
      className={
        mainContainerStyle ? mainContainerStyle : 'flex disable w-[60px]'
      }
    >
      <div
        className={`${digitContainerStyle} ? ${digitContainerStyle} :  ${digitContainerDefaultStyle}`}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={digitStyle ? digitStyle : digitDefaultStyle}
            variants={simpleOpacityVariants}
            initial="from"
            animate="to"
            exit="exit"
          >{`${conditionForAdditionalZero ? '0' : ''}${
            currentCategoryIndex + 1
          } `}</motion.p>
        </AnimatePresence>
      </div>
      <div
        className={
          digitContainerStyle
            ? digitContainerStyle
            : separatorContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>/</p>
      </div>
      <div
        className={
          digitContainerStyle ? digitContainerStyle : digitContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>
          {countedStaff}
        </p>
      </div>
    </div>
  );
};

export default CountedNumbersDisplayer;
