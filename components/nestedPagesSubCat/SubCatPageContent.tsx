'use client';

import { catalogStructureData } from '@/data/catalogStructureData';
import CatalogGrid from '../forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithModel from '../forMultiPage/catalogs/allCards/cardWithModel/CatalogCardWithModel';

// import { mainCategoriesPath } from "@/data/routingData";

// mainCategoriesPath

const SubCatPageContent = (props: DynamicSubCatContent) => {
  /**...*/
  const categorySpecification = catalogStructureData[props.mainCatIndex];
  const { allProductsImages } = categorySpecification; //__all product images of this cat

  // const createImageData = allProductsImages[props.subCatIndex].map(
  //   (item, i) => ({
  //     path: item.path,
  //     width: item.width,
  //     height: item.height,
  //     alt: item.alt,
  //   })
  // );

  const createCards = allProductsImages[props.subCatIndex].map((item, i) => {
    return (
      <CatalogCardWithModel
        modelIndex={i}
        key={i}
        catImage={{
          path: item.path,
          width: item.width,
          height: item.height,
          alt: item.alt,
        }}
        // catImage={createImageData[i]}
      />
    );
  });

  /**JSX*/
  return (
    <div className="w-full wrapper-1">
      <CatalogGrid>{createCards}</CatalogGrid>
    </div>
  );
};

export default SubCatPageContent;

{
  /* <CatalogGrid>
        <CatalogCardWithModel
          modelIndex={createImageData}
          catImage={{
            path: item.path,
            width: item.width,
            height: item.height,
            alt: item.alt,
          }}
        />
      </CatalogGrid> */
}

{
  /* <div className="text-corpo">{props.mainCatPath}</div>
      <div className="text-corpo">{props.mainCatIndex}</div>
      <div className="text-corpo">{props.subCatPath}</div>
      <div className="text-corpo">{props.subCatIndex}</div> */
}
