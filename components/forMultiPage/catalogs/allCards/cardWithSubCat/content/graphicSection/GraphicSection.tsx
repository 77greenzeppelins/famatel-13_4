import Image from 'next/image';

const GraphicSection = (props: ImageType_C) => {
  /**JSX**/
  return (
    <div
      data-component="GraphicSection_DropDownMenuCard"
      className="relative flex items-end justify-center"
    >
      <div
        className="relative p-4 overflow-hidden fc aspect-square bg-light max-h-[200px] md:max-h-[220px] lg:max-h-[260px]"
        //___ p-2 max-h-[200px] md:max-h-[220px] lg:max-h-[260px]
      >
        <Image
          // className="object-contain w-full h-full aspect-square "
          className="object-contain "
          alt={props.alt}
          src={props.path}
          width={320}
          height={320}
          // width={props.width}
          // height={props.height}
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
