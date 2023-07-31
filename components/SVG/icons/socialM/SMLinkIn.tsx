'use client';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';

/***********************************************************************************/
const SMLinkIn = ({
  className,
  fillColor,
  fillColorWhileHover = corpoColors.orange,
  scale,
}: {
  className: string;
  fillColor?: string;
  fillColorWhileHover?: string;
  scale?: number;
}) => {
  return (
    <motion.svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor ? fillColor : corpoColors.grey}
      viewBox="0 0 64 64"
      strokeWidth={0}
      className={className ? className : 'w-6 h-6'}
      whileHover={{
        scale: scale ? scale : 1.05,
        fill: fillColorWhileHover,
      }}
      transition={{
        default: { ...svgTransition },
        fill: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
      }}
    >
      <path
        // fill={fillColor ? fillColor : corpoColors.grey}
        fillRule="evenodd"
        strokeWidth="1.118"
        d="M58.377 1.208c.92.276 2.294 1.72 2.565 2.695.298 1.074.283 53.167-.016 54.164-.12.403-.542 1.097-.936 1.546-1.344 1.528 1.048 1.417-29.351 1.359L3.582 60.92l-.799-.58c-.446-.322-1.052-1.022-1.37-1.584l-.57-1.004v-53.5l.51-.966c.538-1.02 1.445-1.843 2.32-2.106.86-.258 53.84-.231 54.703.027M12.543 9.315c-1.959.693-3.467 2.87-3.467 5.004 0 4.773 5.78 6.98 9.069 3.465 3.615-3.866-.6-10.24-5.602-8.47m26.54 13.582c-1.772.45-3.533 1.488-4.775 2.817-1.39 1.485-1.31 1.52-1.31-.583v-1.77h-8.762v28.892h9.113l.062-8.715c.067-9.498.055-9.386 1.191-11.107 1.466-2.221 6.21-2.297 7.642-.123.936 1.42 1.006 2.204 1.006 11.41v8.535h9.133v-9.087c-.001-11.553-.226-13.441-1.954-16.357-1.926-3.25-7.027-5.009-11.346-3.913M9.697 37.805v14.447h9.133V23.36H9.697v14.446"
      ></path>
    </motion.svg>
  );
};

export default SMLinkIn;

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
