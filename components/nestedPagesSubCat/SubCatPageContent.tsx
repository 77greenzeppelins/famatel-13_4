'use client';

import { catalogStructureData } from '@/data/catalogStructureData';
import CatalogGrid from '../forMultiPage/catalogs/catalogGrid/CatalogGrid';
import CatalogCardWithModel from '../forMultiPage/catalogs/allCards/cardWithModel/CatalogCardWithModel';
import { mainPagesPaths } from '@/data/routingData';

// import { mainCategoriesPath } from "@/data/routingData";

// mainCategoriesPath

const SubCatPageContent = (props: DynamicSubCatContent) => {
  /**...*/
  const categorySpecification = catalogStructureData[props.mainCatIndex];
  const { catAllProductsImages, catAllModels } = categorySpecification; //__all product images of this cat

  /*
  ___1. catAllModels[props.subCatIndex] ==> cat1_allModelsCard_data
  */
  const createModelsCardData = catAllModels[props.subCatIndex].map(item => ({
    modelPath: `${mainPagesPaths.produkty}/${props.mainCatPath}/${props.subCatPath}/${item.modelPathSegmant}`,
    textIcons: item.textIcons,
    type: item.type,
    collection: item.collection,
    altName: item.altName,
    model: item.model,
  }));

  /*
  ____as catAllProductsImages can be undefined this if statement is necessary
  */

  if (!catAllProductsImages) {
    return null;
  }

  const createCards = catAllProductsImages[props.subCatIndex].map((item, i) => {
    return (
      <CatalogCardWithModel
        key={i}
        modelIndex={i}
        modelImage={{
          path: item.path,
          width: item.width,
          height: item.height,
          alt: item.alt,
        }}
        // catImage={createImageData[i]}
        // modelPathSegmant={createModelsCardData.modelPathSegmant[i]}
        modelPath={createModelsCardData[i].modelPath}
        type={createModelsCardData[i].type}
        collection={createModelsCardData[i].collection}
        textIcons={createModelsCardData[i].textIcons}
        // altName={createModelsCardData[i].altName}
        // model={createModelsCardData[i].model}
      />
    );
  });

  /**JSX*/
  return (
    <div className="w-full pt-10 wrapper-1">
      <CatalogGrid containerStyle="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xxl:grid-cols-[1fr_1fr_1fr] gap-6 xl:gap-10 w-full">
        {createCards}
      </CatalogGrid>
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
