/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
import { categoriesForSlider } from '@/components/SVG/techDrawings/allSvgTech';
import { slidesWithF } from '@/components/SVG/logo/indexLogo';
/**TS**/
interface Props {
  categoryIndex: number;
  slideSize: number;
  slideIndex: number;
}
/**--------------------------------------**/
const SvgContent: React.FC<Props> = ({
  categoryIndex,
  slideSize,
  slideIndex,
}) => {
  if (typeof categoryIndex !== 'number') {
    return null;
  }
  const arrayToMap = categoriesForSlider[categoryIndex];

  // const createSlide = (categoryIndex: number) => {
  //   if (typeof categoryIndex === 'boolean') {
  //     console.log('................');
  //     return slidesWithF.map(({ Component }, i) => {
  //       if (i === slideIndex) {
  //         return (
  //           <div className="w-full h-full fc" key={i}>
  //             <Component />
  //           </div>
  //         );
  //       }
  //     });
  //   }
  //   const arrayToMap = categoriesForSlider[categoryIndex];
  //   return arrayToMap.map(({ Component }, i) => {
  //     if (i === slideIndex) {
  //       return (
  //         <div className="w-full h-full fc" key={i}>
  //           <Component basicSize={slideSize * 0.99} />
  //         </div>
  //       );
  //     }
  //   });
  // };

  // console.log('.......categoryIndex', categoryIndex);

  /**JSX**/
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.div
        key={categoryIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
        className="relative w-full h-full p-5 overflow-hidden rounded-md pointer-events-none fc bg-light"
      >
        {arrayToMap.map(({ Component }, i) => {
          if (i === slideIndex) {
            return (
              <div className="w-full h-full fc" key={i}>
                <Component basicSize={slideSize * 0.99} />
              </div>
            );
          }
        })}
        {/* {createSlide(categoryIndex)} */}
      </motion.div>
    </AnimatePresence>
  );
};

export default SvgContent;
