/**Components**/
import { motion } from 'framer-motion';
import GraphicSection from './graphicSection/GraphicSection';
/**Basic Data**/
import { styles } from '@/styles';
import { imgOverlayVar } from '@/lib/fmConfigs/framerMotionConfigs';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
/**TS**/

const CardContent = ({ catName, catImage, modelIndex }: CardContentProps) => {
  /**JSX**/
  return (
    <div
      data-component="CardContent"
      className="flex items-center w-full h-full overflow-hidden rounded-md "
    >
      <div className="relative h-full w-[50%] px-4 fc xs3xx:px-6 bg-light">
        <GraphicSection {...catImage} />
        <motion.div
          className="absolute inset-0 bg-dark"
          variants={imgOverlayVar}
          initial="initial"
          animate="animate"
        />
      </div>
      <div
        data-layout="BasicCardMainSection__textSection"
        className="flex items-center flex-col gap-y-6 h-full w-[50%] px-4  xs3xx:px-6 py-6 bg-dark"
        //___bg-gradient-to-r from-light to-grey
      >
        <TwoDigitsDisplayer
          index={modelIndex}
          textStyle="text-medium text-greyShade2"
          containerStyle={`fc sm:border-r border-greyShade2  p-[0.25rem]  group-hover:border-light ${styles.basicAnimation}`}
        />
        <p
          className={`text-regular text-center text-grey`}
          //___ //  group-hover:scale-[1.05] ${styles.lazyAnimation}
        >
          {catName}
        </p>
      </div>
    </div>
  );
};

export default CardContent;
