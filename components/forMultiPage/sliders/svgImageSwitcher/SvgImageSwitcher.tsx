import { useState } from 'react';
import Image from 'next/image';
/**Components**/
import NavSection from './navSection/NavSection';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';

const SvgImageSwitcher = (props: ImageType_C) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState(0);
  /**JSX**/
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex flex-col items-center w-full h-full gap-4"
    >
      <div className="w-full h-[40px] xl:max-w-[600px]">
        <NavSection
          basicState={basicState}
          setBasicState={setBasicState}
          modelName={props.model}
        />
      </div>
      <div className="relative w-full h-full fc">
        <AnimatePresence>
          {basicState ? (
            <motion.div
              key={basicState}
              className="absolute w-full h-full m-auto"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { delay: 0, duration: 0.4 },
              }}
            >
              <Image
                src={props.path}
                alt={props.alt}
                width={props.width}
                height={props.height}
                className="container max-w-[500px]"
              />
            </motion.div>
          ) : (
            <motion.div
              key={basicState}
              className="absolute w-full h-full bg-grey"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { delay: 0, duration: 0.4 },
              }}
            />
          )}
        </AnimatePresence>

        {/* <SlidesSection imageData={imageData} basicState={basicState} /> */}
      </div>
    </div>
  );
};

export default SvgImageSwitcher;
