import Image from 'next/image';

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
        className="fc h-[80%] max-h-[100px] md:h-[90%] md:max-h-[120px] xl:max-h-[150px] aspect-square bg-light p-2"
        // variants={cardVariants}
        // initial="initial"
        // animate="animate"
      >
        <Image
          className="object-contain w-full h-full aspect-square "
          alt={props.alt}
          src={props.path}
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
  );
};

export default GraphicSection;
