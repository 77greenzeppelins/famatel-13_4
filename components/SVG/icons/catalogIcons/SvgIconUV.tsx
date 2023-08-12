/**Basic Data**/
import { corpoColors } from '@/data/basicData';
/**-----------------------------------------------------------**/
const SvgIconUV = ({
  svgStyle,
  colorFG,
  colorBG,
  colorBGOpacity,
}: svgCatalogIcon) => {
  /*
  JSX
  */
  return (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyle ? svgStyle : 'w-full aspect-square'}
      viewBox="0 0 100 100"
    >
      <path
        data-layout="background"
        fill={colorBG ? colorBG : corpoColors.dark}
        fillOpacity={colorBGOpacity ? colorBGOpacity : 1}
        d="M0 0H100V100H0z"
      ></path>
      <path
        stroke={colorFG ? colorFG : '#fff'}
        strokeLinecap="round"
        strokeWidth="1.442"
        d="M51.582 54.365l4.873-13.248"
        transform="matrix(2.63 0 0 2.63 -71.57 -57.614)"
      ></path>
      <path
        fill="none"
        stroke={colorFG ? colorFG : '#fff'}
        strokeLinecap="round"
        strokeWidth="1.442"
        d="M45.491 45.38l5.177-6.547M33.461 40.66l12.182-7.157M35.045 29.087l8.07-1.675"
        transform="matrix(2.63 0 0 2.63 -71.57 -57.614)"
      ></path>
      <path
        fill="none"
        stroke={colorFG ? colorFG : '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.622"
        d="M64.229 38.204a14.415 13.705 0 01-13.267-3.09 14.415 13.705 0 01-4.597-12.23"
        opacity="0.995"
        transform="matrix(2.63 0 0 2.63 -71.57 -57.614)"
      ></path>
      <text
        x="28.019"
        y="57.513"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        strokeWidth="0.38"
        fontFamily="Arial"
        fontSize="12.167"
        letterSpacing="0"
        transform="matrix(2.63 0 0 2.63 -71.57 -57.614)"
        fill={colorFG ? colorFG : '#fff'}
      >
        <tspan
          x="28.019"
          y="57.513"
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
        >
          UV
        </tspan>
      </text>
    </svg>
  );
};

export default SvgIconUV;
