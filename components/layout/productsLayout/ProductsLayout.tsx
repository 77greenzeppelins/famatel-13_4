'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
/**Components**/
import AdvancedCatalogNavigation from '@/components/forMultiPage/navigations/catalogAdvancedNav/AdvancedCatalogNavigation';
/**Basic Data**/
import { AdvancedCatalogNavigationData } from '@/data/basicData';
import { mainCategoriesNames, mainCategoriesPath } from '@/data/routingData';
import { catalogStructureData } from '@/data/catalogStructureData';
import { createModelData, createSubCategoryData } from './handlers/handlers';

const ProductsLayout = () => {
  /**Data destr...**/
  const { toBeMounted } = AdvancedCatalogNavigationData;
  /*
  ___1. get current path
  ___2. split path and count how many item the array has
  ___3. value of of array.length allows to mount or dismount the whole component  
  */
  const pathname = usePathname();
  const pathSegments = pathname.split('/'); // exemple: ['', 'produkty', 'przemyslowe-wtyczki-i-gniazda', 'some-subCategory' , 'some-model']
  //   console.log('pathSegments', pathSegments);
  const mountingCondition = pathSegments.length > toBeMounted;

  /*
  ___1. slice array after the secon items ==> first two items refers to empty string and "produkty" ==>they are irelavant and we can ommit them ==> we are actually interested in items with index 2 & 3 & 4 that are categoryName,  subCategoryName and model name respectivelly; 
   */
  const catalogLevels = pathSegments.slice(toBeMounted); // starts from ['some-category', 'some-subCategory', 'some-model'] ==> min / max length  [1,3]

  const mainCategoryIndex: number = mainCategoriesPath.findIndex(
    item => item === catalogLevels[0]
  );
  const mainCategoryName: string = mainCategoriesNames[mainCategoryIndex];

  /**JSX**/
  return mountingCondition ? (
    <div
      className="flex flex-col w-full pt-6 pb-2 gap-y-6 wrapper-1"
      //___border-b border-b-greyShade2
    >
      <AdvancedCatalogNavigation
        catalogLevel={catalogLevels}
        mainCategoryName={mainCategoryName}
        subCategoryData={createSubCategoryData(
          mainCategoryIndex,
          catalogLevels
        )}
        modelData={createModelData(mainCategoryIndex, catalogLevels)}
      />
      <div className="h-[20px] md:h-[40px] lg:h-[60px] wrapper-1 border-t border-greyShade2" />
    </div>
  ) : null;
};

export default ProductsLayout;
/*

  const categoryIndex: number = mainCategoriesPath.findIndex(
    item => item === relevantPathSegments[0]
  );
  // console.log('categoryIndex', categoryIndex);
  const subCatIndex: number = catalogStructureData[
    categoryIndex
  ].subCategoriesSegments.findIndex(item => item === relevantPathSegments[1]);
  // console.log('subCatIndex', subCatIndex);
  const modelIndex = catalogStructureData[categoryIndex].catAllModels[
    subCatIndex
  ].findIndex(
    ({ modelPathSegmant }) => modelPathSegmant === relevantPathSegments[2]
  );

*/

{
  /* <div className="flex gap-x-5">
        <Link
          className="px-[4px] border border-greyShade2 text-small text-greyShade2"
          href={`${pathname}/wtyczki-i-gniazda-przenosne`}
        >
          go to subCat{' '}
        </Link>
        <Link
          className="px-[4px] border border-greyShade2 text-small text-greyShade2"
          href={`${pathname}/666`}
        >
          go to model{' '}
        </Link>
      </div> */
}
