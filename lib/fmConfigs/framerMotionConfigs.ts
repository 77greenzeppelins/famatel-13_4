export const svgTransition = {
  type: 'spring',
  damping: 5,
  stiffness: 100,
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
