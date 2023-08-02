import Image from 'next/image';

const GraphicSection = (props: ImageType_C) => {
  /**JSX**/
  return (
    <div
      data-component="GraphicSection_DropDownMenuCard"
      className="hidden sm:flex justify-center items-end relative h-[60%] w-full "
    >
      <div
        className="fc relative m-auto h-[90%] aspect-square bg-light p-2"
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
