'use client';
import { letters } from './TenCategoriesLettersData';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';
import { lettersData } from './dziesiec_data';

const container = {
  animate: { transition: { staggerChildren: 0.15 } },
};
const item = {
  initial: { opacity: 0, y: '5%' },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

/**---------------------------------------------**/
const Dziesiec = ({ svgStyle }: { svgStyle: string }) => {
  /**JSX**/
  return (
    <svg
      aria-label="Animowany element"
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyle}
      viewBox="0 0 300 300"
    >
      {/* <motion.g variants={container} initial="initial" animate="animate"> */}
      {lettersData.map(({ letter, x, y }) => (
        <motion.text
          variants={item}
          //   whileHover={{ scale: 1.01 }}
          transition={svgTransition}
          aria-describedby="svg-description"
          key={`${x}-${y}`}
          fill={corpoColors.orange}
          x={x}
          y={y}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            lineHeight: '0.9',
          }}
          strokeWidth="1.429"
          fontFamily="Arial"
          fontSize="142.88"
          letterSpacing="0"
        >
          <tspan x={x} y={y}>
            {letter}
          </tspan>
        </motion.text>
      ))}
      {/* </motion.g> */}
      <motion.rect
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 6, repeat: Infinity }}
        width="21.48"
        height="21.48"
        x="171.41"
        y="35.179"
        ry="0"
        fill={corpoColors.orange}
      ></motion.rect>
      <motion.rect
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
        width="21.48"
        height="21.48"
        x="97.256"
        y="150.65"
        ry="0"
        fill={corpoColors.orange}
      ></motion.rect>
    </svg>
  );
};
export default Dziesiec;
