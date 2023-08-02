import React from 'react';
/**Components**/
import DropDownMenuCard from '../allCards/dropDownMenuCard/DropDownMenuCard';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';

const DropDownMenu = () => {
  return (
    <div
      className="w-full h-full fc bg-dark"
      //___spec-grad-grey-to-dark
    >
      <div className={`w-full h-[90%] xl:h-[90%] fc`}>
        <div
          data-layout="ProduktyDropDownMenu__griddedContainer"
          /*
          ___1. initial layout is col-flex
          ___2. grid starts from w-358px
          */
          className="flex flex-col xs3xx:grid xs3xx:grid-rows-4 xs3xx:grid-cols-3 sm:grid-rows-3 sm:grid-cols-4 w-[100vw] h-full  px-[1rem] gap-[0.75rem]"
        >
          {catalogStructureData.map(
            ({
              mainCategoryIndex,
              mainCategoryName,
              mainCategoryUrl,
              mainCategoryImage,
            }) => (
              <DropDownMenuCard
                key={mainCategoryIndex}
                catIndex={mainCategoryIndex}
                catName={mainCategoryName}
                catPath={mainCategoryUrl}
                catImage={mainCategoryImage}
              />
            )
          )}

          <div className="col-start-2 sm:col-start-3 col-span-full ">
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
