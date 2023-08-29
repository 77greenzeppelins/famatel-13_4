import React, { memo, useRef } from 'react';
/**Components**/
import RowOfSlides from './draggableSliderContent/RowOfSlides';
import InViewContainer from '@/components/layout/containers/inView/InViewContainer';
/**Hook Staff**/
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**HardCoded Staff**/
const largeCellSize = 280;
const smallCellSize = 150;
const minAxisSizeForLargeCell = 768; //in relation with <Section_1> / <GraphisSection>'s container h-[340px] xs:h-[440px]
const sliderMaxWidth = 2000; //___max 2000px; it's a matter of items in array
const slidesNumberOffset = 4;

/**TS**/
interface Props {
  axis: 'x' | 'y';
  axisSize: number;
  currentCategory: number;
}
/**-------------------------------------------------------**/
const DraggableSlider = memo(function DraggableSlider({
  axis,
  axisSize,
  currentCategory,
}: Props) {
  /**References**/
  const constraintsRef = useRef(null);
  /*
  ___1. slide size depends on "axisSize" ==> it mighr be a width or height of choosen "referencialContainer" (might be window or some component);  
  */
  const slideSide =
    axisSize > minAxisSizeForLargeCell ? largeCellSize : smallCellSize;
  const minNumberOfSlides = Math.trunc(
    Math.min(axisSize, sliderMaxWidth) / slideSide + slidesNumberOffset
  );
  // console.log('minNumberOfSlides:', minNumberOfSlides);

  /**JSX**/
  return (
    <div
      data-component="DraggableSlider__container"
      ref={constraintsRef}
      className="relative h-full overflow-hidden rounded-lg fc w-fit"
      /*
     before:absolute before:h-[2%] before:top-0 before:w-full before:max-h-[40px] before:bg-gradient-to-b before:from-dark via-dark before:to-transparent before:z-10 after:absolute after:h-full after:right-0 after:w-[5%] after:max-w-[40px] after:bg-gradient-to-l after:from-dark after:to-transparent
      
      */
    >
      <motion.div
        aria-label="Element przesuwny / draggable event"
        drag={axis}
        dragConstraints={constraintsRef}
        // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragSnapToOrigin={false}
        dragElastic={0.9}
        dragMomentum={true}
      >
        <div className="w-full h-full">
          <RowOfSlides
            //___just to follow category changes...
            currentCategory={currentCategory}
            //___just to specify slides...
            slidesNumber={minNumberOfSlides}
            slideSide={300}
            //___
          />
        </div>
      </motion.div>
    </div>
  );
});

export default DraggableSlider;

/**Direct Child**/
// const LineOfSlides = ({
//   slidesNumber,
//   slideSide,
// }: {
//   slidesNumber: number;
//   slideSide: number;
// }) => {
//   // if (!slidesNumber) return;
//   /**JSX**/
//   return (
//     <>
//       {Array.from({ length: slidesNumber }).map((_, i) => {
//         return (
//           <div
//             key={i}
//             className="flex flex-col border border-greyShade2"
//             style={{ width: slideSide, height: slideSide }}
//             // className="w-[250px]  h-[250px] border"
//             // className={`w-[${slideSide}px]  h-[${slideSide}px] border`}
//             // className={`${cellSize} border`}
//           >
//             <p className="flex-col w-full h-full fc text-corpo">
//               <span>{`n: ${slidesNumber}`}</span>
//               <span>{`i: ${i}`}</span>
//             </p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

{
  /* <LineOfSlides
          slidesNumber={minNumberOfSlides + 4}
          slideSide={slideSide}
        /> */
}
