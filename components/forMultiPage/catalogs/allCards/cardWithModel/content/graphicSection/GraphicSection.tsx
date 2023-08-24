import Image from 'next/image';

const GraphicSection = (props: ImageType_C) => {
  /**JSX**/
  return (
    <div
      data-component="GraphicSection_DropDownMenuCard"
      className="relative p-4 overflow-hidden fc aspect-square bg-light max-h-[200px] md:max-h-[220px] lg:max-h-[260px]"
      //___ p-2 max-h-[200px] md:max-h-[220px] lg:max-h-[260px]
    >
      <Image
        className="object-contain "
        alt={props.alt}
        src={props.path}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default GraphicSection;
