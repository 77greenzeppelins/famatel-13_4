'use client';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';
/**Basic Data**/
import { corpoColors } from '@/data/basicData';

/***********************************************************************************/
const SMFacebook = ({
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
        fillRule="evenodd"
        d="M58.662 1.754c.652.34 1.409 1.161 1.643 1.782.33.873.263 54.348-.069 54.99-.376.727-1.425 1.59-2.21 1.817-.48.14-8.482.182-27.43.144l-26.753-.054-.778-.547c-.429-.3-.96-.867-1.183-1.26l-.403-.712V31.011C1.482.574 1.35 3.192 2.927 2.051l.76-.552h27.245c23.1 0 27.318.04 27.73.254m-15.53 8.861c-4.984.476-8.238 3.101-9.557 7.71-.246.859-.325 2.05-.384 5.804l-.076 4.723h-7.707v8.638h7.737v22.674h8.999V37.489h3.779c2.078 0 3.78-.02 3.785-.044l.594-4.275.587-4.228-4.373-.049-4.372-.047v-3.551c.002-6.11.551-6.7 6.24-6.7h2.757V10.89l-1.665-.103c-2.74-.17-5.577-.247-6.343-.174"
      ></path>
    </motion.svg>
  );
};

export default SMFacebook;

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
