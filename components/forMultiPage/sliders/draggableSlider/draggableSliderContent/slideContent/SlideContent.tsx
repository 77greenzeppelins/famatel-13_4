import React from 'react';
/**Components**/
import ImageContent from './imageContent/ImageContent';
import SvgContent from './svgContent/SvgContent';

/**-----------------------------**/
const SlideContent: React.FC<{
  currentCategory: number; // from 0 to 9 as we have 10 categories
  slideIndex: number;
  slideSize: number;
}> = ({ slideIndex, currentCategory, slideSize }) => {
  /*Just a handler...*/
  const contentCreator = ({
    categoryIndex,
    slideIndex,
  }: {
    categoryIndex: number;
    slideIndex: number;
  }) => {
    /*
    JSX of contentCreator
    if slide index is odd / "nieparzysty" return <ImageContent>
    */
    return slideIndex % 2 ? (
      <ImageContent
        categoryIndex={categoryIndex}
        slideIndex={
          slideIndex === 1 ? 0 : slideIndex - Math.ceil(slideIndex / 2)
        }
      />
    ) : (
      <SvgContent
        categoryIndex={categoryIndex}
        slideIndex={slideIndex === 0 ? 0 : slideIndex / 2}
        slideSize={slideSize}
      />
      // <div className="w-full h-full bg-light" />
    );
  };
  /**JSX**/
  return (
    <div className="w-full h-full disabled">
      {contentCreator({
        categoryIndex: currentCategory,
        slideIndex: slideIndex,
      })}
    </div>
  );
};

export default SlideContent;

{
  //__________________________________________________________________________________________________
  /* {slideIndex % 2 ? (
        <div className="w-full h-full p-2 bg-light">
          <div className="relative w-full h-full fc">
            <Image
              alt="produkt z kategorii"
          
              src={imgWtyczkiGniazda[slideIndex].image}
              fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      ) : (
        <p className="flex-col w-full h-full fc text-corpo">
          <span>{`slidesNumber: ${slidesNumber}`}</span>
          <span>{`index: ${slideIndex}`}</span>
        </p>
      )} */
}

{
  /* <div>{createSwitcher({ index: slideIndex })}</div> */
}
{
  /* <SquareImageHolder
        // imageData={createSwitcher({ index: slideIndex })}
        imageData={imgOFirmiePage[1].image}
        refDivStyle="flex justify-end items-center w-full h-full pb-[60px] md:pt-[30%]  lg:pb-0 lg:pt-[10%]"
        squareDivStyle="relative overflow-hidden"
        hasOverlay={false}
        //
        itemsNumber={100}
        columns={10}
        gridStyle="grid-cols-[repeat(10,_1fr)]"
        delayPerPixel={0.0008}
      ></SquareImageHolder> */
}
{
  /* <p className="flex-col w-full h-full fc text-corpo">
        <span>{`slidesNumber: ${slidesNumber}`}</span>
        <span>{`index: ${slideIndex}`}</span>
      </p> */
}
