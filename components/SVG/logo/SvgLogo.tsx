'use client';
/**BasicData*/
import { corpoColors } from '@/data/basicData';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { svgTransition } from '@/lib/fmConfigs/framerMotionConfigs';

/**TS**/
interface Props {
  fStyle?: string;
  lettersStyle?: string;
  fillColorF?: string;
  fillColorText?: string;
  hasSygnet?: boolean;
  isHovered?: boolean;
}
/**------------------------------------------------------------------------------*/
const SvgLogo = ({
  fStyle,
  lettersStyle,
  fillColorF,
  fillColorText,
  hasSygnet = true,
  isHovered = true,
}: Props) => {
  /**JSX*/
  return (
    <motion.svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164.042 37.999"
      className="w-full h-full pointer-events-auto"
      whileHover={{ scale: isHovered ? 1.05 : 1.0 }}
      transition={svgTransition}
    >
      {hasSygnet ? (
        <g
          data-path="sygnet__twoParts"
          className={fStyle}
          // fill={fillColorF ? fillColorF : corpoColors.orange}
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
          strokeWidth={0.3}
        >
          <path d="M141.772 2.646v28.082h8.23V10.876h11.394v-8.23Z" />
          <path d="M153.36 22.27h8.036v-8.036h-8.035z" />
        </g>
      ) : null}

      <g
        className={lettersStyle}
        // fill={fillColorText ? fillColorText : corpoColors.light}
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1.07183}
      >
        <motion.path
          data-path="l"
          d="M562.293 322.23h4.131v-60.283h-4.131z"
          transform="matrix(.32913 0 0 -.32913 -56.527 116.963)"
          initial={true}
          // variants={textVariants}
        />
        <motion.path
          data-path="p"
          initial={true}
          // variants={textVariants}
          d="M0 0h4.131v-8.347h.17C7.251-2.782 12.225.928 19.561.928c10.117 0 17.621-8.179 17.621-22.68 0-12.986-6.745-22.765-17.959-22.765-7.251 0-11.803 3.119-14.922 8.094h-.17v-21.161H0Zm32.966-21.837c0 11.635-5.058 19.223-13.996 19.223-9.696 0-15.26-8.345-15.26-19.391 0-11.551 5.481-19.055 15.345-19.055 9.359 0 13.911 8.853 13.911 19.223"
          transform="matrix(.32913 0 0 -.32913 114.14 16.4)"
        />

        <motion.path
          data-path="originalSign"
          d="M0 0h1.427c.793 0 1.192.33 1.192.96 0 .631-.365.962-1.192.962H0Zm-2.285 3.743h4.109c1.655 0 3.047-.895 3.047-2.484 0-.962-.498-1.691-1.458-2.021v-.067c.796-.231 1.093-.729 1.259-1.525.199-1.059.065-2.052.397-2.216v-.167H2.817c-.231.133-.264 1.126-.366 1.953-.064.765-.496 1.128-1.325 1.128H0v-3.081h-2.285zm9.84-4.306c0 3.876-2.717 6.758-6.462 6.758-3.709 0-6.459-2.882-6.459-6.758 0-3.91 2.75-6.791 6.459-6.791 3.745 0 6.462 2.881 6.462 6.791m-14.377 0c0 4.605 3.475 8.017 7.915 8.017 4.439 0 7.919-3.412 7.919-8.017 0-4.605-3.48-8.017-7.919-8.017-4.44 0-7.915 3.412-7.915 8.017"
          initial={true}
          // variants={textVariants}
          transform="matrix(.32913 0 0 -.32913 107.617 28.374)"
        />
      </g>

      <g
        data-path="Famatel"
        className={lettersStyle}
        // fill={fillColorText ? fillColorText : corpoColors.light}
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1.07183}
      >
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M474.971 322.325h12.242v-60.379h-12.242z"
          transform="matrix(.32913 0 0 -.32913 -56.527 116.963)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0h20.524c-.36 5.851-4.23 9.901-9.812 9.901C4.231 9.901 1.08 6.032 0 0m-12.242-4.951c0 13.684 9.272 24.305 22.775 24.305 14.853 0 22.776-11.343 22.776-27.816H-.179c.899-7.112 4.86-11.523 11.793-11.523 4.77 0 7.559 2.161 8.91 5.67h12.065c-1.713-8.19-9.004-15.121-20.886-15.121-15.303 0-23.945 10.711-23.945 24.485"
          transform="matrix(.32913 0 0 -.32913 86.913 21.503)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0h6.392l.006 14.199H18.37L18.363 0h7.922v-8.102h-7.922v-24.483c0-3.423 1.892-4.593 4.591-4.593 1.532 0 3.603.09 3.603.09v-9.002s-2.793-.179-7.652-.179c-5.943 0-12.513 2.341-12.513 11.072v27.095H0Z"
          transform="matrix(.32913 0 0 -.32913 73.047 15.548)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0c-13.438 0-19.472-7.048-19.88-15.105h10.894c.395 4.336 3.184 6.376 8.897 6.376 5.128 0 7.736-2.16 7.736-5.49 0-3.509-3.507-4.136-11.156-5.218-10.258-1.44-18.537-4.678-18.537-14.848 0-9.178 6.659-14.127 16.108-14.127 7.919 0 11.247 2.7 13.585 6.21h.24v-5.13H19.43l.007 6.839v23.485C19.437-6.21 13.857 0 0 0m7.919-31.044c0-4.5-3.869-8.822-10.887-8.822-4.321 0-7.199 1.531-7.199 5.852 0 4.319 3.149 5.759 9.538 7.199 3.06.718 6.388 1.438 8.548 2.7z"
          transform="matrix(.32913 0 0 -.32913 65.254 15.17)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0h11.793v-6.211h.27c2.519 4.23 7.022 7.47 13.412 7.47 5.851 0 10.535-3.24 12.783-8.1h.181c3.151 5.041 8.011 8.1 13.862 8.1 9.722 0 15.214-6.3 15.214-16.381V-46.18H55.271v28.986c0 5.222-2.61 7.922-7.11 7.922-5.132 0-8.283-3.959-8.283-10.082V-46.18H27.637v28.986c0 5.222-2.611 7.922-7.113 7.922-4.95 0-8.282-3.959-8.282-10.082V-46.18H0Z"
          transform="matrix(.32913 0 0 -.32913 34.053 15.548)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0c-13.438 0-19.472-7.048-19.88-15.105h10.894c.395 4.336 3.184 6.376 8.897 6.376 5.128 0 7.736-2.16 7.736-5.49 0-3.509-3.509-4.136-11.156-5.218-10.258-1.44-18.537-4.678-18.537-14.848 0-9.178 6.659-14.127 16.108-14.127 7.919 0 11.247 2.7 13.585 6.21h.24v-5.13H19.43l.007 6.839v23.485C19.437-6.21 13.857 0 0 0m7.919-31.044c0-4.5-3.869-8.822-10.889-8.822-4.319 0-7.197 1.531-7.197 5.852 0 4.319 3.149 5.759 9.538 7.199 3.058.718 6.388 1.438 8.548 2.7z"
          transform="matrix(.32913 0 0 -.32913 25.096 15.17)"
        />
        <motion.path
          initial={true}
          // variants={textVariants}
          d="M0 0v-64.364h13.052v26.645h27.995v11.164H13.052v15.483H46.09V0Z"
          transform="matrix(.32913 0 0 -.32913 2.646 9.563)"
        />
      </g>
    </motion.svg>
  );
};

export default SvgLogo;
