/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';

/***********************************************************************************/
const ChevronLeftIcon = ({
  className,
  strokeWidth = 1,
  strokeColor,
  strokeColorWhileHover = corpoColors.orange,
  scale,
}: {
  className: string;
  strokeWidth?: number;
  strokeColor?: string;
  strokeColorWhileHover?: string;
  scale?: number;
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
      whileHover={{
        scale: scale ? scale : 1.05,
        stroke: strokeColorWhileHover,
      }}
      transition={{
        default: { ...svgTransition },
        stroke: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </motion.svg>
  );
};

export default ChevronLeftIcon;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 19.5L8.25 12l7.5-7.5"
  />
</svg>; */
}
