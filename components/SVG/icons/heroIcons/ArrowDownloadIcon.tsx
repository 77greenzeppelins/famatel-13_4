import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/** */
// import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';

/***********************************************************************************/
const ChevronRightIcon = ({
  className,
  strokeWidth = 1,
  strokeColor,
}: // strokeColorWhileHover = corpoColors.orange,
// scale,
{
  strokeWidth?: number;
  strokeColor?: string;
  // strokeColorWhileHover?: string;
  className: string;
  // scale?: number;
}) => {
  return (
    <motion.svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor ? strokeColor : corpoColors.light}
      className={className ? className : 'w-6 h-6'}
      // whileHover={{
      //   scale: scale ? scale : 1.05,
      //   stroke: strokeColorWhileHover,
      // }}
      // transition={{
      //   default: { ...svgTransition },
      //   stroke: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
      // }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </motion.svg>
  );
};

export default ChevronRightIcon;
