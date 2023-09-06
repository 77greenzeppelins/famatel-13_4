'use client';
import React, { useState } from 'react';
/*Components*/
// import NavSection from './navSection/NavSection';
import SlidesSection from './slidesSection/SlidesSection';
import NavSection from '../svgImageSwitcher/navSection/NavSection';
/**TS**/

/*****************************************************************************************/
const ImageSlider: React.FunctionComponent<{
  imageData: ImageType_C[];
  imageDirectContainer?: string;
}> = ({
  imageData,
  imageDirectContainer, //allowes to style <div> that wraps <Image>
}) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState<number>(0);
  /**...**/
  const modelsNames = imageData.map(item => `Model: ${item.model}`);

  /**JSX**/
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex flex-col items-center w-full h-full gap-4"
    >
      <div className=" w-full h-[40px] ">
        <NavSection
          basicState={basicState}
          setBasicState={setBasicState}
          showArrows={true}
          modelsLabels={modelsNames}
          //   modelsNames={modelsNames}
        />
      </div>
      <div className="w-full h-full fc">
        <SlidesSection
          imageData={imageData}
          basicState={basicState}
          imageDirectContainer={imageDirectContainer}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
