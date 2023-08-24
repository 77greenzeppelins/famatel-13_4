/**Components**/
import { motion } from 'framer-motion';
import GraphicSection from './graphicSection/GraphicSection';
/**Basic Data**/
import { styles } from '@/styles';
import { imgOverlayVar } from '@/lib/fmConfigs/framerMotionConfigs';
import TwoDigitsDisplayer from '@/components/forMultiPage/atomsLike/digitsDisplayer/twoDigitsDisplayer/TwoDigitsDisplayer';
/**TS**/

const CardContent = ({
  modelImage,
  modelIndex,
  type,
  collection,
  textIcons,
}: CardContentProps) => {
  /**JSX**/
  return (
    <div
      data-component="CardContent"
      className="flex items-center w-full h-full overflow-hidden rounded-md "
    >
      <div
        className="relative fc w-[50%] h-full pl-2 py-2"
        // className="relative flex items-center justify-end w-[50%] h-[92%]"
        //___px-2 fc xs3xx:px-6
      >
        <div
          className="w-full overflow-hidden rounded-md h-ful fc bg-light"
          //__(!) setter: h-full
          //  className="h-full w-[94%] fc bg-light rounded-md overflow-hidden"
        >
          <GraphicSection {...modelImage} />
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
        className="relative flex items-center flex-col gap-y-2 h-full w-[50%] px-4  xs3xx:px-6 py-6 bg-dark"
        //___bg-gradient-to-r from-light to-grey
      >
        <TwoDigitsDisplayer
          index={modelIndex}
          textStyle={`text-2xl xs3xx:text-3xl text-grey group-hover:text-light ${styles.basicAnimation}`}
          containerStyle={`fc border-r border-greyShade2  p-[0.25rem]  group-hover:border-light ${styles.basicAnimation}`}
        />
        <p
          className={`text-card text-center text-grey`}
          //___ //  group-hover:scale-[1.05] ${styles.lazyAnimation}
        >
          {type}
        </p>
        <p
          className={`text-card text-center text-grey`}
          //___ //  group-hover:scale-[1.05] ${styles.lazyAnimation}
        >
          {collection}
        </p>

        <div
          className="absolute bottom-2 md:bottom-4"
          //___flex-wrap
        >
          <div className="flex flex-wrap gap-1 fc">
            {textIcons &&
              textIcons.map((textIcon, i) => (
                <div
                  key={i}
                  className="relative items-center justify-center hidden xxs:flex "
                >
                  {/* <div className="absolute w-full h-full duration-300 ease-in border rounded-sm border-light opacity-60 group-hover:opacity-100" />
                <p
                  className="text-center duration-300 ease-in text-small text-light opacity-70 group-hover:opacity-100 p-small "
                  //___header-link-label
                >
                  {textIcon}
                </p> */}
                  <div
                    className={`w-full h-full px-2 py-[3px] border rounded-sm border-greyShade1 group-hover:border-light ${styles.basicAnimation}`}
                  >
                    <p
                      className={`text-center text-small text-greyShade1 group-hover:text-light ${styles.basicAnimation}`}
                      //___header-link-label
                    >
                      {textIcon}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
