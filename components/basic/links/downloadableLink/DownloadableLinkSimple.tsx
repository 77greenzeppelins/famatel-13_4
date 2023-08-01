'use client';
import React, { useState } from 'react';
/**Components**/
import ArrowDownloadIcon from '@/components/SVG/icons/heroIcons/ArrowDownloadIcon';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Tailwind Styles* */
import { styles } from '@/styles';
styles;

/**TS**/
interface Props {
  label?: string;
  path?: string;
  size?: string;
}

/**-------------------------------**/
const DownloadableLinkSimple = ({ label, path, size }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  /**JSX**/
  return (
    <motion.a
      className="relative flex items-center w-full lg:min-h-[64px] sm:min-h-[32px] gap-x-6 py-1 group"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      //___
      download
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="flex items-center justify-center w-full ">
        <span
          className={` pr-4 text-regular text-grey group-hover:text-light ${styles.basicAnimation}`}
        >
          {label}
        </span>
        <span className="flex items-center gap-x-3">
          <motion.span
            animate={{ y: isHovered ? '5%' : 0 }}
            transition={svgTransition}
          >
            <ArrowDownloadIcon
              className={`w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light ${styles.basicAnimation}`}
            />
          </motion.span>
        </span>
      </span>
      {/* <span
        className={`absolute bottom-0 w-full h-[1px] border-b border-grey group-hover:border-greyTint2 ${styles.basicAnimation}`}
      /> */}
    </motion.a>
  );
};

export default DownloadableLinkSimple;
