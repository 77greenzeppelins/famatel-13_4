import { doPobrania_chapters_svgDark } from '@/components/SVG/techDrawings/0_dark/darkBackground';
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  stateId?: string | null;
  componentstyle?: string;
  //   componentsArray:
}

const ComponentsBasicSlider = ({ stateId, componentstyle }: Props) => {
  return (
    <ul className="relative w-full h-full fc">
      {doPobrania_chapters_svgDark.map(({ id, Component }) => {
        if (stateId === id) {
          return (
            <motion.li
              key={id}
              className="absolute w-full h-full fc "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, duration: 0.4 },
              }}
            >
              <Component
                className={
                  componentstyle
                    ? componentstyle
                    : 'w-[86%] aspect-square max-h-[540px]'
                }
              />
            </motion.li>
          );
        }
      })}
    </ul>
  );
};

export default ComponentsBasicSlider;

{
  /* <motion.li
          key={id}
          className="absolute w-full h-full fc "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          exit={{
            opacity: 0,
            scale: 1,
          }}
        >
          <Component className={`w-[80%] aspect-square max-h-[540px] `} />
        </motion.li> */
}
