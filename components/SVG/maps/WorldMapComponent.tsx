'use client';
import React, { useRef } from 'react';
/**Components**/
import SvgWordMap from './SvgWordMap';
/**Hook Staff**/
import useWindowSize from '@/lib/hooks/useWindowSize';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { worldMapConfig } from '@/data/basicData';

/**TS**/
interface Props {
  componentIsInView?: boolean;
  widthToDrag?: number;
  outherContainerStyle?: string;
  innerContainerStyle?: string;
}

/**-----------------------------------------**/
const WorldMapComponent: React.FC<Props> = ({
  componentIsInView,
  widthToDrag = worldMapConfig.isDraggable_2,
  outherContainerStyle,
  innerContainerStyle,
}) => {
  const constraintsRef = useRef(null);
  /**...**/
  const { width } = useWindowSize();
  //___if width is less then passed number dragging is disabled
  const dragCondition = width <= widthToDrag;

  /**JSX**/
  return (
    <motion.div
      data-component="WorldMapComponent"
      className={
        outherContainerStyle
          ? outherContainerStyle
          : 'fc w-full overflow-hidden bg-dark'
      }
      // variants={cardVariants}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1 },
      }}
    >
      <motion.div
        aria-label="Element przesuwny / drag event"
        aria-grabbed={dragCondition}
        ref={constraintsRef}
        drag={dragCondition ? 'x' : false}
        className={
          innerContainerStyle
            ? innerContainerStyle
            : 'relative w-full min-w-[800px] '
        }
        dragSnapToOrigin={true}
        dragElastic={0.9}
        dragMomentum={true}
        style={{ overflow: 'clip' }}
      >
        <motion.div
          className="absolute overflow-hidden right-2 left-4 top-1 bottom-1 special-gradient z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        />
        <SvgWordMap containerStyle="relative w-full z-10 " />
      </motion.div>
    </motion.div>
  );
};

export default WorldMapComponent;
