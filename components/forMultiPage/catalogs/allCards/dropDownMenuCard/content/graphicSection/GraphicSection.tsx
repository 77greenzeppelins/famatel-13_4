import Image from 'next/image';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import { imgOverlayVar } from '@/lib/fmConfigs/framerMotionConfigs';

const GraphicSection = (props: ImageType_C) => {
  /**JSX**/
  return (
    <div
      data-component="GraphicSection_DropDownMenuCard"
      className="relative items-end justify-center hidden w-full sm:flex"
    >
      <div
        /*
      ___1. why "max-h" ? because aspect-square depends on height and in some "proportions" image expands its space
      */
        className="relative fc h-[80%] max-h-[100px] md:h-[90%] md:max-h-[120px] aspect-square bg-light p-2 overflow-hidden rounded-sm"
        // variants={cardVariants}
        // initial="initial"
        // animate="animate"
      >
        <Image
          className="object-contain w-full h-full aspect-square "
          alt={props.alt}
          src={props.path}
          // width={props.width}
          // height={props.height}
          width={260}
          height={260}
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-dark"
        variants={imgOverlayVar}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default GraphicSection;
