'use client';
/**Components**/
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
import InViewAnimatedContent from '@/components/layout/containers/inView/InViewAnimatedContent';
import SvgLogoF from '@/components/SVG/logo/SvgLogoF';
import Witamy from '@/components/SVG/other/Witamy';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { kontaktPageData } from '@/data/basicData';

/**HardCoded staff**/
const springOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const HeroBackground = () => {
  const {
    heroBackground: { svgBasicSize },
  } = kontaktPageData;

  const {
    kontaktPageStyles: { svgContainerSizes },
  } = styles;
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

  const createMarquee = (i: number) => {
    return Array.from({ length: NumberOfSvgCells })
      .fill(0)
      .map((_, index) => (
        <div key={index} className={`fc ${svgContainerSizes} aspect-square`}>
          {(index + i) % 2 ? (
            <SvgLogoF svgStyle={'h-[50%]'} gStyle={'fill-greyShade1'} />
          ) : (
            <Witamy svgStyle={''} gStyle={''} />
          )}
        </div>
      ));
  };

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
          containerStyle="relative flex flex-col justify-around w-full h-full py-8"
          yFactor={'0'}
        >
          {Array.from({ length: 4 })
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex justify-start w-full">
                <motion.div
                  className="flex gap-4"
                  style={{ x: i % 2 ? xDividedNegative : xDivided }}
                >
                  {createMarquee(i)}
                </motion.div>
              </div>
            ))}

          {/* <div className="flex justify-start w-full">
            <motion.div className="flex gap-4" style={{ x: xDividedNegative }}>
              {createMarquee()}
            </motion.div>
          </div> */}
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default HeroBackground;
