'use client';
import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';
/*
style:
containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
*/

/***********************************************************************************/
const ArrowForLinkIcon = ({
  containerStyle,
  strokeWidth,
  pathStyle = '',
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
      stroke={corpoColors.light}
      className={containerStyle ? containerStyle : 'w-6 h-6 flex-shrink-0'}
      // whileHover={{ scale: 1.1 }}
      // transition={{
      //   ...svgTransition,
      // }}
    >
      <path
        className={pathStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        // d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        // d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </motion.svg>
  );
};

export default ArrowForLinkIcon;

/* 
//___

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


//___why not? shows description when hovered...
<title>Link SVG Icon</title> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
</svg>
//___
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

*/
