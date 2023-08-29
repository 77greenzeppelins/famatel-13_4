/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
// import { categoriesForSlider } from '../../../../../../../../SVG/techDrawings/allSvgTech';

//_______________________
import { svgTech_1_1 } from '@/components/SVG/techDrawings/1_wtyczki-gniazda/1.1_przenosne/svgTech_1.1';

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
  // const arrayToMap = categoriesForSlider[categoryIndex];

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
        {/* {arrayToMap.map(({ Component }, i) => {
          if (i === slideIndex) {
            return (
              <div className="w-full h-full fc" key={i}>
                <Component basicSize={slideSize * 0.99} />
              </div>
            );
          }
        })} */}
        {svgTech_1_1.map(({ Component }, i) => {
          if (i === slideIndex) {
            return (
              <div className="w-full h-full fc" key={i}>
                <Component basicSize={slideSize * 0.99} />
              </div>
            );
          }
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default SvgContent;

// <p className="flex-col w-full h-full fc text-corpo">
//   <span>{`slidesLineIndex: ${slidesLineIndex}`}</span>
//   <span>{`index: ${slideIndex}`}</span>
//   <span>{`categoryIndex: ${categoryIndex}`}</span>
// </p>

/**Switcher**/
//   const renderContent = useCallback(
//     ({ iconID, colorFG }: { iconID?: string; colorFG?: string }) => {
//       switch (iconID) {
//         case 'IP50':
//           return <SvgIconIP ID={'50'} colorFG={colorFG} size={50} />;
//         case 'two':
//           return 'TWO';
//         case 'three':
//           return 'THREE';
//         case 'four':
//           return 'FOUR';
//         default:
//           return 'ONE';
//       }
//     },
//     []
//   );
