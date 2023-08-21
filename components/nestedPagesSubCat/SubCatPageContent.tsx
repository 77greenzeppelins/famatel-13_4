'use client';

import { catalogStructureData } from '@/data/catalogStructureData';
import CatalogGrid from '../forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithModel from '../forMultiPage/catalogs/allCards/cardWithModel/CatalogCardWithModel';

// import { mainCategoriesPath } from "@/data/routingData";

// mainCategoriesPath

const SubCatPageContent = (props: DynamicSubCatContent) => {
  /**...*/
  const categoryStaff = catalogStructureData[props.mainCatIndex];
  const { allProductsImages } = categoryStaff;

  const createCards = allProductsImages[props.subCatIndex].map((item, i) => (
    // <div className="w-[200px] h-[200px] border" key={i}>
    //   {i}
    // </div>
    <CatalogCardWithModel
      key={i}
      catImage={{
        path: item.path,
        width: item.width,
        height: item.height,
        alt: item.alt,
      }}
    />
  ));
  //   // return categoryStaff.allProductsImages[props.subCatIndex].map((item, i) => (
  //   //   <div className="w-[200px] h-[200px] border" key={i}>
  //   //     {i}
  //   //   </div>
  //   // ));
  // }

  /**JSX*/
  // return null;
  return (
    <div className="w-full wrapper-1">
      <CatalogGrid>{createCards}</CatalogGrid>

      <div className="text-corpo">{props.mainCatPath}</div>
      <div className="text-corpo">{props.mainCatIndex}</div>
      <div className="text-corpo">{props.subCatPath}</div>
      <div className="text-corpo">{props.subCatIndex}</div>
    </div>
  );
};

export default SubCatPageContent;
