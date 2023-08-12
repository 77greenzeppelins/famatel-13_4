/**Basic Data**/
import { corpoColors } from '@/data/basicData';
/**-----------------------------------------------------------**/
const SvgIconMODRange = ({
  svgStyle,
  colorFG,
  colorBG,
  colorBGOpacity,
}: svgCatalogIcon) => {
  /**JSX**/
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
      <text
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
        }}
        fontFamily="Arial"
        fill={colorFG ? colorFG : '#fff'}
        className="text-[1.125rem] tracking-[0.0525rem]"
      >
        <tspan
          x="61"
          y="92"
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
        >
          4-72
        </tspan>
      </text>
      <path
        fill={colorFG ? colorFG : '#fff'}
        d="M5.655 3.067h48.817v21.059h12.745v13.816a12.99 12.99 0 013.376 1.982l5.377-3.816 4.171 5.876-5.377 3.816c1.959 5.469-1.907 13.248-4.827 15.317-2.92 2.074-1.778 1.109-2.72 1.492v10.287H54.472v23.831H5.655V77.054h8.87V22.74l-8.87 5.543z"
      ></path>
    </svg>
  );
};

export default SvgIconMODRange;
