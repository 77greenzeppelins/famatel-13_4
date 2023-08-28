// 'use client';
/**FramerMotion Staff*/
// import { motion } from 'framer-motion';
/*
style:
containerStyle={`fc h-4 w-4 aspect-square stroke-2 stroke-corpo group-hover:stroke-light group-hover:rotate-45 origin-center flex-shrink-0 ${styles.lazyAnimation}`}
*/

/***********************************************************************************/
const EnergatabLogo = ({
  containerStyle,
}: // strokeWidth,
// pathStyle = '',
{
  containerStyle?: string;
  // strokeWidth?: number;
  // pathStyle?: string;
}) => {
  return (
    <svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 600 360"
      // strokeWidth={strokeWidth ? strokeWidth : 1.5}
      // stroke={corpoColors.light}
      className={
        containerStyle ? containerStyle : 'w-[600px] h-[360px] flex-shrink-0'
      }
    >
      <path
        fill="#e31e24"
        d="M70.826 108.38h66.817l-50.247 9.555 6.223 10.934s.165.301.296.392c.13.09.483.151.483.151l36.763.05-5.946 9.654-35.48-.033s-.71-.154-1.556-.756c-.46-.328-1.15-1.349-1.15-1.349z"
        opacity="0.873"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        d="M70.826 104.93h66.817l-50.247-9.555 6.223-10.934s.165-.301.296-.392c.13-.09.483-.151.483-.151l24.71-.033s.825.156 1.203.52c.316.302.805 1.037.805 1.037l8.76 14.257 12.04 2.796-10.755-18.626-4.549-8.585s-.345-.382-.566-.603c-.369-.369-.888-.468-.888-.468l-35.424.034s-.71.153-1.555.756c-.461.328-1.15 1.349-1.15 1.349z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <g fill="#1d4074">
        <path
          d="M37.231 73.54h28.301l2.15 3.685H39.31zM41.407 80.723h28.301l2.15 3.685H43.486zM45.516 87.772h28.301l2.15 3.685H47.595z"
          transform="translate(-2.926 -192.03) scale(2.7636)"
        ></path>
      </g>
      <path
        fill="#e31e24"
        d="M4.678 187.52v8.174l209.87-8.108z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        strokeWidth="0.319"
        d="M202.49 167.798c1.276.446 2.276 1.148 2.999 2.104.723.936 1.084 2.073 1.084 3.412 0 1.955-.787 3.465-2.36 4.527s-3.849 1.594-6.826 1.594h-12.056v-22.317h11.418c2.85 0 5.018.53 6.507 1.594 1.488 1.041 2.232 2.455 2.232 4.24 0 1.063-.265 2.02-.797 2.87-.51.828-1.244 1.487-2.2 1.976zm-10.039-5.103v3.015h4.429c.437 0 1.327-.118 1.327-1.563 0-1.424-1.052-1.452-1.327-1.452zm5.356 11.377c1.078 0 1.424-.93 1.424-1.63 0-.742-.266-1.641-1.424-1.641h-5.356v3.271z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        d="M167.1 157.24l-9.623 22.206h7.4l1.642-4.065h8.479l1.643 4.065h7.4l-9.623-22.206h-6.75zm3.659 7.648l2.14 5.298h-4.28zM138.81 157.24v5.928h6.582v16.279h7.134v-16.28h6.581v-5.927h-13.716zM119.53 157.24v22.206h18.214v-5.753h-11.079v-2.663h9.331v-5.752h-9.331v-2.286h10.678v-5.752h-10.678z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        strokeWidth="0.319"
        d="M109.872 167.798h6.367v9.246c-1.276.914-2.743 1.616-4.402 2.104a17.522 17.522 0 01-4.976.734c-2.338 0-4.444-.49-6.315-1.467-1.871-.999-3.338-2.38-4.401-4.145-1.064-1.764-1.595-3.762-1.595-5.994s.531-4.23 1.595-5.994c1.063-1.764 2.54-3.135 4.433-4.113 1.893-.999 4.03-1.498 6.411-1.498 2.084 0 3.955.35 5.614 1.052 1.658.701 3.04 1.711 4.146 3.029l-4.82 4.303c-1.51-1.658-2.516-2.253-4.62-2.253-3.482.161-5.388 2.7-5.411 5.474 0 1.233.249 2.038.78 3.015 1.085 1.968 2.95 2.564 4.566 2.56 1.212 0 1.531-.194 2.595-.683z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        strokeWidth="0.337"
        d="M71.996 157.298h10.02c2.333 0 4.264.316 5.795.948 1.53.633 2.66 1.508 3.389 2.625.753 1.096 1.13 2.372 1.13 3.827.031 3.93-.798 6.049-3.837 7.968l4.635 6.768h-7.965l-3.9-5.684-1.34-.026-.523.015v5.695h-7.404zm9.65 5.715h-2.368v4.933h2.368c1.142 0 2.005-.21 2.588-.632.607-.443.91-1.054.91-1.834 0-.801-.303-1.413-.91-1.834-.583-.422-1.446-.633-2.588-.633z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        d="M51.027 157.24v22.206h18.214v-5.753H58.162v-2.663h9.331v-5.752h-9.331v-2.286H68.84v-5.752H58.162z"
        opacity="0.881"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        d="M25.608 157.24v22.206h7.134v-10.23l8.552 10.23h6.048V157.24h-7.134v10.072L31.82 157.24h-.73z"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
      <path
        fill="#1d4074"
        d="M4.725 157.24v22.206h18.214v-5.753h-11.08v-2.663h9.332v-5.752H11.86v-2.286h10.678v-5.752H11.86z"
        opacity="0.881"
        transform="translate(-2.926 -192.03) scale(2.7636)"
      ></path>
    </svg>
  );
};

export default EnergatabLogo;
