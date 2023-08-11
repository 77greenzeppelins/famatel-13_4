/**Basic Data**/
import { corpoColors } from '@/data/basicData';

const Witamy = ({
  svgStyle,
  gStyle,
  fillColor,
}: {
  svgStyle?: string;
  gStyle?: string;
  fillColor?: string;
}) => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={svgStyle}
      viewBox="0 0 80 60"
    >
      <g
        fill={fillColor ? fillColor : corpoColors.greyShade2}
        className={gStyle}
      >
        <g transform="matrix(3.83677 0 0 3.83677 -1.542 -1.235)">
          <g
            strokeWidth="0.265"
            // ariaLabel="W"
            style={{ lineHeight: '0.9' }}
            fontFamily="Arial"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M2.255 6.897L1 2.162h.643l.72 3.104q.116.488.2.97.181-.76.213-.876l.902-3.198h.755l.679 2.397q.255.891.368 1.676.09-.449.236-1.03l.742-3.043h.63L5.79 6.897h-.604L4.187 3.29q-.126-.453-.149-.556-.074.326-.139.556L2.895 6.897z"></path>
          </g>
          <g
            strokeWidth="0.265"
            // ariaLabel="I"
            style={{ lineHeight: '0.9' }}
            fontFamily="Arial"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M8.977 6.956V2.222h.626v4.734z"></path>
          </g>
          <g
            strokeWidth="0.265"
            // ariaLabel="T"
            style={{ lineHeight: '0.9' }}
            fontFamily="Arial"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M13.654 6.803V2.627h-1.56v-.559h3.753v.559H14.28v4.176z"></path>
          </g>
          <g
            strokeWidth="0.265"
            // ariaLabel="M"
            style={{ lineHeight: '0.9' }}
            fontFamily="Jost*"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M7.25 10.974l-.343 3.128h-.562l.562-4.861 1.852 3.353 1.852-3.353.562 4.861h-.562l-.344-3.128-1.508 2.699z"></path>
          </g>
          <g
            strokeWidth="0.265"
            // ariaLabel="Y"
            style={{ lineHeight: '0.9' }}
            fontFamily="Jost*"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M15.378 9.319h.628l-1.541 2.632v1.998h-.562v-1.991l-1.541-2.64h.628l1.19 2.144z"></path>
          </g>
          <g
            strokeWidth="0.265"
            // ariaLabel="A"
            style={{ lineHeight: '0.9' }}
            fontFamily="Arial"
            fontSize="6.615"
            letterSpacing="0"
          >
            <path d="M.991 13.984L2.81 9.25h.675l1.938 4.734h-.714l-.552-1.434h-1.98l-.52 1.434zm1.367-1.944h1.605l-.494-1.311q-.227-.598-.336-.982-.09.455-.255.904z"></path>
          </g>
          <g
            fill={fillColor ? fillColor : corpoColors.greyShade2}
            // ariaLabel="!"
            style={{ lineHeight: '0.9' }}
            strokeWidth="0"
            fontFamily="Jost*"
            fontSize="16.797"
            letterSpacing="0"
          >
            <path d="M18.883 2.066h1.68l-.336 8.399h-1.008z"></path>
          </g>
          <path
            fill={fillColor ? fillColor : corpoColors.greyShade2}
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            d="M18.792 12.345H20.663V14.216000000000001H18.792z"
            stopColor="#000"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Witamy;
