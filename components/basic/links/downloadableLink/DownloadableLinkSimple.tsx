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
  endText?: string;
  iconStyle?: string;
  //___
  aStyle?: string;
}

/**-------------------------------**/
const DownloadableLinkSimple = ({
  label,
  path,
  endText,
  iconStyle,
  aStyle,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  /**JSX**/
  return (
    <motion.a
      className={
        aStyle
          ? aStyle
          : 'relative flex items-center w-full lg:min-h-[64px] sm:min-h-[32px] gap-x-6 py-1 group'
      }
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
              containerStyle={`${
                iconStyle
                  ? iconStyle
                  : 'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light'
              } ${styles.basicAnimation}`}
            />
          </motion.span>
        </span>
        {endText && (
          <span
            className={`pl-4 text-regular text-grey group-hover:text-light ${styles.basicAnimation}`}
          >
            {endText}
          </span>
        )}
      </span>
    </motion.a>
  );
};

export default DownloadableLinkSimple;
