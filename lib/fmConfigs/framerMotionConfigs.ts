export const svgTransition = {
  type: 'spring',
  damping: 5,
  stiffness: 100,
  restDelta: 0.001,
};

export const heroBackgroundScrolledMarquee = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

export const imgOverlayVar = {
  initial: { opacity: 1 },
  animate: { opacity: 0, transition: { delay: 0.4, duration: 1 } },
};

/*
used in: <KontaktPage> / <HeroSection>
*/
export const opacityScaleYDynamicVariants = {
  from: { opacity: 0, scaleY: 0 },
  to: (delayVal: number) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.8,
      delay: 0.6 * delayVal,
      ease: 'easeInOut',
    },
  }),
};
/*
used in: <LinkLabelWithIcon /> ==> only one????
*/
export const opacityScaleYVariants = {
  from: {
    opacity: 0,
    scaleY: 0,
  },
  to: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

/*
used in: <BasicLink /> ==> only one time ?
*/
export const simpleOpacityVariants = {
  from: {
    opacity: 0,
    scale: 0.95,
  },
  to: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};
