'use client';
import { letters } from './TenCategoriesLettersData';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';

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
const TenCategoriesSvg: React.FC<{
  className: string;
  letterStyle?: string;
}> = ({ className, letterStyle }) => {
  /**JSX**/
  return (
    <svg
      aria-label="Animowany element"
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 300 300"
    >
      <g x="200" y="100">
        <motion.path
          fill={corpoColors.orange}
          d="M189.66 41.348H206.738V58.426H189.66z"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 6, repeat: Infinity }}
        ></motion.path>
        <motion.path
          fill={corpoColors.orange}
          d="M113.27 156.12H130.34799999999998V173.198H113.27z"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
        ></motion.path>

        <motion.g variants={container} initial="initial" animate="animate">
          {letters.map(({ d }, i) => (
            <motion.path
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={svgTransition}
              aria-describedby="svg-description"
              key={i}
              fill={letterStyle ? letterStyle : corpoColors.grey}
              d={d}
            ></motion.path>
          ))}
        </motion.g>
      </g>
    </svg>
  );
};
export default TenCategoriesSvg;
