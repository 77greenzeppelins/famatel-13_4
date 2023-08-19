import Image from 'next/image';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import { imgOverlayVar } from '@/lib/fmConfigs/framerMotionConfigs';

const GraphicSection = (props: ImageType_C) => {
  /**JSX**/
  return (
    <div
      data-component="GraphicSection_DropDownMenuCard"
      className="relative flex items-end justify-center w-full"
    >
      <div className="relative fc h-[80%] md:h-[90%]  aspect-square bg-light p-2">
        <Image
          className="object-contain w-full h-full aspect-square "
          alt={props.alt}
          src={props.path}
          width={props.width}
          height={props.height}
        />
      </div>
      {/* <motion.div
        className="absolute inset-0 bg-dark"
        variants={imgOverlayVar}
        initial="initial"
        animate="animate"
      /> */}
    </div>
  );
};

export default GraphicSection;
