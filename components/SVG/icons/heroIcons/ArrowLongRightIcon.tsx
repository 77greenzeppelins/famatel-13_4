import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data*/
import { corpoColors } from '@/data/basicData';

/***********************************************************************************/
const ArrowLongRightIcon = ({
  containerStyle, // background style
  strokeWidth,
  pathStyle = '', // foreground / line style
}: {
  strokeWidth?: number;
  containerStyle?: string;
  pathStyle?: string;
}) => {
  return (
    <motion.svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ? strokeWidth : 1.5}
      // stroke={corpoColors.light}
      className={containerStyle ? containerStyle : 'w-6 h-6 flex-shrink-0'}
      // onHoverStart={e => { fill:'#9b59b6'}}
      // onHoverEnd={e => {}}
    >
      {/* <title>Link SVG Icon</title> */}
      <path
        className={pathStyle ? pathStyle : 'text-corpo'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </motion.svg>
  );
};

export default ArrowLongRightIcon;

// containerStyle =
//   'fc h-full aspect-1 stroke-greyTint1 hover:stroke-corpo ease-in duration-300';
// pathStyle = 'scale-[0.75] origin-center';
