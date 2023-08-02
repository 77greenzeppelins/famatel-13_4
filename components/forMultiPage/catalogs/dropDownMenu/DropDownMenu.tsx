import { catalogStructureData } from '@/data/catalogStructureData';
import React from 'react';
import DropDownMenuCard from '../allCards/dropDownMenuCard/DropDownMenuCard';

const DropDownMenu = () => {
  return (
    <div
      className="w-full h-full fc bg-dark"
      //___spec-grad-grey-to-dark
    >
      <div className={`w-full h-[90%] xl:h-[90%] fc`}>
        <div
          data-layout="ProduktyDropDownMenu__griddedContainer"
          className="flex flex-col xs3xx:grid xs3xx:grid-rows-4 xs3xx:grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-[100vw] h-full  px-[1rem] gap-[0.75rem]"
        >
          {catalogStructureData.map(
            ({
              mainCategoryIndex,
              mainCategoryName,
              mainCategoryUrl,
              mainCategoryImage,
            }) => (
              // <div key={mainCategoryIndex}> {mainCategoryIndex}</div>
              <DropDownMenuCard
                key={mainCategoryIndex}
                catIndex={mainCategoryIndex}
                catName={mainCategoryName}
                catPath={mainCategoryUrl}
                catImage={mainCategoryImage}
              />
              // <Card_Basic
              //   key={mainCategoryIndex}
              //   url={mainCategoryUrl}
              //   imageData={mainCategoryImage}
              //   arrayIndex={mainCategoryIndex}
              //   label={mainCategoryName}
              //   heightMattersCondition={true}
              //   textStyle={normalCardTextStyle}
              // />
            )
          )}

          <div className="col-start-2 xs:col-start-3 col-span-full ">
            <div className="items-center justify-center hidden w-full h-full border xs3xx:flex border-greyShade2">
              77
            </div>
            {/* <SpecialCard
              mediumTextStyle={specialCardTextStyle}
              largeTextStyle={largeTextStyle}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
