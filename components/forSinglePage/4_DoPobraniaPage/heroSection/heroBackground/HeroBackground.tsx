'use client';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
/**Basic Data**/
import {
  svgTech_darkBackground,
  svgTech_darkBackground2,
  svgTech_darkBackground3,
} from '@/components/SVG/techDrawings/0_dark/darkBackground';
import { doPobraniaPageData } from '@/data/basicData';

/**HardCoded staff**/
const svgContainerSizes = 'w-[220px] h-[220px]';
const springOptions = {
  // damping: 100,
  // mass: 10,
  // stiffness: 100,
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const HeroBackground = () => {
  const {
    heroBackground: { heightValue, svgBasicSize },
  } = doPobraniaPageData;
  /*
  ___1. reference to container
  */
  const [ref, { height, width }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollY } = useScroll();
  const x = useSpring(scrollY, springOptions);
  //___
  const xDivided = useTransform(x, value => value / 4);
  //___
  const xDividedNegative = useTransform(x, value => value / -4);
  //___
  const NumberOfSvgCells = Math.ceil(width / svgBasicSize);

  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="HeroBackground__container_for_useMeasure"
      ref={ref}
      className="absolute inset-0 hidden overflow-hidden md:block z-5"
    >
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-[90%] "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={0.2}
      >
        <InViewAnimatedContent
          containerStyle="relative flex flex-col justify-around w-full h-full"
          yFactor={'0'}
        >
          {/* <div>HeroBackground</div> */}
          {
            //__optional
            height > heightValue ? (
              <div className="flex justify-start w-full">
                <motion.div
                  className="flex gap-4 transition-all ease-in-out"
                  style={{ x: xDividedNegative }}
                >
                  {svgTech_darkBackground3
                    .slice(0, NumberOfSvgCells)
                    .map(({ model, Component }, index) => (
                      <div
                        key={index}
                        className={`fc ${svgContainerSizes} aspect-square`}
                      >
                        <Component
                          className={`fc ${svgContainerSizes} aspect-square`}
                        />
                      </div>
                    ))}
                </motion.div>
              </div>
            ) : null
          }
          <div className="flex justify-end w-full">
            <motion.div
              className="flex gap-4 transition-all ease-in-out"
              style={{ x: xDivided }}
            >
              {svgTech_darkBackground
                .slice(0, NumberOfSvgCells)
                .map(({ model, Component }, index) => (
                  <div
                    key={index}
                    className={`fc ${svgContainerSizes} aspect-square`}
                  >
                    <Component
                      className={`fc ${svgContainerSizes} aspect-square`}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
          <div
            //  className="flex justify-start w-full"
            className="flex justify-start w-full"
          >
            <motion.div
              className="flex gap-4 "
              //___transition-all ease-in-out
              style={{ x: xDividedNegative }}
              transition={{ stiffness: 100, damping: 30, restDelta: 0.001 }}
            >
              {svgTech_darkBackground2
                .slice(0, NumberOfSvgCells + 1)
                .map(({ Component }, i) => (
                  <div
                    key={i}
                    className={`fc ${svgContainerSizes} aspect-square`}
                  >
                    <Component
                      className={`fc ${svgContainerSizes} aspect-square`}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default HeroBackground;
