/**Framer Motion Staff*/
import { simpleOpacityVariants } from '@/lib/fmConfigs/framerMotionConfigs';
import { AnimatePresence, motion } from 'framer-motion';

/**------------------------------------------------------------------**/
const NamesDisplayer: React.FC<{
  names: (string | undefined)[];
  index: number;
  containerStyle?: string;
  labelName?: string;
  textStyle?: string;
}> = ({ names, index, containerStyle, labelName, textStyle }) => {
  /**JSX**/
  return (
    <div
      className={
        containerStyle ? containerStyle : 'flex justify-between w-[100px]'
      }
    >
      {labelName ? (
        <div>
          <p className={textStyle ? textStyle : 'text-xs text-grey'}>
            {labelName}
          </p>
        </div>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className={textStyle ? textStyle : 'text-xs text-grey disable-soft'}
          variants={simpleOpacityVariants}
          initial="from"
          animate="to"
          exit="exit"
        >
          {names[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default NamesDisplayer;

/*
<AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={digitStyle ? digitStyle : digitDefaultStyle}
            variants={opacityScaleYVariants}
            initial="from"
            animate="to"
            exit="exit"
          >{`${currentCategoryIndex + 1 < 10 ? '0' : ''}${
            currentCategoryIndex + 1
          } `}</motion.p>
        </AnimatePresence>

*/
