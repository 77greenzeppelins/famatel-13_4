'use client';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**TS**/
type Props = {
  componentIsInView?: boolean;
  text?: string;
  textStyle?: string;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({
  componentIsInView = false,
  text,
  textStyle,
}) => {
  /**JSX**/
  return (
    <div className="width-full">
      <motion.p
        data-component="AnimatedText__p"
        className="text-center text-grey text-medium"
        animate={{
          opacity: componentIsInView ? 1 : 0,
          scale: componentIsInView ? 1 : 0.9,
        }}
        transition={{
          duration: 0.6,
          delay: 0,
        }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default AnimatedText;
