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
