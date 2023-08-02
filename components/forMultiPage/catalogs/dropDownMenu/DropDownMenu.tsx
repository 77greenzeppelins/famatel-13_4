import { catalogStructureData } from '@/data/catalogStructureData';
import React from 'react';
import DropDownMenuCard from '../allCards/dropDownMenuCard/DropDownMenuCard';

const DropDownMenu = () => {
  return (
    <div
      className="w-full h-full fc bg-grey"
      //___spec-grad-grey-to-dark
    >
      <div className={`w-[98%] h-[80%] xl:h-[90%] fc border border-dark`}>
        <div
          data-layout="ProduktyDropDownMenu__griddedContainer"
          className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-[100vw] h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
          //___place-items-stretch
          //className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
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
            <div className="bg-dark">77</div>
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
