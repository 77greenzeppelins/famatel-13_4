'use client';
import { kontaktPageText } from '@/data/textData';
/**Hardcoded Staff*/
const witajStyle =
  'text-light text-5xl xxs:text-[4.5rem] xs:text-9xl font-bold tracking-[1.5px] lg:tracking-[1.5px] word-spacing-0125 lg:word-spacing-025 disable-soft';
const sentenceStyle =
  'text-base lg:text-xl lg:text-2xl text-grey text-center  tracking-[1.5px] lg:tracking-[2px] word-spacing-0125 lg:word-spacing-025 disable-soft';

/**Framer Motion Staff*/
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { opacityScaleYDynamicVariants } from '@/lib/fmConfigs/framerMotionConfigs';

const springOptions = {
  // damping: 100,
  // mass: 10,
  // stiffness: 100,
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

/**------------------------------**/
const HeroSection = () => {
  /**...*/
  let { scrollY, scrollYProgress } = useScroll();
  const scrollSpringed = useSpring(scrollYProgress, springOptions);
  const scrollSpringedTransformed = useTransform(
    scrollSpringed,
    value => 1 - value
  );
  let animatedVal_1 = useTransform(scrollY, [0, 200], [0, 1]);

  //____________

  /**JSX**/
  return (
    <section className="sticky top-[50px] inset-x-0 flex flex-col justify-center gap-y-4 h-[100vh] xl:flex-row xl:gap-x-14 xl:w-[90%] xl:mx-auto xxl:w-[80%] z-0 px-2 overflow-hidden">
      <motion.div className="flex justify-center transition-all xl:justify-start xl:items-center gap-x-6">
        <motion.div
          custom={1}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p
            className={`${witajStyle} text-right`}
            // style={{ scale: animatedVal_2 }}
            style={{ scale: scrollSpringedTransformed }}
          >
            Witamy
          </motion.p>
        </motion.div>
        <motion.div
          custom={1.4}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p
            className={`${witajStyle} text-right `}
            style={{ scale: scrollSpringedTransformed }}
          >
            !
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="fc ">
        <motion.div
          className="lg:w-[70%] xl:w-full"
          custom={1.8}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p
            className={sentenceStyle}
            style={{ scale: scrollSpringedTransformed }}
          >
            {kontaktPageText.hero.tex1}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: animatedVal_1 }}
        className="absolute inset-y-0 left-0 right-0 bg-dark "
      />
    </section>
  );
};

export default HeroSection;
