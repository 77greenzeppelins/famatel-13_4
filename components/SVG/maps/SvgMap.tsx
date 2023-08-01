import React from 'react';
import { corpoColors } from '../../../data/_data';

const SvgMap = ({ containerStyle }: { containerStyle?: string }) => {
  return (
    <svg
      role="img"
      aria-label="Mapka dojazdu"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
      className={containerStyle}
    >
      {/*
      //___frame
      <path
        fill={corpoColors.dark}
        stroke={corpoColors.greyShade2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.182"
        d="M1.091 1.091H798.9110000000001V798.9110000000001H1.091z"
      ></path> */}

      <path
        //___roads_1
        fill={corpoColors.greyShade2}
        stroke={corpoColors.greyShade1}
        strokeWidth="1"
        d="M800.02 75.194l-47.203 76.076-36.366 59.346-28.284 52.275-19.951 38.386-113.89-58.841-137.38-68.185-90.661-44.447-5.527 9.574 19.796 9.24 133.09 65.786 141.3 71.721 48.992 26.264-42.68 99.247-57.073 140.92-45.962 115.66-32.577 54.801-121.47-77.782-109.85-90.409-57.326-46.467-6.314 8.081 127.78 104.55 43.692 35.794L396.8 681.07l83.214 51.43-44.655 67.5 18.123.029.596-2.01 57.074-89.397 13.637-24.244 8.081-15.657 90.914-228.8 50.508-123.24 125.57 63.467.052-11.146-121.07-62.675 40.106-74.9 31.786-54.643 49.155-79.551z"
      ></path>
      <text
        x="367.623"
        y="-45.155"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(27.867)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="367.623" y="-45.155" fill={corpoColors.light}>
          Strażacka
        </tspan>
      </text>
      <text
        x="772.871"
        y="-55.004"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(27.867)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="772.871" y="-55.004" fill={corpoColors.light}>
          Strażacka
        </tspan>
      </text>
      <text
        x="-315.196"
        y="762.739"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(-68.672)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="-315.196" y="762.739" fill={corpoColors.light}>
          Władysława Grabskiego
        </tspan>
      </text>
      <text
        x="153.627"
        y="707.835"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(-58.374)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="153.627" y="707.835" fill={corpoColors.light}>
          Władysława Grabskiego
        </tspan>
      </text>
      <text
        x="695.396"
        y="335.253"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(33.081)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="695.396" y="335.253" fill={corpoColors.light}>
          Willowa
        </tspan>
      </text>
      <path
        fill={corpoColors.greyShade2}
        stroke={corpoColors.orange}
        d="M150.76 302.34l110.05 103.1c-23.11 32.902-48.625 62.458-69.893 96.555l-38.789-29.571 33.129-50.727-73.188-77.926z"
      ></path>
      <path
        //___roads_2
        fill={corpoColors.greyShade2}
        stroke={corpoColors.greyShade1}
        strokeWidth="1"
        d="M44.194 365.42l-8.586 8.081 93.187 92.682-44.447 53.791 8.586 6.566 43.689-52.78 46.467 36.871 8.334-9.596-55.558-42.426z"
      ></path>
      <text
        x="287.745"
        y="279.976"
        fontFamily="Arial"
        letterSpacing="0"
        transform="rotate(41.25)"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontSize="20"
      >
        <tspan x="287.745" y="279.976" fill={corpoColors.light}>
          Willowa
        </tspan>
      </text>
      <g
        fill={corpoColors.greyShade1}
        transform="translate(9.5 8.487) scale(1.8431)"
      >
        <path d="M45.578 24.516l-4.286-.635a15.463 15.463 0 00-4.356-10.029l4.039-4.038-.279-.28-4.037 4.036a15.468 15.468 0 00-10.453-4.422l-.568-3.837v3.825-3.825l-.57 3.854a15.468 15.468 0 00-10.055 4.355l-4.03-3.986-.301.301 4.028 3.985a15.46 15.46 0 00-4.399 10.319l-3.703.548 3.705.549a15.456 15.456 0 004.342 10.192l-3.975 3.953.301.301 3.972-3.949a15.467 15.467 0 0010.287 4.418l.567 3.84v-3.812 3.812l.567-3.84a15.46 15.46 0 0010.244-4.379l4.055 4.053.301-.301-4.054-4.054a15.465 15.465 0 004.385-10.321zm-23.649-2.098l-4.201.622a8.212 8.212 0 011.856-3.768zm-1.439-4.043a8.203 8.203 0 013.469-1.74l-.565 3.815zm3.605-2.659c-.213.04-.425.086-.632.142l-.298-1.691c.388-.098.788-.16 1.191-.212zm-.839.194a8.981 8.981 0 00-1.845.765l-.822-1.502c.74-.409 1.537-.726 2.37-.953zm-2.027.874a9.277 9.277 0 00-1.455 1.079l-1.43-1.021a10.873 10.873 0 012.063-1.558zm-2.168 1.787a9.233 9.233 0 00-1.142 1.534l-1.368-1.04c.417-.688.917-1.313 1.47-1.89zm-1.252 1.718a9.151 9.151 0 00-.766 1.89l-1.657-.421c.246-.889.602-1.729 1.055-2.509zm-.818 2.097a8.949 8.949 0 00-.155.786l-1.77.262c.059-.5.144-.991.266-1.469zm5.867.326l1.117.776.001.024a2.278 2.278 0 00-.257.746H12.414zm-3.431 7.133a8.177 8.177 0 01-1.675-3.508l3.782.562zm4.077-1.413l.634 4.282a8.225 8.225 0 01-3.838-1.952zm-6.657-2.229c.048.297.105.591.185.877l-1.692.287c-.12-.463-.202-.941-.264-1.426zm.238 1.084c.213.703.514 1.365.881 1.986l-1.553.737a10.744 10.744 0 01-1.021-2.437zm.991 2.17c.247.395.532.761.833 1.111l-1.017 1.422a10.973 10.973 0 01-1.369-1.795zm1.509 1.822a9.199 9.199 0 001.581 1.203l-.948 1.424a10.898 10.898 0 01-2.041-1.603zm1.763 1.315a8.925 8.925 0 001.955.814l-.44 1.652a10.734 10.734 0 01-2.462-1.043zm2.162.869c.249.064.505.105.761.15l.262 1.771a11.17 11.17 0 01-1.463-.271zm.328-5.688l.082-.162.688-.989.308-.019c.147.076.303.135.465.18l-.001 11.4zm.699-3.175a1.418 1.418 0 112.836.002 1.418 1.418 0 01-2.836-.002zm5.334 2.242l4.021-.596a8.194 8.194 0 01-1.751 3.672zm1.347 4.032a8.252 8.252 0 01-3.147 1.718l-.033.007v.003c-.182.051-.375.075-.562.113l.613-4.143.05.101zm-3.248-9.788l-.671-4.536a8.202 8.202 0 013.996 1.979zm4.087-1.776a8.191 8.191 0 011.756 3.463l-3.826-.566zm2.67 3.598c-.027-.136-.043-.275-.076-.41l1.684-.324c.076.326.129.661.173.998zm-.129-.617a9.034 9.034 0 00-.878-2.137l1.524-.783c.453.807.801 1.678 1.035 2.596zm-.987-2.319a9.285 9.285 0 00-1.041-1.379l1.02-1.427a10.855 10.855 0 011.545 2.023zm-1.623-1.977a9.068 9.068 0 00-1.582-1.196l.976-1.408a10.9 10.9 0 011.981 1.548zm-1.765-1.307a9.025 9.025 0 00-1.843-.771l.569-1.619c.793.241 1.545.576 2.248.982zm-2.049-.826a9.5 9.5 0 00-1.005-.199l-.261-1.765c.627.066 1.242.177 1.834.344zm-.565 5.7l-.688.987a2.242 2.242 0 00-.859-.208V11.117zm-.266 12.053c.287-.047.571-.102.849-.178l.313 1.687c-.462.118-.94.2-1.423.261zm1.055-.228a9.189 9.189 0 001.971-.857l.759 1.541c-.757.429-1.563.764-2.416 1.002zm2.154-.968c.491-.302.94-.66 1.364-1.046l1.43 1.021a10.786 10.786 0 01-2.038 1.564zm2.104-1.804c.344-.396.666-.809.938-1.258l1.39 1.006a10.744 10.744 0 01-1.291 1.654zm1.052-1.44a9.129 9.129 0 00.895-2.177l1.632.521a10.756 10.756 0 01-1.138 2.661zm.948-2.384c.053-.221.086-.449.125-.678l1.75-.258c-.054.494-.125.984-.246 1.457zm-5.328-.303l-1.115-.774-.039-.657c.008-.038.021-.075.025-.113h11.414l-.002.024zm10.248-2.862l-2.631-.39a11.2 11.2 0 00-3.102-6.426l.387-.539-.519.398a11.22 11.22 0 00-6.867-3.199l-.386-2.607c6.976.328 12.604 5.837 13.118 12.763zm-13.94-12.787v3.405zm-.825.042l-.391 2.638c-.45.053-.896.12-1.33.228l-.001-.008-.21.037.005.024a11.269 11.269 0 00-4.894 2.789l-.872-.623.634.851a11.196 11.196 0 00-3.13 6.684l-2.599.385c.384-6.933 5.886-12.51 12.788-13.005zM12.028 25.489l2.619.388a11.192 11.192 0 001.43 4.402l.051.104.012-.005c.424.714.931 1.37 1.496 1.972l-.517.723.711-.517a11.205 11.205 0 006.768 3.265l.386 2.611c-6.959-.411-12.537-5.985-12.956-12.943zm13.779 12.986v-3.418zm.823-.042l.388-2.618a11.197 11.197 0 006.68-3.168l.973.694-.715-.968a11.184 11.184 0 003.021-6.584l2.613-.387c-.379 7-5.973 12.616-12.96 13.031z"></path>
        <path d="M25.004 2.098L26.433 4.006 27.908 4.006 27.908 0.6 26.619 0.6 26.619 2.488 26.605 2.488 25.24 0.6 23.706 0.6 23.706 4.006 24.993 4.006 24.993 2.098z"></path>
        <path d="M26.656 47.16l-1.606-.238c-.066-.01-.113-.027-.138-.061a.172.172 0 01-.039-.115c0-.073.04-.133.119-.178s.22-.066.42-.066c.072 0 .146.006.22.018s.142.029.198.055a.367.367 0 01.152.104.26.26 0 01.055.169H27.6a.999.999 0 00-.149-.479c-.088-.139-.219-.254-.396-.348s-.399-.166-.67-.215a5.456 5.456 0 00-.974-.074c-.277 0-.535.018-.775.051s-.448.092-.625.18a1.07 1.07 0 00-.417.345.93.93 0 00-.152.548c0 .12.018.233.053.338a.768.768 0 00.164.281c.075.082.172.153.288.213.117.059.259.102.426.127l1.535.229c.094.017.156.046.191.088a.224.224 0 01.053.143.234.234 0 01-.109.199c-.073.051-.215.076-.426.076-.207 0-.357-.023-.457-.07a.275.275 0 01-.144-.244h-1.621c0 .252.063.451.192.603.129.147.297.265.506.345.207.082.44.137.698.16.258.025.516.038.772.038.758 0 1.312-.099 1.662-.298.352-.198.526-.506.526-.924 0-.289-.097-.514-.29-.676-.192-.164-.46-.272-.805-.324z"></path>
        <path d="M4.573 26.355L5.57 22.949 4.268 22.949 3.83 25.029 3.82 25.029 3.323 22.949 2.25 22.949 1.749 25.029 1.74 25.029 1.301 22.949 0 22.949 0.991 26.355 2.312 26.355 2.78 24.467 2.789 24.467 3.253 26.355z"></path>
        <path d="M49.978 22.735L46.357 22.735 46.357 26.141 49.978 26.141 49.978 25.311 47.703 25.311 47.703 24.853 49.816 24.853 49.816 24.023 47.703 24.023 47.703 23.565 49.978 23.565z"></path>
      </g>
      <text
        x="191.262"
        y="344.282"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
          // WebkitTextAlign: 'center',
          textAlign: 'center',
        }}
        fontFamily="Arial"
        fontSize="20"
        letterSpacing="0"
        textAnchor="middle"
      >
        <tspan x="191.262" y="344.282" fill={corpoColors.light}>
          Famatel
        </tspan>
        <tspan x="191.262" y="362.282" fill={corpoColors.light}>
          Polska
        </tspan>
      </text>
      <path
        fill="#13b5c7"
        d="M17.612 0C11.005 0 5.648 5.321 5.648 11.885c0 3.358 3.294 9.374 3.294 9.374l8.229 13.96 8.586-13.797s3.814-5.74 3.814-9.537C29.572 5.321 24.216 0 17.612 0z"
        transform="translate(364.68 116.6) scale(.52467) translate(533.63 266.23) scale(2.8895)"
      ></path>
      <path
        fill={corpoColors.dark}
        fillRule="evenodd"
        d="M584.21 273.92l23.714 17.247v4.312h-4.312v23.714h4.312v4.311h-47.429v-4.311h4.312v-23.714h-4.312v-4.312zm15.091 17.247h-30.182v28.026h30.182zm-21.561 4.305l6.494 9.224 6.444-9.165v-.052h4.312v19.403h-4.312v-11.797l-6.444 10.298-6.496-10.242.004 11.74h-4.311V295.48h4.312z"
        transform="translate(364.68 116.6) scale(.52467)"
      ></path>
      <text
        x="588.271"
        y="308.451"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
          // WebkitTextAlign: 'center',
          textAlign: 'center',
        }}
        fill="#13b5c7"
        fontFamily="Arial"
        fontSize="20"
        letterSpacing="0"
        textAnchor="middle"
      >
        <tspan x="588.271" y="308.451">
          Dawny Bielbaw
        </tspan>
      </text>
      <g
        fill={corpoColors.orange}
        stroke={corpoColors.orange}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.113"
        transform="rotate(-55.292 287.17 327.91)"
      >
        <path d="M294.04 247.62H308.367V249.921H294.04z"></path>
        <path d="M316.01 247.62H330.337V249.921H316.01z"></path>
        <path d="M340 247.62H354.327V249.921H340z"></path>
        <path d="M361.97 247.62H376.297V249.921H361.97z"></path>
        <path d="M385.98 247.62H400.307V249.921H385.98z"></path>
        <path d="M407.95 247.62H422.277V249.921H407.95z"></path>
        <path d="M431.95 247.62H446.277V249.921H431.95z"></path>
        <path d="M453.92 247.62H468.247V249.921H453.92z"></path>
        <path d="M248 247.62H262.327V249.921H248z"></path>
        <path d="M269.97 247.62H284.297V249.921H269.97z"></path>
      </g>
      <g
        fill={corpoColors.orange}
        stroke={corpoColors.orange}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.113"
        transform="rotate(26.296 506.96 453.73)"
      >
        <path d="M294.04 247.62H308.367V249.921H294.04z"></path>
        <path d="M316.01 247.62H330.337V249.921H316.01z"></path>
        <path d="M340 247.62H354.327V249.921H340z"></path>
        <path d="M361.97 247.62H376.297V249.921H361.97z"></path>
        <path d="M385.98 247.62H400.307V249.921H385.98z"></path>
        <path d="M407.95 247.62H422.277V249.921H407.95z"></path>
        <path d="M431.95 247.62H446.277V249.921H431.95z"></path>
        <path d="M453.92 247.62H468.247V249.921H453.92z"></path>
        <path d="M202.04 247.62H216.367V249.921H202.04z"></path>
        <path d="M224.01 247.62H238.337V249.921H224.01z"></path>
        <path d="M248 247.62H262.327V249.921H248z"></path>
        <path d="M269.97 247.62H284.297V249.921H269.97z"></path>
      </g>
      <g
        stroke="#231f20"
        strokeLinecap="round"
        strokeWidth="0.5"
        transform="rotate(42.707 -396.02 1023.2)"
      >
        <path
          fill={corpoColors.orange}
          stroke={corpoColors.orange}
          d="M-572.5 171.07H-340.36V216.427H-572.5z"
        ></path>
        <path
          fill="none"
          strokeDasharray="1, 2"
          d="M-572.25 47.73H-483.35699999999997V171.22H-572.25z"
        ></path>
      </g>
    </svg>
  );
};

export default SvgMap;
