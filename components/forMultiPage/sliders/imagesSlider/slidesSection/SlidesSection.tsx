import React from 'react';
import Image from 'next/image';
/*Hook*/
import useMeasure from 'react-use-measure';
/*Framer Motion Staff*/
import { motion } from 'framer-motion';
/**TS**/

/**********************************************************************************/
const SlidesSection: React.FunctionComponent<{
  imageData: ImageType_C[];
  basicState: number;
  imageDirectContainer?: string;
}> = ({ imageData, basicState, imageDirectContainer }) => {
  /**useMeasure Section**/
  const [ref, { width, height }] = useMeasure();
  /**JSX**/
  return (
    <div
      ref={ref}
      data-component="SlidesSection__container"
      className="relative flex justify-center w-full max-w-[600px] h-full"
    >
      <div
        data-layout="sliderWrapper"
        className="overflow-hidden bg-light"
        style={{
          width: width,
          height: width,
        }}
      >
        <motion.div
          data-layout="slidingContainer"
          className="flex items-center w-full h-full flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: basicState * -width }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeIn' }}
        >
          {imageData.map(({ path, width: w, height: h }, i) => (
            <div
              key={i}
              className="flex-none fc"
              style={{
                width: width,
                height: height,
              }}
            >
              <div
                className={
                  imageDirectContainer ? imageDirectContainer : `relative`
                }
              >
                <Image
                  alt={'zdjęcie produktu'}
                  src={path}
                  width={600}
                  height={600}
                  //   width={w}
                  //   height={h}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidesSection;
