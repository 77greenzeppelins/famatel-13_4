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
import { heroBackgroundScrolledMarquee } from '@/lib/fmConfigs/framerMotionConfigs';
/**Tailwind Styles**/
import { styles } from '@/styles';
/**Basic Data**/
import { corpoColors, produktyPageData } from '@/data/basicData';
import { iconsFromCatalog } from '@/components/SVG/icons/catalogIcons/indexIconsFromCatalog';

/**------------------------------**/
const HeroBackground = () => {
  const {
    heroBackground: { svgBasicSize, marqueeGap },
  } = produktyPageData;

  const {
    produktyPageStyles: { svgContainerSizes, marqueeContainer },
  } = styles;
  /*
  ___1. reference to container
  */
  const [ref, { height, width }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollY } = useScroll();
  const x = useSpring(scrollY, heroBackgroundScrolledMarquee);
  //___
  const xDivided = useTransform(x, value => value / 4);
  //___
  const xDividedNegative = useTransform(x, value => value / -4);
  //___
  const NumberOfSvgCells = Math.ceil(width / (svgBasicSize + marqueeGap));

  const createMarqueeCells = (i: number) => {
    return iconsFromCatalog
      .slice(0, NumberOfSvgCells)
      .map(({ id, Icon }, i) => (
        <Icon
          key={`${id}-${i}`}
          svgStyle={`fc ${svgContainerSizes} aspect-square disable`}
          colorFG={corpoColors.greyShade1}
        />
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
        outherContainerStyle="w-full h-full"
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
              <div
                key={i}
                className={`flex ${
                  i % 2 ? 'justify-start' : 'justify-end'
                }  w-full`}
              >
                <motion.div
                  className={`flex ${marqueeContainer}`}
                  style={{ x: i % 2 ? xDividedNegative : xDivided }}
                >
                  {createMarqueeCells(i)}
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
