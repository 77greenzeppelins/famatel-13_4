'use client';
/**Components**/
import FlyingLine from '@/components/forMultiPage/atomsLike/lines/flyingLine/FlyingLine';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**-----------------------------------------------------------------------------**/
const ScrollPrompt: React.FC = () => {
  /**JSX**/
  return (
    <motion.div
      className="absolute -top-5 bottom-[50%] md:top-[50%] md:bottom-[5%] right-[3%]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, delay: 3 },
      }}
    >
      <div className="flex h-full">
        <div className="relative w-[0.5px] h-full overflow-hidden">
          <FlyingLine variantsNumber={4} />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollPrompt;
