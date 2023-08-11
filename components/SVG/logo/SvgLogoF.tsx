'use client';
/**BasicData*/
corpoColors;
import { corpoColors } from '@/data/basicData';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**------------------------------------------------------------------------------*/
const SvgLogoF = ({
  animationCondition = false,
  svgStyle,
  gStyle,
}: {
  animationCondition?: boolean;
  svgStyle: string;
  gStyle: string;
}) => {
  /**JSX**/
  return (
    <motion.svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyle}
      viewBox="0 0 358 500"
      // animate={animationCondition ? 'strokeDark' : 'strokeLight'}
      whileHover={{ scale: animationCondition ? 1.05 : 1.0 }}
      transition={svgTransition}
    >
      <g fill="none" className={gStyle}>
        <path
          strokeWidth="0"
          d="M14 13.888v472.226h138.39V152.29H344V13.888z"
        ></path>
        <path d="M183.8 343.9H344V183.65H183.8z"></path>
      </g>
    </motion.svg>
  );
};

export default SvgLogoF;
