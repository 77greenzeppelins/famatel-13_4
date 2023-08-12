/**Basic Data**/
import { corpoColors } from '@/data/basicData';
/**-----------------------------------------------------------**/
const SvgIconENEC = ({
  svgStyle,
  colorFG,

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
      version="1.1"
      viewBox="0 0 23.131 16.963"
    >
      <g
        fill={colorFG ? colorFG : '#fff'}
        fillRule="evenodd"
        strokeWidth="7.566"
        clipRule="evenodd"
        transform="matrix(.13217 0 0 .13217 -1.173 -4.257)"
      >
        <path
          fill={colorFG ? colorFG : '#fff'}
          fillOpacity={colorBGOpacity ? colorBGOpacity : 1}
          strokeWidth="7.566"
          d="M55.352 118.611l-10.368-10.346h28.142l-9.929-9.908H21.802l51.104 51h42.122l-9.928-9.908H76.232L64.769 128.01h24.873l-9.417-9.398H55.352zm12.261-56.384l10.368-10.346h28.14l9.93-9.909H74.655l-51.104 51h42.123l9.929-9.909H46.734l11.462-11.439h24.873l9.417-9.397zm48.821.291l-12.268 30.455H117.6l51.102-51H155.45l-30.297 30.236h-.818l12.051-30.236h-13.344l-51.104 51h13.255l30.517-30.455zm63.685-24.474H71.109L12.677 96.357h-.041l.021.021-.021.02h.041l58.433 58.314h109.01l-58.453-58.334zm-43.724 93.317c6.283 7.357 5.023 9.545-.514 9.545-4.176 0-13.498-1.604-28.463-16.539-16.21-16.174-10.152-17.559-6.066-17.559 5.174 0 10.756 1.676 18.893 8.889h12.98c-4.764-4.664-20.742-18.797-42.348-18.797-20.697 0-9.815 15.299 2.815 27.904 18.835 18.797 35.88 26.021 51.585 26.021 15.16 0 15.512-6.715 4.279-19.465h-13.161z"
        ></path>
      </g>
      <text
        xmlSpace="preserve"
        fill={colorFG ? colorFG : '#fff'}
        fontFamily="Arial"
        fontSize="5.25"
      >
        <tspan x="17.59" y="10.389">
          03
        </tspan>
      </text>
    </svg>
  );
};

export default SvgIconENEC;
