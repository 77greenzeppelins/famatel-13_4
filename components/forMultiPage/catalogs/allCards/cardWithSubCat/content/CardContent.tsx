/**Components**/
import { motion } from 'framer-motion';
import GraphicSection from './graphicSection/GraphicSection';
/**Basic Data**/
import { styles } from '@/styles';
import { imgOverlayVar } from '@/lib/fmConfigs/framerMotionConfigs';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
/**TS**/
const CardContent = ({ catName, catImage, catIndex }: CatalogCardType) => {
  /**JSX**/
  return (
    <div
      data-component="CardContent"
      className="flex items-center w-full h-full overflow-hidden rounded-md "
    >
      <div className="relative w-[50%] h-full pl-2 py-2">
        <div className="w-full h-full overflow-hidden rounded-md fc bg-light">
          <GraphicSection {...catImage} />
        </div>
        <motion.div
          className="absolute inset-0 bg-dark"
          variants={imgOverlayVar}
          initial="initial"
          animate="animate"
        />
      </div>
      <div
        data-layout="BasicCardMainSection__textSection"
        className="flex items-center flex-col gap-y-4 h-full w-[50%] px-4  xs3xx:px-6 py-6 bg-dark"
        //___bg-gradient-to-r from-light to-grey
      >
        <div className=" flex items-end justify-center h-[40%]">
          <TwoDigitsDisplayer
            index={catIndex}
            textStyle={`text-2xl xs3xx:text-3xl text-grey group-hover:text-light ${styles.basicAnimation}`}
            containerStyle={`fc border-r border-greyShade2  p-[0.25rem]  group-hover:border-light ${styles.basicAnimation}`}
          />
        </div>
        <div className="h-[60%] flex justify-center items-start">
          <p
            className={`text-regular text-center text-grey group-hover:text-light ${styles.basicAnimation}`}
            //___ //  group-hover:scale-[1.05] ${styles.lazyAnimation}
          >
            {catName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
