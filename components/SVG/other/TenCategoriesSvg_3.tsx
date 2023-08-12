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
      <text
        fill={corpoColors.orange}
        x="19.465"
        y="142.64"
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
        <tspan x="19.465" y="142.64">
          d
        </tspan>
      </text>
      <text
        x="95.524"
        y="142.64"
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
        <tspan x="95.524" y="142.64">
          z
        </tspan>
      </text>
      <text
        x="166.922"
        y="142.64"
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
        <tspan x="166.922" y="142.64">
          i
        </tspan>
      </text>
      <text
        x="201.668"
        y="142.64"
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
        <tspan x="201.668" y="142.64">
          e
        </tspan>
      </text>
      <rect width="21.48" height="21.48" x="171.41" y="35.179" ry="0"></rect>
      <text
        x="19.465"
        y="258.106"
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
        <tspan x="19.465" y="258.106">
          s
        </tspan>
      </text>
      <text
        x="92.77"
        y="258.106"
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
        <tspan x="92.77" y="258.106">
          i
        </tspan>
      </text>
      <rect width="21.48" height="21.48" x="97.256" y="150.65" ry="0"></rect>
      <text
        x="124.338"
        y="258.106"
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
        <tspan x="124.338" y="258.106">
          ę
        </tspan>
      </text>
      <text
        x="204.211"
        y="258.106"
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
        <tspan x="204.211" y="258.106">
          ć
        </tspan>
      </text>
    </svg>
  );
};
export default TenCategoriesSvg;
