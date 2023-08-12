/**Basic Data**/
import { corpoColors } from '@/data/basicData';

/**-----------------------------------------------------------**/
const SvgIconDrut960 = ({ colorFG, svgStyle }: svgCatalogIcon) => {
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
      <text
        x="5.383"
        y="61.453"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontFamily="Arial"
        fontSize="32"
        letterSpacing="0"
        fill={colorFG ? colorFG : '#fff'}
      >
        <tspan x="5.383" y="61.453">
          960°C
        </tspan>
      </text>
    </svg>
  );
};

export default SvgIconDrut960;
